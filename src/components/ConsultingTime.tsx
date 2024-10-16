import React from 'react';

// Define the prop types
type ConsultingTimeProps = {
  consultingTime: string; // You can change this to `number` if consultingTime is a number
};

const ConsultingTime: React.FC<ConsultingTimeProps> = ({ consultingTime }) => {
  return (
    <div className="mt-4 flex items-center justify-between rounded-lg border bg-gray-50 p-4">
      <h3 className="text-sm text-gray-500">Consulting Time</h3>
      <p className="text-lg font-semibold text-blue-500">{consultingTime}</p>
    </div>
  );
};

export default ConsultingTime;
