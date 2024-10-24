import Image from 'next/image';
import Link from 'next/link';

export default function RequiresLogin() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="max-w-lg rounded-lg bg-white p-6 shadow-lg">
        {/* Optional Image */}
        <div className="flex justify-center">
          <Image
            src="/assets/images/login_require.jpg"
            alt="Login Required"
            width={150}
            height={150}
            className="mb-4"
          />
        </div>

        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800">
          You need to sign in to access this feature
        </h2>
        <p className="mb-6 text-center text-gray-600">
          Please log in to your account or sign up to continue using the service.
        </p>

        <div className="flex justify-center space-x-4">
          <Link href="/sign-in">
            <div className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition hover:bg-blue-500">
              Sign In
            </div>
          </Link>
          <Link href="/sign-up">
            <div className="rounded-lg bg-gray-100 px-6 py-2 font-semibold text-blue-600 transition hover:bg-gray-200">
              Sign Up
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
