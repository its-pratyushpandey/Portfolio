# Full-Stack Microservices Architecture with Node.js and Docker

## Introduction

Microservices architecture has revolutionized how we build and deploy modern applications. This comprehensive guide will walk you through designing, implementing, and deploying a scalable microservices system using Node.js, Docker, and Kubernetes.

## What We'll Build

A complete e-commerce platform with the following microservices:
- **User Service** - Authentication and user management
- **Product Service** - Product catalog and inventory
- **Order Service** - Order processing and management
- **Payment Service** - Payment processing
- **Notification Service** - Email and push notifications
- **API Gateway** - Single entry point for all services

## Architecture Overview

```
┌─────────────────┐
│   Load Balancer │
└─────────┬───────┘
          │
┌─────────▼───────┐
│   API Gateway   │
└─────────┬───────┘
          │
┌─────────▼───────┐
│   Service Mesh  │
└─────────────────┘
    │    │    │
┌───▼┐ ┌─▼─┐ ┌▼───┐
│User│ │Ord│ │Prod│
│Svc │ │Svc│ │Svc │
└────┘ └───┘ └────┘
```

## Core Services Implementation

### 1. User Service

```javascript
// user-service/server.js
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
app.use(express.json());

// User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  profile: {
    firstName: String,
    lastName: String,
    avatar: String
  },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
};

// Routes
app.post('/auth/register', async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user
    const user = new User({
      email,
      password: hashedPassword,
      profile: { firstName, lastName }
    });
    
    await user.save();
    
    // Generate token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.status(201).json({
      message: 'User created successfully',
      token,
      user: {
        id: user._id,
        email: user.email,
        profile: user.profile
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Generate token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        email: user.email,
        profile: user.profile
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/users/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});
```

### 2. Product Service

```javascript
// product-service/server.js
const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');

const app = express();
app.use(express.json());

// Redis client for caching
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379
});

// Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: { type: String, required: true },
  inventory: {
    quantity: { type: Number, default: 0 },
    reserved: { type: Number, default: 0 }
  },
  images: [String],
  specifications: mongoose.Schema.Types.Mixed,
  ratings: {
    average: { type: Number, default: 0 },
    count: { type: Number, default: 0 }
  },
  createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

// Caching middleware
const cacheMiddleware = (duration = 300) => {
  return async (req, res, next) => {
    const key = `cache:${req.originalUrl}`;
    
    try {
      const cached = await redisClient.get(key);
      if (cached) {
        return res.json(JSON.parse(cached));
      }
      
      // Store original json method
      const originalJson = res.json;
      res.json = function(body) {
        // Cache the response
        redisClient.setex(key, duration, JSON.stringify(body));
        // Call original json method
        originalJson.call(this, body);
      };
      
      next();
    } catch (error) {
      next();
    }
  };
};

// Routes
app.get('/products', cacheMiddleware(300), async (req, res) => {
  try {
    const { page = 1, limit = 10, category, search } = req.query;
    const query = {};
    
    if (category) query.category = category;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }
    
    const products = await Product.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });
    
    const total = await Product.countDocuments(query);
    
    res.json({
      products,
      pagination: {
        page: parseInt(page),
        pages: Math.ceil(total / limit),
        total
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/products/:id', cacheMiddleware(600), async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    
    // Clear relevant caches
    const keys = await redisClient.keys('cache:/products*');
    if (keys.length > 0) {
      await redisClient.del(keys);
    }
    
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Inventory management
app.patch('/products/:id/reserve', async (req, res) => {
  try {
    const { quantity } = req.body;
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    if (product.inventory.quantity < quantity) {
      return res.status(400).json({ error: 'Insufficient inventory' });
    }
    
    product.inventory.quantity -= quantity;
    product.inventory.reserved += quantity;
    await product.save();
    
    res.json({ message: 'Inventory reserved', product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Product service running on port ${PORT}`);
});
```

### 3. API Gateway

```javascript
// api-gateway/server.js
const express = require('express');
const httpProxy = require('http-proxy-middleware');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

// Security middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});
app.use(limiter);

// Service discovery
const services = {
  user: process.env.USER_SERVICE_URL || 'http://user-service:3001',
  product: process.env.PRODUCT_SERVICE_URL || 'http://product-service:3002',
  order: process.env.ORDER_SERVICE_URL || 'http://order-service:3003',
  payment: process.env.PAYMENT_SERVICE_URL || 'http://payment-service:3004'
};

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Service proxies
app.use('/api/auth', httpProxy({
  target: services.user,
  changeOrigin: true,
  pathRewrite: { '^/api/auth': '/auth' }
}));

app.use('/api/users', httpProxy({
  target: services.user,
  changeOrigin: true,
  pathRewrite: { '^/api/users': '/users' }
}));

app.use('/api/products', httpProxy({
  target: services.product,
  changeOrigin: true,
  pathRewrite: { '^/api/products': '/products' }
}));

app.use('/api/orders', httpProxy({
  target: services.order,
  changeOrigin: true,
  pathRewrite: { '^/api/orders': '/orders' }
}));

app.use('/api/payments', httpProxy({
  target: services.payment,
  changeOrigin: true,
  pathRewrite: { '^/api/payments': '/payments' }
}));

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
```

## Docker Configuration

### Service Dockerfile

```dockerfile
# user-service/Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3001

CMD ["node", "server.js"]
```

### Docker Compose

```yaml
version: '3.8'

services:
  # Databases
  mongodb:
    image: mongo:5
    environment:
      MONGO_INITDB_DATABASE: microservices
    volumes:
      - mongodb_data:/data/db
    networks:
      - microservices

  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data
    networks:
      - microservices

  # Services
  user-service:
    build: ./user-service
    environment:
      - NODE_ENV=production
      - JWT_SECRET=your-secret-key
      - MONGODB_URI=mongodb://mongodb:27017/microservices
    depends_on:
      - mongodb
    networks:
      - microservices

  product-service:
    build: ./product-service
    environment:
      - NODE_ENV=production
      - MONGODB_URI=mongodb://mongodb:27017/microservices
      - REDIS_HOST=redis
    depends_on:
      - mongodb
      - redis
    networks:
      - microservices

  api-gateway:
    build: ./api-gateway
    ports:
      - "3000:3000"
    environment:
      - USER_SERVICE_URL=http://user-service:3001
      - PRODUCT_SERVICE_URL=http://product-service:3002
    depends_on:
      - user-service
      - product-service
    networks:
      - microservices

volumes:
  mongodb_data:
  redis_data:

networks:
  microservices:
    driver: bridge
```

## Kubernetes Deployment

### Service Deployment

```yaml
# k8s/user-service.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: user-service
  template:
    metadata:
      labels:
        app: user-service
    spec:
      containers:
      - name: user-service
        image: user-service:latest
        ports:
        - containerPort: 3001
        env:
        - name: JWT_SECRET
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: jwt-secret
        - name: MONGODB_URI
          value: mongodb://mongodb:27017/microservices
---
apiVersion: v1
kind: Service
metadata:
  name: user-service
spec:
  selector:
    app: user-service
  ports:
  - port: 3001
    targetPort: 3001
```

## Monitoring and Observability

### Health Checks

```javascript
// health-check middleware
const healthCheck = (req, res) => {
  const health = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: process.env.SERVICE_NAME,
    version: process.env.SERVICE_VERSION,
    dependencies: {}
  };

  // Check database connection
  if (mongoose.connection.readyState === 1) {
    health.dependencies.database = 'healthy';
  } else {
    health.dependencies.database = 'unhealthy';
    health.status = 'unhealthy';
  }

  // Check Redis connection
  if (redisClient.connected) {
    health.dependencies.redis = 'healthy';
  } else {
    health.dependencies.redis = 'unhealthy';
    health.status = 'degraded';
  }

  const statusCode = health.status === 'healthy' ? 200 : 503;
  res.status(statusCode).json(health);
};
```

### Logging

```javascript
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ]
});
```

## Testing Strategy

### Integration Tests

```javascript
// tests/user-service.test.js
const request = require('supertest');
const app = require('../server');

describe('User Service', () => {
  describe('POST /auth/register', () => {
    it('should create a new user', async () => {
      const userData = {
        email: 'test@example.com',
        password: 'password123',
        firstName: 'John',
        lastName: 'Doe'
      };

      const response = await request(app)
        .post('/auth/register')
        .send(userData)
        .expect(201);

      expect(response.body).toHaveProperty('token');
      expect(response.body.user.email).toBe(userData.email);
    });
  });
});
```

## Deployment Pipeline

### CI/CD with GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy Microservices

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Build and push Docker images
      run: |
        docker build -t user-service:${{ github.sha }} ./user-service
        docker build -t product-service:${{ github.sha }} ./product-service
        docker build -t api-gateway:${{ github.sha }} ./api-gateway
        
        # Push to registry
        docker push user-service:${{ github.sha }}
        docker push product-service:${{ github.sha }}
        docker push api-gateway:${{ github.sha }}
    
    - name: Deploy to Kubernetes
      run: |
        kubectl set image deployment/user-service user-service=user-service:${{ github.sha }}
        kubectl set image deployment/product-service product-service=product-service:${{ github.sha }}
        kubectl set image deployment/api-gateway api-gateway=api-gateway:${{ github.sha }}
```

## Best Practices

### 1. Service Communication
- Use asynchronous messaging for non-critical operations
- Implement circuit breakers for external service calls
- Add retry logic with exponential backoff

### 2. Data Management
- Each service owns its data
- Use event sourcing for audit trails
- Implement CQRS for read/write optimization

### 3. Security
- Use JWT tokens for authentication
- Implement API rate limiting
- Add input validation at gateway level
- Use secrets management for sensitive data

### 4. Monitoring
- Implement distributed tracing
- Add comprehensive logging
- Set up alerts for critical metrics
- Monitor service dependencies

## Conclusion

This microservices architecture provides a scalable, maintainable foundation for modern applications. The combination of Node.js, Docker, and Kubernetes creates a robust platform that can handle enterprise-level traffic while maintaining development velocity.

Key benefits achieved:
- **Scalability**: Individual services can be scaled independently
- **Maintainability**: Clear separation of concerns
- **Deployment**: Zero-downtime deployments
- **Monitoring**: Comprehensive observability
- **Security**: Multiple layers of protection

---

*Ready to build your microservices architecture? Start with this foundation and adapt it to your specific requirements!*
