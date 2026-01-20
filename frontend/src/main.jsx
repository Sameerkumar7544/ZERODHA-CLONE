import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";


import App from "./App.jsx";
import HomePage from "./Landingpage/Home/HomePage";
import SignUp from "./Landingpage/SignUp/SignUp";
import Login from "./Landingpage/login/login";
import AboutPage from "./Landingpage/About/AboutPage";
import ProductPage from "./Landingpage/Product/ProductPage";
import SupportPage from "./Landingpage/Support/SupportPage";
import PricingPage from "./Landingpage/Pricing/PricingPage";
import NotFound from "./Landingpage/NotFound.jsx";
import Profile from "./Landingpage/Profile/Profile.jsx";
import Emailverify from "./Landingpage/login/Emailverify.jsx";
import ResetPassword from "./Landingpage/login/ResetPassword.jsx";

import { AppContextProvider } from "./context/AppContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/email-verify" element={<Emailverify />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </AppContextProvider>
);
