import Link from 'next/link';
import { Property } from '@/lib/types';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  showSaveButton?: boolean;
}

export default function PropertyCard({ property, showSaveButton = true }: PropertyCardProps) {
  const formatPrice = (price: number, category: string) => {
    if (category === 'rent') {
      return `$${price.toLocaleString()}/month`;
    }
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
            For {property.category === 'buy' ? 'Sale' : 'Rent'}
          </span>
        </div>
        {showSaveButton && (
          <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow">
            <Heart className="h-4 w-4 text-gray-400 hover:text-red-500 transition-colors" />
          </button>
        )}
        <div className="absolute bottom-4 left-4">
          <span className="bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
            {property.status === 'available' ? 'Available' : property.status}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            <Link href={`/properties/${property.id}`} className="hover:text-blue-600 transition-colors">
              {property.title}
            </Link>
          </h3>
          <p className="text-xl font-bold text-blue-600">
            {formatPrice(property.price, property.category)}
          </p>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location.city}, {property.location.state}</span>
        </div>

        <div className="flex items-center justify-between text-gray-600 mb-4">
          <div className="flex items-center space-x-4">
            {property.bedrooms > 0 && (
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-1" />
                <span className="text-sm">{property.bedrooms}</span>
              </div>
            )}
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.sqft.toLocaleString()} sq ft</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center">
            <img
              src={property.agent.image}
              alt={property.agent.name}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-sm text-gray-600">{property.agent.name}</span>
          </div>
          <Link
            href={`/properties/${property.id}`}
            className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}