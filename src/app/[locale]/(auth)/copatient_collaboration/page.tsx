'use client';

import Image from 'next/image';

const CoPatientCollaboration = () => {
  const handleJoin = () => {
    // Logic for joining co-patient collaboration
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
        <h1 className="text-lg font-semibold">Co-Patient Collaboration</h1>
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

      {/* Collaboration Message */}
      <p className="mb-6 text-sm text-gray-700">
        Would you like to connect with other new mothers who also visit Dr. Kumar?
      </p>

      {/* Join Button */}
      <button
        type="button"
        onClick={handleJoin}
        className="w-full rounded-md border-2 border-blue-500 py-3 text-blue-500 hover:bg-blue-50"
      >
        Yes Join Me
      </button>
    </div>
  );
};

export default CoPatientCollaboration;
