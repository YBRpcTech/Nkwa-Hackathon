import React from "react";
import { CreditCard, Bitcoin, Building2, Users } from "lucide-react";
import img from "../../assets/RecieveMoney.png";

const features = [
  {
    icon: <CreditCard className="text-green-600 w-10 h-6" />,
    title: "Receive directly to your mobile money or bank",
    description: "No need to visit an agent or bank—just receive funds straight to your wallet.",
    bg: "bg-green-100",
  },
  {
    icon: <Bitcoin className="text-yellow-600 w-10 h-6" />,
    title: "Get paid from anywhere via crypto",
    description:
      "Receive money in FCFA while your sender pays in Bitcoin or USDC with zero fees.",
    bg: "bg-yellow-100",
  },
  {
    icon: <Building2 className="text-purple-600 w-10 h-6" />,
    title: "No middlemen involved",
    description:
      "No delays or third parties. Money comes straight to your account securely and instantly.",
    bg: "bg-purple-100",
  },
];

const ReceiveMoney = () => {
  return (
    <section className="bg-green-100 py-16 px-6 lg:px-24 xl:px-56">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side Content */}
        <div className="flex-1 space-y-6 md:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-8">
            Receive Payments from anywhere in the world to Cameroon
          </h2>

          <div className="space-y-6 md:space-y-10">
            {features.map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className={`p-2 rounded-full ${item.bg} w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl text-gray-800">{item.title}</h3>
                  <p className="text-xs sm:text-sm font-medium text-gray-600 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 w-full mt-8 sm:mt-0">
          <img
            src={img}
            alt="App UI"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto md:mx-0 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ReceiveMoney;
