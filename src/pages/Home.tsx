import React from 'react';
import { HotelSearch } from '../components/Search/HotelSearch';
import { Building2, Clock, Sparkles } from 'lucide-react';
import { PropertyCard } from '../components/Property/PropertyCard';

const featuredProperties = [
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
  {
    id: '2',
    name: 'Kampala Sheraton',
    type: 'hotel',
    priceCategory: 'luxury',
    location: {
      address: 'Ternan Avenue',
      city: 'Kampala',
      country: 'Uganda',
    },
    description: 'Premium hotel experience in Kampala',
    amenities: ['Pool', 'Spa', 'Restaurant'],
    images: ['https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80'],
    rating: 4.6,
    basePrice: 180,
    dayStayPrice: 95,
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
  {
    id: '3',
    name: 'Kigali Marriott',
    type: 'hotel',
    priceCategory: 'luxury',
    location: {
      address: 'KN 3 Avenue',
      city: 'Kigali',
      country: 'Rwanda',
    },
    description: 'Modern luxury in the heart of Kigali',
    amenities: ['Pool', 'Spa', 'Restaurant'],
    images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80'],
    rating: 4.9,
    basePrice: 220,
    dayStayPrice: 150,
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
  }
];

export function Home() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Discover Day Stays in Africa
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Experience luxury hotels and properties across East and West Africa for a day.
          Perfect for business travelers and luxury seekers.
        </p>
      </div>

      <HotelSearch />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Building2 className="h-8 w-8 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Premium Properties</h3>
          <p className="text-gray-600">
            Access to top-rated hotels across Africa
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Clock className="h-8 w-8 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
          <p className="text-gray-600">
            Book stays from 12:00 to 18:00 at your convenience
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Sparkles className="h-8 w-8 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Full Access</h3>
          <p className="text-gray-600">
            Enjoy all complimentary facilities just like regular guests
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-center mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}