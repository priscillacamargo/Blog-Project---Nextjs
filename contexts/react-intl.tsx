import { createContext, useMemo } from "react";
import { IntlProvider } from "react-intl";
import flat from "flat";

import enMessages from "../locales/en.json";
import ptMessages from "../locales/pt.json";
import nlMessages from "../locales/nl.json";
import { useRouter } from "next/router";

export type SupportedLanguages = "en" | "pt" | "nl";
export type LocalizationContextType = {
  switchToPortuguese(): void;
  switchToEnglish(): void;
  switchToDutch(): void;
  switchLocale(nextLocale: SupportedLanguages): void;
};

export const LocalizationContext = createContext<
  LocalizationContextType | undefined
>(undefined);

const localizedMessages = {
  en: enMessages,
  pt: ptMessages,
  nl: nlMessages,
};

export const LocalizationProvider: React.FC = ({ children }) => {
  const { locale, push, route } = useRouter();

  function switchLocale(nextLocale: SupportedLanguages): void {
    /**
     * This is the way Next recommends to switch locale programmatically.
     * Basically we need to pass the same route we're with the next locale
     * and Next will handle the logic for us
     */

    push(route, route, { locale: nextLocale });
  }

  function switchToEnglish(): void {
    switchLocale("en");
  }

  function switchToPortuguese(): void {
    switchLocale("pt");
  }

  function switchToDutch(): void {
    switchLocale("nl");
  }

  const messages = useMemo(
    () =>
      flat(localizedMessages[locale! as SupportedLanguages]) as Record<
        string,
        string
      >,
    [locale]
  );

  return (
    <IntlProvider locale={locale!} messages={messages}>
      <LocalizationContext.Provider
        value={{
          switchToPortuguese,
          switchToEnglish,
          switchToDutch,
          switchLocale,
        }}
      >
        {children}
      </LocalizationContext.Provider>
    </IntlProvider>
  );
};
