import React from 'react';
import { Rocket, Smartphone, PiggyBank } from 'lucide-react'; // Lucide Icons

const BannerFeatures = () => {
  const features = [
    {
      icon: <Rocket className="w-12 h-12 text-primary" />,
      title: "It's quick",
      desc: 'Transfers to Cameroon are delivered in just seconds',
    },
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: "It's easy",
      desc: 'Send money to Cameroon from the comfort of your home',
    },
    {
      icon: <PiggyBank className="w-12 h-12 text-primary" />,
      title: "It's cheap",
      desc: 'Our exchange rates beat popular alternatives',
    },
  ];

  return (
    <section className="bg-green-100 py-8 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">
        Do your Payments Instantly!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            {feature.icon}
            <h3 className="text-lg font-semibold mt-4 text-primary italic">{feature.title}</h3>
            <p className="text-sm text-gray-600 mt-2 max-w-xs font-medium">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BannerFeatures;
