import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/routing";
import { getMessages } from "@/i18n/get-messages";
import { IntlProvider } from "@/i18n/provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages(locale as Locale);

  return (
    <html lang={locale} className={inter.className}>
      <body className="min-h-screen flex flex-col antialiased">
        <IntlProvider locale={locale} messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </IntlProvider>
      </body>
    </html>
  );
}
