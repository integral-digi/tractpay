"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NavChild {
    id: number;
    name: string;
    href: string;
}

interface ButtonInfo {
    name: string;
}

const Nav: React.FC = () => {
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
                            src="/assets/logo.svg" 
                            alt="tractpay" 
                            width={132}
                            height={36}
                        />
                    </Link>
                </section>
            </section>
            <section className="w-fit flex space-x-20 items-center">
                {/* Mapping the primary navigation links */}
                {navChildren.map((child) => (
                    <section className="flex items-center space-x-20" key={child.id}>
                        <Link href={child.href}>
                            <p className="text-base text-gray-900 font-medium">{child.name}</p>
                        </Link>
                    </section>
                ))}
            </section>
            <section className="flex space-x-16 items-center">
                <Link href="#" target="_blank" passHref>
                    <p className="text-gray-900 font-medium text-nowrap">
                        Download Now
                    </p>
                </Link>
                <button 
                    className="flex items-center justify-center space-x-2 bg-indigo-500 rounded-full h-14 px-8" 
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
