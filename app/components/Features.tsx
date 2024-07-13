import Image from "next/image";

const featureTexts = {
  title: "A million and one reasons to choose Tractpay"
}

const features = [
  {
    title: "Effortless Secure Digital Payments",
    subtitle: "Experience the joy of instant, secure payments to anyone, anywhere, with just a few clicks",
    image: "/assets/featureone.svg",
    icon: "/assets/payment.svg"
  },
  {
    title: "Simplified and Hassle-Free Fee Collection",
    subtitle: "Manage incoming payments like a pro, with streamlined fee collection that keeps your finances in check. ",
    image: "/assets/featuretwo.svg",
    icon: "/assets/transfer.svg"
  }
];

const Features = () => {
  return (
    <section className="w-full">
      <section className="space-y-16 flex flex-col justify-center items-center">
        <h2 className="text-5xl text-center font-extrabold text-slate-800 w-3/4 lg:w-full lg:text-3xl">
          {featureTexts.title}
        </h2>
        <section className="flex items-center space-x-6 w-full lg:flex-col lg:space-y-6 lg:space-x-0">
          {features.map((feature, index) => (
            <section key={index} className="overflow-clip w-1/2 h-[928px] px-12 pt-12 bg-neutral-100 rounded-3xl lg:px-8 lg:pt-8 lg:w-full lg:h-96 relative">
              <section className="space-y-8">
                <Image
                  src={feature.icon}
                  width={84}
                  height={84}
                  alt="feature-icon"
                />
                <h2 className="text-5xl font-bold text-slate-800 lg:text-3xl">
                  {feature.title}
                </h2>
                <p className="text-lg font-medium text-slate-500 lg:text-base">
                  {feature?.subtitle}
                </p>
                <section className="bottom-0 absolute -translate-x-3 lg:hidden">
                  <Image
                    src={feature.image}
                    width={608}
                    height={504}
                    alt="feature"
                  />
                </section>
              </section>
            </section>
          ))}
        </section>
      </section>
    </section>
  );
}

export default Features;
