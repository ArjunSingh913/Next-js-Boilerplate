import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';

import DoctorCard from '@/components/DoctorCard';

const doctors = [
  {
    id: 1,
    name: 'Dr. Prakash Das',
    specialty: 'Sr. Psychologist',
    availability: 'Available today',
    time: '09:30 AM - 07:00 PM',
    practiceDetails: 'As Psychologist, Dr. Das practices about 7+ years...',
    image: 'https://thumbs.dreamstime.com/b/happy-healthcare-portrait-doctor-hospital-proud-empowered-confident-face-leader-male-health-expert-happy-270112047.jpg', // Use an appropriate image path
  },
  {
    id: 2,
    name: 'Dr. John Doe',
    specialty: 'Cardiologist',
    availability: 'Available tomorrow',
    time: '10:00 AM - 05:00 PM',
    practiceDetails: 'Practicing cardiology for over 10 years...',
    image: 'https://wallpapers.com/images/hd/doctor-pictures-l5y1qs2998u7rf0x.jpg',
  },
];

const DoctorListing = () => {
  const { userId } = auth();
  return (
    <div className="container mx-auto p-6">
      {/* Greeting Section */}
      <div className="text-center">
        <h1 className="mb-6 text-3xl font-bold">Hello, Priya</h1>
        <p className="text-gray-500">@Dombivli, Mumbai</p>
      </div>

      {/* Search Input */}
      <div className="mt-6">
        <input
          type="text"
          className="w-full rounded-md border p-2"
          placeholder="Search Doctors"
        />
      </div>

      {/* Doctor Listing */}
      <div className="mt-6">
        {doctors.map(doctor => (
          <Link key={doctor.id} href={userId ? `/book-appointment/${doctor.id}` : `/requires_login`} passHref>
            <div>
              <DoctorCard doctor={doctor} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DoctorListing;