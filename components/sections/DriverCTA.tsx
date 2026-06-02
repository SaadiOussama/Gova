"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Clock, LineChart, Users } from "lucide-react";
import { useDictionary } from "@/lib/DictContext";

const icons = [Clock, LineChart, Users];

export default function DriverCTA() {
  const dict = useDictionary();
  const { title, subtitle, benefits, cta, disclaimer } = dict.driverCTA;
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "fr";

  return (
    <section className="py-24 bg-gradient-to-br from-[#1A73E8] to-[#1e3a8a] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <Icon className="w-10 h-10 text-amber-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href={`/${lang}/chauffeur`}>
              <Button size="lg" className="bg-[#F59E0B] hover:bg-[#D97706] text-white rounded-xl h-14 px-10 text-lg shadow-xl shadow-amber-500/20 font-bold mb-6">
                {cta}
              </Button>
            </Link>
            
            <div className="inline-block bg-black/20 rounded-full px-6 py-2 text-sm font-medium text-blue-100 backdrop-blur-sm">
              {disclaimer}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
