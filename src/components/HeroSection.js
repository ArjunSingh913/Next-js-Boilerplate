const HeroSection = () => {
  return (
    <section className="bg-blue-50 py-20">
      <div className="container mx-auto text-center">
        <h1 className="mb-6 text-4xl font-bold text-blue-600">
          Find the Best Doctors and Health Services
        </h1>

        {/* Search Form */}
        <div className="mt-4 flex justify-center">
          <input
            type="text"
            placeholder="Search doctors, clinics, hospitals"
            className="w-1/2 rounded-l-lg border border-gray-300 p-3"
          />
          <button type="button" className="rounded-r-lg bg-blue-600 px-6 text-white">
            Search
          </button>
        </div>

        {/* Popular Categories */}
        <div className="mt-6">
          <h3 className="mb-4 text-lg font-semibold">Popular Searches:</h3>
          <div className="space-x-4">
            <button type="button" className="rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm">
              Dentists
            </button>
            <button type="button" className="rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm">
              Dermatologists
            </button>
            <button type="button" className="rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm">
              Cardiologists
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
