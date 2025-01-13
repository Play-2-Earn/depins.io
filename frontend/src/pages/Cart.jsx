import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Truck,
  Shield,
  Zap,
  Gift,
  Clock,
  Lock,
} from "lucide-react";
import { useCartStore } from "./CartStore";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51QSem8QrlJezV9RIhrECrUSIY7yIXtQgZzVwaPfF6W2bSheMbap5NMrsDHUj65gBeOGqnFLJ8mwB4XXgSVOrZydL001Xg5xQUj"
);

// Hexagon Background Component
const HexagonBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='%2320C997' fill-opacity='0.2'/%3E%3C/svg%3E")`,
        backgroundSize: "60px 60px",
      }}
    />
  </div>
);

// Progress Bar Component
const ProgressBar = ({ currentStep }) => {
  const steps = ["Cart", "Shipping", "Payment"];
  return (
    <div className="relative mb-12">
      <div className="absolute left-0 top-1/2 w-full h-0.5 bg-[#20C997]/20 -translate-y-1/2" />
      <div className="relative flex justify-between max-w-2xl mx-auto">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index <= currentStep ? "bg-[#20C997]" : "bg-[#20C997]/20"
              } transition-all duration-500`}
            >
              <span className="text-white text-sm">{index + 1}</span>
            </div>
            <span
              className={`mt-2 text-sm ${
                index <= currentStep ? "text-[#20C997]" : "text-gray-500"
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Cart Page Component
export default function Cart() {
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity, total } = useCartStore();
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#0D1B2A] flex items-center justify-center px-4 relative">
        <HexagonBackground />
        <div className="text-center space-y-6 relative">
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-[#20C997]/20 rounded-full animate-ping" />
            <div className="relative bg-[#20C997]/10 rounded-full p-6">
              <ShoppingCart className="w-12 h-12 text-[#20C997]" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-[#20C997] mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-gray-400 mb-8">
            Ready to start your mining journey?
          </p>
          <button
            onClick={() => navigate("/store")}
            className="px-8 py-4 bg-[#20C997] hover:bg-[#20C997]/90 rounded-xl font-medium transition-all duration-300 text-white flex items-center gap-2 mx-auto group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Explore Hardware
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D1B2A] py-12 px-4 relative">
      <HexagonBackground />
      <div className="max-w-7xl mx-auto relative">
        <ProgressBar currentStep={0} />

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#20C997] mb-4">
            Your Mining Arsenal
          </h1>
          <p className="text-gray-400">
            Customize your order and prepare for deployment
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`bg-black/40 backdrop-blur-md rounded-xl p-6 border border-[#20C997]/20 hover:border-[#20C997] transition-all duration-500 transform ${
                  showAnimation
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex gap-6">
                  <div className="relative group w-32 h-32 overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-[#20C997]/10 group-hover:bg-[#20C997]/20 transition-colors duration-300" />
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 border border-[#20C997]/20 rounded-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#20C997] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#20C997] text-lg font-medium">
                      €{item.price}
                    </p>

                    <div className="flex items-center gap-4 mt-6">
                      <div className="flex items-center gap-3 bg-black/30 rounded-xl p-1.5 border border-[#20C997]/20">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-2 hover:bg-[#20C997]/20 rounded-lg transition-colors"
                        >
                          <Minus size={16} className="text-[#20C997]" />
                        </button>
                        <span className="text-white min-w-[32px] text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-2 hover:bg-[#20C997]/20 rounded-lg transition-colors"
                        >
                          <Plus size={16} className="text-[#20C997]" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto p-2.5 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-xl transition-all duration-300 group"
                      >
                        <Trash2
                          size={20}
                          className="transform group-hover:rotate-12 transition-transform"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-8 h-fit">
            <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-[#20C997]/20">
              <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
                <Gift className="w-5 h-5 text-[#20C997]" />
                Order Summary
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>€{total().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#20C997]" />
                    Shipping
                  </span>
                  <span className="text-[#20C997]">Free</span>
                </div>
                <div className="pt-4 border-t border-[#20C997]/20">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-medium text-white">
                      Total
                    </span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-[#20C997]">
                        €{total().toFixed(2)}
                      </span>
                      <p className="text-sm text-gray-400">Tax included</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <button
                    onClick={() => navigate("/checkout")}
                    className="w-full px-6 py-4 bg-[#20C997] hover:bg-[#20C997]/90 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Proceed to Checkout
                      <ArrowRight
                        size={20}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </button>

                  <button
                    onClick={() => navigate("/store")}
                    className="w-full px-6 py-4 bg-transparent border border-[#20C997]/20 hover:border-[#20C997] text-[#20C997] font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-[#20C997]/20">
                <Lock className="w-5 h-5 text-[#20C997] mb-2" />
                <h4 className="text-white text-sm font-medium">
                  Secure Payment
                </h4>
                <p className="text-gray-400 text-xs">256-bit encryption</p>
              </div>
              <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-[#20C997]/20">
                <Clock className="w-5 h-5 text-[#20C997] mb-2" />
                <h4 className="text-white text-sm font-medium">
                  Fast Delivery
                </h4>
                <p className="text-gray-400 text-xs">2-5 business days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
