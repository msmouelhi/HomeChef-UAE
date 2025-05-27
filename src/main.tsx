// start the app always with '/' route
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "react-query";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { TooltipProvider } from "./components/ui/tooltip";
import { ThemeProvider } from "./components/layout/theme-provider";
import "./index.css";

// PAGE IMPORTS
import Index from "./pages";
import LoginForm from "./pages/login";
import SignupForm from "./pages/signup";
import Logout from "./pages/logout";

import FindChef from "./pages/FindChef";
import Book from "./pages/Book";
import BecomeChef from "./pages/BecomeChef";
import Profile from "./pages/Profile";
import ChefProfile from "./pages/ChefProfile";
import Bookings from "./pages/Bookings";
import Reviews from "./pages/Reviews";
import Admin from "./pages/Admin";
import Notifications from "./pages/Notifications";
import Hygiene from "./pages/Hygiene";

// QueryClient
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/logout" element={<Logout />} />

            <Route path="/find-a-chef" element={<FindChef />} />
            <Route path="/book" element={<Book />} />
            <Route path="/become-a-chef" element={<BecomeChef />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chef/:id" element={<ChefProfile />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/hygiene" element={<Hygiene />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </BrowserRouter>
        <Sonner />
        <Toaster />
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);
