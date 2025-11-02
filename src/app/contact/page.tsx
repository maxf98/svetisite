"use client";

import ContactForm from "@/app/components/ContactForm";
import Image from "next/image";

import { useTranslation } from "../providers";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10473.432895573338!2d11.563447222489872!3d48.107794438128956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf153188d85f%3A0xe9dcd0557db4a812!2sThusneldastra%C3%9Fe%203%2C%2081543%20M%C3%BCnchen!5e0!3m2!1sen!2sde!4v1762111921084!5m2!1sen!2sde";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col items-center gap-12 py-12">
      <div className="mt-10 flex flex-col items-center gap-12">
        <div className="flex justify-center items-center w-full mt-10 sm:m-30">
          <ContactForm />
        </div>
        <div className="w-full flex flex-col sm:flex-row">
          <div className="flex-1 flex flex-col gap-6 px-6">
            <div className="space-y-2">
              <h3 className="text-3xl font-semibold">{t("location.title")}</h3>
              <p className="text-gray-600">{t("location.text")}</p>
            </div>

            <div className=" h-full w-full overflow-hidden rounded-xl border">
              <iframe
                title="Voice Academy Munich map"
                src={MAP_EMBED_URL}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-6 px-6 order-first sm:order-last">
            <div className="space-y-2">
              <h3 className="text-3xl font-semibold">{t("gutschein.title")}</h3>
              <p className="text-gray-600">{t("gutschein.text")}</p>
            </div>
            <Image
              className="rounded-xl border"
              src="/gutscheinn.jpg"
              alt="Gutschein"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
