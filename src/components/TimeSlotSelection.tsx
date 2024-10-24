import React, { useState } from 'react';

// Define the props interface
type TimeSlotSelectionProps = {
  slots: string[]; // Array of available time slots (as strings)
  onSlotSelect: (slot: string) => void; // Function to handle slot selection
};

const TimeSlotSelection: React.FC<TimeSlotSelectionProps> = ({ slots, onSlotSelect }) => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null); // Track the selected slot

  const handleSlotClick = (slot: string) => {
    setSelectedSlot(slot); // Update the selected slot in state
    onSlotSelect(slot); // Trigger the slot selection callback
  };

  return (
    <div className="mt-4 rounded-lg border bg-white p-4">
      <h3 className="text-sm text-gray-500">Select slot</h3>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {slots.map((slot, index) => (
          <button
            type="button"
            key={index}
            className={`rounded-md border p-2 text-center ${
              selectedSlot === slot ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black'
            } hover:bg-blue-100`}
            onClick={() => handleSlotClick(slot)}
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotSelection;
