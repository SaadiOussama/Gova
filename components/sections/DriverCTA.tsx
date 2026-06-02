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
    <section className="py-24 bg-gradient-to-br from-[#111827] to-[#1f2937] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#EAB84C]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#EAB84C]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
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
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-[#EAB84C]/40 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <div className="w-14 h-14 bg-[#EAB84C]/15 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#EAB84C]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href={`/${lang}/chauffeur`}>
              <Button size="lg" className="bg-[#EAB84C] hover:bg-[#d4a43e] text-[#111827] rounded-xl h-14 px-10 text-lg shadow-xl shadow-[#EAB84C]/20 font-bold">
                {cta}
              </Button>
            </Link>
            
            <div className="bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm font-medium text-gray-400 backdrop-blur-sm">
              {disclaimer}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
