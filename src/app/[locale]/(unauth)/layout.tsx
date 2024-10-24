import { unstable_setRequestLocale } from 'next-intl/server';

import { NavBar } from '@/components/NavBar';

export default function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);

  return (
    <>
      <NavBar userId={null} />
      <main className="container mx-auto mt-16 grow p-4">
        {props.children}
      </main>
    </>
  );
}
