import React from 'react';

import AppointmentStatus from '../../../../components/AppointmentStatus';
import DoctorInfo from '../../../../components/DoctorInfo';
import LiveTracking from '../../../../components/LiveTracking';
import PatientDetails from '../../../../components/PatientDetails';
import PaymentSection from '../../../../components/PaymentSection';

const AppointmentDetails = () => {
  // Sample data (this would come from API in real cases)
  const doctor = {
    name: 'Dr. Kumar Das',
    specialty: 'Cardiologist - Dombivli',
    qualifications: 'MBBS, MD (Internal Medicine)',
    image: 'https://thumbs.dreamstime.com/b/happy-healthcare-portrait-doctor-hospital-proud-empowered-confident-face-leader-male-health-expert-happy-270112047.jpg', // Replace with actual image
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
        <LiveTracking trackingInfo={trackingInfo} />

        {/* Payment Section */}
        <PaymentSection />
      </div>
    </div>
  );
};

export default AppointmentDetails;
