'use client';

import Image from 'next/image';
import { useState } from 'react';

const SeamlessAppointment = () => {
  const [mobile, setMobile] = useState('');
  const [appointmentCode, setAppointmentCode] = useState('');

  const handleProceed = () => {
    // Logic to handle appointment confirmation
  };

  return (
    <div className="mx-auto min-h-screen max-w-md rounded-lg bg-white p-4 shadow-md">
      {/* Header */}
      <div className="mb-6 flex items-center">
        <button type="button" className="mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-lg font-semibold">Seamless Appointment</h1>
      </div>

      {/* Doctor Info */}
      <div className="mb-6 flex items-center rounded-lg bg-gray-50 p-4 shadow">
        <Image
          src="/path-to-doctor-image.jpg" // Replace with actual image path
          alt="Doctor Image"
          width={60}
          height={60}
          className="rounded-full"
        />
        <div className="ml-4">
          <h2 className="text-base font-semibold">Dr. Kumar Das</h2>
          <p className="text-sm text-gray-600">Cardiologist - Dombivli</p>
          <p className="text-sm text-gray-600">MBBS, MD (Internal Medicine)</p>
        </div>
      </div>

      {/* Appointment Details */}
      <p className="mb-4 text-sm text-gray-700">
        You have a planned appointment with Dr. Lavangi through IVR. Please choose date & time and make payment to confirm your appointment.
      </p>

      {/* Mobile Input */}
      <div className="mb-4">
        <label htmlFor="mobile" className="mb-1 block text-sm text-gray-600">Mobile</label>
        <input
          type="text"
          value={mobile}
          onChange={e => setMobile(e.target.value)}
          placeholder="Enter your mobile number"
          className="w-full rounded-md border p-2"
        />
      </div>

      {/* Appointment Code Input */}
      <div className="mb-6">
        <label htmlFor="appointment_number" className="mb-1 block text-sm text-gray-600">Appointment Code</label>
        <input
          type="text"
          value={appointmentCode}
          onChange={e => setAppointmentCode(e.target.value)}
          placeholder="Enter appointment code"
          className="w-full rounded-md border p-2"
        />
      </div>

      {/* Proceed Button */}
      <button
        type="button"
        onClick={handleProceed}
        className="w-full rounded-md bg-blue-500 py-3 text-white hover:bg-blue-600"
      >
        Proceed
      </button>
    </div>
  );
};

export default SeamlessAppointment;
