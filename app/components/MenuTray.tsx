"use client"
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { PopoverButton } from "@headlessui/react";
import { ButtonInfo, NavChild } from "./Nav";
import { XMarkIcon } from "@heroicons/react/24/solid";

const MenuTray = () => {
    const router = useRouter();
    
    const navChildren: NavChild[] = [
        { id: 1, name: "Product", href: "#" },
        { id: 2, name: "Company", href: "#" },
        { id: 3, name: "Pricing", href: "#" },
    ];
    const buttonInfo: ButtonInfo =  { name: "Agent Login" };

    return (
        <section className="space-y-8 bg-white w-full h-full min-h-screen z-50 pb-96">
            <section className="space-y-12 px-36 py-8 lg:px-8">
                <section className="flex items-center justify-between w-full">
                    <section>
                        <Image
                            src="/assets/logo.svg" 
                            alt="tractpay logo" 
                            width={132}
                            height={36}                             
                        />
                    </section>
                    <section>
                        <PopoverButton>
                            <XMarkIcon className="text-slate-800 w-6 h-6 cursor-pointer" />
                        </PopoverButton>
                    </section>
                </section>
                {navChildren.map((item: any, index: number) => (
                    <motion.p 
                        className="text-lg text-slate-800 font-bold cursor-pointer" 
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
                <section className="space-y-12 flex justify-center">
                    <button className="flex items-center bg-indigo-500 h-12 px-4 rounded-full" onClick={() => router.push("/login")}>
                        <p className="whitespace-nowrap text-white font-medium">
                            {buttonInfo.name}
                        </p>
                    </button>
                </section>
            </section>
        </section>
    );
};

export default MenuTray;
