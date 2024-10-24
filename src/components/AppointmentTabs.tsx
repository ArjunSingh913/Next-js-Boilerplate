// components/AppointmentTabs.tsx
import React from 'react';

type AppointmentTabsProps = {
  activeTab: 'upcoming' | 'completed' | 'canceled';
  onTabChange: (tab: 'upcoming' | 'completed' | 'canceled') => void;
};

const AppointmentTabs: React.FC<AppointmentTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="mb-4 flex justify-around border-b">
      <button
        type="button"
        className={`pb-2 ${activeTab === 'upcoming' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
        onClick={() => onTabChange('upcoming')}
      >
        Upcoming
      </button>
      <button
        type="button"
        className={`pb-2 ${activeTab === 'completed' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
        onClick={() => onTabChange('completed')}
      >
        Completed
      </button>
      <button
        type="button"
        className={`pb-2 ${activeTab === 'canceled' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
        onClick={() => onTabChange('canceled')}
      >
        Canceled
      </button>
    </div>
  );
};

export default AppointmentTabs;
