'use client'
import { useLangToggle } from "../context/LangToggleContext";

export function ContextAccess() {
  const { isHindi, toggleLang } = useLangToggle();
  return { isHindi, toggleLang };
}
