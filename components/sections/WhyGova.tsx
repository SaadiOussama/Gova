"use client";

import { motion } from "framer-motion";
import { Eye, Wallet, ShieldCheck, Lock } from "lucide-react";
import { useDictionary } from "@/lib/DictContext";

const icons = [Eye, Wallet, ShieldCheck, Lock];

export default function WhyGova() {
  const dict = useDictionary();
  const { title, subtitle, features } = dict.whyGova;
  return (
    <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">{title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">{subtitle}</p>
            <div className="w-24 h-1.5 bg-primary rounded-full mb-12"></div>
          </motion.div>
          
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
