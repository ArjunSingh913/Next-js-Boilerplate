'use client';
import { useState } from 'react';

import CanceledEventList from '../../../../components/CanceledEventList';
import CompletedEventList from '../../../../components/CompletedEventList';
import UpcomingEventList from '../../../../components/UpcomingEventList';

const AppointmentScreen = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'completed' | 'canceled'>('upcoming');

  const appointments = {
    upcoming: [
      { id: 1, doctor: 'Dr. Prakash Das', tokenNo: 12, date: 'Today', time: '12:30 PM', payment: 'Not paid', photo: 'https://thumbs.dreamstime.com/b/happy-healthcare-portrait-doctor-hospital-proud-empowered-confident-face-leader-male-health-expert-happy-270112047.jpg' },
      { id: 2, doctor: 'Dr. John Doe', tokenNo: 13, date: 'Tomarrow', time: '1:30 PM', payment: 'Not paid', photo: 'https://wallpapers.com/images/hd/doctor-pictures-l5y1qs2998u7rf0x.jpg' },
    ],
    completed: [
      { id: 1, doctor: 'Dr. Abhay Das', tokenNo: 10, date: '12 july', time: '12:30 PM', payment: 'Payed', photo: 'https://th.bing.com/th/id/OIP.YGkuNO_pXJ6XSIeN9Ckb-QHaGN?rs=1&pid=ImgDetMain' },
      { id: 2, doctor: 'Dr. Nitin Kumar', tokenNo: 11, date: '15 aug', time: '1:30 PM', payment: 'Payed', photo: 'https://th.bing.com/th/id/OIP.EUlE__yXCoyX0QkzKBTs8gHaFh?w=980&h=731&rs=1&pid=ImgDetMain' },
    ],
    canceled: [],
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-center text-2xl font-bold">Appointments</h1>

      {/* Tabs */}
      <div className="mb-4 flex justify-around border-b">
        <button
          type="button"
          className={`pb-2 ${activeTab === 'upcoming' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming
        </button>
        <button
          type="button"
          className={`pb-2 ${activeTab === 'completed' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
          onClick={() => setActiveTab('completed')}
        >
          Completed
        </button>
        <button
          type="button"
          className={`pb-2 ${activeTab === 'canceled' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
          onClick={() => setActiveTab('canceled')}
        >
          Canceled
        </button>
      </div>

      {/* Appointments List */}
      {activeTab === 'upcoming' && <UpcomingEventList appointments={appointments.upcoming} />}
      {activeTab === 'completed' && <CompletedEventList appointments={appointments.completed} />}
      {activeTab === 'canceled' && <CanceledEventList appointments={appointments.canceled} />}
    </div>
  );
};

export default AppointmentScreen;
