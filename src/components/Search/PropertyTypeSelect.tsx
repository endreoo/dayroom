import React from 'react';
import { Building2, Hotel, Home, Palmtree, Castle, HomeIcon, Building } from 'lucide-react';
import { PropertyType } from '../../types';

interface PropertyTypeSelectProps {
  value: PropertyType;
  onChange: (value: PropertyType) => void;
}

const propertyTypes = [
  { value: 'hotel', label: 'Hotel', icon: Hotel },
  { value: 'apartment', label: 'Apartment', icon: Building2 },
  { value: 'villa', label: 'Villa', icon: Home },
  { value: 'resort', label: 'Resort', icon: Palmtree },
  { value: 'boutique_hotel', label: 'Boutique Hotel', icon: Castle },
  { value: 'guesthouse', label: 'Guesthouse', icon: HomeIcon },
  { value: 'hostel', label: 'Hostel', icon: Building },
] as const;

export function PropertyTypeSelect({ value, onChange }: PropertyTypeSelectProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
      {propertyTypes.map((type) => {
        const Icon = type.icon;
        const isSelected = value === type.value;
        
        return (
          <button
            key={type.value}
            onClick={() => onChange(type.value as PropertyType)}
            className={`flex flex-col items-center p-3 rounded-lg border transition-all
              ${
                isSelected
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-blue-200 hover:bg-blue-50/50'
              }
            `}
          >
            <Icon className={`h-6 w-6 mb-2 ${isSelected ? 'text-blue-500' : 'text-gray-500'}`} />
            <span className="text-sm font-medium">{type.label}</span>
          </button>
        );
      })}
    </div>
  );
}