'use client';
import { useParams, useRouter } from 'next/navigation'; // Import useParams and useRouter
import { useEffect, useState } from 'react';

import Calendar from '@/components/Calendar';
import ConsultingTime from '@/components/ConsultingTime';
import DoctorInfo from '@/components/DoctorInfo';
import TimeSlotSelection from '@/components/TimeSlotSelection';

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

const RescheduleAppointment: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id; // Access the dynamic route parameter using useParams
  const [doctor, setDoctor] = useState<Doctor | null>(null); // Ensure proper typing
  const [loading, setLoading] = useState<boolean>(true); // Add loading state
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
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

  const availableDates = [
    { day: 13, dayOfWeek: 'Mon' },
    { day: 14, dayOfWeek: 'Tue' },
    { day: 16, dayOfWeek: 'Wed' },
    { day: 17, dayOfWeek: 'Thu' },
    { day: 18, dayOfWeek: 'Fri' },
    { day: 19, dayOfWeek: 'Sat' },
  ];

  const availableSlots = ['09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM'];

  // Update the function signature to match what Calendar expects
  const handleDateSelect = (date: string | null) => {
    setSelectedDate(date);
  };

  const handleSlotSelect = (slot: string | null) => {
    setSelectedSlot(slot);
  };

  const handleBookAppointment = () => {
    if (selectedDate && selectedSlot) {
      const successUrl = `/success?doctorName=${encodeURIComponent(doctor?.name ?? '')}&specialty=${encodeURIComponent(doctor?.specialty ?? '')}&date=${encodeURIComponent(selectedDate)}&time=${encodeURIComponent(selectedSlot)}`;

      // Redirect to the success page after booking
      router.push(successUrl);
    }
  };

  return (
    <div className="mx-auto max-w-2xl p-4">
      <div className="mx-auto  rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
        <DoctorInfo doctor={doctor} />
        <ConsultingTime consultingTime="9:00 AM | Oct 23" />
        <Calendar availableDates={availableDates} onDateSelect={handleDateSelect} />
        <TimeSlotSelection slots={availableSlots} onSlotSelect={handleSlotSelect} />
        <button
          type="button"
          onClick={handleBookAppointment}
          className="mt-6 w-full rounded-lg bg-blue-500 py-3 text-center font-semibold text-white hover:bg-blue-600"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default RescheduleAppointment;
