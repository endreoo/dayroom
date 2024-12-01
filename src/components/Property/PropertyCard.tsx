import React from 'react';
import { Star, Users, Clock } from 'lucide-react';
import type { Property } from '../../types';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={property.images[0]}
          alt={property.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-medium text-gray-700 shadow">
          <span className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            {property.rating}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{property.name}</h3>
            <p className="text-sm text-gray-600">{property.location.city}, {property.location.country}</p>
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {property.type.replace('_', ' ').toUpperCase()}
          </span>
        </div>

        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Clock className="h-4 w-4 mr-1" />
          <span>12:00 - 18:00</span>
          <Users className="h-4 w-4 ml-3 mr-1" />
          <span>Up to 4 guests</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">From</p>
            <p className="text-lg font-bold text-blue-600">${property.dayStayPrice}</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
            Book Now
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {Object.entries(property.features)
            .filter(([_, value]) => value)
            .map(([key]) => (
              <span
                key={key}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
              >
                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}