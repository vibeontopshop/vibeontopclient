import React from 'react'

const Notification = () => {
  return (
    <div>
      <div className="max-w-md mx-auto p-4 bg-white shadow rounded-md">
  {[
    {
      title: "Profile Update",
      description: "You just updated your profile picture",
      time: "Just Now",
    },
    {
      title: "Your order is placed successfully",
      description: "You placed a new order",
      time: "11:16 AM",
    },
    {
      title: "Order Delivered",
      description: "Your order has been delivered successfully",
      time: "11:20 PM",
    },
    {
      title: "You shared your feedback",
      description: '"It was an amazing experience"',
      time: "Yesterday",
    },
    {
      title: "Password update successfully",
      description: "Your password has been updated successfully",
      time: "Yesterday",
    },
  ].map((notification, index) => (
    <div key={index} className="flex items-start space-x-4 py-3 border-b last:border-none">
      <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
        <svg
          className="w-6 h-6 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <div className="flex-1">
        <p className="text-black font-medium">{notification.title}</p>
        <p className="text-gray-500 text-sm">{notification.description}</p>
      </div>
      <p className="text-gray-400 text-sm">{notification.time}</p>
    </div>
  ))}
</div>

    </div>
  )
}

export default Notification
