import { auth } from '@clerk/nextjs/server';

import { NavBar } from '@/components/NavBar';

export default function DashboardLayout(props: { children: React.ReactNode }) {
  const { userId } = auth(); // Get userId from auth()

  return (
    <div className="flex min-h-screen flex-col">

      <NavBar userId={userId} />
      {/* Main content rendered from props.children */}
      <main className="container mx-auto mt-16 grow p-4">
        {props.children}
      </main>

      {/* Optionally, you can add a footer here */}
      <footer className="bg-gray-100 py-4 text-center">
        <p className="text-sm text-gray-500">© 2024 Doctor Schedulo. All rights reserved.</p>
      </footer>
    </div>
  );
}

export const dynamic = 'force-dynamic';
