import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MalwaresPage from "./pages/Malwares";
import PhishingPage from "./pages/Phishing";
import PasswordsPage from "./pages/Passwords";
import AppliPage from "./pages/Appli";
import WifiPage from "./pages/Wifi";
import SocialPage from "./pages/Social";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/phishing" element={<PhishingPage />} />
          <Route path="/passwords" element={<PasswordsPage />} />
          <Route path="/appli" element={<AppliPage />} />
          <Route path="/wifi" element={<WifiPage />} />
          <Route path="/malwares" element={<MalwaresPage />} />
          <Route path="/social" element={<SocialPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
