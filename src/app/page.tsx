"use client";

import Image from "next/image";
import { StaggeredFade } from "./components/AnimatedText";
import Referrals from "./components/Referrals";
import { OfferInstance, OfferSection } from "./components/OfferSection";
import ContactButton from "./components/ContactButton";
import Resonanz from "./components/Resonanz";

import { useTranslation } from "./providers";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:gap-16 sm:p-20 whitespace-pre-line max-w-[1000px]">
      <section className="relative flex flex-col w-full h-screen justify-center">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 flex flex-col justify-center gap-2 sm:gap-6">
            <h1 className="text-[var(--accent-color)] font-bold w-full text-start">
              {t("hero.title")}
            </h1>
            <h2 className="text-xl !mt-0 font-semibold">
              {t("hero.subtitle")}
            </h2>

            <ContactButton label={t("hero.button")} />
          </div>
          <div className="flex-1 sm:flex-1.5 order-first sm:order-last">
            <Image
              className="object-contain"
              src="/heroo.png"
              alt="vam hero visual"
              width={700}
              height={700}
            />
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col sm:flex-row items-center gap-12">
        <Image
          className="border rounded-xl"
          src="/sveti.jpg"
          alt="svetlana prandetskaya"
          width={400}
          height={800}
        />
        <div className="flex flex-col p-2 sm:p-20 gap-10">
          <h2>{t("about.title")}</h2>
          <p className="">{t("about.aboutSveti")}</p>
          <div className="p-8 sm:p-20">
            <Resonanz />
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col sm:flex-row items-center gap-12">
        <div className="flex flex-col p-2 sm:p-20 gap-10">
          <h2>{t("aboutschool.title")}</h2>
          <p>{t("aboutschool.about")}</p>
        </div>
        <Image
          className="border rounded-xl"
          src="/mom1.png"
          alt="svetlana prandetskaya"
          width={800}
          height={800}
        />
      </section>

      <section>
        <OfferSection
          title={t("offers.gesangsunterricht.title")}
          subtitle={t("offers.gesangsunterricht.subtitle")}
          text={t("offers.gesangsunterricht.text")}
          bulletpoints={t("offers.gesangsunterricht.bulletpoints", {
            returnObjects: true,
          })}
        />
        <OfferInstance
          title={t("offers.jahresabschlusskonzert.title")}
          textKey={"offers.jahresabschlusskonzert.text"}
          image="/abschlusskonzert.png"
        >
          <div className="flex flex-row">
            <div className="flex-0 sm:flex-1" />
            <div className="flex-1">
              <Referrals />
            </div>
          </div>
        </OfferInstance>

        <div className="h-32" />
        <OfferSection
          title={t("offers.vocalcoaching.title")}
          subtitle={t("offers.vocalcoaching.subtitle")}
          text={t("offers.vocalcoaching.text")}
          bulletpoints={t("offers.vocalcoaching.bulletpoints", {
            returnObjects: true,
          })}
        />
        <OfferInstance
          title={t("offers.masterclass.title")}
          textKey={"offers.masterclass.text"}
          image="/masterclass.png"
        />
      </section>

      <div className="w-full h-256 justify-center items-center flex flex-col">
        <StaggeredFade text={t("quote.quote")} />
        <ContactButton className="mt-20" label={t("quote.button")} />
      </div>
    </div>
  );
}
