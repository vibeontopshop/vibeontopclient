"use-client"
import Image from 'next/image';
import Link from 'next/link';
import BgImage from '../../assets/forgotpass.png'
import Logo from '../../assets/logo.png'
export default function SignUp() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row bg-gray-800 text-gray-800">
      {/* Left Section - Image and Logo */}
      <div className="lg:w-1/2 relative flex flex-col justify-center items-center bg-gray-100">
        {/* Logo */}
        <div className="absolute top-4 left-4 z-10 flex items-center px-3 py-2 rounded-md">
          <Image
            src={Logo} // Replace with your logo path
            alt="Vibe Logo"
            width={200}
            height={200}
          />
          {/* <span className="ml-2 text-lg font-bold text-gray-900">Vibe</span> */}
        </div>


        {/* Main Image */}
        <Image
          src={BgImage} // Replace with your image path
          alt="Sign Up Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>

      {/* Right Section - Sign Up Form */}

      <div className="lg:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
      
        <div className="w-full max-w-md">
        <p className='mb-5'><Link
          href="/"
          className=" text-gray-600 text-sm font-semibold hover:underline"
        >
          &lt; Back
        </Link></p>
          <h1 className="text-4xl font-bold text-gray-900">Forgot Password</h1>
          <p className="mt-3 text-sm text-gray-800">Enter Your registered email address. we'll send you a code to reset your password</p>

          <form className="mt-6 space-y-4">
            {/* First Name */}
            {/* <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your first name"
              />
            </div> */}

            {/* Last Name */}
            {/* <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your last name"
              />
            </div> */}

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            {/* <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div> */}

            {/* Terms and Conditions */}
            {/* <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the{' '}
                <Link href="/terms" className="text-blue-600 hover:underline">
                  Terms & Conditions
                </Link>
              </label>
            </div> */}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 text-white bg-black rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}