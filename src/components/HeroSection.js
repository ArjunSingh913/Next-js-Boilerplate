const HeroSection = () => {
  return (
    <section className="bg-blue-50 py-20">
      <div className="container mx-auto flex max-w-screen-lg flex-col items-center lg:flex-row lg:items-center lg:justify-between">
        {/* Left SVG Icon */}
        <div className="mb-8 flex justify-center lg:mb-0 lg:w-1/3">
          <svg
            height="150px" /* Smaller on mobile */
            width="150px"
            className="opacity-75 lg:size-[200px]" /* Larger on desktop */
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 392.549 392.549"
            xmlSpace="preserve"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                style={{ fill: '#194F82' }}
                d="M341.22,123.388c-28.25,0-51.329,23.014-51.329,51.329c0,24.566,17.325,45.059,40.404,50.101v51.523 c0,51.976-42.279,94.255-94.255,94.255s-94.255-42.279-94.255-94.255v-26.764c27.927-3.556,52.299-20.558,65.164-46.287 l45.77-91.539c19.782-39.628,6.271-86.949-31.547-110.028c-5.107-3.168-11.83-1.552-14.998,3.62 c-3.168,5.107-1.552,11.83,3.62,14.998c28.057,17.131,38.077,52.299,23.402,81.648l-37.236,74.408H65.761L28.59,101.99 c-14.675-29.414-4.655-64.517,23.402-81.648c5.107-3.168,6.723-9.891,3.62-14.998c-3.168-5.107-9.891-6.723-14.998-3.62 C2.796,24.802-10.715,72.059,9.066,111.687l45.834,91.539c12.8,25.665,37.172,42.731,65.034,46.287v26.893 c0,64,52.105,116.04,116.17,116.04s116.105-52.105,116.105-116.04v-51.523c23.014-5.042,40.339-25.6,40.339-50.101 C392.549,146.402,369.535,123.388,341.22,123.388z M77.139,198.184h107.572c-11.507,19.006-31.16,30.319-53.786,30.319 S88.582,217.19,77.139,198.184z M341.22,204.196c-16.226,0-29.543-13.188-29.543-29.543c0-16.291,13.188-29.543,29.543-29.543 c16.226,0,29.543,13.188,29.543,29.543S357.576,204.196,341.22,204.196z"
              />
              <path
                style={{ fill: '#FFC10D' }}
                d="M370.763,174.717c0-16.226-13.188-29.543-29.543-29.543c-16.226,0-29.543,13.188-29.543,29.543 s13.188,29.543,29.543,29.543C357.576,204.196,370.763,191.008,370.763,174.717z"
              />
              <path
                style={{ fill: '#194F82' }}
                d="M341.931,163.792h-1.293c-6.012,0-10.925,4.848-10.925,10.925c0,6.012,4.848,10.925,10.925,10.925 h1.293c6.012,0,10.925-4.848,10.925-10.925S347.943,163.792,341.931,163.792z"
              />
            </g>
          </svg>
        </div>

        {/* Text Content */}
        <div className="w-full text-center lg:w-2/3">
          <h1 className="mb-6 text-2xl font-bold text-blue-600 lg:text-4xl">
            Find the Best Doctors and Health Services
          </h1>

          {/* Search Form */}
          <div className="mt-4 flex flex-col items-center lg:flex-row lg:justify-center">
            <input
              type="text"
              placeholder="Search doctors, clinics, hospitals"
              className="mb-4 w-full rounded-l-lg border border-gray-300 p-3 lg:mb-0 lg:w-1/2"
            />
            <button type="button" className="w-full rounded-r-lg bg-blue-600 p-3 text-white lg:w-auto lg:px-6">
              Search
            </button>
          </div>

          {/* Popular Categories */}
          <div className="mt-6">
            <h3 className="mb-4 text-lg font-semibold">Popular Searches:</h3>
            <div className="flex flex-wrap justify-center space-x-2 lg:space-x-4">
              <button type="button" className="mb-2 rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm">
                Dentists
              </button>
              <button type="button" className="mb-2 rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm">
                Dermatologists
              </button>
              <button type="button" className="mb-2 rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm">
                Cardiologists
              </button>
            </div>
          </div>
        </div>

        {/* Right SVG Icon */}
        <div className="mt-8 flex justify-center lg:mt-0 lg:w-1/3">
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            height="150px" /* Smaller on mobile */
            width="150px"
            className="opacity-75 lg:size-[200px]" /* Larger on desktop */
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M10 1H6V6L1 6V10H6V15H10V10H15V6L10 6V1Z" fill="#f10404"></path>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
