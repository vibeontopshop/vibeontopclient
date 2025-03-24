'use client';
import React, { useState } from 'react';
import ExistingAddress from './ExistingAddress';
import NavBar from './Navbar';
import Addaddress from './Addaddress';
import OrderSummary from './Ordersummary';
import Footer from '../Mainpage/Footer';
import Payment from './Payment';
import Review from './Review';

export default function Shipping() {
  const [currentStep, setCurrentStep] = useState('address');
  const goToAddress = () => setCurrentStep('address');
  const goToPayment = () => setCurrentStep('payment');
  const goToReview = () => setCurrentStep('review');

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <NavBar />
      <main className="flex flex-col md:flex-row justify-between px-6 md:px-10 py-10 space-y-10 md:space-y-0">
        <div className="flex flex-col w-full md:w-3/5 space-y-6">
          <h1 className="text-3xl font-bold mb-4">Shipping Address</h1>

          <div className="flex space-x-4 mb-6">
            <button
              onClick={goToAddress}
              className={`pb-2 transition ${
                currentStep === 'address'
                  ? 'border-b-2 border-black text-black'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              Address
            </button>
            <button
              onClick={goToPayment}
              className={`pb-2 transition ${
                currentStep === 'payment'
                  ? 'border-b-2 border-black text-black'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              Payment
            </button>
            <button
              onClick={goToReview}
              className={`pb-2 transition ${
                currentStep === 'review'
                  ? 'border-b-2 border-black text-black'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              Review
            </button>
          </div>
          {currentStep === 'address' && (
            <>
              <ExistingAddress onDeliverHere={goToPayment} />
              <Addaddress />
            </>
          )}

          {currentStep === 'payment' && (
            <Payment onPaymentSuccess={goToReview} />
          )}

          {currentStep === 'review' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Review Your Order</h2>
              <Review />
            </div>
          )}
        </div>
        <div className= "w-1/2">
          <OrderSummary />
        </div>
      </main>
      <Footer />
    </div>
  );
}
