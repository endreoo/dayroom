import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const locations = [
  {
    country: 'Kenya',
    cities: ['Nairobi', 'Mombasa', 'Nakuru', 'Kisumu', 'Malindi']
  },
  {
    country: 'Uganda',
    cities: ['Kampala', 'Entebbe', 'Jinja', 'Mbarara', 'Gulu']
  },
  {
    country: 'Rwanda',
    cities: ['Kigali', 'Butare', 'Gisenyi', 'Ruhengeri', 'Cyangugu']
  },
  {
    country: 'Tanzania',
    cities: ['Dar es Salaam', 'Zanzibar City', 'Arusha', 'Mwanza', 'Dodoma']
  },
  {
    country: 'Nigeria',
    cities: ['Lagos', 'Abuja', 'Port Harcourt', 'Kano', 'Ibadan']
  },
  {
    country: 'Ethiopia',
    cities: ['Addis Ababa', 'Dire Dawa', 'Gondar', 'Bahir Dar', 'Mek\'ele']
  }
] as const;

export function LocationSelect({ value, onChange }: LocationSelectProps) {
  return (
    <div className="relative">
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select location</option>
          {locations.map(({ country, cities }) => (
            <optgroup key={country} label={country}>
              {cities.map((city) => (
                <option key={`${country}-${city}`} value={`${city}, ${country}`}>
                  {city}, {country}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>
    </div>
  );
}