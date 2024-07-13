import Image from "next/image";

const features = {
    title: "Easier and Faster Money Transfers",
    subtitle: "Move your money with ease—be it between your own accounts or across borders, we've got it all covered.",
    image: "/assets/featurethree.svg",
    icon: "/assets/crossborder.svg"
}

const FeaturesTwo =() => {
    return (
        <section className="w-full bg-neutral-100 rounded-3xl">
            <section className="flex items-center justify-between px-12 pt-12">
                <section className="space-y-8">
                    <Image
                        src={features.icon}
                        width={84}
                        height={84}
                        alt="feature"
                    />
                    <h2 className="text-5xl font-bold text-gray-900">
                        {features.title}
                    </h2>
                    <p className="text-lg font-medium text-slate-500">
                        {features.subtitle}
                    </p>
                </section>
                <section className="w-full">
                    <Image
                        src={features.image}
                        width={816}
                        height={540}
                        alt="feature"
                    />
                </section>
            </section>
        </section>
    )
}

export default FeaturesTwo;