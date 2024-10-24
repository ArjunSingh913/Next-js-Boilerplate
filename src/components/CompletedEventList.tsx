import React from 'react';

type Appointment = {
  id: number;
  doctor: string;
  tokenNo: number;
  date: string;
  time: string;
  payment: string;
  photo: string;
};
const CompletedEventList = ({ appointments }: { appointments: Appointment[] }) => {
  return (
    <div>
      {appointments.length > 0
        ? (
            appointments.map(appointment => (
              <div key={appointment.id} className="mb-4 flex flex-col items-center rounded-md border p-4 shadow-sm md:flex-row">
                <img
                  src={appointment.photo}
                  alt={appointment.doctor}
                  className="mb-4 mr-0 size-16 rounded-full md:mb-0 md:mr-4"
                />

                <div className="flex-1">
                  <div className="flex flex-col items-center justify-between md:flex-row md:items-start">
                    <div>
                      <p className="text-center text-lg font-semibold md:text-left">{appointment.doctor}</p>
                      <p className="text-center text-sm text-gray-500 md:text-left">
                        Token no -
                        {appointment.tokenNo}
                      </p>
                    </div>
                    <div className="mt-2 text-center md:mt-0 md:text-right">
                      <p className="text-sm">
                        {appointment.date}
                        {' '}
                        |
                        {' '}
                        <span className="text-blue-500">{appointment.time}</span>
                      </p>
                      <p className="text-sm text-gray-500">
                        Payment |
                        {appointment.payment}
                      </p>
                    </div>
                  </div>

                  <p className="mt-2 text-center text-sm text-gray-600 md:text-left">
                    Appointment completed successfully.
                  </p>
                </div>
              </div>
            ))
          )
        : (
            <p className="text-center">No completed appointments</p>
          )}
    </div>
  );
};

export default CompletedEventList;
