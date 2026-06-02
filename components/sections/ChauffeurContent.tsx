"use client";

import { motion } from "framer-motion";
import DriverCTA from "@/components/sections/DriverCTA";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useDictionary } from "@/lib/DictContext";

export default function Chauffeur() {
  const dict = useDictionary();
  const { hero, requirements, steps } = dict.chauffeur;
  return (
    <main className="flex-1">
        
        {/* Hero */}
        <section className="bg-gray-50 dark:bg-gray-900 py-24 border-b border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >Devenez chauffeur <span className="text-primary">GOVA</span></motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {hero.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button size="lg" className="bg-[#F59E0B] hover:bg-[#D97706] text-white rounded-xl h-14 px-10 text-lg shadow-xl shadow-amber-500/20 font-bold">
                {hero.cta}
              </Button>
            </motion.div>
          </div>
        </section>

        <DriverCTA />

        {/* Requirements */}
        <section className="py-24 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">{requirements.title}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">{requirements.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.items.map((req, i) => (
                <div key={i} className="flex items-center gap-4 bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl border border-gray-100 dark:border-gray-600">
                  <CheckCircle2 className="w-8 h-8 text-green-500 shrink-0" />
                  <span className="font-semibold text-gray-800 dark:text-gray-100">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 dark:text-white tracking-tight mb-16">{steps.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.items.map((s, i) => (
                <div key={i} className="relative p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm">
                  <div className="w-14 h-14 bg-primary text-white font-bold text-2xl flex items-center justify-center rounded-2xl mb-6">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{s.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

    </main>
  );
}
