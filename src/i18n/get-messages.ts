import type { Locale } from "./routing";

const messages = {
  fr: () => import("@/messages/fr.json").then((m) => m.default),
  en: () => import("@/messages/en.json").then((m) => m.default),
};

export async function getMessages(locale: Locale) {
  return messages[locale]();
}
