import React from 'react';

type AppointmentStatusProps = {
  status: string;
};

const AppointmentStatus: React.FC<AppointmentStatusProps> = ({ status }) => {
  // Define status-specific styles
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Waiting':
        return 'border border-blue-300 bg-blue-50 text-blue-600';
      case 'Completed':
        return 'border border-green-300 bg-green-50 text-green-600';
      case 'Cancelled':
        return 'border border-red-300 bg-red-50 text-red-600';
      default:
        return 'border border-gray-300 bg-gray-50 text-gray-600'; // Default status
    }
  };

  return (
    <div className="mt-4 flex items-center justify-between rounded-lg border bg-white p-4 shadow-sm">
      {/* Appointment Status Label */}
      <h4 className="text-sm font-semibold text-gray-700">Appointment Status</h4>

      {/* Status Indicator */}
      <p
        className={`inline-block rounded-md px-3 py-1 text-sm font-semibold ${getStatusStyles(status)}`}
      >
        {status}
      </p>
    </div>
  );
};

export default AppointmentStatus;
