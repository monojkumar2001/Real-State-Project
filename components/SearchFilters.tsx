'use client';

import { useState } from 'react';
import { SearchFilters as SearchFiltersType } from '@/lib/types';
import { Search, Filter, X } from 'lucide-react';

interface SearchFiltersProps {
  filters: SearchFiltersType;
  onFiltersChange: (filters: SearchFiltersType) => void;
  onSearch: () => void;
}

export default function SearchFilters({ filters, onFiltersChange, onSearch }: SearchFiltersProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const updateFilter = (key: keyof SearchFiltersType, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    onFiltersChange({});
    setShowAdvanced(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      {/* Basic Search */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input
            type="text"
            placeholder="Enter city, state, or ZIP"
            value={filters.location || ''}
            onChange={(e) => updateFilter('location', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
          <select
            value={filters.propertyType || ''}
            onChange={(e) => updateFilter('propertyType', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">All Types</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="townhouse">Townhouse</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            value={filters.category || ''}
            onChange={(e) => updateFilter('category', e.target.value as 'buy' | 'rent')}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Buy or Rent</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
      </div>

      {/* Advanced Filters */}
      {showAdvanced && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 pt-4 border-t border-gray-200">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Min Price</label>
            <input
              type="number"
              placeholder="Min Price"
              value={filters.priceMin || ''}
              onChange={(e) => updateFilter('priceMin', parseInt(e.target.value) || undefined)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Max Price</label>
            <input
              type="number"
              placeholder="Max Price"
              value={filters.priceMax || ''}
              onChange={(e) => updateFilter('priceMax', parseInt(e.target.value) || undefined)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
            <select
              value={filters.bedrooms || ''}
              onChange={(e) => updateFilter('bedrooms', parseInt(e.target.value) || undefined)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
            <select
              value={filters.bathrooms || ''}
              onChange={(e) => updateFilter('bathrooms', parseInt(e.target.value) || undefined)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
          >
            <Filter className="h-4 w-4" />
            <span>{showAdvanced ? 'Less Filters' : 'More Filters'}</span>
          </button>
          <button
            onClick={clearFilters}
            className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
          >
            <X className="h-4 w-4" />
            <span>Clear All</span>
          </button>
        </div>
        <button
          onClick={onSearch}
          className="bg-primary-600 text-white px-6 py-2 rounded-md font-medium hover:bg-primary-700 transition-colors flex items-center space-x-2"
        >
          <Search className="h-4 w-4" />
          <span>Search Properties</span>
        </button>
      </div>
    </div>
  );
}