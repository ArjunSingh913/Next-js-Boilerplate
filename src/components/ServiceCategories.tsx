import Link from 'next/link';

const ServiceCategories = () => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="mb-6 text-center text-3xl font-bold text-gray-700">Our Services</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <Link href="/doctors">
          <div className="rounded-lg bg-blue-50 p-6 text-center shadow-lg hover:bg-blue-100">
            <h3 className="text-xl font-bold text-blue-600">Doctors</h3>
            <p className="mt-2 text-gray-600">Book appointments with top-rated doctors</p>
          </div>
        </Link>

        <Link href="/diagnostics">
          <div className="rounded-lg bg-blue-50 p-6 text-center shadow-lg hover:bg-blue-100">
            <h3 className="text-xl font-bold text-blue-600">Diagnostics</h3>
            <p className="mt-2 text-gray-600">Schedule tests and diagnostics online</p>
          </div>
        </Link>

        <Link href="/pharmacy">
          <div className="rounded-lg bg-blue-50 p-6 text-center shadow-lg hover:bg-blue-100">
            <h3 className="text-xl font-bold text-blue-600">Pharmacy</h3>
            <p className="mt-2 text-gray-600">Order medicines and healthcare products</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCategories;
