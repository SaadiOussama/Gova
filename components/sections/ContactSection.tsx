"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { SiFacebook, SiInstagram, SiTiktok } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useDictionary } from "@/lib/DictContext";

type FormData = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

export default function ContactSection() {
  const dict = useDictionary();
  const { title, subtitle, form, info } = dict.contact;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, phone: data.phone ? `+213${data.phone}` : undefined }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
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
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            className="flex-1 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl p-8 shadow-xl shadow-gray-200/50 dark:shadow-gray-900/50"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full py-16 gap-4 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{form.successTitle ?? "Message envoyé !"}</h3>
                <p className="text-gray-600 dark:text-gray-300">{form.successMessage ?? "Nous vous répondrons dans les plus brefs délais."}</p>
                <Button onClick={() => setStatus("idle")} className="mt-4 rounded-xl bg-primary text-white">
                  {form.sendAnother ?? "Envoyer un autre message"}
                </Button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-2">
                  <Label htmlFor="name">{form.fullName}</Label>
                  <Input
                    id="name"
                    placeholder={form.fullNamePlaceholder}
                    className={`h-12 rounded-xl ${errors.name ? "border-red-400 focus-visible:ring-red-400" : ""}`}
                    {...register("name", { required: true, minLength: 2 })}
                  />
                  {errors.name && <p className="text-xs text-red-500">Ce champ est requis (min. 2 caractères)</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">{form.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={form.emailPlaceholder}
                      className={`h-12 rounded-xl ${errors.email ? "border-red-400 focus-visible:ring-red-400" : ""}`}
                      {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                    />
                    {errors.email && <p className="text-xs text-red-500">Adresse email invalide</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{form.phone}</Label>
                    <div className="flex">
                      <div className="flex items-center justify-center bg-gray-50 dark:bg-gray-700 border border-r-0 border-gray-200 dark:border-gray-600 px-3 rounded-s-xl text-gray-500 dark:text-gray-400 font-medium text-sm shrink-0">
                        +213
                      </div>
                      <Input
                        id="phone"
                        placeholder={form.phonePlaceholder}
                        className="h-12 rounded-s-none rounded-e-xl"
                        {...register("phone")}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">{form.subject}</Label>
                  <select
                    id="subject"
                    className={`flex h-12 w-full rounded-xl border border-input dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-gray-700 dark:text-gray-200 ${errors.subject ? "border-red-400" : ""}`}
                    {...register("subject", { required: true, validate: (v) => v !== "" })}
                  >
                    <option value="">{form.subjectPlaceholder}</option>
                    {form.subjects.map((s, i) => (
                      <option key={i} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.subject && <p className="text-xs text-red-500">Veuillez choisir un sujet</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{form.message}</Label>
                  <Textarea
                    id="message"
                    placeholder={form.messagePlaceholder}
                    className={`min-h-[120px] rounded-xl resize-none ${errors.message ? "border-red-400 focus-visible:ring-red-400" : ""}`}
                    {...register("message", { required: true, minLength: 10 })}
                  />
                  {errors.message && <p className="text-xs text-red-500">Le message doit contenir au moins 10 caractères</p>}
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500">{form.errorMessage ?? "Une erreur est survenue. Réessayez."}</p>
                )}

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-lg shadow-md shadow-primary/20 disabled:opacity-60"
                >
                  {status === "loading" ? "..." : form.send}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">{info.title}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{info.addressLabel}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{info.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{info.phoneLabel}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{info.phoneValue}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{info.emailLabel}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{info.emailValue}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{info.hoursLabel}</h4>
                    <p className="text-gray-600 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: info.hoursValue }} />
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{info.followUs}</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:text-primary hover:border-primary rounded-full flex items-center justify-center transition-all">
                    <SiFacebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:text-primary hover:border-primary rounded-full flex items-center justify-center transition-all">
                    <SiInstagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:text-primary hover:border-primary rounded-full flex items-center justify-center transition-all">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:text-primary hover:border-primary rounded-full flex items-center justify-center transition-all">
                    <SiTiktok className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
