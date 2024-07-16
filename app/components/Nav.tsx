"use client"
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export interface NavChild {
    id: number;
    name: string;
    href: string;
}

export interface ButtonInfo {
    name: string;
}

export interface DarkProps {
    isDark: boolean;
    handleDark?: () => void;
}

const Nav: React.FC<DarkProps> = ({ isDark, handleDark }) => {
    const router = useRouter();

    const navChildren: NavChild[] = [
        { id: 1, name: "Product", href: "#" },
        { id: 2, name: "Company", href: "#" },
        { id: 3, name: "Pricing", href: "#" },
    ];
    const buttonInfo: ButtonInfo =  { name: "Agent Login" };

    return (
        <nav className="w-full flex items-center justify-between py-6 lg:hidden z-30">
            <section className="w-fit">
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
            </section>
            <section className="w-fit flex space-x-20 items-center">
                {/* Mapping the primary navigation links */}
                {navChildren.map((child) => (
                    <section className="flex items-center space-x-20" key={child.id}>
                        <Link href={child.href}>
                            <p className="text-base text-slate-800 dark:text-white font-medium">{child.name}</p>
                        </Link>
                    </section>
                ))}
            </section>
            <section className="flex space-x-16 items-center">
                {
                    isDark ? <SunIcon className=" text-slate-800 dark:text-white w-4 h-4 cursor-pointer" onClick={handleDark} />
                    : <MoonIcon className="dark:text-white text-slate-800 w-5 h-5 cursor-pointer" onClick={handleDark} />
                } 
                <Link href="#" target="_blank" passHref>
                    <p className="text-slate-800 dark:text-white font-medium text-nowrap">
                        Download Now
                    </p>
                </Link>
                <button 
                    className="flex items-center justify-center space-x-2 bg-indigo-500 rounded-full h-14 px-8 hover:bg-indigo-700" 
                    onClick={() => router.push("/login")}
                >
                    <p className="whitespace-nowrap text-white font-medium">
                        {buttonInfo.name}
                    </p>
                </button>
            </section>
        </nav>
    );
};

export default Nav;
