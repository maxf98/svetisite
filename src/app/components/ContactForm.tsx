"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { MdSend } from "react-icons/md";
import { useTranslation } from "../providers";
import { FaEnvelope } from "react-icons/fa";
import IconButton from "./IconButton";
import Link from "next/link";

import styles from "./ContactForm.module.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: () => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const { t } = useTranslation();
  const [status, setStatus] = useState<string>("");
  const [didSubmit, setDidSubmit] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });
    console.log(res);

    if (res.ok) {
      setStatus("Message sent!");
      setDidSubmit(true);
      setTimeout(() => {
        onSubmit?.();
      }, 500);
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message.");
    }
  };

  return (
    <div id="contact" className={styles.contactContainer}>
      <div className="flex flex-col gap-4">
        <h2>{t("contact.title")}</h2>
        <p className={styles.contactText}>{t("contact.text")}</p>
      </div>
      <div className="w-full relative">
        <motion.div
          className="w-full"
          animate={{
            opacity: didSubmit ? 0 : 1,
            x: didSubmit ? 300 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className="flex flex-col flex-1 gap-4">
              <div className={styles.nameAndEmail}>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t("contact.name")}
                  className={styles.entryField}
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t("contact.mail")}
                  className={styles.entryField}
                />
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t("contact.message")}
                className={`${styles.entryField} ${styles.message}`}
              />
            </div>

            <motion.button
              className={styles.submitButton}
              aria-label="Submit contact form"
              disabled={
                form.name === "" || form.email === "" || form.message === ""
              }
              type="submit"
              initial={{ color: "var(--text-color)" }}
              whileHover={{
                color: "var(--accent-color)",
                transform: "translateX(15px)",
                scale: 1.1,
              }}
            >
              <MdSend size="100px" />
            </motion.button>
          </form>
        </motion.div>

        {didSubmit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <h2 className="text-4xl font-bold text-center">
              {t("contact.sent")}
            </h2>
          </motion.div>
        )}
      </div>
    </div>
  );
}
