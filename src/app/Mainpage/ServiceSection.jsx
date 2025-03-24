import React from 'react';
import ServiceCard from './ServiceCard';
import ServiceRow from './ServiceRow';
import Like from '../../assets/Like.png';
import call from '../../assets/call.png';
import Boost from '../../assets/Boost.png';
import Payment from '../../assets/Payment.png';

export default function ServicesSection() {
  return (
    <div className="flex flex-wrap gap-8">
      <ServiceCard
        icon={Like}
        title="100% Satisfaction Guaranteed"
        description="At VOT, your happiness is our priority. We guarantee complete satisfaction on every purchase or your money back!"
        centered={true}
      />

      <div className="flex flex-col self-start min-w-[240px] w-[630px] max-md:max-w-full">
        <ServiceRow
          icon={call}
          title="24/7 Online Service"
          description="Our VOT support team is available 24/7 to help you with your shopping experience. Reach out anytime, from anywhere!"
        />

        <div className="mt-8">
          <ServiceRow
            icon={Boost}
            title="Fast Delivery"
            description="We know speed matters. VOT ensures your orders are processed quickly and delivered right to your doorstep without delay."
          />
        </div>
      </div>

      <ServiceCard
        icon={Payment}
        title="Payment With Secure System"
        description="Your security is our priority. VOT offers multiple secure payment options so you can shop with peace of mind."
        centered={true}
      />
    </div>
  );
}
