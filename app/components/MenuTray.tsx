"use client"
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { PopoverButton } from "@headlessui/react";
import { ButtonInfo, DarkProps, NavChild } from "./Nav";
import { MoonIcon, SunIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import Link from "next/link";

const MenuTray: React.FC<DarkProps> = ({isDark, handleDark}) => {
    const router = useRouter();
    
    const navChildren: NavChild[] = [
        { id: 1, name: "Product", href: "#" },
        { id: 2, name: "Company", href: "#" },
        { id: 3, name: "Pricing", href: "#" },
    ];
    const buttonInfo: ButtonInfo =  { name: "Agent Login" };

    return (
        <section className="space-y-8 bg-white dark:bg-slate-900 w-full h-full min-h-screen z-50 pb-96">
            <section className="space-y-12 px-36 py-12 lg:px-8">
                <section className="flex items-center justify-between w-full">
                    <section>
                        <Link href="/" passHref>
                            <Image
                                src={`${isDark ? "/assets/logomark.svg" : "/assets/logo.svg" }`}
                                alt="tractpay" 
                                width={`${isDark ? 120 : 132 }`}
                                height={`${isDark ? 24 : 36 }`}
                            />
                        </Link>
                    </section>
                    <section>
                        <PopoverButton>
                            <XMarkIcon className="text-slate-800 dark:text-white w-6 h-6 cursor-pointer" />
                        </PopoverButton>
                    </section>
                </section>
                {navChildren.map((item: any, index: number) => (
                    <motion.p 
                        className="text-lg text-slate-800 dark:text-white font-bold cursor-pointer" 
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
                <section className="flex items-center space-x-8 justify-center">
                    <section>
                        {
                            isDark ? <SunIcon className=" text-slate-800 dark:text-white w-4 h-4 cursor-pointer" onClick={handleDark} />
                            : <MoonIcon className="dark:text-white text-slate-800 w-5 h-5 cursor-pointer" onClick={handleDark} />
                        } 
                    </section>
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
