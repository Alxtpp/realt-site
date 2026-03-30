"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "@/i18n/provider";
import { cn } from "@/lib/utils";

const WEB3FORMS_ACCESS_KEY = "52d7116d-e01c-48f7-bdb4-bb65cd3a3ae5";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const { t } = useTranslations();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Nouveau message de ${data.firstName} ${data.lastName}`,
          from_name: `${data.firstName} ${data.lastName}`,
          replyto: data.email,
          phone: data.phone || "—",
          message: data.message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="py-12 text-center">
        <p className="text-lg text-brand-gray-600">{t("contact.success")}</p>
      </div>
    );
  }

  const inputClasses =
    "w-full border-b border-brand-gray-200 py-3 text-sm bg-transparent outline-none focus:border-brand-black transition-colors placeholder:text-brand-gray-400";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <input
            {...register("firstName", { required: true })}
            placeholder={t("contact.firstName")}
            className={cn(inputClasses, errors.firstName && "border-red-500")}
          />
        </div>
        <div>
          <input
            {...register("lastName", { required: true })}
            placeholder={t("contact.lastName")}
            className={cn(inputClasses, errors.lastName && "border-red-500")}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <input
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
            type="email"
            placeholder={t("contact.email")}
            className={cn(inputClasses, errors.email && "border-red-500")}
          />
        </div>
        <div>
          <input
            {...register("phone")}
            type="tel"
            placeholder={t("contact.phone")}
            className={inputClasses}
          />
        </div>
      </div>
      <div>
        <textarea
          {...register("message", { required: true })}
          placeholder={t("contact.message")}
          rows={5}
          className={cn(
            inputClasses,
            "resize-none",
            errors.message && "border-red-500"
          )}
        />
      </div>
      {error && (
        <p className="text-sm text-red-500">{t("contact.error")}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 sm:py-3 text-sm tracking-wider uppercase font-medium border border-brand-black text-brand-black hover:bg-brand-black hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? t("contact.sending") : t("contact.send")}
      </button>
    </form>
  );
}
