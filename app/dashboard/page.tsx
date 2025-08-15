'use client';

import { useState } from 'react';
import Link from 'next/link';
import { properties } from '@/lib/data';
import PropertyCard from '@/components/PropertyCard';
import { 
  Heart, 
  MessageSquare, 
  User, 
  Bell, 
  Settings, 
  Search,
  Plus,
  Calendar,
  TrendingUp
} from 'lucide-react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'saved' | 'inquiries' | 'profile'>('saved');
  
  // Mock saved properties (first 2 from our data)
  const savedProperties = properties.slice(0, 2);
  
  // Mock inquiries data
  const inquiries = [
    {
      id: '1',
      property: properties[0],
      message: 'I\'m interested in scheduling a viewing for this property. When would be a good time?',
      date: '2024-01-25',
      status: 'pending',
    },
    {
      id: '2',
      property: properties[1],
      message: 'Could you provide more information about the neighborhood and nearby schools?',
      date: '2024-01-23',
      status: 'responded',
    },
  ];

  const stats = [
    { label: 'Saved Properties', value: savedProperties.length, icon: Heart },
    { label: 'Active Inquiries', value: inquiries.length, icon: MessageSquare },
    { label: 'Property Views', value: 24, icon: TrendingUp },
    { label: 'Scheduled Visits', value: 3, icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
              <p className="text-gray-600 mt-2">Manage your property search and preferences</p>
            </div>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <Link
                href="/properties"
                className="bg-primary-600 text-white px-4 py-2 rounded-md font-medium hover:bg-primary-700 transition-colors flex items-center"
              >
                <Search className="h-4 w-4 mr-2" />
                Browse Properties
              </Link>
              <Link
                href="/submit-property"
                className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-50 transition-colors flex items-center"
              >
                <Plus className="h-4 w-4 mr-2" />
                List Property
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className="bg-primary-100 rounded-full p-3">
                  <stat.icon className="h-6 w-6 text-primary-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('saved')}
                  className={`w-full flex items-center px-6 py-3 text-left font-medium transition-colors ${
                    activeTab === 'saved'
                      ? 'bg-blue-50 text-primary-600 border-r-2 border-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Heart className="h-5 w-5 mr-3" />
                  Saved Properties
                </button>
                <button
                  onClick={() => setActiveTab('inquiries')}
                  className={`w-full flex items-center px-6 py-3 text-left font-medium transition-colors ${
                    activeTab === 'inquiries'
                      ? 'bg-blue-50 text-primary-600 border-r-2 border-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <MessageSquare className="h-5 w-5 mr-3" />
                  My Inquiries
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center px-6 py-3 text-left font-medium transition-colors ${
                    activeTab === 'profile'
                      ? 'bg-blue-50 text-primary-600 border-r-2 border-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <User className="h-5 w-5 mr-3" />
                  Profile Settings
                </button>
              </nav>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  href="/agents"
                  className="block w-full text-left px-4 py-2 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  Find an Agent
                </Link>
                <Link
                  href="/mortgage-calculator"
                  className="block w-full text-left px-4 py-2 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  Mortgage Calculator
                </Link>
                <Link
                  href="/map"
                  className="block w-full text-left px-4 py-2 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  Map View
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'saved' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Saved Properties</h2>
                  <span className="text-sm text-gray-600">{savedProperties.length} properties</span>
                </div>
                
                {savedProperties.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {savedProperties.map((property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Saved Properties</h3>
                    <p className="text-gray-600 mb-4">Start browsing to save properties you're interested in.</p>
                    <Link
                      href="/properties"
                      className="bg-primary-600 text-white px-6 py-2 rounded-md font-medium hover:bg-primary-700 transition-colors"
                    >
                      Browse Properties
                    </Link>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'inquiries' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">My Inquiries</h2>
                  <span className="text-sm text-gray-600">{inquiries.length} inquiries</span>
                </div>
                
                <div className="space-y-6">
                  {inquiries.map((inquiry) => (
                    <div key={inquiry.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4">
                          <img
                            src={inquiry.property.images[0]}
                            alt={inquiry.property.title}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-900">{inquiry.property.title}</h3>
                            <p className="text-gray-600 text-sm">{inquiry.property.location.address}</p>
                            <p className="text-sm text-gray-500 mt-1">
                              Inquired on {new Date(inquiry.date).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          inquiry.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {inquiry.status === 'pending' ? 'Pending' : 'Responded'}
                        </span>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-700 text-sm">{inquiry.message}</p>
                      </div>
                      <div className="flex justify-end mt-4">
                        <Link
                          href={`/properties/${inquiry.property.id}`}
                          className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                        >
                          View Property →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Settings</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        defaultValue="John"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Doe"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="john.doe@example.com"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      defaultValue="(555) 123-4567"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferences</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">Email Notifications</h4>
                          <p className="text-sm text-gray-600">Receive updates about saved properties</p>
                        </div>
                        <button
                          type="button"
                          className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          <span className="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">SMS Updates</h4>
                          <p className="text-sm text-gray-600">Get text notifications for price changes</p>
                        </div>
                        <button
                          type="button"
                          className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          <span className="translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4 pt-6">
                    <button
                      type="button"
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-primary-600 text-white rounded-md font-medium hover:bg-primary-700 transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}