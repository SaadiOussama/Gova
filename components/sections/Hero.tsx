"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useDictionary } from "@/lib/DictContext";

export default function Hero() {
  const dict = useDictionary();
  const h = dict.hero;
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1A73E8]/10 to-white min-h-[90vh] flex items-center pt-20 pb-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div 
            className="flex-1 text-center lg:text-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#111827] leading-tight mb-6 tracking-tight">
              {h.titleLine1} <br />
              <span className="text-primary">{h.titleHighlight}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
              {h.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a href="#" className="transition-transform hover:scale-105">
                <Image src="/X 2.png" alt={h.googlePlayAlt} width={160} height={48} className="h-[50px] w-auto" />
              </a>
              <a href="#" className="transition-transform hover:scale-105">
                <Image src="/X 1.png" alt={h.appStoreAlt} width={160} height={48} className="h-[50px] w-auto" />
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500 font-medium">
              {h.badge}
            </p>
          </motion.div>

          {/* Right Content - Phone Image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/P1.png"
              alt="GOVA App"
              width={420}
              height={560}
              className="w-full max-w-[500px] h-auto drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
