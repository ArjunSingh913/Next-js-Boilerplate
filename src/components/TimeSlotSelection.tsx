import React from 'react';

// Define the props interface
type TimeSlotSelectionProps = {
  slots: string[]; // Array of available time slots (as strings, adjust if necessary)
  onSlotSelect: (slot: string) => void; // Function to handle slot selection
};

const TimeSlotSelection: React.FC<TimeSlotSelectionProps> = ({ slots, onSlotSelect }) => {
  return (
    <div className="mt-4 rounded-lg border bg-white p-4">
      <h3 className="text-sm text-gray-500">Select slot</h3>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {slots.map((slot, index) => (
          <button
            type="button"
            key={index}
            className="rounded-md border border-gray-300 p-2 text-center hover:bg-blue-100"
            onClick={() => onSlotSelect(slot)}
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotSelection;
