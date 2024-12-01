import React from 'react';
import { PropertyTypeSelect } from './PropertyTypeSelect';
import { PriceCategorySelect } from './PriceCategorySelect';
import { Filter, SlidersHorizontal } from 'lucide-react';
import type { PropertyType, PriceCategory } from '../../types';

interface SearchFiltersProps {
  propertyType: PropertyType | '';
  priceCategory: PriceCategory | '';
  minPrice: string;
  maxPrice: string;
  onPropertyTypeChange: (value: PropertyType) => void;
  onPriceCategoryChange: (value: PriceCategory) => void;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
}

export function SearchFilters({
  propertyType,
  priceCategory,
  minPrice,
  maxPrice,
  onPropertyTypeChange,
  onPriceCategoryChange,
  onMinPriceChange,
  onMaxPriceChange,
}: SearchFiltersProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          Filters
        </h2>
        <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center">
          <SlidersHorizontal className="h-4 w-4 mr-1" />
          Reset Filters
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Property Type
          </label>
          <PropertyTypeSelect
            value={propertyType as PropertyType}
            onChange={onPropertyTypeChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Category
          </label>
          <PriceCategorySelect
            value={priceCategory as PriceCategory}
            onChange={onPriceCategoryChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range (USD)
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => onMinPriceChange(e.target.value)}
                placeholder="Min"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => onMaxPriceChange(e.target.value)}
                placeholder="Max"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}