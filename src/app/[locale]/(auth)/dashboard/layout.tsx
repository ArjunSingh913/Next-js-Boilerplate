'use client';

import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function DashboardLayout(props: { children: React.ReactNode }) {
  const t = useTranslations('DashboardLayout');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Doctor Schedulo
          </Link>

          {/* Desktop Navigation Links (hidden on mobile) */}
          <nav className="hidden space-x-6 md:flex">
            <Link href="/doctors" className="text-gray-700 hover:text-blue-600">Doctors</Link>
            <Link href="/diagnostics" className="text-gray-700 hover:text-blue-600">Diagnostics</Link>
            <Link href="/pharmacy" className="text-gray-700 hover:text-blue-600">Pharmacy</Link>
          </nav>

          {/* Mobile Menu Toggle Button (visible on mobile) */}
          <button type="button" className="text-blue-600 md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {/* Icon for Mobile Menu */}
            <svg
              className="size-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>

          {/* Mobile Menu (shown when the button is clicked) */}
          {isMobileMenuOpen && (
            <nav className="absolute left-0 top-16 z-50 w-full bg-white shadow-lg md:hidden">
              <Link href="/doctors" className="block px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-gray-100 hover:text-blue-600">Doctors</Link>
              <Link href="/diagnostics" className="block px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-gray-100 hover:text-blue-600">Diagnostics</Link>
              <Link href="/pharmacy" className="block px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-gray-100 hover:text-blue-600">Pharmacy</Link>
            </nav>
          )}

          {/* Auth Buttons */}
          <div className="space-x-4">
            <SignOutButton>
              <button
                className="rounded bg-blue-600 px-4 py-2 text-white transition-all duration-300 hover:bg-blue-500"
                type="button"
              >
                {t('sign_out')}
                {' '}
                {/* Translated 'Sign Out' */}
              </button>
            </SignOutButton>
          </div>
        </div>
      </header>

      {/* Main content rendered from props.children */}
      <main className="container mx-auto grow p-4">
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
