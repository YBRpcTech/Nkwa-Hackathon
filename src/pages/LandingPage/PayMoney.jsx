import React from "react";
import { CreditCard, Bitcoin, Building2, Users } from "lucide-react";
import img from "../../assets/PayMoneyill.png";
import { motion } from "framer-motion";

const features = [
  {
    icon: <CreditCard className="text-green-600 w-6 h-6" />,
    title: "Pay easily with your credit or debit card",
    description: "Send money to Nigeria at low fees with your bank card.",
    bg: "bg-green-100",
  },
  {
    icon: <Bitcoin className="text-yellow-600 w-8 h-6" />,
    title: "Enjoy borderless crypto transfers",
    description:
      "You pay with BTC or USDC at zero fees; they get MoMo in their MoMo account within seconds.",
    bg: "bg-yellow-100",
  },
  {
    icon: <Building2 className="text-purple-600 w-8 h-6" />,
    title: "No middleman needed",
    description:
      "Your loved ones don’t need to visit a bank before they can receive money from you.",
    bg: "bg-purple-100",
  },
  {
    icon: <Users className="text-pink-600 w-8 h-6" />,
    title: "Save beneficiaries",
    description:
      "Save your loved ones as beneficiaries on the app to send them money easily.",
    bg: "bg-pink-100",
  },
];

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const PayMoney = () => {
  return (
    <section className="bg-green-100 py-16 px-6 lg:px-24 xl:px-56">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side Image */}
        <motion.div
          className="flex-1 w-full mb-8 md:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          <img
            src={img}
            alt="App UI"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto md:mx-0 object-cover"
          />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          className="flex-1 space-y-6 md:space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-8">
            Send & Pay from anywhere in the world to Cameroon
          </h2>

          <div className="space-y-6 md:space-y-8">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col sm:flex-row items-start gap-6"
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInVariant}
              >
                <div
                  className={`p-4 sm:p-3 rounded-full ${item.bg} flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-gray-600 mt-2 sm:mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PayMoney;
