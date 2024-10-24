'use client';
import Image from 'next/image';

const AppointmentCard = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        {/* Back Button */}
        <div className="mb-6 flex items-center">
          <button type="button" className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="ml-3 text-lg font-semibold text-gray-800">Rescheduled by Doctor</h1>
        </div>

        {/* Doctor Info */}
        <div className="mb-6 flex items-center">
          <Image
            src="/doctor-avatar.jpg" // Replace with the correct image path
            alt="Doctor Image"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-900">Dr. Kumar Das</h2>
            <p className="text-sm text-gray-500">Cardiologist - Dombivli</p>
            <p className="text-sm text-gray-500">MBBS, MD (Internal Medicine)</p>
          </div>
        </div>

        {/* Warning Section with Date & Time at the Top */}
        <div className="mb-6 rounded-lg bg-red-100 p-4 text-red-800">
          {/* Date & Time */}
          <div className="mb-4 flex justify-between">
            <h3 className="mb-2 text-sm">Date & Hour</h3>
            <p className="text-sm ">Dec 23, 2024 | 10:00 AM</p>
          </div>

          {/* Cancellation Notice */}
          <p className="text-sm ">
            Your appointment with Dr. Iavangi has been canceled.
          </p>
          <p className="text-sm ">
            If you paid the consultation fee, it will be refunded in 2 days.
            Apologies for the inconvenience caused.
          </p>
        </div>

        {/* Reschedule Button */}
        <button type="button" className="w-full rounded-full bg-blue-500 py-2 font-semibold text-white hover:bg-blue-600">
          Reschedule
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;
