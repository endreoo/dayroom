import React from 'react';
import { useAuthStore } from '../../store/authStore';
import { Clock, DollarSign, Hotel, Users } from 'lucide-react';

export function DashboardHome() {
  const user = useAuthStore((state) => state.user);

  const stats = [
    {
      label: 'Active Requests',
      value: '12',
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      label: 'Total Bookings',
      value: '48',
      icon: Hotel,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      label: 'Revenue',
      value: '$2,450',
      icon: DollarSign,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      label: 'New Clients',
      value: '18',
      icon: Users,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {user?.name}
        </h1>
        <p className="text-gray-600 mt-1">
          Here's what's happening with your {user?.role === 'client' ? 'bookings' : 'properties'} today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className={`${stat.bgColor} p-3 rounded-lg`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {/* Placeholder for recent activity items */}
          <p className="text-gray-600">No recent activity to display.</p>
        </div>
      </div>
    </div>
  );
}