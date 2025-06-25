import { BlogPost } from '../types/blog';
import { marked } from 'marked';

/**
 * Blog Content Management System
 * 
 * This module provides utilities for managing blog content,
 * including markdown processing, content loading, and SEO optimization.
 */

export class BlogCMS {
  private static instance: BlogCMS;
  private cache: Map<string, string> = new Map();

  static getInstance(): BlogCMS {
    if (!BlogCMS.instance) {
      BlogCMS.instance = new BlogCMS();
    }
    return BlogCMS.instance;
  }
  /**
   * Load blog content from markdown files or external sources
   */
  async loadBlogContent(slug: string): Promise<string | null> {
    // Check cache first
    if (this.cache.has(slug)) {
      return this.cache.get(slug)!;
    }

    try {
      // Option 1: Load from markdown files in public/blog/
      const response = await fetch(`/blog/${slug}.md`);
      if (response.ok) {
        const markdownContent = await response.text();
        const htmlContent = await this.markdownToHTML(markdownContent);
        this.cache.set(slug, htmlContent);
        return htmlContent;
      }

      // Option 2: Load from external API (e.g., Contentful, Strapi)
      // const content = await this.loadFromAPI(slug);
      // if (content) {
      //   const htmlContent = await this.markdownToHTML(content);
      //   this.cache.set(slug, htmlContent);
      //   return htmlContent;
      // }

      return null;
    } catch (error) {
      console.error(`Failed to load content for ${slug}:`, error);
      return null;
    }
  }
  /**
   * Load from external CMS/API
   */
  private async loadFromAPI(slug: string): Promise<string | null> {
    // Example implementation for headless CMS
    try {
      const cmsUrl = import.meta.env.VITE_CMS_URL;
      const cmsToken = import.meta.env.VITE_CMS_TOKEN;
      
      if (!cmsUrl) return null;
      
      const response = await fetch(`${cmsUrl}/api/blogs/${slug}`, {
        headers: {
          'Authorization': `Bearer ${cmsToken}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        return data.content;
      }
    } catch (error) {
      console.error('CMS API error:', error);
    }
    return null;
  }
  /**
   * Generate SEO metadata for a blog post
   */
  generateSEOMeta(blog: BlogPost): {
    title: string;
    description: string;
    keywords: string;
    canonicalUrl: string;
    openGraph: {
      title: string;
      description: string;
      image: string;
      url: string;
      type: string;
    };
    twitter: {
      card: string;
      title: string;
      description: string;
      image: string;
    };
  } {
    const baseUrl = import.meta.env.VITE_BASE_URL || 'https://pratyush-portfolio.netlify.app';
    const blogUrl = `${baseUrl}/blog/${blog.slug}`;
    const defaultImage = `${baseUrl}/profile.jpg`;

    return {
      title: blog.seo.metaTitle,
      description: blog.seo.metaDescription,
      keywords: blog.seo.keywords.join(', '),
      canonicalUrl: blogUrl,
      openGraph: {
        title: blog.seo.metaTitle,
        description: blog.seo.metaDescription,
        image: defaultImage,
        url: blogUrl,
        type: 'article'
      },
      twitter: {
        card: 'summary_large_image',
        title: blog.seo.metaTitle,
        description: blog.seo.metaDescription,
        image: defaultImage
      }
    };
  }
  /**
   * Convert markdown to HTML
   */
  async markdownToHTML(markdown: string): Promise<string> {
    // Configure marked for better security and features
    marked.setOptions({
      breaks: true,
      gfm: true,
      silent: true
    });
    
    return marked(markdown);
  }

  /**
   * Calculate reading time
   */
  calculateReadTime(content: string): number {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  }
  /**
   * Generate blog sitemap
   */
  generateSitemap(blogs: BlogPost[]): string {
    const baseUrl = import.meta.env.VITE_BASE_URL || 'https://pratyush-portfolio.netlify-app';
    
    const urls = blogs
      .filter(blog => blog.status === 'published')
      .map(blog => `
    <url>
      <loc>${baseUrl}/blog/${blog.slug}</loc>
      <lastmod>${blog.date}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>`).join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;
  }

  /**
   * Clear cache
   */
  clearCache(): void {
    this.cache.clear();
  }
}

export const blogCMS = BlogCMS.getInstance();
