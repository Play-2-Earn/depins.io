// Store.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Zap,
  Box,
  Cpu,
  Signal,
  Wifi,
  Battery,
  Shield,
  Globe,
  Banknote,
  Cable,
} from "lucide-react";
import { products, categories } from "./products";
import { useCartStore } from "./CartStore";

const NetworkStatsCard = () => (
  <div className="absolute left-4 top-24 bg-black/40 backdrop-blur-md p-4 rounded-xl border border-[#20C997]/30 hidden lg:block">
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Signal className="w-4 h-4 text-[#20C997]" />
        <span className="text-[#20C997]/80 text-sm">Network Status</span>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-4">
          <span className="text-white/60 text-sm">DIMO</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`w-1 h-3 rounded-full ${
                  i <= 3 ? "bg-[#20C997]" : "bg-[#20C997]/30"
                }`}
              ></div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-white/60 text-sm">Nubila</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`w-1 h-3 rounded-full ${
                  i <= 4 ? "bg-[#20C997]" : "bg-[#20C997]/30"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const StatsCard = () => (
  <div className="absolute right-4 top-24 bg-black/40 backdrop-blur-md p-4 rounded-xl border border-[#20C997]/30 hidden lg:block">
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Globe className="w-4 h-4 text-[#20C997]" />
        <span className="text-[#20C997]/80 text-sm">Global Stats</span>
      </div>
      <div className="space-y-2">
        <div>
          <div className="text-white/60 text-sm">Active Nodes</div>
          <div className="text-white font-bold">124,532</div>
        </div>
        <div>
          <div className="text-white/60 text-sm">24h Rewards</div>
          <div className="text-[#20C997] font-bold">€47,891</div>
        </div>
      </div>
    </div>
  </div>
);

export default function Store() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);
  const cartItems = useCartStore((state) => state.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0D1B2A] relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-[#20C997]/10 to-transparent"></div>
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzIwQzk5NyIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] transform rotate-45"
          style={{
            transform: `translateY(${scrollPosition * 0.2}px) rotate(45deg)`,
          }}
        ></div>
      </div>

      {/* Cart Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => navigate("/cart")}
          className="relative bg-black/50 backdrop-blur-md hover:bg-[#20C997]/30 p-4 rounded-xl transition-all duration-300 group border border-[#20C997]/30"
        >
          <ShoppingCart className="w-6 h-6 text-[#20C997] group-hover:scale-110 transition-transform" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#20C997] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm animate-pulse">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {/* Network Stats Cards */}
      <NetworkStatsCard />
      <StatsCard />

      {/* Cyber Header */}

      <div className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#20C997]/50 to-[#20C997]/20 blur-lg transform -skew-x-12"></div>
            <h1 className="relative text-6xl md:text-8xl font-bold text-white mb-2 sm:mb-6 tracking-tight">
              <span className="block">DePIN</span>
              <span className="block text-[#20C997]">Hardware Store</span>
            </h1>
          </div>
          <p className="text-[#20C997] text-xl mb-4 font-medium tracking-wide">
            Mine • Earn • Build
          </p>
          <div className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Your Gateway to the Decentralized Physical Infrastructure Network
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 px-4 py-8 mb-8 max-w-7xl mx-auto">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 rounded-xl relative overflow-hidden group transition-all duration-300 ${
              selectedCategory === "All"
                ? "bg-[#20C997] text-white"
                : "bg-black/50 backdrop-blur-md text-[#20C997] border border-[#20C997]/30"
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Box className="w-4 h-4" />
              All Products
            </span>
            <div className="absolute inset-0 bg-[#20C997] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl relative overflow-hidden group transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#20C997] text-white"
                  : "bg-black/50 backdrop-blur-md text-[#20C997] border border-[#20C997]/30"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {category === "Vehicle" && <Cpu className="w-4 h-4" />}
                {category === "Weather" && <Wifi className="w-4 h-4" />}
                {category === "Edge Computing" && (
                  <Battery className="w-4 h-4" />
                )}
                {category === "Smart Device" && <Shield className="w-4 h-4" />}
                {category === "Helium" && <Banknote className="w-4 h-4" />}
                {category === "Cables" && <Cable className="w-4 h-4" />}
                {category}
              </span>
              <div className="absolute inset-0 bg-[#20C997] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="px-4 max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative"
              style={{
                transform: `translateY(${index % 2 === 0 ? "20px" : "0"})`,
              }}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glowing Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#20C997] to-[#20C997]/50 rounded-xl opacity-75 blur group-hover:opacity-100 transition-opacity animate-glow"></div>

              {/* Card Content */}
              <div className="relative bg-black/80 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-500">
                {/* Image Container */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

                  {/* Network Type Badge */}
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#20C997]/30">
                    <span className="text-[#20C997] text-sm font-medium">
                      {product.networkType}
                    </span>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-[#20C997]/30">
                    <span className="text-[#20C997] font-medium">
                      €{product.price}
                    </span>
                  </div>

                  {/* Pre-order Badge */}
                  {product.isPreOrder && (
                    <div className="absolute bottom-4 left-4 bg-yellow-500/90 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                      <span className="text-white text-sm font-medium">
                        Pre-Order
                      </span>
                    </div>
                  )}

                  {/* Estimated Rewards */}
                  <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#20C997]/30">
                    <span className="text-[#20C997] text-sm">
                      Est. {product.estimatedRewards}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-4 h-4 text-[#20C997]" />
                    <span className="text-sm text-[#20C997] font-medium">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-xl mb-2 line-clamp-1">
                    {product.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {product.tagline}
                  </p>

                  {/* Specs Preview */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-[#20C997]/80 text-xs mb-1">
                        Power
                      </div>
                      <div className="text-white text-sm font-medium">
                        {product.powerConsumption}
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-[#20C997]/80 text-xs mb-1">
                        Setup
                      </div>
                      <div className="text-white text-sm font-medium">
                        ~30 mins
                      </div>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="w-full bg-[#20C997]/10 hover:bg-[#20C997] text-[#20C997] hover:text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <ShoppingCart className="w-5 h-5" />
                      View Details
                    </span>
                    <div className="absolute inset-0 bg-[#20C997] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add this to your CSS */}
      <style>{`
        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#20C997]/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-10 w-40 h-40 bg-[#20C997]/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-2s" }}
        ></div>
      </div>

      {/* Stats Ticker */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md border-t border-[#20C997]/30 py-2 hidden lg:block">
        <div className="flex items-center justify-center gap-12 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#20C997] rounded-full animate-pulse"></div>
            <span className="text-white/60">Active Miners:</span>
            <span className="text-[#20C997] font-medium">124,532</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#20C997] rounded-full animate-pulse"></div>
            <span className="text-white/60">24h Network Revenue:</span>
            <span className="text-[#20C997] font-medium">€47,891</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#20C997] rounded-full animate-pulse"></div>
            <span className="text-white/60">Network Health:</span>
            <span className="text-[#20C997] font-medium">98.7%</span>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {hoveredCard && (
        <div
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-md p-4 rounded-xl border border-[#20C997]/30 z-50 hidden lg:block"
          style={{ width: "300px" }}
          onMouseEnter={() => setHoveredCard(hoveredCard)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <div className="text-[#20C997] text-sm mb-1">Quick Stats</div>
              <div className="text-white font-medium mb-2">
                {products.find((p) => p.id === hoveredCard)?.title}
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <div className="text-white/60">Network</div>
                  <div className="text-white">
                    {products.find((p) => p.id === hoveredCard)?.networkType}
                  </div>
                </div>
                <div>
                  <div className="text-white/60">Est. Rewards</div>
                  <div className="text-[#20C997]">
                    {
                      products.find((p) => p.id === hoveredCard)
                        ?.estimatedRewards
                    }
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => navigate(`/product/${hoveredCard}`)}
              className="bg-[#20C997]/20 hover:bg-[#20C997] text-[#20C997] hover:text-white px-3 py-2 rounded-lg transition-all duration-300 text-sm"
            >
              View
            </button>
          </div>
        </div>
      )}

      {/* Loading States */}
      {filteredProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-16 h-16 border-4 border-[#20C997]/30 border-t-[#20C997] rounded-full animate-spin mb-4"></div>
          <div className="text-[#20C997]">Loading products...</div>
        </div>
      )}
    </div>
  );
}
