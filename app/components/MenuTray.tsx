"use client"
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Popover } from "@headlessui/react";
import { ButtonInfo, NavChild } from "./Nav";

const MenuTray = () => {
    const router = useRouter();
    
    const navChildren: NavChild[] = [
        { id: 1, name: "Product", href: "#" },
        { id: 2, name: "Company", href: "#" },
        { id: 3, name: "Pricing", href: "#" },
    ];
    const buttonInfo: ButtonInfo =  { name: "Agent Login", href: "#" };

    return (
        <section className="space-y-8 bg-neutral-100 w-full h-full min-h-screen z-50 pb-96">
            <section className="space-y-12 px-36 py-16 lg:px-8">
                <section className="flex items-center justify-between w-full">
                    <section>
                        <Image
                            src="/assets/logomark.svg" 
                            alt="tractpay logo" 
                            width={132}
                            height={36}                             
                        />
                    </section>
                    <section>
                        <Popover.Button>
                            <p className="text-lg text-gray-900 font-black cursor-pointer">
                                { "Close" }
                            </p>
                        </Popover.Button>
                    </section>
                </section>
                {navChildren.map((item: any, index: number) => (
                    <motion.p 
                        className="text-lg text-gray-900 font-black cursor-pointer" 
                        key={index} 
                        onClick={() => router.push(item.href)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }} 
                        exit={{ opacity: 0 }}
                    >
                        {item.name.toUpperCase()}
                    </motion.p>
                ))}
                <section className="space-y-12">
                    <button className="flex items-center space-x-2" onClick={() => router.push("/login")}>
                        <p className="whitespace-nowrap text-gray-900 font-medium">
                            {buttonInfo.name}
                        </p>
                    </button>
                </section>
            </section>
        </section>
    );
};

export default MenuTray;
