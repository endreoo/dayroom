import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { LayoutDashboard, Calendar, MessageSquare } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="flex">
      <aside className="w-64 bg-white shadow-md h-[calc(100vh-4rem)] fixed">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
          <p className="text-sm text-gray-600 mt-1">{user?.role}</p>
        </div>
        
        <nav className="mt-8">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                isActive ? 'bg-blue-50 text-blue-600' : ''
              }`
            }
          >
            <LayoutDashboard className="h-5 w-5 mr-2" />
            Overview
          </NavLink>
          
          <NavLink
            to="/dashboard/requests"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                isActive ? 'bg-blue-50 text-blue-600' : ''
              }`
            }
          >
            <Calendar className="h-5 w-5 mr-2" />
            Booking Requests
          </NavLink>
          
          <NavLink
            to="/dashboard/messages"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                isActive ? 'bg-blue-50 text-blue-600' : ''
              }`
            }
          >
            <MessageSquare className="h-5 w-5 mr-2" />
            Messages
          </NavLink>
        </nav>
      </aside>

      <main className="ml-64 flex-1 p-6">
        {children}
      </main>
    </div>
  );
}