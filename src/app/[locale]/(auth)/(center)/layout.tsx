import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

import { NavBar } from '@/components/NavBar';

export default function CenteredLayout(props: { children: React.ReactNode }) {
  const { userId } = auth();

  if (userId) {
    redirect('/dashboard');
  }

  return (
    <>
      <NavBar userId={userId} />
      <div className="flex h-screen items-center justify-center">
        {props.children}
      </div>
    </>
  );
}
