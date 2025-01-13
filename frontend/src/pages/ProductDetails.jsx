// ProductDetails.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  ArrowLeft,
  Shield,
  Cpu,
  Battery,
  Wifi,
  Zap,
  Award,
} from "lucide-react";
import { useCartStore } from "./CartStore";
import { getProduct } from "./products";

const FeatureCard = ({ icon: Icon, title, value }) => (
  <div className="relative group">
    <div className="absolute inset-0.5 bg-gradient-to-r from-[#20C997] to-[#20C997]/50 opacity-50 blur group-hover:opacity-100 transition-opacity"></div>
    <div className="relative bg-black p-6 rounded-xl border border-[#20C997]/20 hover:border-[#20C997] transition-all duration-300">
      <Icon className="w-6 h-6 text-[#20C997] mb-3" />
      <h3 className="text-[#20C997] font-medium mb-2">{title}</h3>
      <p className="text-white text-sm">{value}</p>
    </div>
  </div>
);

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);
  const [isHovered, setIsHovered] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const product = getProduct(id);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0D1B2A] flex items-center justify-center">
        <div className="text-[#20C997] text-xl">Product not found</div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-[#0D1B2A] py-8 px-4 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzIwQzk5NyIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-5"></div>
      </div>

      {/* Cart Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => navigate("/cart")}
          className="relative bg-[#20C997]/20 hover:bg-[#20C997]/30 p-3 rounded-full transition-all duration-300 group"
        >
          <ShoppingCart className="w-6 h-6 text-[#20C997] group-hover:scale-110 transition-transform" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#20C997] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm animate-pulse">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto mb-8">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-[#20C997] hover:text-[#20C997]/80 transition-all group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="relative">
            Back to Store
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#20C997] group-hover:w-full transition-all"></span>
          </span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <div className="relative group">
            <div className="absolute inset-0.5  blur group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-black rounded-xl overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {product.isPreOrder && (
                <div className="absolute top-4 left-4 bg-yellow-500/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white font-medium">Pre-Order</span>
                </div>
              )}

              {/* Reward Estimator Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-[#20C997] text-sm mb-1">
                      Daily Rewards Est.
                    </div>
                    <div className="text-white font-bold">
                      {product.estimatedRewards}
                    </div>
                  </div>
                  <Award className="w-8 h-8 text-[#20C997]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-[#20C997]" />
                <span className="text-[#20C997]">{product.category}</span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-3">
                {product.title}
              </h1>
              <p className="text-xl text-[#20C997]/80 mb-4">
                {product.tagline}
              </p>
              <div className="inline-block bg-black/50 px-6 py-3 rounded-lg border border-[#20C997]/30">
                <span className="text-3xl font-bold text-[#20C997]">
                  €{product.price}
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-lg">{product.description}</p>

            {/* Network Stats */}
            <div className="grid grid-cols-3 gap-4 bg-black/30 p-6 rounded-xl border border-[#20C997]/20">
              <div>
                <div className="text-[#20C997]/80 text-sm mb-1">Network</div>
                <div className="text-white font-medium">
                  {product.networkType}
                </div>
              </div>
              <div>
                <div className="text-[#20C997]/80 text-sm mb-1">
                  Power Usage
                </div>
                <div className="text-white font-medium">
                  {product.powerConsumption}
                </div>
              </div>
              <div>
                <div className="text-[#20C997]/80 text-sm mb-1">Setup Time</div>
                <div className="text-white font-medium">~30 mins</div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              <FeatureCard
                icon={Shield}
                title="Security"
                value={product.features.security}
              />
              <FeatureCard
                icon={Cpu}
                title="Performance"
                value={product.features.performance}
              />
              <FeatureCard
                icon={Battery}
                title="Battery"
                value={product.features.battery}
              />
              <FeatureCard
                icon={Wifi}
                title="Connectivity"
                value={product.features.connectivity}
              />
            </div>

            {/* Specifications */}
            <div className="relative group">
              <div className="absolute inset-0.5 bg-gradient-to-r from-[#20C997] to-[#20C997]/50 opacity-30 blur"></div>
              <div className="relative bg-black/80 p-6 rounded-xl border border-[#20C997]/20">
                <h2 className="text-[#20C997] font-medium mb-4">
                  Specifications
                </h2>
                <ul className="space-y-3">
                  {product.specs.map((spec, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#20C997]"></div>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-full bg-[#20C997] hover:bg-[#20C997]/90 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5 transition-transform group-hover:scale-110" />
                Add to Cart
                {isHovered && (
                  <span className="text-sm">- €{product.price}</span>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#20C997]/0 via-[#20C997]/50 to-[#20C997]/0 opacity-50 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
