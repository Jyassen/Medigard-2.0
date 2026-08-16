import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import ComplianceLayout from "./components/compliance/ComplianceLayout";
import GrowthLayout from "./components/growth/GrowthLayout";
import OfferLayout from "./components/offer/OfferLayout";
import Hub from "./pages/Hub";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import LaunchHome from "./pages/launch/LaunchHome";
import LaunchBooking from "./pages/launch/LaunchBooking";
import LaunchThankYou from "./pages/launch/LaunchThankYou";
import LaunchContact from "./pages/launch/LaunchContact";
import LaunchPrivacy from "./pages/launch/LaunchPrivacy";
import LaunchTerms from "./pages/launch/LaunchTerms";
import OfferHome from "./pages/offer/OfferHome";
import OfferHomeV2 from "./pages/offer/OfferHomeV2";
import OfferBooking from "./pages/offer/OfferBooking";
import OfferThankYou from "./pages/offer/OfferThankYou";
import OfferContact from "./pages/offer/OfferContact";
import OfferPrivacy from "./pages/offer/OfferPrivacy";
import OfferTerms from "./pages/offer/OfferTerms";
import T65Gate from "./pages/leads/T65Gate";
import ComplianceHome from "./pages/compliance/ComplianceHome";
import ComplianceContact from "./pages/compliance/ComplianceContact";
import ComplianceBooking from "./pages/compliance/ComplianceBooking";
import ComplianceThankYou from "./pages/compliance/ComplianceThankYou";
import CompliancePrivacy from "./pages/compliance/CompliancePrivacy";
import ComplianceTerms from "./pages/compliance/ComplianceTerms";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Hub />} />
          <Route path="/leads/t65" element={<T65Gate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Route>

        <Route path="/launch" element={<GrowthLayout />}>
          <Route index element={<LaunchHome />} />
          <Route path="book" element={<LaunchBooking />} />
          <Route path="thank-you" element={<LaunchThankYou />} />
          <Route path="contact" element={<LaunchContact />} />
          <Route path="privacy" element={<LaunchPrivacy />} />
          <Route path="terms" element={<LaunchTerms />} />
        </Route>

        <Route path="/offer" element={<OfferLayout />}>
          <Route index element={<OfferHome />} />
          <Route path="v2" element={<OfferHomeV2 />} />
          <Route path="book" element={<OfferBooking />} />
          <Route path="thank-you" element={<OfferThankYou />} />
          <Route path="contact" element={<OfferContact />} />
          <Route path="privacy" element={<OfferPrivacy />} />
          <Route path="terms" element={<OfferTerms />} />
        </Route>

        <Route
          path="/compliance/services"
          element={
            <Navigate
              to={{ pathname: "/compliance", hash: "#benefits" }}
              replace
            />
          }
        />
        <Route path="/compliance" element={<ComplianceLayout />}>
          <Route index element={<ComplianceHome />} />
          <Route path="contact" element={<ComplianceContact />} />
          <Route path="book" element={<ComplianceBooking />} />
          <Route path="thank-you" element={<ComplianceThankYou />} />
          <Route path="privacy" element={<CompliancePrivacy />} />
          <Route path="terms" element={<ComplianceTerms />} />
        </Route>

        <Route
          path="/compliance-book"
          element={<Navigate to="/compliance/book" replace />}
        />
        <Route
          path="/compliance-thanks"
          element={<Navigate to="/compliance/thank-you" replace />}
        />
        <Route
          path="/services"
          element={<Navigate to="/compliance#benefits" replace />}
        />
        <Route
          path="/book"
          element={<Navigate to="/compliance/book" replace />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
