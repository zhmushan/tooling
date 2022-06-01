import { createI18n } from "vue-i18n";
import en from "./en.json";
import zh from "./zh.json";

type Locale = "zh" | "en";
type MessageSchema = typeof en;

export default createI18n<[MessageSchema], Locale>({
  locale: localStorage.getItem("locale") === "zh" ? "zh" : "en",
  messages: { en, zh },
});
