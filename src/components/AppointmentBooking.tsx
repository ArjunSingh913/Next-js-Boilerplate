'use client';
import { useRouter } from 'next/navigation';

const AppointmentBooking = () => {
  const router = useRouter();

  const handleBookAppointment = () => {
    // Navigate to the doctor-listing page
    router.push('/doctor-listing');
  };
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">
          Book an appointment for an in-clinic consultation
        </h2>
        <p className="mb-6 text-lg text-gray-600">
          Find experienced doctors across all specialties.
        </p>
        <button onClick={handleBookAppointment} type="button" className="rounded-lg bg-blue-600 px-6 py-2 text-white shadow-md hover:bg-blue-700">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default AppointmentBooking;
