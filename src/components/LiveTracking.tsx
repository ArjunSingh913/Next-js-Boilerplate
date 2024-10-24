import Link from 'next/link';
import React from 'react';

type TrackingInfo = {
  current: number; // Number of patients currently being consulted
  time: string; // Expected consulting time
};

const LiveTracking: React.FC<{ trackingInfo: TrackingInfo; id: string }> = ({ trackingInfo, id }) => {
  return (
    <div className="mt-4 rounded-lg border bg-white p-6 shadow-sm">
      {/* Live Tracking Header */}
      <h4 className="text-sm font-semibold text-gray-700">Live Tracking</h4>

      {/* Live Tracking Info */}
      <p className="mt-2 text-base text-gray-800">
        {trackingInfo.current}
        {' '}
        patients are consulting. Expected consulting time:
        <span className="ml-1 font-semibold text-blue-500">{trackingInfo.time}</span>
      </p>

      {/* Action Buttons: Reschedule and Cancel */}
      <div className="mt-6 flex space-x-3">
        <Link
          href={`/reschedule_appointment/${id}`}
          className="flex-1 rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-center font-medium text-gray-700 hover:bg-gray-200"
        >
          Reschedule
        </Link>
        <Link
          href="/appointment"
          className="flex-1 rounded-lg border border-red-400 bg-red-100 px-4 py-2 text-center font-medium text-red-700 hover:bg-red-200"
        >
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default LiveTracking;
