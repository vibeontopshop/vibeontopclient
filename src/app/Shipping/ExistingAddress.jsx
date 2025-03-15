'use client';
import React, { useEffect, useState } from 'react';

export default function ExistingAddress({onDeliverHere}) {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [token, setToken] = useState(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('token');
      setToken(storedToken);
    }
  }, []);
  useEffect(() => {
    if (!token) return;

    const fetchAddresses = async () => {
      try {
        const res = await fetch('https://vibeontopbackend.onrender.com/api/Shipping/Getaddress', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || 'Failed to fetch addresses');
        }

        const data = await res.json();
        setAddresses(data.addresses || []);
      } catch (error) {
        console.error('Error fetching addresses:', error.message);
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAddresses();
  }, [token]);

  const handleRadioChange = (addressId) => {
    setSelectedAddressId(addressId);
  };

  const handleDeliverHere = () => {
    if (!selectedAddressId) {
      alert('Please select an address first!');
      return;
    }

    const selectedAddress = addresses.find(addr => addr._id === selectedAddressId);

    if (selectedAddress) {
      localStorage.setItem('selectedAddress', JSON.stringify(selectedAddress));

      alert(`Delivering to: ${selectedAddress.streetAddress}, ${selectedAddress.city}`);

      if (onDeliverHere) {
        onDeliverHere();
      }
    }
  };

  const handleEdit = (addressId) => {
    console.log('Edit address:', addressId);
    alert('Edit functionality coming soon!');
  };

  if (loading) return <p>Loading addresses...</p>;
  if (addresses.length === 0) return <p>No saved addresses found.</p>;

  return (
    <div className="flex flex-col space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {addresses.map((address) => (
          <div
            key={address._id}
            className={`border rounded-md p-4 transition-all duration-200 ${
              selectedAddressId === address._id
                ? 'border-yellow-600 shadow-md'
                : 'border-gray-300'
            }`}
          >
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="radio"
                name="selectedAddress"
                checked={selectedAddressId === address._id}
                onChange={() => handleRadioChange(address._id)}
                className="mt-1 accent-yellow-600"
              />
              <div>
                <p className="font-bold">{address.name}</p>
                <p className="text-sm text-gray-600">{address.streetAddress}</p>
                <p className="text-sm text-gray-600">{address.Landmark}</p>
                <p className="text-sm text-gray-600">
                  {address.city}, {address.state} - {address.pincode}
                </p>
                <p className="text-sm text-gray-600 mb-2">Phone: {address.phone}</p>
              </div>
            </label>

            <div className="flex justify-between mt-3">
              <button
                onClick={() => handleEdit(address._id)}
                className="text-yellow-600 text-sm hover:underline"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleDeliverHere}
        disabled={!selectedAddressId}
        className={`mt-6 w-max py-3 px-6 rounded text-white font-medium ${
          selectedAddressId
            ? 'bg-yellow-600 hover:bg-yellow-700'
            : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        Deliver Here
      </button>
    </div>
  );
}
