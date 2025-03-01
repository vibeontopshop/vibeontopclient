import like from '../../assets/like.svg'
import call from '../../assets/call.svg'
import Boost from '../../assets/Boost.svg'
import payment from '../../assets/payment.svg'
export const serviceFeatures = [
    {
      id: 1,
      title: "100% Satisfaction Guaranteed",
      description: "Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis.",
      imageUrl: {like},
      layout: "vertical"
    },
    {
      id: 2,
      title: "24/7 Online Service",
      description: "Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis.",
      imageUrl: {call},
      layout: "horizontal"
    },
    {
      id: 3,
      title: "Fast Delivery",
      description: "Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis.",
      imageUrl: {Boost},
      layout: "horizontal"
    },
    {
      id: 4,
      title: "Payment With Secure System",
      description: "Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis.",
      imageUrl: {payment},
      layout: "vertical"
    }
  ];