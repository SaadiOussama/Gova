"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useDictionary } from "@/lib/DictContext";

const carImages = ["/Car_V1.png", "/Car_V2.png", "/Car_V3.png"];

export default function RideTypes() {
  const dict = useDictionary();
  const { title, rides } = dict.rideTypes;
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {rides.map((ride, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-6">
                <Image
                  src={carImages[index]}
                  alt={ride.title}
                  width={180}
                  height={120}
                  style={{ width: "180px", height: "auto" }}
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{ride.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{ride.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
