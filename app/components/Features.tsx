import Image from "next/image"

const features = [
    { title: "Effortless Secure Digital Payments", subtitle: "Experience the joy of instant, secure payments to anyone, anywhere, with just a few clicks", image: "/assets/featureone.svg", icon:"/assets/payment.svg" },
    { title: "Simplified and Hassle-Free Fee Collection", subtitle: "Manage incoming payments like a pro, with streamlined fee collection that keeps your finances in check. ", image: "/assets/featuretwo.svg", icon: "/assets/transfer.svg" },
    { title: "", subtitle: "", image: "" },
    { title: "", subtitle: "", image: "" },
    { title: "", subtitle: "", image: "" },
]
const Features = () => {
    return (
        <section className="">
            <section className="space-y-6">
                <section className="flex items-center space-x-6 w-full">
                    <section className="w-1/2 px-12 pt-12 bg-neutral-100 rounded-3xl">
                        <section className="space-y-8">
                            <Image
                                src={features[0].icon}
                                width={84}
                                height={84}
                                alt="feature-icon"
                            />
                            <h2 className="text-5xl font-bold text-gray-900">
                                {features[0].title}
                            </h2>
                            <p className="">
                                {features[0].subtitle}
                            </p>
                            <section className="mx-auto">
                                <Image
                                    src={features[0].image}
                                    width={608}
                                    height={504}
                                    alt="feature"
                                />
                            </section>
                        </section>
                    </section>
                    <section className="w-1/2 px-12 pt-12 bg-neutral-100 rounded-3xl">
                        <section className="space-y-8">
                            <Image
                                src={features[1].icon}
                                width={84}
                                height={84}
                                alt="feature-icon"
                            />
                            <h2 className="text-5xl font-bold text-gray-900">
                                {features[1].title}
                            </h2>
                            <p className="">
                                {features[1].subtitle}
                            </p>
                            <section className="bottom-0 mx-auto mt-8">
                                <Image
                                    src={features[1].image}
                                    width={608}
                                    height={504}
                                    alt="feature"
                                />
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Features;