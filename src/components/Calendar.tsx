// Calendar.tsx
import React, { useState } from 'react';

type DateOption = {
  day: number;
  dayOfWeek: string;
};

type CalendarProps = {
  availableDates: DateOption[];
  onDateSelect: (date: string | null) => void; // Assuming you want to pass the selected date as a string
};

const Calendar: React.FC<CalendarProps> = ({ availableDates, onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateClick = (date: string | null) => {
    setSelectedDate(date);
    onDateSelect(date); // Pass selected date back to parent
  };

  return (
    <div className="mt-4 rounded-lg border bg-white p-4">
      <h3 className="text-lg text-gray-600">Choose Another Time</h3>
      <p className="mt-2 text-gray-500">July, 2023</p>
      <div className="mt-4 flex space-x-4">
        {availableDates.map(({ day, dayOfWeek }) => (
          <button
            type="button"
            key={day}
            className={`size-12 rounded-lg ${
              selectedDate === `${day}-${dayOfWeek}` ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => handleDateClick(`${day}-${dayOfWeek}`)} // Pass the formatted date string
          >
            {`${day} (${dayOfWeek})`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
