import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  // Extended blog posts for demonstration
  const allBlogPosts = [
    ...blogPosts,
    {
      id: '3',
      title: 'Investment Properties: What to Look For',
      excerpt: 'Key factors to consider when evaluating rental properties and investment opportunities in today\'s market.',
      content: 'Real estate investment can be a lucrative venture...',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Michael Chen',
      date: '2024-01-18',
      readTime: 10,
    },
    {
      id: '4',
      title: 'Home Staging Tips That Actually Work',
      excerpt: 'Professional staging advice to help your property sell faster and for a better price.',
      content: 'Staging your home effectively can make a significant difference...',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Emma Rodriguez',
      date: '2024-01-15',
      readTime: 7,
    },
    {
      id: '5',
      title: 'Understanding Mortgage Rates and Terms',
      excerpt: 'A comprehensive guide to mortgage types, rates, and how to secure the best financing for your home purchase.',
      content: 'Navigating the mortgage landscape can be complex...',
      image: 'https://images.pexels.com/photos/1288482/pexels-photo-1288482.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      readTime: 15,
    },
    {
      id: '6',
      title: 'Commercial Real Estate Opportunities',
      excerpt: 'Exploring the commercial real estate market and opportunities for business owners and investors.',
      content: 'The commercial real estate sector offers diverse opportunities...',
      image: 'https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: 12,
    },
  ];

  const featuredPost = allBlogPosts[0];
  const recentPosts = allBlogPosts.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Real Estate Blog</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest real estate news, market insights, and expert advice
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs font-medium mr-3">
                    Featured
                  </span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{featuredPost.readTime} min read</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">By {featuredPost.author}</span>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="bg-primary-600 text-white px-6 py-2 rounded-md font-medium hover:bg-primary-700 transition-colors inline-flex items-center"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime} min read</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-primary-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest real estate insights, market updates, and expert tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
            <button className="bg-white text-primary-600 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/blog?category=buying"
              className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 text-center transition-colors"
            >
              <div className="text-2xl mb-2">🏠</div>
              <div className="font-medium text-gray-900">Buying</div>
            </Link>
            <Link
              href="/blog?category=selling"
              className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 text-center transition-colors"
            >
              <div className="text-2xl mb-2">💰</div>
              <div className="font-medium text-gray-900">Selling</div>
            </Link>
            <Link
              href="/blog?category=investing"
              className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 text-center transition-colors"
            >
              <div className="text-2xl mb-2">📈</div>
              <div className="font-medium text-gray-900">Investing</div>
            </Link>
            <Link
              href="/blog?category=market"
              className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 text-center transition-colors"
            >
              <div className="text-2xl mb-2">📊</div>
              <div className="font-medium text-gray-900">Market Trends</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}