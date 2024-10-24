'use client'; // Ensure this is a client component

import { useParams } from 'next/navigation'; // Import useParams and useRouter
import { useEffect, useState } from 'react';

import AppointmentStatus from '@/components/AppointmentStatus';
import DoctorInfo from '@/components/DoctorInfo';
import LiveTracking from '@/components/LiveTracking';
import PatientDetails from '@/components/PatientDetails';
import PaymentSection from '@/components/PaymentSection';

// Define the type for Doctor data
type Doctor = {
  name: string;
  specialty: string;
  image: string;
  experience: string;
  location: string;
  description: string;
  qualifications: string;
};

// Sample doctor data for demonstration - replace with actual data fetching logic
const sampleDoctorData: Record<string, Doctor> = {
  1: {
    name: 'Dr. Prakash Das',
    specialty: 'Sr. Psychologist',
    image: 'https://thumbs.dreamstime.com/b/happy-healthcare-portrait-doctor-hospital-proud-empowered-confident-face-leader-male-health-expert-happy-270112047.jpg',
    experience: '7+ years',
    location: 'New York',
    description: 'As Psychologist, Dr. Das practices about 7+ years...',
    qualifications: 'MBBS, MD (Internal Medicine)',
  },
  2: {
    name: 'Dr. John Doe',
    specialty: 'Cardiologist',
    image: 'https://wallpapers.com/images/hd/doctor-pictures-l5y1qs2998u7rf0x.jpg',
    experience: '10 years',
    location: 'Los Angeles',
    description: 'Practicing cardiology for over 10 years...',
    qualifications: 'MBBS, MD (Internal Medicine)',
  },
};

const patient = {
  name: 'Sudharkar Murti',
  age: 28,
  weight: 28,
  problem: 'Stomach pain, feeling unwell...',
};

const trackingInfo = {
  current: 15,
  time: '8:20 PM',
};

const appointmentStatus = 'Waiting';

const AppointmentDetails: React.FC = () => {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id; // Access the dynamic route parameter using useParams
  const [doctor, setDoctor] = useState<Doctor | null>(null); // Ensure proper typing
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

  // Check if the doctor data is loaded before rendering
  if (loading) {
    return <p className="text-center text-gray-600">Loading doctor details...</p>; // Improved loading state
  }

  if (!doctor) {
    return <p className="text-center text-red-600">Doctor not found.</p>; // Handle doctor not found
  }

  return (
    <div className="flex min-h-screen justify-center p-4">
      <div className="mx-auto max-w-2xl rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
        {/* Header */}

        {/* Doctor Info */}
        <DoctorInfo doctor={doctor} />

        {/* Appointment Status */}
        <AppointmentStatus status={appointmentStatus} />

        {/* Patient Details */}
        <PatientDetails patient={patient} />

        {/* Live Tracking */}
        <LiveTracking trackingInfo={trackingInfo} id={id ?? ''} />

        {/* Payment Section */}
        <PaymentSection />
      </div>
    </div>
  );
};

export default AppointmentDetails;
