// pages/doctor-listing.tsx
import Link from 'next/link';

const doctors = [
  { id: 1, name: 'Dr. Alice Johnson', specialty: 'Cardiology', photo: 'https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg', rating: 4.5 },
  { id: 2, name: 'Dr. Bob Smith', specialty: 'Dermatology', photo: 'https://th.bing.com/th/id/OIP.lippvmckkmvu4bH1Hu8beQAAAA?w=400&h=400&rs=1&pid=ImgDetMain', rating: 4.2 },
  { id: 3, name: 'Dr. Clara Lee', specialty: 'Neurology', photo: 'https://eventually.com/img/speakers/vincenzo-toscano-ceo.jpg', rating: 4.8 },
];

const DoctorListing = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">Doctor Listing</h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {doctors.map(doctor => (
          <div key={doctor.id} className="rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center">
              <img
                src={doctor.photo}
                alt={`Doctor ${doctor.name}`}
                width={64}
                height={64}
                className="mr-4 size-16 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold text-blue-600">{doctor.name}</h3>
                <p className="text-gray-600">
                  Specialty:
                  {doctor.specialty}
                </p>
                <p className="text-gray-600">
                  Rating:
                  {doctor.rating}
                </p>
              </div>
            </div>
            <Link href={`/book-appointment/${doctor.id}`}>
              <button type="button" className="mt-4 rounded-lg bg-green-600 px-4 py-2 text-white shadow-md hover:bg-green-700">
                Book Appointment
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorListing;
