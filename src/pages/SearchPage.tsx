import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchFilters } from '../components/Search/SearchFilters';
import { SearchResults } from '../components/Search/SearchResults';
import { ArrowLeft, ListFilter } from 'lucide-react';
import type { Property, PropertyType, PriceCategory } from '../types';

// Mock data - replace with API call
const mockResults: Property[] = [
  {
    id: '1',
    name: 'Serena Hotel Nairobi',
    type: 'hotel',
    priceCategory: 'luxury',
    location: {
      address: 'Processional Way',
      city: 'Nairobi',
      country: 'Kenya',
    },
    description: 'Luxury hotel in the heart of Nairobi',
    amenities: ['Pool', 'Spa', 'Restaurant'],
    images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'],
    rating: 4.8,
    basePrice: 200,
    dayStayPrice: 120,
    availableTimeSlots: [{ start: '12:00', end: '18:00' }],
    features: {
      pool: true,
      spa: true,
      gym: true,
      restaurant: true,
      roomService: true,
      parking: true,
      wifi: true,
    }
  },
  // Add more mock properties here
];

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [propertyType, setPropertyType] = useState<PropertyType | ''>('');
  const [priceCategory, setPriceCategory] = useState<PriceCategory | ''>('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [isLoading] = useState(false);

  const location = searchParams.get('location') || '';
  const date = searchParams.get('date') || '';
  const guests = searchParams.get('guests') || '';

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => window.history.back()}
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Properties in {location}
            </h1>
            <p className="text-gray-600">
              {date} · {guests} guest{Number(guests) !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          <ListFilter className="h-4 w-4 mr-2" />
          Filters
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className={`md:w-80 ${showFilters ? 'block' : 'hidden md:block'}`}>
          <SearchFilters
            propertyType={propertyType}
            priceCategory={priceCategory}
            minPrice={minPrice}
            maxPrice={maxPrice}
            onPropertyTypeChange={setPropertyType}
            onPriceCategoryChange={setPriceCategory}
            onMinPriceChange={setMinPrice}
            onMaxPriceChange={setMaxPrice}
          />
        </div>

        <div className="flex-1">
          <SearchResults results={mockResults} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}