"use client";

import Link from "next/link";
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">GOVA</h3>
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
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          {copyright}
        </div>
      </div>
    </footer>
  );
}
