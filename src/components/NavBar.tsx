'use client';
import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

type NavBarProps = {
  userId: string | null; // Define the type of userId prop
};
export const NavBar: React.FC<NavBarProps> = ({ userId }) => {
  const t = useTranslations('DashboardLayout');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-gray-900 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Left-aligned Logo and Desktop Navigation */}
        <div className="flex items-center space-x-10">
          {/* Logo (left-aligned) */}
          <Link href={userId ? `/dashboard` : `/`} className="text-2xl font-bold text-blue-400">
            Doctor Schedulo
          </Link>

          {/* Desktop Navigation Links (hidden on mobile) */}
          <nav className="hidden space-x-6 text-white md:flex">
            <Link href={userId ? `/doctor-listing` : `/requires_login`} className="transition-colors hover:text-blue-400">
              Doctors
            </Link>
            <Link href={userId ? `/appointment-screen` : `/requires_login`} className="transition-colors hover:text-blue-400">
              Appointments
            </Link>
            <Link href={userId ? `/notifications` : `/requires_login`} className="transition-colors hover:text-blue-400">
              Notifications
            </Link>
          </nav>
        </div>

        {/* Mobile Menu Toggle Button (visible on mobile) */}
        <button
          type="button"
          className="text-white focus:outline-none md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
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
          <nav className="absolute left-0 top-16 z-50 w-full bg-gray-900 shadow-lg md:hidden">
            <Link
              href="/doctor-listing"
              className="block px-4 py-2 text-white transition-colors duration-300 hover:bg-gray-800 hover:text-blue-400"
            >
              Doctors
            </Link>
            <Link
              href="/appointment-screen"
              className="block px-4 py-2 text-white transition-colors duration-300 hover:bg-gray-800 hover:text-blue-400"
            >
              Appointments
            </Link>
            <Link
              href="/notifications"
              className="block px-4 py-2 text-white transition-colors duration-300 hover:bg-gray-800 hover:text-blue-400"
            >
              Notifications
            </Link>
            <div className="mt-2 border-t border-gray-700">
              {/* Mobile Auth Buttons */}
              <Link href="/sign-in" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-blue-400">
                Sign In
              </Link>
              <Link href="/sign-up" className="block bg-blue-700 px-4 py-2 text-blue-400 hover:bg-blue-600">
                Sign Up
              </Link>
            </div>
          </nav>
        )}

        {/* Auth Buttons (visible on desktop) */}
        <div className="hidden items-center space-x-4 md:flex">

          { userId
            ? (
                <SignOutButton>
                  <button
                    className="rounded bg-blue-600 px-4 py-2 text-white transition-all duration-300 hover:bg-blue-500"
                    type="button"
                  >
                    {t('sign_out')}
                    {' '}

                  </button>
                </SignOutButton>
              )
            : (
                <>
                  <Link href="/sign-in" className="text-white hover:text-blue-400">
                    Sign In
                  </Link>
                  <Link href="/sign-up" className="ml-4 rounded-lg bg-blue-700 px-4 py-2 text-white hover:bg-blue-600">
                    Sign Up
                  </Link>
                </>
              )}
        </div>
      </div>
    </header>
  );
};
