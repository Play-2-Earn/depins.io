import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Check, ArrowRight, Download, Box } from "lucide-react";
import confetti from "canvas-confetti";

const OrderSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger confetti animation on component mount
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#20C997"],
      });

      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#20C997"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  return (
    <div className="min-h-screen bg-[#0D1B2A] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center space-y-6 mb-12">
          {/* Success Animation */}
          <div className="w-24 h-24 mx-auto relative">
            <div className="absolute inset-0 bg-[#20C997]/20 rounded-full animate-ping" />
            <div className="relative bg-[#20C997] rounded-full p-6">
              <Check className="w-12 h-12 text-white" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-[#20C997]">
            Order Confirmed!
          </h1>
          <p className="text-gray-400">
            Thank you for your purchase. Your order has been successfully
            processed.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-black/40 backdrop-blur-md rounded-xl p-8 border border-[#20C997]/20 mb-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-6 border-b border-[#20C997]/20">
              <div>
                <h3 className="text-white font-medium">Order Number</h3>
                <p className="text-[#20C997]">
                  #ORD-2024-{Math.floor(Math.random() * 10000)}
                </p>
              </div>
              <button className="flex items-center gap-2 text-[#20C997] hover:text-[#20C997]/80 transition-colors">
                <Download className="w-4 h-4" />
                Receipt
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#20C997]/10 rounded-lg flex items-center justify-center">
                  <Box className="w-6 h-6 text-[#20C997]" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Shipping Updates</h4>
                  <p className="text-gray-400 text-sm">
                    You will receive shipping updates via email
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => navigate("/store")}
            className="w-full px-6 py-4 bg-[#20C997] hover:bg-[#20C997]/90 rounded-xl font-medium transition-all duration-300 text-white flex items-center justify-center gap-2 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Continue Shopping
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>

          <button
            onClick={() => navigate("/orders")}
            className="w-full px-6 py-4 bg-transparent border border-[#20C997]/20 hover:border-[#20C997] text-[#20C997] font-medium rounded-xl transition-all duration-300"
          >
            View Order History
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
