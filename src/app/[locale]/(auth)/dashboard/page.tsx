import { getTranslations } from 'next-intl/server';

import { Home } from '@/components/Home';
// import DoctorDashboardPage from '@/pages/doctor/DoctorDashboard';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Dashboard',
  });

  return {
    title: t('meta_title'),
  };
}

const Dashboard = () => (
  <div className="[&_p]:my-6">
    { /* <DoctorDashboardPage appointments={appointments} /> */}
    <Home />
  </div>
);

export default Dashboard;
