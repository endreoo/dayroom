import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardHome } from './DashboardHome';
import { BookingRequests } from './BookingRequests';
import { DashboardLayout } from './DashboardLayout';

export function Dashboard() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/requests" element={<BookingRequests />} />
      </Routes>
    </DashboardLayout>
  );
}