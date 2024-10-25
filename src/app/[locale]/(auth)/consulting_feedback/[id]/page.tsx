'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import ConsultingTime from '@/components/ConsultingTime';
import DoctorInfo from '@/components/DoctorInfo';
import StarRating from '@/components/StarRating';

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
    name: 'Dr. Abhay Das',
    specialty: 'Sr. Psychologist',
    image: 'https://th.bing.com/th/id/OIP.YGkuNO_pXJ6XSIeN9Ckb-QHaGN?rs=1&pid=ImgDetMain',
    experience: '7+ years',
    location: 'New York',
    description: 'As Psychologist, Dr. Das practices about 7+ years...',
    qualifications: 'MBBS',
  },
  2: {
    name: 'Dr. Nitin Kumar',
    specialty: 'Cardiologist',
    image: 'https://th.bing.com/th/id/OIP.EUlE__yXCoyX0QkzKBTs8gHaFh?w=980&h=731&rs=1&pid=ImgDetMain',
    experience: '10 years',
    location: 'Los Angeles',
    description: 'Practicing cardiology for over 10 years...',
    qualifications: 'MBBS',
  },
};
const ConsultingFeedback = () => {
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const { control, handleSubmit, register } = useForm();

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
  // Submit function
  const onSubmit = () => {

  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-sm rounded-lg bg-white p-4 shadow-md sm:max-w-md md:max-w-lg lg:max-w-xl"
    >
      {/* Doctor Details Component */}
      <DoctorInfo doctor={doctor} />

      {/* Consulting Time Component */}
      <ConsultingTime consultingTime="9:00 AM | Oct 23" />

      {/* Feedback Sections */}
      <div className="my-4">
        <p className="mb-2 text-sm font-medium">Consulting Feedback</p>
        <Controller
          name="consultingFeedback"
          control={control}
          defaultValue={0}
          render={({ field: { onChange, value } }) => (
            <StarRating rating={value} onRatingChange={onChange} />
          )}
        />
      </div>

      <div className="mb-4">
        <p className="mb-2 text-sm font-medium">Hospital/Clinic Feedback</p>
        <Controller
          name="hospitalFeedback"
          control={control}
          defaultValue={0}
          render={({ field: { onChange, value } }) => (
            <StarRating rating={value} onRatingChange={onChange} />
          )}
        />
      </div>

      <div className="mb-4">
        <p className="mb-2 text-sm font-medium">Waiting Time</p>
        <Controller
          name="waitingTimeFeedback"
          control={control}
          defaultValue={0}
          render={({ field: { onChange, value } }) => (
            <StarRating rating={value} onRatingChange={onChange} />
          )}
        />
      </div>

      <div className="mb-6">
        <p className="mb-2 text-sm font-medium">Would you recommend Dr. Kumar Das to your friends?</p>
        <div className="flex items-center">
          <label className="mr-4">
            <input
              type="radio"
              value="yes"
              {...register('recommendation')}
              className="mr-1"
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="no"
              {...register('recommendation')}
              className="mr-1"
            />
            No
          </label>
        </div>
      </div>

      <button type="submit" className="w-full rounded-lg bg-blue-500 py-2 text-white">
        Submit
      </button>
    </form>
  );
};

export default ConsultingFeedback;
