"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useDictionary } from "@/lib/DictContext";
import { QRCodeSVG } from "qrcode.react";

// Replace with the actual universal app link when available
const APP_DOWNLOAD_URL = "https://gova.dz/download";

export default function DownloadBanner() {
  const dict = useDictionary();
  const { title, subtitle, googlePlayAlt, appStoreAlt } = dict.downloadBanner;
  return (
    <section className="py-24 bg-[#EAB84C] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white/10 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16 border border-white/20">
          <motion.div 
            className="flex-1 text-center md:text-start text-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{title}</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-xl mx-auto md:mx-0">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center flex-wrap">
              <a href="#" className="transition-transform hover:scale-105">
                <Image src="/X 1.png" alt={appStoreAlt} width={160} height={48} className="h-12.5 w-auto" />
              </a>
              <a href="#" className="transition-transform hover:scale-105">
                <Image src="/X 2.png" alt={googlePlayAlt} width={160} height={48} className="h-12.5 w-auto" />
              </a>
              {/* QR Code — direct download from desktop */}
              <div className="hidden lg:flex flex-col items-center gap-2 ms-2">
                <div className="bg-white p-2 rounded-xl shadow-md">
                  <QRCodeSVG
                    value={APP_DOWNLOAD_URL}
                    size={80}
                    bgColor="#ffffff"
                    fgColor="#111827"
                    level="M"
                  />
                </div>
                <span className="text-xs text-blue-100 text-center max-w-22.5 leading-tight">
                  Scanner pour télécharger
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/P2.png"
              alt="GOVA App"
              width={460}
              height={600}
              className="w-full max-w-sm md:max-w-md h-auto drop-shadow-2xl rotate-12 hover:rotate-0 transition-transform duration-500 -mb-16"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
