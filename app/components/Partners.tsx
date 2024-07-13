import Image from "next/image";

const partnersInfo = {
  title: "20+ Partners and counting",
  subtitle: "We collaborate with industry leaders to provide the best payment solutions.",
  brands: [
    { id: 1, name: "Apple Pay", logo: "/assets/apple.svg" },
    { id: 2, name: "Stripe", logo: "/assets/stripe.svg" },
    { id: 3, name: "PayPal", logo: "/assets/paypal.svg" },
    { id: 4, name: "Google Pay", logo: "/assets/googlepay.svg" },
    { id: 5, name: "Paytm", logo: "/assets/paytm.svg" },
    { id: 6, name: "Razorpay", logo: "/assets/razorpay.svg" },
    { id: 7, name: "Coinbase", logo: "/assets/coinbase.svg" },
    { id: 8, name: "Skrill", logo: "/assets/skrill.svg" }
  ]
};

const Partners = () => {
  return (
    <section className="w-full space-y-24 flex flex-col items-center justify-center">
      <section className="space-y-6 text-center">
        {partnersInfo.title && (
          <h2 className="text-6xl font-extrabold text-slate-800 w-[90%] lg:text-3xl lg:w-full">
            {partnersInfo.title}
          </h2>
        )}
        {partnersInfo.subtitle && (
          <p className="text-lg text-slate-500 font-medium lg:text-base">
            {partnersInfo.subtitle}
          </p>
        )}
      </section>
      <section className="flex gap-6 flex-wrap justify-center lg:gap-4">
        {partnersInfo.brands.map((brand) => (
          <section
            key={brand.id}
            className="w-[23%] px-12 h-40 bg-neutral-100 rounded-3xl flex items-center justify-center lg:w-[40%] lg:px-2"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-12 w-auto lg:h-6"
            />
          </section>
        ))}
      </section>
    </section>
  );
};

export default Partners;
