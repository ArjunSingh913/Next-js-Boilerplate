import React from 'react';

type Patient = {
  name: string;
  age: number;
  weight: number;
  problem: string;
};

const PatientDetails: React.FC<{ patient: Patient }> = ({ patient }) => {
  return (
    <div className="mt-4 rounded-lg border bg-gray-50 p-4">
      {/* Full Name */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-600">Full name</h4>
        <p className="text-lg font-semibold text-gray-900">{patient.name}</p>
      </div>

      {/* Age and Weight (side by side closer to each other) */}
      <div className="mb-4 flex space-x-8">
        <div>
          <h4 className="text-sm font-medium text-gray-600">Age</h4>
          <p className="text-lg font-semibold text-gray-900">{patient.age}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-600">Weight</h4>
          <p className="text-lg font-semibold text-gray-900">{patient.weight}</p>
        </div>
      </div>

      {/* Problem */}
      <div>
        <h4 className="text-sm font-medium text-gray-600">Problem</h4>
        <p className="text-lg font-semibold text-gray-900">{patient.problem}</p>
      </div>
    </div>
  );
};

export default PatientDetails;
