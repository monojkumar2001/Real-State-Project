'use client';

import { useState } from 'react';
import { properties } from '@/lib/data';
import { SearchFilters as SearchFiltersType } from '@/lib/types';
import SearchFilters from '@/components/SearchFilters';
import { MapPin, List, Grid, DollarSign, Bed, Bath, Square } from 'lucide-react';
import Link from 'next/link';

export default function MapViewPage() {
  const [filters, setFilters] = useState<SearchFiltersType>({});
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);
  const [showList, setShowList] = useState(false);

  const filteredProperties = properties.filter(property => {
    if (filters.location && !property.location.city.toLowerCase().includes(filters.location.toLowerCase()) &&
        !property.location.state.toLowerCase().includes(filters.location.toLowerCase()) &&
        !property.location.address.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    
    if (filters.priceMin && property.price < filters.priceMin) return false;
    if (filters.priceMax && property.price > filters.priceMax) return false;
    if (filters.bedrooms && property.bedrooms < filters.bedrooms) return false;
    if (filters.bathrooms && property.bathrooms < filters.bathrooms) return false;
    if (filters.propertyType && property.type !== filters.propertyType) return false;
    if (filters.category && property.category !== filters.category) return false;
    if (filters.propertyClass && property.propertyClass !== filters.propertyClass) return false;
    
    return true;
  });

  const handleSearch = () => {
    console.log('Searching properties on map with filters:', filters);
  };

  const formatPrice = (price: number, category: string) => {
    if (category === 'rent') {
      return `$${price.toLocaleString()}/month`;
    }
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Map View</h1>
              <span className="text-gray-600">{filteredProperties.length} properties</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link
                href="/properties"
                className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Grid className="h-4 w-4" />
                <span className="hidden sm:inline">Grid View</span>
              </Link>
              
              <button
                onClick={() => setShowList(!showList)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  showList 
                    ? 'bg-primary-600 text-white' 
                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-100'
                }`}
              >
                <List className="h-4 w-4" />
                <span className="hidden sm:inline">List</span>
              </button>
            </div>
          </div>

          <SearchFilters
            filters={filters}
            onFiltersChange={setFilters}
            onSearch={handleSearch}
          />
        </div>
      </div>

      {/* Map Container */}
      <div className="flex-1 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 h-full">
          {/* Map Section */}
          <div className={`${showList ? 'lg:col-span-2' : 'lg:col-span-3'} relative`}>
            <div className="bg-gray-200 h-full flex items-center justify-center relative">
              <div className="text-center text-gray-500">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                <p className="text-sm">Property locations would be displayed here</p>
                <p className="text-xs mt-2">Click on map pins to view property details</p>
              </div>

              {/* Mock Map Pins */}
              <div className="absolute inset-0">
                {filteredProperties.map((property, index) => (
                  <button
                    key={property.id}
                    onClick={() => setSelectedProperty(property.id)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all ${
                      selectedProperty === property.id ? 'z-20' : 'z-10'
                    }`}
                    style={{
                      left: `${20 + (index * 15) % 60}%`,
                      top: `${25 + (index * 12) % 50}%`,
                    }}
                  >
                    <div className={`relative ${
                      selectedProperty === property.id ? 'scale-125' : ''
                    }`}>
                      {/* Price Pin */}
                      <div className={`bg-primary-600 text-white px-2 py-1 rounded-lg text-xs font-semibold shadow-lg ${
                        selectedProperty === property.id ? 'bg-primary-800' : ''
                      }`}>
                        {formatPrice(property.price, property.category)}
                      </div>
                      {/* Pin Point */}
                      <div className="w-2 h-2 bg-primary-600 mx-auto transform rotate-45 -mt-1"></div>
                    </div>

                    {/* Property Card Popup */}
                    {selectedProperty === property.id && (
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-30">
                        <div className="p-3">
                          <img
                            src={property.images[0]}
                            alt={property.title}
                            className="w-full h-32 object-cover rounded-md mb-2"
                          />
                          <h4 className="font-semibold text-gray-900 text-sm mb-1 truncate">
                            {property.title}
                          </h4>
                          <p className="text-xs text-gray-600 mb-2 truncate">
                            {property.location.city}, {property.location.state}
                          </p>
                          <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                            <div className="flex items-center space-x-3">
                              {property.bedrooms > 0 && (
                                <div className="flex items-center">
                                  <Bed className="h-3 w-3 mr-1" />
                                  <span>{property.bedrooms}</span>
                                </div>
                              )}
                              <div className="flex items-center">
                                <Bath className="h-3 w-3 mr-1" />
                                <span>{property.bathrooms}</span>
                              </div>
                              <div className="flex items-center">
                                <Square className="h-3 w-3 mr-1" />
                                <span>{property.sqft.toLocaleString()}</span>
                              </div>
                            </div>
                          </div>
                          <Link
                            href={`/properties/${property.id}`}
                            className="block w-full bg-primary-600 text-white text-center py-1 rounded text-xs font-medium hover:bg-primary-700 transition-colors"
                          >
                            View Details
                          </Link>
                        </div>
                        {/* Arrow */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Properties List */}
          {showList && (
            <div className="bg-white border-l border-gray-200 overflow-y-auto">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-semibold text-gray-900">Properties ({filteredProperties.length})</h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {filteredProperties.map((property) => (
                  <div
                    key={property.id}
                    className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                      selectedProperty === property.id ? 'bg-blue-50 border-l-4 border-blue-600' : ''
                    }`}
                    onClick={() => setSelectedProperty(property.id)}
                  >
                    <div className="flex space-x-3">
                      <img
                        src={property.images[0]}
                        alt={property.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm truncate">
                          {property.title}
                        </h3>
                        <p className="text-primary-600 font-medium text-lg">
                          {formatPrice(property.price, property.category)}
                        </p>
                        <p className="text-xs text-gray-600 mb-2">
                          {property.location.address}
                        </p>
                        <div className="flex items-center space-x-3 text-xs text-gray-600">
                          {property.bedrooms > 0 && (
                            <div className="flex items-center">
                              <Bed className="h-3 w-3 mr-1" />
                              <span>{property.bedrooms}</span>
                            </div>
                          )}
                          <div className="flex items-center">
                            <Bath className="h-3 w-3 mr-1" />
                            <span>{property.bathrooms}</span>
                          </div>
                          <div className="flex items-center">
                            <Square className="h-3 w-3 mr-1" />
                            <span>{property.sqft.toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="mt-2">
                          <Link
                            href={`/properties/${property.id}`}
                            className="text-primary-600 hover:text-primary-700 text-xs font-medium"
                          >
                            View Details →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProperties.length === 0 && (
                <div className="p-8 text-center">
                  <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">No properties found</p>
                  <p className="text-sm text-gray-500">Try adjusting your search filters</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Map Controls */}
        <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
          <button className="bg-white border border-gray-300 rounded-md p-2 shadow-md hover:shadow-lg transition-shadow">
            <span className="text-lg font-bold">+</span>
          </button>
          <button className="bg-white border border-gray-300 rounded-md p-2 shadow-md hover:shadow-lg transition-shadow">
            <span className="text-lg font-bold">−</span>
          </button>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-3 text-xs">
          <h4 className="font-semibold text-gray-900 mb-2">Legend</h4>
          <div className="space-y-1">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-primary-600 rounded mr-2"></div>
              <span className="text-gray-600">Available Properties</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-600 rounded mr-2"></div>
              <span className="text-gray-600">Pending Properties</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}