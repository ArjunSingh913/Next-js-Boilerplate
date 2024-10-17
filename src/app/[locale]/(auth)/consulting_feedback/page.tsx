'use client';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import ConsultingTime from '../../../../components/ConsultingTime';
import DoctorDetails from '../../../../components/DoctorInfo';
import StarRating from '../../../../components/StarRating';

const ConsultingFeedback = () => {
  const doctor = {
    name: 'Dr. Kumar Das',
    specialty: 'Cardiologist - Dombivli',
    qualifications: 'MBBS, MD (Internal Medicine)',
    image: 'https://thumbs.dreamstime.com/b/happy-healthcare-portrait-doctor-hospital-proud-empowered-confident-face-leader-male-health-expert-happy-270112047.jpg',
  };

  const { control, handleSubmit, register } = useForm();

  // Submit function
  const onSubmit = () => {

  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-sm rounded-lg bg-white p-4 shadow-md sm:max-w-md md:max-w-lg lg:max-w-xl"
    >
      {/* Header */}
      <div className="mb-4 flex items-center">
        <button type="button" className="mr-2 text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-lg font-semibold">Consulting Feedback</h1>
      </div>

      {/* Doctor Details Component */}
      <DoctorDetails doctor={doctor} />

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
