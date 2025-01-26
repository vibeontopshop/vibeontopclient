import React from 'react';
import ServiceCard from './ServiceCard';
import ServiceRow from './ServiceRow';

export default function ServicesSection() {
  return (
    <div className="flex flex-wrap gap-8">
      <ServiceCard
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/2339b57f972d5926fa4e788383d48bb0949cfbd985a393913423eb4a25b4d9d9?placeholderIfAbsent=true&apiKey=bee90f4503074c6fb2a2afcb7f5d52b9"
        title="100% Satisfaction Guaranteed"
        description="Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis."
        centered={true}
      />
      
      <div className="flex flex-col self-start min-w-[240px] w-[630px] max-md:max-w-full">
        <ServiceRow
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/37c263dd9d22d873da80f703711d9ec6f0f9ff6b6c00db43cc375910f706943c?placeholderIfAbsent=true&apiKey=bee90f4503074c6fb2a2afcb7f5d52b9"
          title="24/7 Online Service"
          description="Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis."
        />
        
        <div className="mt-8">
          <ServiceRow
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/5c6f9689d11b3d871d36900438d8a8c0d8bed40c795750a232a6e56b977ae0a1?placeholderIfAbsent=true&apiKey=bee90f4503074c6fb2a2afcb7f5d52b9"
            title="Fast Delivery"
            description="Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis."
          />
        </div>
      </div>

      <ServiceCard
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/1a2be8e7f158756730b9e97994fbc6bfe7f70c798b37b98eaec5d930759376c3?placeholderIfAbsent=true&apiKey=bee90f4503074c6fb2a2afcb7f5d52b9"
        title="Payment With Secure System"
        description="Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis."
        centered={true}
      />
    </div>
  );
}