"use client";

export default function Aboutus() {
  return (
    <div className="min-h-screen w-full bg-[#f8f4ec] text-[#3e3a35] font-serif px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center tracking-wide border-b-2 border-[#d3bfa5] pb-2">
          About Us
        </h1>
        <span className="block text-xl md:text-2xl font-medium text-[#5a4d3c] mb-4">
          Welcome to VibeOnTop — Where Fashion Meets Functionality.
        </span>
        <p className="text-base md:text-lg leading-relaxed mb-6">
          At VibeOnTop, we&rsquo;re more than just an eCommerce platform — we&rsquo;re a modern clothing
          manufacturer driven by creativity, quality, and a deep understanding of both business
          and consumer needs. Whether you&apos;re a retail customer looking for trend-setting styles
          or a business owner sourcing premium garments in bulk, we&rsquo;ve got you covered.
          <br />
          <br />
          We specialize in manufacturing high-quality clothing that reflects current trends
          while maintaining timeless appeal. Our platform seamlessly bridges the gap between
          wholesale (B2B) and direct-to-consumer (B2C) models, offering flexible solutions
          tailored to individuals and enterprises alike.
        </p>

        <span className="block text-lg md:text-xl font-semibold text-[#4c4032] mb-2">
          What Sets Us Apart:
        </span>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-base md:text-lg">
          <li>
            <span className="font-medium">In-House Manufacturing:</span> Control over the
            entire production process ensures unmatched quality and reliability.
          </li>
          <li>
            <span className="font-medium">Dual Role Platform:</span> Designed for both
            end-customers and wholesale buyers — VibeOnTop adapts to your role and needs.
          </li>
          <li>
            <span className="font-medium">Scalable Solutions:</span> From single-piece orders
            to large-volume wholesale deals, we deliver with precision and speed.
          </li>
          <li>
            <span className="font-medium">Trend-Driven Designs:</span> We stay ahead of the
            curve so you can, too.
          </li>
        </ul>

        <p className="text-base md:text-lg leading-relaxed italic">
          At VibeOnTop, we believe in empowering businesses and individuals to express their
          style and scale with confidence. Whether you&apos;re shopping for yourself or stocking up
          for your brand — you&rsquo;re on top with VibeOnTop.
        </p>
      </div>
    </div>
  );
}
