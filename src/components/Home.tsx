import AppointmentBooking from './AppointmentBooking';
import ConsultationCategories from './ConsultationCategories';
import HealthArticles from './HealthArticles';
import HeroSection from './HeroSection';
import ServiceCategories from './ServiceCategories';
import UserTestimonials from './UserTestimonials';

export const Home = async () => {
  return (
    <>
      <HeroSection />
      <ConsultationCategories />
      <AppointmentBooking />
      <HealthArticles />
      <UserTestimonials />
      <ServiceCategories />
      <p>
        {`Looking for a SaaS Boilerplate? `}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://nextjs-boilerplate.com/pro-saas-starter-kit"
        >
          Next.js Boilerplate SaaS
        </a>
        {` can help you build one.`}
      </p>
    </>
  );
};
