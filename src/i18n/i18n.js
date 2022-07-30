import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    lng: "en",
    supportedLngs: ["en", "sp"],

    // Allows "en-US" and "en-UK" to be implcitly supported when "en"
    // is supported
    nonExplicitSupportedLngs: true,

    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    debug: process.env.NODE_ENV === "development",
  });

export default i18next;
