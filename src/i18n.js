import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const userLang = navigator.language || navigator.userLanguage;  
const shortLang = userLang.split("-")[0]; // ex: "fr" au lieu de "fr-FR"

i18n
  .use(initReactI18next)
  .init({
    lng: shortLang,   // langue détectée automatiquement
    fallbackLng: "en", // si la langue n'existe pas, utiliser anglais
    resources: {
      fr: {
        translation: {
          welcome: "Bienvenue sur notre site",
          search: "Rechercher un produit",
          cart: "Panier",
        }
      },
      en: {
        translation: {
          welcome: "Welcome to our website",
          search: "Search a product",
          cart: "Cart",
        }
      }
    }
  });

export default i18n;
