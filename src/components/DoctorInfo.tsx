import React from 'react';

// Define the Doctor type
type Doctor = {
  image: string; // URL for the doctor's image
  name: string; // Doctor's name
  specialty: string; // Doctor's specialty
  qualifications: string; // Doctor's qualifications
};

// Define the props type for the DoctorInfo component
type DoctorInfoProps = {
  doctor: Doctor;
};

const DoctorInfo: React.FC<DoctorInfoProps> = ({ doctor }) => {
  return (
    <div className="mt-4 flex items-center rounded-lg border border-gray-300 p-4">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="size-16 rounded-lg object-cover"
      />
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
        <p className="text-sm text-gray-600">{doctor.specialty}</p>
        <p className="text-sm text-gray-500">{doctor.qualifications}</p>
      </div>
    </div>
  );
};

export default DoctorInfo;
