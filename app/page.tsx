import Hero from "./components/Hero";
import FeatureGroup from "./components/FeatureGroup";
import Partners from "./components/Partners";
import Nav from "./components/Nav";
import CTA from "./components/CTA";
import FooterMain from "./components/FooterMain";
import CookiePolicy from "./components/CookiePolicy";
import MobileNav from "./components/MobileNav";

const Home = () => {
  return (
    <main className="bg-white space-y-48">
      <section className="space-y-48 px-16 lg:px-8">
        <section className="space-y-12">
          <Nav />
          <MobileNav />
          <Hero />
        </section>
        <FeatureGroup />
        <Partners />
        <CTA />
      </section>
      <section className="sticky bottom-4">
        <CookiePolicy />
      </section>
      <section className="w-full px-16 lg:px-4">
        <FooterMain />
      </section>
    </main>
  )
}

export default Home;