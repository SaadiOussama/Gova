"use client";

import { motion } from "framer-motion";
import { Car, Star, Zap } from "lucide-react";
import { useDictionary } from "@/lib/DictContext";

const icons = [Car, Star, Zap];
const styles = [
  { color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
  { color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
  { color: "text-green-600", bg: "bg-green-50", border: "border-green-100" },
];

export default function RideTypes() {
  const dict = useDictionary();
  const { title, rides } = dict.rideTypes;
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {rides.map((ride, index) => {
            const Icon = icons[index];
            const { color, bg, border } = styles[index];
            return (
              <motion.div
                key={index}
                className={`p-8 rounded-2xl bg-white border-2 border-transparent hover:${border} shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`w-14 h-14 ${bg} ${color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{ride.title}</h3>
                <p className="text-gray-600 leading-relaxed">{ride.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
