import React from 'react';

const PaymentSection = () => {
  return (
    <div className="mt-6 ">
      {/* Payment Heading */}
      <h2 className="text-lg font-semibold text-gray-900">Payment</h2>

      {/* Payment Description */}
      <p className="mt-2 text-sm text-gray-600">
        Reduce your waiting time by paying the consulting fee upfront.
      </p>

      {/* Payment Button */}
      <button
        type="button"
        className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-medium text-white transition-colors hover:bg-blue-700"
      >
        Make Payment
      </button>
    </div>
  );
};

export default PaymentSection;
