"use client";

import { createContext, useContext } from "react";

type Messages = Record<string, Record<string, string>>;

interface IntlContextType {
  locale: string;
  messages: Messages;
  t: (key: string) => string;
}

const IntlContext = createContext<IntlContextType | null>(null);

export function IntlProvider({
  locale,
  messages,
  children,
}: {
  locale: string;
  messages: Messages;
  children: React.ReactNode;
}) {
  const t = (key: string): string => {
    const [namespace, ...rest] = key.split(".");
    const messageKey = rest.join(".");
    return messages[namespace]?.[messageKey] ?? key;
  };

  return (
    <IntlContext.Provider value={{ locale, messages, t }}>
      {children}
    </IntlContext.Provider>
  );
}

export function useTranslations() {
  const context = useContext(IntlContext);
  if (!context) {
    throw new Error("useTranslations must be used within an IntlProvider");
  }
  return context;
}
