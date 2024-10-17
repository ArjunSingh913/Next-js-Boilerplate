'use client'; // Ensure this is a client component

import { useParams, useRouter } from 'next/navigation'; // Import useParams and useRouter
import { useEffect, useState } from 'react';

// Define the type for Doctor data
type Doctor = {
  name: string;
  specialty: string;
  photo: string;
  experience: string;
  location: string;
  description: string;
};

// Sample doctor data for demonstration - replace with actual data fetching logic
const sampleDoctorData: Record<string, Doctor> = {
  1: {
    name: 'Dr. Alice Johnson',
    specialty: 'Cardiology',
    photo: 'https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg',
    experience: '10 years',
    location: 'New York',
    description: 'Expert in heart diseases and patient care.',
  },
  2: {
    name: 'Dr. Bob Smith',
    specialty: 'Dermatology',
    photo: 'https://th.bing.com/th/id/OIP.lippvmckkmvu4bH1Hu8beQAAAA?w=400&h=400&rs=1&pid=ImgDetMain',
    experience: '8 years',
    location: 'Los Angeles',
    description: 'Specializes in skin conditions and treatments.',
  },
  3: {
    name: 'Dr. Clara Lee',
    specialty: 'Neurology',
    photo: 'https://eventually.com/img/speakers/vincenzo-toscano-ceo.jpg',
    experience: '12 years',
    location: 'Chicago',
    description: 'Focused on neurological disorders and treatments.',
  },
};

const BookAppointment: React.FC = () => {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id; // Access the dynamic route parameter using useParams
  const router = useRouter(); // Access the router for navigation
  const [doctor, setDoctor] = useState<Doctor | null>(null); // Ensure proper typing
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  // Fetch doctor data based on the ID
  useEffect(() => {
    const fetchDoctorData = async () => {
      if (id) {
        const doctorData = sampleDoctorData[id]; // Use the sample data for now
        if (doctorData) {
          setDoctor(doctorData);
        }
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchDoctorData();
  }, [id]);

  const handleSubmit = () => {
    if (!date || !time) {
      return;
    }

    const successUrl = `/success?doctorName=${encodeURIComponent(doctor?.name ?? '')}&specialty=${encodeURIComponent(doctor?.specialty ?? '')}&date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}`;

    router.push(successUrl);
  };

  // Check if the doctor data is loaded before rendering
  if (loading) {
    return <p className="text-center text-gray-600">Loading doctor details...</p>; // Improved loading state
  }

  if (!doctor) {
    return <p className="text-center text-red-600">Doctor not found.</p>; // Handle doctor not found
  }

  return (
    <div className="container mx-auto py-16">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
        Book Appointment with
        {' '}
        {doctor.name}
      </h1>

      <div className="mb-8 flex justify-center">
        <img
          src={doctor.photo}
          alt={doctor.name}
          className="size-32 rounded-full object-cover shadow-lg"
        />
      </div>

      <div className="mb-4 text-center">
        <h2 className="text-2xl font-semibold text-blue-600">{doctor.specialty}</h2>
        <p className="text-gray-600">
          <strong>Experience:</strong>
          {' '}
          {doctor.experience}
        </p>
        <p className="text-gray-600">
          <strong>Location:</strong>
          {' '}
          {doctor.location}
        </p>
        <p className="text-gray-600">{doctor.description}</p>
      </div>

      <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-600">Select Date</label>
          <input
            type="date"
            className="w-full rounded border px-3 py-2"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-600">Select Time</label>
          <input
            type="time"
            className="w-full rounded border px-3 py-2"
            value={time}
            onChange={e => setTime(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white shadow-md hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Confirm Appointment
        </button>
      </div>
    </div>
  );
};

export default BookAppointment;
