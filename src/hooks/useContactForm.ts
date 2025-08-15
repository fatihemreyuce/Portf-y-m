import { useEffect, useState } from "react";

export type FormState = {
  name: string;
  email: string;
  message: string;
};

const STORAGE_KEY = "contact_form";
const DEFAULT_FORM: FormState = { name: "", email: "", message: "" };

function loadFromStorage(): FormState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as FormState) : DEFAULT_FORM;
  } catch {
    return DEFAULT_FORM;
  }
}

export function useContactForm(initial?: FormState) {
  const [form, setForm] = useState<FormState>(initial ?? loadFromStorage());

  // Değiştikçe localStorage'a yaz
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    } catch {}
  }, [form]);

  const reset = () => {
    setForm(DEFAULT_FORM);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  return { form, setForm, reset };
}