'use client';
import React, { useState } from 'react';

import Calendar from '../../../../components/Calendar';
import ConsultingTime from '../../../../components/ConsultingTime';
import DoctorInfo from '../../../../components/DoctorInfo';
import TimeSlotSelection from '../../../../components/TimeSlotSelection';

type Doctor = {
  name: string;
  specialty: string;
  qualifications: string;
  image: string;
};

const RescheduleAppointment: React.FC = () => {
  const doctor: Doctor = {
    name: 'Dr. Kumar Das',
    specialty: 'Cardiologist - Dombivli',
    qualifications: 'MBBS, MD (Internal Medicine)',
    image: 'https://th.bing.com/th/id/OIP.mqoSU0uKgU6Y_fV7JFa8PwHaHa?rs=1&pid=ImgDetMain',
  };

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

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
      // Perform booking logic here
    }
  };

  return (
    <div className="mx-auto max-w-md p-4">
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
  );
};

export default RescheduleAppointment;
