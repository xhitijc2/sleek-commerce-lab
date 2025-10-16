import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Customize from "./pages/Customize";
import Checkout from "./pages/Checkout";
import TShirtProducts from "./pages/TShirtProducts";
import TShirtCustomize from "./pages/TShirtCustomize";
import StationeryProducts from "./pages/StationeryProducts";
import StationeryCustomize from "./pages/StationeryCustomize";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/sleek-commerce-lab">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customize/:id" element={<Customize />} />
          <Route path="/tshirts" element={<TShirtProducts />} />
          <Route path="/customize/tshirt/:id" element={<TShirtCustomize />} />
          <Route path="/stationery" element={<StationeryProducts />} />
          <Route path="/customize/stationery/:id" element={<StationeryCustomize />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
