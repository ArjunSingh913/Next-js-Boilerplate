'use client';
import React, { useState } from 'react';

const CustomSignUpForm = () => {
  const [isDoctor, setIsDoctor] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [error] = useState(null);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg">
        {/* Left Side - Image or Information */}
        <div className="flex w-1/2 items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-10 text-white">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold">Join Our Platform</h2>
            <p className="text-lg">Manage your healthcare with ease. Sign up today!</p>
          </div>
        </div>

        {/* Right Side - Sign-Up Form */}
        <div className="flex w-1/2 flex-col justify-center p-10">
          <h2 className="mb-6 text-center text-2xl font-semibold text-gray-700">
            {isDoctor ? 'Doctor Sign-Up' : 'User Sign-Up'}
          </h2>

          {/* Toggle for User or Doctor Sign-Up */}
          <div className="mb-6 flex justify-center">
            <button
              type="button"
              onClick={() => setIsDoctor(false)}
              className={`border px-4 py-2 ${!isDoctor ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} rounded-l-md border-blue-600 transition duration-200 ease-in-out`}
            >
              User Sign-Up
            </button>
            <button
              type="button"
              onClick={() => setIsDoctor(true)}
              className={`border px-4 py-2 ${isDoctor ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} rounded-r-md border-blue-600 transition duration-200 ease-in-out`}
            >
              Doctor Sign-Up
            </button>
          </div>

          {/* Sign-Up Form */}
          <form onSubmit={handleSignUp}>
            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="mb-1 block font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="mb-1 block font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone Number Input */}
            <div className="mb-4">
              <label htmlFor="phonenumber" className="mb-1 block font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="mb-1 block font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Additional Fields for Doctor Sign-Up */}
            {isDoctor && (
              <>
                <div className="mb-4">
                  <label htmlFor="clinic_name" className="mb-1 block font-medium text-gray-700">Clinic Name</label>
                  <input
                    type="text"
                    value={clinicName}
                    onChange={e => setClinicName(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your clinic name"
                    required={isDoctor}
                  />
                </div>

                {/* Specialization Select Dropdown */}
                <div className="mb-4">
                  <label htmlFor="specialization" className="mb-1 block font-medium text-gray-700">Specialization</label>
                  <select
                    value={specialization}
                    onChange={e => setSpecialization(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required={isDoctor}
                  >
                    <option value="">Select Specialization</option>
                    <option value="Cardiologist">Cardiologist</option>
                    <option value="Dermatologist">Dermatologist</option>
                    <option value="Orthopedic">Orthopedic</option>
                    <option value="Pediatrician">Pediatrician</option>
                    <option value="Gynecologist">Gynecologist</option>
                    <option value="Dentist">Dentist</option>
                    <option value="General Physician">General Physician</option>
                    {/* Add more options as needed */}
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="license_number" className="mb-1 block font-medium text-gray-700">License Number</label>
                  <input
                    type="text"
                    value={licenseNumber}
                    onChange={e => setLicenseNumber(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your license number"
                    required={isDoctor}
                  />
                </div>
              </>
            )}

            {/* Error Message */}
            {error && <p className="mb-4 text-red-500">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 text-white transition duration-200 ease-in-out hover:bg-blue-700"
            >
              {isDoctor ? 'Sign Up as Doctor' : 'Sign Up'}
            </button>
          </form>

          {/* Optional Terms or Sign-In Link */}
          <p className="mt-4 text-center text-gray-600">
            Already have an account?
            {' '}
            <a href="/sign-in" className="text-blue-600">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomSignUpForm;
