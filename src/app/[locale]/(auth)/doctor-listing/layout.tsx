import { auth } from '@clerk/nextjs/server';
import React from 'react';

import { NavBar } from '@/components/NavBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();
  return (
    <>
      <NavBar userId={userId} />
      <div className="container mx-auto mt-16 p-4">
        <main className="rounded-lg bg-white p-4">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
