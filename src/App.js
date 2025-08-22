import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import SalomoApp from './SalomoApp';
import SalomoWebsite from './SalomoWebsite';
import RequestListPage from './RequestListPage';
import ContactPage from './ContactPage';
import CompanyInfoPage from './CompanyInfoPage';
import Login from './Login';  // Import your Login page

export default function App() {
  return (
    <Routes>
      {/* Routes with Header and Footer */}
      <Route path="/" element={<Layout />}>
        <Route index element={<SalomoApp />} />
        <Route path="post" element={<SalomoWebsite />} />
        <Route path="requests" element={<RequestListPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="info" element={<CompanyInfoPage />} />
      </Route>

      {/* Login route WITHOUT header/footer */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
