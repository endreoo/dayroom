import React from 'react';
import { DollarSign } from 'lucide-react';
import { PriceCategory } from '../../types';

interface PriceCategorySelectProps {
  value: PriceCategory;
  onChange: (value: PriceCategory) => void;
}

const priceCategories = [
  { value: 'budget', label: 'Budget', signs: 1 },
  { value: 'economy', label: 'Economy', signs: 2 },
  { value: 'mid_range', label: 'Mid Range', signs: 3 },
  { value: 'luxury', label: 'Luxury', signs: 4 },
  { value: 'ultra_luxury', label: 'Ultra Luxury', signs: 5 },
] as const;

export function PriceCategorySelect({ value, onChange }: PriceCategorySelectProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {priceCategories.map((category) => {
        const isSelected = value === category.value;
        
        return (
          <button
            key={category.value}
            onClick={() => onChange(category.value as PriceCategory)}
            className={`flex items-center px-4 py-2 rounded-lg border transition-all
              ${
                isSelected
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-blue-200 hover:bg-blue-50/50'
              }
            `}
          >
            <div className="flex items-center mr-2">
              {[...Array(category.signs)].map((_, i) => (
                <DollarSign
                  key={i}
                  className={`h-4 w-4 ${
                    isSelected ? 'text-blue-500' : 'text-gray-400'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium">{category.label}</span>
          </button>
        );
      })}
    </div>
  );
}