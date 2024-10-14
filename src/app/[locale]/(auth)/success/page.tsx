'use client'; // Ensure this is a client component
import { useSearchParams } from 'next/navigation';

const SuccessPage = () => {
  const searchParams = useSearchParams(); // Access search params
  const doctorName = searchParams?.get('doctorName') || 'Doctor'; // Fallback if not found
  const specialty = searchParams?.get('specialty') || 'Specialty';
  const date = searchParams?.get('date') || 'Date';
  const time = searchParams?.get('time') || 'Time';

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-4 text-center text-3xl font-bold text-green-600">Appointment Confirmed!</h1>
        <p className="mb-6 text-center text-xl text-gray-700">You have successfully booked an appointment.</p>

        <div className="mt-6">
          <h2 className="mb-2 text-center text-2xl font-semibold text-blue-600">Doctor Details:</h2>
          <div className="rounded-lg bg-gray-50 p-4 shadow">
            <p className="text-gray-800">
              <strong>Name:</strong>
              {' '}
              {doctorName}
            </p>
            <p className="text-gray-800">
              <strong>Specialty:</strong>
              {' '}
              {specialty}
            </p>
            <p className="text-gray-800">
              <strong>Date:</strong>
              {' '}
              {date}
            </p>
            <p className="text-gray-800">
              <strong>Time:</strong>
              {' '}
              {time}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="button"
            className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white shadow-md transition duration-300 hover:bg-blue-700"
            onClick={() => window.location.href = '/'}
          >
            Go Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
