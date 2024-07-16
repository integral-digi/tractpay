"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const footerTexts = {
  logo: "/assets/logomark.svg",
  buttonImg: [
    { id: 1, name: "apple", img: "/assets/appstore.svg", href: "#" },
    { id: 2, name: "google", img: "/assets/playstore.svg", href: "#" }
  ],
  stayInTheLoop: "Stay in the loop",
  mailingList: "Join our mailing list and stay up to date on features and product updates.",
  subscribe: "Subscribe",
  privacyPolicy: "Privacy Policy",
  quicklinks: "Quicklinks",
  quicklinkItems: [
    { text: "Home", href: "#" },
    { text: "About", href: "#" },
    { text: "Products", href: "#" },
    { text: "Pricing", href: "#" }
  ],
  company: "Company",
  companyItems: [
    { text: "Terms of Service", href: "#" },
    { text: "Privacy Policy", href: "#" },
    { text: "AML/KYC Policy", href: "#" },
    { text: "Careers", href: "#" }
  ],
  community: "Community",
  communityItems: [
    { text: "Help Center", href: "#" },
    { text: "Forum", href: "#" },
    { text: "Webinars", href: "#" },
    { text: "Professionals", href: "#" }
  ],
  socials: [
    { name: "x", href: "x.com", icon: "/assets/x.svg" },
    { name: "facebook", href: "x.com", icon: "/assets/facebook.svg" },
    { name: "instagram", href: "x.com", icon: "/assets/instagram.svg" },
    { name: "github", href: "x.com", icon: "/assets/github.svg" },
    { name: "linkedin", href: "x.com", icon: "/assets/linkedin.svg" }
  ],
  footerNote: "© 2024 Tractpay Inc. All rights reserved."
};

const FooterMain: React.FC = () => {
  const router = useRouter();

  return (
    <motion.footer 
      className="w-full space-y-10 pb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <section className="bg-neutral-900 dark:bg-slate-900 rounded-3xl">
        <section className="container mx-auto p-24 lg:w-full lg:px-8 lg:py-12 space-y-12">
          <motion.section
            className="rounded-full bg-indigo-500 p-8 w-fit"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
          >
            <Image
              src="/assets/envelope.svg"
              width={24}
              height={24}
              alt="envelope"
            />
          </motion.section>
          <section className="w-full mb-12 flex items-start justify-between lg:flex-col lg:space-y-6">
            <section className="w-1/2 space-y-4 lg:w-full">
              <h4 className="font-bold text-white mb-4 text-6xl lg:text-3xl">
                {footerTexts.stayInTheLoop}
              </h4>
              <p className="text-white/80 text-sm font-medium w-[70%] lg:w-full">
                {footerTexts.mailingList}
              </p>
            </section>
            <section className="w-1/2 lg:w-full">
              <form className="flex space-x-4 items-center w-full lg:flex-col lg:space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email here"
                  className="pl-8 h-14 rounded-full bg-black/50 w-full"
                />
                <button
                  type="submit"
                  className="px-4 h-14 bg-indigo-500 text-white rounded-full hover:bg-indigo-700 lg:w-full"
                >
                  {footerTexts.subscribe}
                </button>
              </form>
              <p className="text-white/80 mt-4 text-sm">
                By subscribing, you agree to our <Link href="#" className="underline text-base hover:text-cyan">{footerTexts.privacyPolicy}</Link>.
              </p>
            </section>
          </section>
          <hr className="border-gray-600 w-full" />
          <section className="flex items-start justify-between lg:flex-col lg:space-y-12">
            <section className="space-y-8">
              <Image
                src={footerTexts.logo}
                width={100}
                height={32}
                alt="tractpay-logo"
              />
              <section className="flex space-x-6 items-center">
                {footerTexts.buttonImg.map((image) => (
                  <button
                    key={image.id}
                    onClick={() => router.push(image.href)}
                    className="h-16 px-4 rounded-full bg-gray-700 hover:bg-black"
                  >
                    <img src={image.img} className="w-auto h-8" alt={image.name} />
                  </button>
                ))}
              </section>
            </section>
            <section className="flex flex-wrap justify-between lg:flex-col lg:space-y-12">
              <section className="flex lg:flex-col space-x-24 lg:space-y-8 lg:space-x-0">
                <section>
                  <h4 className="font-bold text-white mb-4">{footerTexts.quicklinks}</h4>
                  <ul className="space-y-2">
                    {footerTexts.quicklinkItems.map((item, index) => (
                      <li key={index}><a href={item.href} className="text-white text-base hover:text-cyan hover:underline">{item.text}</a></li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h4 className="font-bold text-white mb-4">{footerTexts.company}</h4>
                  <ul className="space-y-2">
                    {footerTexts.companyItems.map((item, index) => (
                      <li key={index}><a href={item.href} className="text-white text-base hover:text-cyan hover:underline">{item.text}</a></li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h4 className="font-bold text-white mb-4">{footerTexts.community}</h4>
                  <ul className="space-y-2">
                    {footerTexts.communityItems.map((item, index) => (
                      <li key={index}><a href={item.href} className="text-white text-base hover:text-cyan hover:underline">{item.text}</a></li>
                    ))}
                  </ul>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
      <section className="flex items-center justify-between lg:flex-col lg:space-y-6">
        <section className="text-slate-500 dark:text-white/80 text-sm">
          {footerTexts.footerNote}
        </section>
        <section className="flex items-center space-x-4">
          {footerTexts.socials.map((social) => (
            <section key={social.name} className={`w-12 h-12 flex items-center justify-center hover:bg-cyan-400 rounded-xl lg:h-10 lg:w-10 ${social.name === "facebook" ? "bg-indigo-500" : "bg-white dark:bg-neutral-100"}`}>
              <Link href={social.href} passHref>
                <img className="w-4 h-4 lg:h-4 lg:w-4" src={social.icon} alt={social.name} />
              </Link>
            </section>
          ))}
        </section>
      </section>
    </motion.footer>
  );
}

export default FooterMain;
