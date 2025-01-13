import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CreditCard,
  Truck,
  Shield,
  ArrowRight,
  Gift,
  Lock,
  Check,
} from "lucide-react";
import { useCartStore } from "./CartStore";
import { loadStripe } from "@stripe/stripe-js";

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
              {index < currentStep ? (
                <Check className="w-4 h-4 text-white" />
              ) : (
                <span className="text-white text-sm">{index + 1}</span>
              )}
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

// Input Field Component
const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = true,
}) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-300">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-3 rounded-lg bg-black/30 border border-[#20C997]/20 focus:border-[#20C997] focus:ring-1 focus:ring-[#20C997] text-white placeholder-gray-500 transition-colors"
      placeholder={`Enter your ${label.toLowerCase()}`}
    />
  </div>
);

export default function Checkout() {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    country: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      //const stripe = await stripePromise;
      //if (!stripe) throw new Error("Stripe failed to load");

      // Here you would typically:
      // 1. Send order details to your backend
      // 2. Get session ID from backend
      // 3. Redirect to Stripe Checkout or confirm payment

      // Simulating payment processing
      //await new Promise((resolve) => setTimeout(resolve, 1500));

      clearCart();
      navigate("/order-success");
    } catch (error) {
      console.error("Payment failed:", error);
      // Here you should show an error message to the user
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0D1B2A] py-12 px-4 relative">
      <HexagonBackground />

      <div className="max-w-7xl mx-auto relative">
        <ProgressBar currentStep={1} />

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#20C997] mb-4">
            Secure Checkout
          </h1>
          <p className="text-gray-400">
            Complete your order with our secure payment system
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Shipping Information */}
            <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-[#20C997]/20">
              <div className="flex items-center gap-2 mb-6">
                <Truck className="w-5 h-5 text-[#20C997]" />
                <h2 className="text-xl font-medium text-white">
                  Shipping Information
                </h2>
              </div>

              <div className="grid gap-6">
                <InputField
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <InputField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <InputField
                  label="Shipping Address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
                <div className="grid grid-cols-2 gap-4">
                  <InputField
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                  <InputField
                    label="Country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                  />
                </div>
                <InputField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-[#20C997]/20">
              <div className="flex items-center gap-2 mb-6">
                <CreditCard className="w-5 h-5 text-[#20C997]" />
                <h2 className="text-xl font-medium text-white">
                  Payment Information
                </h2>
              </div>

              <div className="grid gap-6">
                <InputField
                  label="Card Number"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                />
                <div className="grid grid-cols-2 gap-4">
                  <InputField
                    label="Expiry Date"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                  />
                  <InputField
                    label="CVV"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-[#20C997]/20">
                <Lock className="w-5 h-5 text-[#20C997] mb-2" />
                <h3 className="text-white text-sm font-medium">
                  Secure Payment
                </h3>
                <p className="text-gray-400 text-xs">256-bit SSL encryption</p>
              </div>
              <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-[#20C997]/20">
                <Truck className="w-5 h-5 text-[#20C997] mb-2" />
                <h3 className="text-white text-sm font-medium">
                  Fast Shipping
                </h3>
                <p className="text-gray-400 text-xs">2-5 business days</p>
              </div>
              <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-[#20C997]/20">
                <Shield className="w-5 h-5 text-[#20C997] mb-2" />
                <h3 className="text-white text-sm font-medium">
                  Buyer Protection
                </h3>
                <p className="text-gray-400 text-xs">Money-back guarantee</p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-4 bg-[#20C997] hover:bg-[#20C997]/90 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center gap-2">
                {loading ? "Processing..." : "Complete Purchase"}
                {!loading && (
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </form>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-[#20C997]/20">
              <div className="flex items-center gap-2 mb-6">
                <Gift className="w-5 h-5 text-[#20C997]" />
                <h2 className="text-xl font-medium text-white">
                  Order Summary
                </h2>
              </div>

              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-gray-300"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-[#20C997]/10 rounded flex items-center justify-center text-sm text-[#20C997]">
                        {item.quantity}
                      </span>
                      {item.title}
                    </span>
                    <span>€{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}

                <div className="border-t border-[#20C997]/20 pt-4 mt-4">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span>€{total().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300 mt-2">
                    <span>Shipping</span>
                    <span className="text-[#20C997]">Free</span>
                  </div>
                  <div className="flex justify-between text-xl font-medium mt-4">
                    <span className="text-white">Total</span>
                    <span className="text-[#20C997]">
                      €{total().toFixed(2)}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">Including VAT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
