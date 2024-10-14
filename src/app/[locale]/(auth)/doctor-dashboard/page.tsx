'use client';

import Image from 'next/image';
import { useState } from 'react';

const appointments = [
  {
    id: 1,
    patientName: 'John Doe',
    time: '10:00 AM',
    date: '2024-10-12',
    issue: 'Fever and Cough',
    contact: '+1234567890',
    photo: 'https://cdn.dribbble.com/users/1902890/screenshots/18344642/mains_artboard_1_copy_8_4x.png',
    status: 'Pending',
  },
  {
    id: 2,
    patientName: 'Jane Smith',
    time: '11:30 AM',
    date: '2024-10-12',
    issue: 'Skin Rash',
    contact: '+0987654321',
    photo: 'https://pbs.twimg.com/profile_images/1556273580400291840/g3Pp3vP7_400x400.jpg',
    status: 'Pending',
  },
  // Other appointments can be added here...
];

const DoctorDashboard = () => {
  const [appointmentsData, setAppointmentsData] = useState(appointments);
  const [rescheduling, setRescheduling] = useState<{ id: number | null; newDate: string; newTime: string }>({
    id: null,
    newDate: '',
    newTime: '',
  });

  const handleAccept = (id: number) => {
    const updatedAppointments = appointmentsData.map(appointment =>
      appointment.id === id ? { ...appointment, status: 'Accepted' } : appointment,
    );
    setAppointmentsData(updatedAppointments);
  };

  const handleReject = (id: number) => {
    const updatedAppointments = appointmentsData.map(appointment =>
      appointment.id === id ? { ...appointment, status: 'Rejected' } : appointment,
    );
    setAppointmentsData(updatedAppointments);
  };

  const handleReschedule = (id: number) => {
    setRescheduling({ id, newDate: '', newTime: '' });
  };

  const submitReschedule = (id: number) => {
    const updatedAppointments = appointmentsData.map(appointment =>
      appointment.id === id
        ? { ...appointment, date: rescheduling.newDate, time: rescheduling.newTime, status: 'Rescheduled' }
        : appointment,
    );
    setAppointmentsData(updatedAppointments);
    setRescheduling({ id: null, newDate: '', newTime: '' });
  };

  const cancelReschedule = () => {
    setRescheduling({ id: null, newDate: '', newTime: '' });
  };

  return (
    <div className="container mx-auto py-16">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">Doctor's Dashboard</h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {appointmentsData.map(appointment => (
          <div key={appointment.id} className="rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center">
              <Image
                src={appointment.photo}
                alt={`Patient ${appointment.patientName}`}
                width={64}
                height={64}
                className="mr-4 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold text-blue-600">
                  Appointment with
                  {appointment.patientName}
                </h3>
                <p className="text-gray-600">
                  Contact:
                  {appointment.contact}
                </p>
              </div>
            </div>

            <p className="mb-2 text-gray-600">
              Date:
              {appointment.date}
            </p>
            <p className="mb-2 text-gray-600">
              Time:
              {appointment.time}
            </p>
            <p className="mb-2 text-gray-600">
              Issue:
              {appointment.issue}
            </p>
            <p className="mb-4 text-gray-600">
              Status:
              {appointment.status}
            </p>

            {rescheduling.id === appointment.id
              ? (
                  <div className="mb-4">
                    <label htmlFor="date" className="mb-2 block text-gray-600">New Date:</label>
                    <input
                      type="date"
                      className="mb-2 w-full rounded border px-3 py-2"
                      value={rescheduling.newDate}
                      onChange={e => setRescheduling({ ...rescheduling, newDate: e.target.value })}
                    />
                    <label htmlFor="time" className="mb-2 block text-gray-600">New Time:</label>
                    <input
                      type="time"
                      className="w-full rounded border px-3 py-2"
                      value={rescheduling.newTime}
                      onChange={e => setRescheduling({ ...rescheduling, newTime: e.target.value })}
                    />
                    <div className="mt-4 flex space-x-4">
                      <button
                        type="button"
                        className="rounded-lg bg-blue-600 px-4 py-2 text-white shadow-md hover:bg-blue-700"
                        onClick={() => submitReschedule(appointment.id)}
                      >
                        Submit Reschedule
                      </button>
                      <button
                        type="button"
                        className="rounded-lg bg-gray-600 px-4 py-2 text-white shadow-md hover:bg-gray-700"
                        onClick={cancelReschedule}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )
              : (
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => handleAccept(appointment.id)}
                      className="rounded-lg bg-green-600 px-4 py-2 text-white shadow-md hover:bg-green-700"
                    >
                      Accept
                    </button>
                    <button
                      type="button"
                      onClick={() => handleReject(appointment.id)}
                      className="rounded-lg bg-red-600 px-4 py-2 text-white shadow-md hover:bg-red-700"
                    >
                      Reject
                    </button>
                    <button
                      type="button"
                      onClick={() => handleReschedule(appointment.id)}
                      className="rounded-lg bg-yellow-600 px-4 py-2 text-white shadow-md hover:bg-yellow-700"
                    >
                      Reschedule
                    </button>
                  </div>
                )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorDashboard;
