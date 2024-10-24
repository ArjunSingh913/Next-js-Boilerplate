// app/layout.tsx
import { auth } from '@clerk/nextjs/server';
import React from 'react';

import { NavBar } from '@/components/NavBar';

const AppointmentsLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();
  return (
    <div className="mt-16 flex min-h-screen flex-col">
      <NavBar userId={userId} />
      <main className="grow">
        {children}
      </main>
    </div>
  );
};

export default AppointmentsLayout;
