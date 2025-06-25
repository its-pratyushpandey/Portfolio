# Building Modern React Applications with TypeScript

## Introduction

TypeScript has revolutionized the way we build React applications, providing type safety, better developer experience, and improved code maintainability. In this comprehensive guide, we'll explore how to set up and build scalable React applications using TypeScript.

## Why TypeScript with React?

### Type Safety
TypeScript catches errors at compile time, reducing runtime errors and improving application reliability.

### Better Developer Experience
- Enhanced IDE support with autocomplete
- Refactoring capabilities
- Inline documentation

### Code Maintainability
- Self-documenting code through types
- Easier collaboration in teams
- Reduced bugs in production

## Setting Up Your Project

```bash
# Create a new React app with TypeScript
npx create-react-app my-app --template typescript

# Or with Vite (recommended for better performance)
npm create vite@latest my-app -- --template react-ts
```

## Best Practices

### 1. Define Clear Interfaces

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface UserProps {
  user: User;
  onEdit: (user: User) => void;
}
```

### 2. Use Proper Component Typing

```typescript
import React from 'react';

const UserCard: React.FC<UserProps> = ({ user, onEdit }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => onEdit(user)}>Edit</button>
    </div>
  );
};
```

### 3. Handle Events Correctly

```typescript
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  // Handle form submission
};

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setValue(event.target.value);
};
```

## Advanced Patterns

### Custom Hooks with TypeScript

```typescript
interface UseApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useApi<T>(url: string): UseApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Implementation...

  return { data, loading, error };
}
```

### Context with TypeScript

```typescript
interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};
```

## Performance Optimization

### Proper Use of useMemo and useCallback

```typescript
const ExpensiveComponent: React.FC<Props> = ({ items, filter }) => {
  const filteredItems = useMemo(() => {
    return items.filter(item => item.category === filter);
  }, [items, filter]);

  const handleItemClick = useCallback((item: Item) => {
    // Handle click
  }, []);

  return (
    <div>
      {filteredItems.map(item => (
        <ItemCard key={item.id} item={item} onClick={handleItemClick} />
      ))}
    </div>
  );
};
```

## Testing with TypeScript

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserCard from './UserCard';

const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com'
};

describe('UserCard', () => {
  it('renders user information correctly', () => {
    const mockOnEdit = jest.fn();
    
    render(<UserCard user={mockUser} onEdit={mockOnEdit} />);
    
    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
    expect(screen.getByText(mockUser.email)).toBeInTheDocument();
  });

  it('calls onEdit when edit button is clicked', async () => {
    const mockOnEdit = jest.fn();
    const user = userEvent.setup();
    
    render(<UserCard user={mockUser} onEdit={mockOnEdit} />);
    
    await user.click(screen.getByRole('button', { name: /edit/i }));
    
    expect(mockOnEdit).toHaveBeenCalledWith(mockUser);
  });
});
```

## Conclusion

TypeScript brings significant benefits to React development, from improved code quality to better developer experience. By following these best practices and patterns, you can build robust, maintainable React applications that scale with your project's needs.

The combination of React's component architecture and TypeScript's type system creates a powerful development environment that helps catch errors early and makes your code more predictable and easier to understand.

## Next Steps

- Explore advanced TypeScript features like conditional types
- Learn about React 18 features with TypeScript
- Implement proper error boundaries with TypeScript
- Set up proper CI/CD pipelines with type checking

Happy coding! 🚀
