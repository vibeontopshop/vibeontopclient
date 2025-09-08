'use client';
import React, { useState } from 'react';
import Addadress from './Addaddress';
import Navbar from './Navbar';
import ExistingAddress from './ExistingAddress';
import Ordersummary from './Ordersummary';
import Payment from './Payment';
import Review from './Review';

const Checkout = () => {
  const [step, setStep] = useState('address'); // "address" | "payment"

  return (
    <div>
      <Navbar />
      <div className="mt-24 px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (2/3 width) */}
          <div className="lg:col-span-2 space-y-6">
            {step === 'address' && (
              <>
                <Addadress />
                <ExistingAddress onDeliverHere={() => setStep('payment')} />
              </>
            )}

            {step === 'payment' && (
              <Payment onPaymentSuccess={() => setStep('review')} />
            )}
            {step === 'review' && <Review />}
          </div>

          {/* Right Column (1/3 width) */}
          <div>
            <Ordersummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
