"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

const ctaInfo = {
    title: "TractPay for Business",
    subtitle: "Join the Tractpay revolution and discover a world where managing your money is no longer a chore. Whether you’re looking to streamline your personal finances or seeking a reliable payment solution for your business, Tractpay is your go-to platform.",
    buttonImg: [
        { id: 1, name: "apple", img: "/assets/appstore.svg", href: "#" },
        { id: 2, name: "google", img: "/assets/playstore.svg", href: "#" }
    ],
    image: "/assets/cta.svg"
}

const CTA = () => {
    const router = useRouter();

    return (
        <section className="w-full bg-neutral-100 rounded-3xl">
            <section className="flex flex-col justify-center items-center px-24 pt-32 space-y-20 lg:px-8 lg:pt-12">
                <section className="space-y-12 text-center w-3/4 lg:w-full">
                    <h2 className="text-6xl font-extrabold text-slate-800 lg:text-3xl">
                        {ctaInfo.title}
                    </h2>
                    <p className="text-lg font-medium text-slate-500 lg:text-base">
                        {ctaInfo.subtitle}
                    </p>
                    <section className="flex space-x-6 items-center justify-center lg:space-x-4">
                        {ctaInfo.buttonImg.map((image)=> (
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
                <section className="w-full">
                    <Image
                        src={ctaInfo.image}
                        width={1084}
                        height={960}
                        alt={ctaInfo.title}
                    />
                </section>
            </section>
        </section>
    )
}

export default CTA;