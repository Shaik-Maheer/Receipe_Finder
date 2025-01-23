import React from 'react';
import BlogHero from '../components2/BlogHero';
import BlogCategories from '../components2/BlogCategories';
import FeaturedBlogPost from '../components2/FeaturedBlogPost';
import BlogList from '../components2/BlogList';
import NewsletterSubscription from '../components2/NewsletterSubscription';

const Blog = () => {
  return (
    <div>
      <BlogHero />
      <BlogCategories />
      <FeaturedBlogPost />
      <BlogList />
      <NewsletterSubscription />
    </div>
  );
};

export default Blog;
