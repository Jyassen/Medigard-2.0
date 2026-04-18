import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import ComplianceLayout from './components/compliance/ComplianceLayout'
import Landing from './pages/Landing'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Booking from './pages/Booking'
import ThankYou from './pages/ThankYou'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import ComplianceHome from './pages/compliance/ComplianceHome'
import ComplianceContact from './pages/compliance/ComplianceContact'
import ComplianceBooking from './pages/compliance/ComplianceBooking'
import ComplianceThankYou from './pages/compliance/ComplianceThankYou'
import CompliancePrivacy from './pages/compliance/CompliancePrivacy'
import ComplianceTerms from './pages/compliance/ComplianceTerms'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Route>

        <Route
          path="/compliance/services"
          element={<Navigate to={{ pathname: '/compliance', hash: '#benefits' }} replace />}
        />
        <Route path="/compliance" element={<ComplianceLayout />}>
          <Route index element={<ComplianceHome />} />
          <Route path="contact" element={<ComplianceContact />} />
          <Route path="book" element={<ComplianceBooking />} />
          <Route path="thank-you" element={<ComplianceThankYou />} />
          <Route path="privacy" element={<CompliancePrivacy />} />
          <Route path="terms" element={<ComplianceTerms />} />
        </Route>

        <Route path="/compliance-book" element={<Navigate to="/compliance/book" replace />} />
        <Route path="/compliance-thanks" element={<Navigate to="/compliance/thank-you" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
