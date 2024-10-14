import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import AppointmentBooking from '@/components/AppointmentBooking';
import ConsultationCategories from '@/components/ConsultationCategories';
import HealthArticles from '@/components/HealthArticles';
import HeroSection from '@/components/HeroSection';
import ServiceCategories from '@/components/ServiceCategories';
import UserTestimonials from '@/components/UserTestimonials';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const Index = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);

  return (
    <>
      <HeroSection />
      <ConsultationCategories />
      <AppointmentBooking />
      <HealthArticles />
      <UserTestimonials />
      <ServiceCategories />
    </>
  );
};

export default Index;
