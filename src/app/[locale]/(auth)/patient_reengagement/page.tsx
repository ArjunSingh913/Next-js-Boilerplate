'use client';
import Image from 'next/image';
import { type SetStateAction, useState } from 'react';

const PatientReEngagement = () => {
  const [feedback, setFeedback] = useState('');
  const [comment, setComment] = useState('');

  const handleFeedbackChange = (type: SetStateAction<string>) => {
    setFeedback(type);
  };

  return (
    <div className="mx-auto min-h-screen max-w-md rounded-lg bg-white p-4 shadow-md">
      {/* Header */}
      <div className="mb-6 flex items-center">
        <button type="button" className="mr-3">
          {/* Back Button Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-lg font-semibold">Patient Re-engagement</h1>
      </div>

      {/* Doctor Info Card */}
      <div className="mb-6 flex items-center rounded-lg bg-gray-50 p-4 shadow-md">
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

      {/* Feedback Question */}
      <div className="mb-6">
        <p className="text-sm text-gray-700">You had an appointment with Dr. Iavangi for Muthu Kumar yesterday. How are you feeling today?</p>
        <div className="mt-3 flex space-x-3">
          <button
            type="button"
            onClick={() => handleFeedbackChange('Feeling Better')}
            className={`w-36 rounded-full border px-3 py-2 text-center text-sm ${
              feedback === 'Feeling Better' ? 'border-blue-500 bg-blue-100 text-blue-600' : 'border-gray-300 text-gray-700'
            }`}
          >
            Feeling Better
          </button>
          <button
            type="button"
            onClick={() => handleFeedbackChange('No Improvement')}
            className={`w-36 rounded-full border px-3 py-2 text-center text-sm ${
              feedback === 'No Improvement' ? 'border-gray-500 bg-gray-100 text-gray-600' : 'border-gray-300 text-gray-700'
            }`}
          >
            No Improvement
          </button>
        </div>
      </div>

      {/* Comment Section */}
      <div className="mb-6">
        <p className="text-sm text-gray-700">Describe in short</p>
        <textarea
          value={comment}
          onChange={e => setComment(e.target.value)}
          className="mt-2 w-full rounded-lg border p-3 text-sm text-gray-700"
          rows={3}
          placeholder="Type your comment here..."
        >
        </textarea>
      </div>

      {/* Follow-up Message */}
      <p className="text-sm text-gray-500">
        Sorry to know that. We have shared your feedback with the doctor. We’ll let you know once they respond. Alternatively, you may schedule a follow-up consultation.
      </p>
    </div>
  );
};

export default PatientReEngagement;
