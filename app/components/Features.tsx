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
        <h2 className="text-6xl text-center font-extrabold text-gray-900 w-3/4">
          {featureTexts.title}
        </h2>
        <section className="flex items-center space-x-6 w-full">
          {features.map((feature, index) => (
            <section key={index} className="w-1/2 h-[928px] px-12 pt-12 bg-neutral-100 rounded-3xl relative">
              <section className="space-y-8">
                <Image
                  src={feature.icon}
                  width={84}
                  height={84}
                  alt="feature-icon"
                />
                <h2 className="text-5xl font-bold text-gray-900">
                  {feature.title}
                </h2>
                <p className="text-lg font-medium text-slate-500">
                  {feature?.subtitle}
                </p>
                <section className="mx-auto bottom-0 absolute">
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
