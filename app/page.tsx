"use client"
import Hero from "./components/Hero";
import FeatureGroup from "./components/FeatureGroup";
import Partners from "./components/Partners";
import Nav from "./components/Nav";
import CTA from "./components/CTA";
import FooterMain from "./components/FooterMain";
import CookiePolicy from "./components/CookiePolicy";
import MobileNav from "./components/MobileNav";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Home = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Retrieve the dark mode preference from cookies
    const darkModePreference = Cookies.get("isDarkMode") === "true";
    setIsDark(darkModePreference);
    document.documentElement.classList.toggle('dark', darkModePreference);
  }, []);

  const handleDark = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('dark', newIsDark);
    // Save the dark mode preference in cookies
    Cookies.set("isDarkMode", newIsDark.toString(), { expires: 365 });
  }

  return (
    <main className="bg-white dark:bg-slate-900 space-y-48">
      <section className="space-y-48 px-16 lg:px-8">
        <section className="space-y-12">
          <Nav isDark={isDark} handleDark={handleDark} />
          <MobileNav isDark={isDark} handleDark={handleDark} />
          <Hero isDark={isDark} />
        </section>
        <FeatureGroup isDark={isDark} />
        <Partners />
        <CTA />
      </section>
      <section className="w-full px-16 lg:px-4">
        <FooterMain />
      </section>
      <section className="sticky bottom-4">
        <CookiePolicy />
      </section>
    </main>
  );
}

export default Home;
