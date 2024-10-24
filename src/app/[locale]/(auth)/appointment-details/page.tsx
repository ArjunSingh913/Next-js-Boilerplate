'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import AppointmentStatus from '@/components/AppointmentStatus';
import DoctorInfo from '@/components/DoctorInfo';
import LiveTracking from '@/components/LiveTracking';
import PatientDetails from '@/components/PatientDetails';
import PaymentSection from '@/components/PaymentSection';

type Doctor = {
  name: string;
  specialty: string;
  image: string;
  experience: string;
  location: string;
  description: string;
  qualifications: string;
};

const sampleDoctorData: Record<string, Doctor> = {
  1: {
    name: 'Dr. Prakash Das',
    specialty: 'Sr. Psychologist',
    image: 'https://thumbs.dreamstime.com/b/happy-healthcare-portrait-doctor-hospital-proud-empowered-confident-face-leader-male-health-expert-happy-270112047.jpg',
    experience: '7+ years',
    location: 'New York',
    description: 'As Psychologist, Dr. Das practices about 7+ years...',
    qualifications: 'MBBS',
  },
  2: {
    name: 'Dr. John Doe',
    specialty: 'Cardiologist',
    image: 'https://wallpapers.com/images/hd/doctor-pictures-l5y1qs2998u7rf0x.jpg',
    experience: '10 years',
    location: 'Los Angeles',
    description: 'Practicing cardiology for over 10 years...',
    qualifications: 'MBBS',
  },
};
const AppointmentDetails = () => {
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
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
  if (loading) {
    return <p className="text-center text-gray-600">Loading doctor details...</p>; // Improved loading state
  }

  if (!doctor) {
    return <p className="text-center text-red-600">Doctor not found.</p>; // Handle doctor not found
  }
  const appointmentStatus = 'Waiting';

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between">
          <button type="button" className="text-gray-600">←</button>
          <h2 className="text-lg font-semibold text-gray-800">Appointment Details</h2>
        </div>

        {/* Doctor Info */}
        <DoctorInfo doctor={doctor} />

        {/* Appointment Status */}
        <AppointmentStatus status={appointmentStatus} />

        {/* Patient Details */}
        <PatientDetails patient={patient} />

        {/* Live Tracking */}
        <LiveTracking trackingInfo={trackingInfo} id={id || ''} />

        {/* Payment Section */}
        <PaymentSection />
      </div>
    </div>
  );
};

export default AppointmentDetails;
