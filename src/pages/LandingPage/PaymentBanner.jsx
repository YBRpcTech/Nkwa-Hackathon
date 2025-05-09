import React from 'react';

const PaymentBanner = () => {
  return (
    <section className="relative bg-white py-16 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-green-900 rounded-3xl flex flex-col md:flex-row items-center justify-between h-auto md:h-[300px] px-4 sm:px-6 md:px-8 lg:px-10 py-8 md:py-0">

          {/* Blue card */}
          <div className="bg-primary text-white rounded-t-3xl p-6 py-10 w-full sm:w-96 z-10 md:ml-20 mb-8 md:mb-[84px] h-auto md:h-96">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
              Unlock scalable payment for your business in Africa.
            </h2>
          </div>

          {/* CTA */}
          <div className="w-full md:w-auto text-center md:text-right mt-4 md:mt-0">
            <a
              href="#"
              className="text-primary-2 hover:text-primary-3 font-medium text-lg inline-flex items-center transition-all"
            >
              Create an account
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PaymentBanner;
