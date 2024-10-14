import { unstable_setRequestLocale } from 'next-intl/server';

import { NavBar } from '@/components/NavBar';

export default function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);

  return (
    <>
      <NavBar />
      <main className="container mx-auto grow p-4">
        {props.children}
      </main>
    </>
  );
}
