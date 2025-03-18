'use client';
import React, { useState } from 'react';
import ExistingAddress from './ExistingAddress';
import NavBar from './Navbar';
import Addaddress from './Addaddress';
import OrderSummary from './Ordersummary';
import Footer from '../Mainpage/Footer';
import Payment from "./payment";
import Review from './Review';

export default function Shipping() {
  const [currentStep, setCurrentStep] = useState('address');

  const handleNextStep = () => {
    setCurrentStep('payment');
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <NavBar />

      <main className="flex flex-col md:flex-row justify-between px-10 py-10 space-y-10 md:space-y-0">
        <div className="flex flex-col w-full md:w-3/5 space-y-6">
          <h1 className="text-3xl font-bold mb-4">Shipping Address</h1>

          <div className="flex space-x-4 mb-6">
            <button
              className={`pb-2 ${
                currentStep === 'address'
                  ? 'border-b-2 border-black'
                  : 'text-gray-500'
              }`}
            >
              Address
            </button>
            <button
              className={`pb-2 ${
                currentStep === 'payment'
                  ? 'border-b-2 border-black'
                  : 'text-gray-500'
              }`}
            >
              Payment
            </button>
            <button
              className={`pb-2 ${
                currentStep === 'review'
                  ? 'border-b-2 border-black'
                  : 'text-gray-500'
              }`}
            >
              Review
            </button>
          </div>

          {currentStep === 'address' && (
            <>
              <ExistingAddress onDeliverHere={handleNextStep} />
              <Addaddress />
            </>
          )}

          {currentStep === 'payment' && (
  <>
    <Payment onPaymentSuccess={() => setCurrentStep('review')} />
  </>
)}
          {currentStep === 'review' && (
            <>
              <h2 className="text-2xl font-bold mb-4"><Review/></h2>
            </>
          )}
        </div>

        <OrderSummary />
      </main>
      <Footer />
    </div>
  );
}
