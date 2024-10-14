// pages/doctors.js
import React from 'react';

const doctors = [
  {
    id: 1,
    name: 'Dr. John Doe',
    specialty: 'Cardiologist',
    contact: 'johndoe@example.com',
    image: 'https://via.placeholder.com/150x150?text=Dr.+John', // Placeholder image
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    specialty: 'Dermatologist',
    contact: 'janesmith@example.com',
    image: 'https://via.placeholder.com/150x150?text=Dr.+Jane', // Placeholder image
  },
  {
    id: 3,
    name: 'Dr. Emily Brown',
    specialty: 'Pediatrician',
    contact: 'emilybrown@example.com',
    image: 'https://via.placeholder.com/150x150?text=Dr.+Emily', // Placeholder image
  },
];

const Doctors = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="mb-12 text-center text-5xl font-extrabold text-gray-800">
          Our Doctors
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map(doctor => (
            <div
              key={doctor.id}
              className="rounded-xl bg-white p-6 shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="mx-auto mb-6 size-24 rounded-full border-4 border-blue-200"
              />
              <h2 className="mb-2 text-center text-2xl font-bold text-gray-900">
                {doctor.name}
              </h2>
              <p className="mb-4 text-center text-gray-600">{doctor.specialty}</p>
              <p className="text-center font-medium text-blue-500">{doctor.contact}</p>
              <div className="mt-6 flex justify-center">
                <button className="rounded-full bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600">
                  Contact Doctor
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
