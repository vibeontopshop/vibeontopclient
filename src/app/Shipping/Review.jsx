'use client'; // Only if you're using App Router in Next.js 13+

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Review = () => {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [address, setAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    const storedAddress = JSON.parse(localStorage.getItem('selectedAddress'));
    const storedPaymentMethod = localStorage.getItem('paymentMethod');
    const storedUpiId = localStorage.getItem('upiId');
    const storedToken = localStorage.getItem('token');


    setProduct(storedProduct);
    setAddress(storedAddress);
    setPaymentMethod(storedPaymentMethod);
    setUpiId(storedUpiId);
    setToken(storedToken);
  }, []);

  const handleConfirm = async () => {
    if (!token) {
      alert('User is not authenticated. Please log in again.');
      router.push('/signin');
      return;
    }

    if (!product || !address) {
      alert('Missing product or address details.');
      return;
    }

    console.log('🟢 Product ID:', product.productId);
    try {
      const orderPayload = {
        orderItems: [
          {
            productId: product.productId,
            productName: product.name,
            quantity: product.quantity,
            color: product.color,
            price: product.price,
          },
        ],
        shippingAddress: {
          name: address.name || "Default Name",
          phone: address.phone || "0000000000",
          streetAddress: address.streetAddress,
          Landmark: address.Landmark || "N/A",
          city: address.city,
          state: address.state || "N/A",
          pincode: address.pincode || "000000",
          country: address.country || "India",
        },
        paymentMethod:paymentMethod, 
        totalAmount: product.price * product.quantity,
        ...(paymentMethod === 'UPI' && upiId ? { upiId } : {}),
      };

      console.log('Order Payload:', orderPayload);
      const response = await fetch('https://vibeontopbackend.onrender.com/api/Orders/createOrders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(orderPayload),
      });

      if (!response.ok) {
        const data = await response.json();
        console.error('Order failed:', data);
        alert(`Order failed: ${data.message}`);
        return;
      }

      const result = await response.json();
      console.log('Order success:', result);

      alert('Order Confirmed!');
      router.push('/Checkout');
    } catch (error) {
      console.error('Error confirming order:', error);
      alert('Something went wrong while confirming your order.');
    }
  };

  if (!product || !address) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading your order details...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Review Your Order</h2>

      <div className="text-center mt-8 bg-yellow-50 rounded-lg p-6 border border-yellow-200">
        <p className="text-lg font-medium text-gray-800 mb-4">
          You are ordering <span className="font-bold">{product.quantity}</span> item(s) of
          <span className="font-bold"> {product.name}</span> in
          <span className="font-bold"> {product.color}</span> color.
        </p>
        <p className="text-lg font-medium text-gray-800 mb-6">
          It will be delivered to <span className="font-bold">{address.streetAddress}, {address.city}</span>.
        </p>

        <button
          onClick={handleConfirm}
          className="bg-yellow-600 hover:bg-black text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
        >
          Confirm & Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Review;
