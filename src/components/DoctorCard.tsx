import React from 'react';

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  availability: string;
  time: string;
  practiceDetails: string;
  image: string;
};

const DoctorCard: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="my-4 flex flex-col items-start rounded-lg border border-gray-300 bg-white p-4 shadow-lg sm:flex-row">
      {/* Doctor Image */}
      <img
        src={doctor.image}
        alt={doctor.name}
        className="mb-4 w-full rounded-lg object-cover sm:mb-0 sm:mr-4 sm:size-32"
      />

      {/* Doctor Details */}
      <div className="flex-1">
        <h3 className="truncate text-lg font-semibold text-gray-900">{doctor.name}</h3>
        <p className="truncate text-sm text-gray-600">{doctor.specialty}</p>

        {/* Availability Badge */}
        <div className="mt-2">
          <p
            className={`inline-block rounded-lg px-2 py-1 text-sm font-semibold ${
              doctor.availability === 'Available today'
                ? 'bg-green-200 text-green-800'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {doctor.availability}
          </p>
        </div>

        {/* Practice Details */}
        <p
          className="mt-2 max-h-24 overflow-hidden text-ellipsis text-sm text-gray-500"
          title={doctor.practiceDetails}
        >
          {doctor.practiceDetails}
        </p>

        {/* Time Details */}
        <p className="mt-1 inline-block rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
          {doctor.time}
        </p>
      </div>

      {/* Favorite Icon */}
      <button type="button" className="ml-auto text-gray-500 hover:text-red-500 focus:outline-none">
        ❤
      </button>
    </div>
  );
};

export default DoctorCard;
