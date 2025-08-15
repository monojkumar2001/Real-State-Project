'use client';

import { useState, useMemo } from 'react';
import { properties } from '@/lib/data';
import { SearchFilters as SearchFiltersType } from '@/lib/types';
import PropertyCard from '@/components/PropertyCard';
import SearchFilters from '@/components/SearchFilters';

export default function RentPage() {
  const [filters, setFilters] = useState<SearchFiltersType>({ category: 'rent' });

  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      if (property.category !== 'rent') return false;
      
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
      if (filters.propertyClass && property.propertyClass !== filters.propertyClass) return false;
      
      return true;
    });
  }, [filters]);

  const handleSearch = () => {
    console.log('Searching rental properties with filters:', filters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Properties for Rent</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect rental property from our extensive collection of apartments, houses, and more
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredProperties.length} rental properties found
          </p>
        </div>

        <SearchFilters
          filters={filters}
          onFiltersChange={setFilters}
          onSearch={handleSearch}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <div className="h-8 w-8 text-gray-400">🏠</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Rental Properties Found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search filters to see more results.
            </p>
            <button
              onClick={() => setFilters({ category: 'rent' })}
              className="bg-primary-600 text-white px-6 py-2 rounded-md font-medium hover:bg-primary-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}