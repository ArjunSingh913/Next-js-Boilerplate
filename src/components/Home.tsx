import { currentUser } from '@clerk/nextjs/server';
import { getTranslations } from 'next-intl/server';

import AppointmentBooking from './AppointmentBooking';
import ConsultationCategories from './ConsultationCategories';
import HealthArticles from './HealthArticles';
import HeroSection from './HeroSection';
import ServiceCategories from './ServiceCategories';
import UserTestimonials from './UserTestimonials';

export const Home = async () => {
  const t = await getTranslations('Dashboard');
  const user = await currentUser();

  return (
    <>
      <HeroSection />
      <ConsultationCategories />
      <AppointmentBooking />
      <HealthArticles />
      <UserTestimonials />
      <ServiceCategories />
      <p>
        {`👋 `}
        {t('hello_message', { email: user?.emailAddresses[0]?.emailAddress })}
      </p>
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
