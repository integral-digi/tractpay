"use client"
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookiePolicy = () => {
    const [click, setClick] = useState(false);

    useEffect(() => {
        const cookieAccepted = Cookies.get("cookieAccepted");
        if (cookieAccepted) {
            setClick(true);
        }
    }, []);

    const handleAccept = () => {
        Cookies.set("cookieAccepted", "true", { expires: 365 });
        setClick(true);
    }

    const handleDecline = () => {
        setClick(true);
    }


    
    return (
        <>
            {
                !click && (
                    <section className="w-1/3 p-8 shadow-md rounded-lg bg-white dark:bg-slate-800 absolute bottom-8 left-4 lg:w-full lg:left-0">
                        <section className="space-y-8">
                            <p className="text-base text-slate-500 dark:text-white/80 font-medium">
                                Our website cookies help give you a better web experience and keep everything working nicely. You can accept them all below or choose which ones to keep. Find out more in our Cookie Policy.
                            </p>
                            <section className="flex justify-between items-center">
                                <button className="bg-indigo-500 hover:bg-indigo-700 h-12 px-4 rounded-full items-center flex justify-center" onClick={handleAccept}>
                                    <p className="font-bold text-white">
                                        Accept Cookies
                                    </p>
                                </button>
                                <button className="bg-white dark:bg-slate-900 h-12 px-4 rounded-full items-center flex justify-center" onClick={handleDecline}>
                                    <p className="font-bold text-slate-500 dark:text-white/80">
                                        Decline
                                    </p>
                                </button>
                            </section>
                        </section>
                    </section>
                )
            }
        </>
    )
}

export default CookiePolicy;
