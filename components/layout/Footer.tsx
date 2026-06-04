"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SiFacebook, SiInstagram, SiTiktok } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { useDictionary } from "@/lib/DictContext";

export default function Footer() {
  const dict = useDictionary();
  const { mission, columns, copyright } = dict.footer;
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "fr";

  return (
    <footer className="bg-[#111827] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Image src="/logo.png" alt="GOVA" width={100} height={40} className="object-contain" />
            </div>
            <p className="text-gray-400 mb-4 text-sm">{mission}</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><SiFacebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><SiInstagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaLinkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><SiTiktok className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">{columns.drivers.title}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {columns.drivers.links.map((link, i) => (
                <li key={i}><Link href={`/${lang}${link.href}`} className="hover:text-white transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">{columns.legal.title}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {columns.legal.links.map((link, i) => (
                <li key={i}><Link href={`/${lang}${link.href}`} className="hover:text-white transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <span>{copyright}</span>
          <a
            href="https://sadeeminfo.com/a-propos-de-nous"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Développé par Sadeem Informatique
          </a>
        </div>
      </div>
    </footer>
  );
}
