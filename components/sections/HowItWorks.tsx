"use client";

import { motion } from "framer-motion";
import { MapPin, Car, Wallet } from "lucide-react";
import { useDictionary } from "@/lib/DictContext";

const icons = [MapPin, Car, Wallet];
const colors = [
  { color: "text-blue-600", bg: "bg-blue-100" },
  { color: "text-amber-600", bg: "bg-amber-100" },
  { color: "text-green-600", bg: "bg-green-100" },
];

export default function HowItWorks() {
  const dict = useDictionary();
  const { title, steps } = dict.howItWorks;
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = icons[index];
            const { color, bg } = colors[index];
            return (
              <motion.div
                key={index}
                className="relative p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={`w-16 h-16 ${bg} ${color} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                <div className="absolute top-8 right-8 text-6xl font-black text-gray-900/[0.03] select-none">
                  {index + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
