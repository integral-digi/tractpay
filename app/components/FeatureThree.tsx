import Image from "next/image";

const features = [
  {
    title: "Comprehensive Tracking",
    image: "/assets/featurefive.svg",
    icon: "/assets/track.svg"
  },
  {
    title: "Unmatched Security",
    image: "/assets/featurefour.svg",
    icon: "/assets/security.svg"
  },
  {
    title: "Check out our other products",
    buttonText: "Learn More"
  }
];

const FeaturesThree = () => {
  return (
    <section className="w-full">
      <section className="space-y-6">
        <section className="flex items-center space-x-6 w-full">
          {features.map((feature, index) => (
            <section
              key={index}
              className={`w-1/3 h-[460px] px-12 pt-12 rounded-3xl relative ${
                index === 2 ? "bg-black/80 text-white flex items-center justify-center cursor-pointer hover:bg-black" : "bg-neutral-100 text-gray-900"
              }`}
            >
              <section className="space-y-8">
                {index !== 2 && (
                  <>
                    <Image
                      src={feature.icon || "/assets/default.svg"}
                      width={84}
                      height={84}
                      alt="feature-icon"
                    />
                    <h2 className="text-5xl font-bold">
                      {feature.title}
                    </h2>
                    <section className="right-6 bottom-0 absolute">
                      <Image
                        src={feature.image || "/assets/default.svg"}
                        width={400}
                        height={140}
                        alt="feature"
                      />
                    </section>
                  </>
                )}
                {index === 2 && (
                  <>
                    <h2 className="text-5xl font-bold">
                      {feature.title}
                    </h2>
                    <button className="bg-indigo-500 text-white font-medium h-14 flex items-center justify-center px-6 rounded-full">
                      {feature.buttonText}
                    </button>
                  </>
                )}
              </section>
            </section>
          ))}
        </section>
      </section>
    </section>
  );
}

export default FeaturesThree;
