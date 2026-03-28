"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "@/i18n/provider";
import { cn } from "@/lib/utils";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
    setSubmitted(true);
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
      <button
        type="submit"
        className="inline-flex items-center justify-center px-8 py-3 text-sm tracking-wider uppercase font-medium border border-brand-black text-brand-black hover:bg-brand-black hover:text-white transition-colors duration-300"
      >
        {t("contact.send")}
      </button>
    </form>
  );
}
