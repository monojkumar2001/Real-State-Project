'use client';

import { useState } from 'react';
import Link from 'next/link';
import { properties } from '@/lib/data';
import ContactForm from '@/components/ContactForm';
import { 
  ArrowLeft, 
  Bed, 
  Bath, 
  Square, 
  Calendar, 
  MapPin, 
  Heart, 
  Share2,
  ChevronLeft,
  ChevronRight,
  Star,
  Phone,
  Mail
} from 'lucide-react';

export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const property = properties.find(p => p.id === params.id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <Link href="/properties" className="text-blue-600 hover:text-blue-700">
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number, category: string) => {
    if (category === 'rent') {
      return `$${price.toLocaleString()}/month`;
    }
    return `$${price.toLocaleString()}`;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/properties" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Properties
            </Link>
            <div className="flex space-x-2">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors">
                <Heart className="h-4 w-4" />
                <span>Save</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="relative mb-8">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <img
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {property.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Thumbnail Strip */}
              <div className="flex space-x-2 mt-4 overflow-x-auto">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? 'border-blue-600' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${property.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                    For {property.category === 'buy' ? 'Sale' : 'Rent'}
                  </span>
                  <h1 className="text-3xl font-bold text-gray-900 mt-2">{property.title}</h1>
                  <div className="flex items-center text-gray-600 mt-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{property.location.address}, {property.location.city}, {property.location.state}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-blue-600">
                    {formatPrice(property.price, property.category)}
                  </p>
                </div>
              </div>

              {/* Property Stats */}
              <div className="flex flex-wrap items-center gap-6 py-4 border-t border-b border-gray-200">
                {property.bedrooms > 0 && (
                  <div className="flex items-center">
                    <Bed className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="font-medium">{property.bedrooms}</span>
                    <span className="text-gray-600 ml-1">Bedrooms</span>
                  </div>
                )}
                <div className="flex items-center">
                  <Bath className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="font-medium">{property.bathrooms}</span>
                  <span className="text-gray-600 ml-1">Bathrooms</span>
                </div>
                <div className="flex items-center">
                  <Square className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="font-medium">{property.sqft.toLocaleString()}</span>
                  <span className="text-gray-600 ml-1">sq ft</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="font-medium">{property.yearBuilt}</span>
                  <span className="text-gray-600 ml-1">Built</span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Description</h2>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </div>

              {/* Features */}
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Features & Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Location</h2>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <p>Interactive Map View</p>
                    <p className="text-sm">Lat: {property.location.coordinates.lat}, Lng: {property.location.coordinates.lng}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Agent Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Listed by</h3>
              <div className="flex items-center mb-4">
                <img
                  src={property.agent.image}
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{property.agent.name}</h4>
                  <p className="text-blue-600 text-sm">{property.agent.specialization}</p>
                  <div className="flex items-center mt-1">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-600">
                      {property.agent.rating} ({property.agent.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="text-sm">{property.agent.phone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  <span className="text-sm">{property.agent.email}</span>
                </div>
              </div>
              <Link
                href={`/agents/${property.agent.id}`}
                className="block w-full text-center bg-gray-100 text-gray-800 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors mb-3"
              >
                View Profile
              </Link>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
                Call Agent
              </button>
            </div>

            {/* Contact Form */}
            <ContactForm
              propertyId={property.id}
              agentId={property.agent.id}
              title="Inquire About This Property"
            />

            {/* Mortgage Calculator Link */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Calculate Mortgage</h3>
              <p className="text-green-700 text-sm mb-4">
                Estimate your monthly payments for this property
              </p>
              <Link
                href={`/mortgage-calculator?price=${property.price}`}
                className="block w-full text-center bg-green-600 text-white py-2 rounded-md font-medium hover:bg-green-700 transition-colors"
              >
                Calculate Payments
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}