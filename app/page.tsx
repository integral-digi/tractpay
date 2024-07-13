import Hero from "./components/Hero";
import Features from "./components/Features";
import FeaturesTwo from "./components/FeaturesTwo";
import FeaturesThree from "./components/FeatureThree";
import Partners from "./components/Partners";
import Nav from "./components/Nav";
import CTA from "./components/CTA";
import FooterMain from "./components/FooterMain";

const Home = () => {
  return (
    <main className="bg-white text-gray-800">
      <section className="space-y-48 px-16">
        <section className="space-y-12">
          <Nav />
          <Hero />
        </section>
        <section className="space-y-6">
          <Features />
          <FeaturesTwo />
          <FeaturesThree />
        </section>
        <Partners />
        <CTA />
        <FooterMain />
      </section>
    </main>
  )
}

export default Home;