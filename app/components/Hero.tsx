"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { DarkProps } from './Nav';

const hero = {
  image: "/images/heroimage.svg",
  title: "Simplifying Your Financial Transactions",
  subtitle: "Innovative payment platform designed to streamline all your financial transactions. Whether you need to make payments, transfer funds, or collect fees, Tractpay offers a seamless and efficient solution.",
  additionalInfo: {
    subtitle: "Tested and trusted by thousands of satisfied users who rely on Tractpay for their day-to-day payments",
    avatars: [
      { "name": "avatarone", "source": "/images/1u.jpg" },
      { "name": "avatartwo", "source": "/images/2u.jpg" },
      { "name": "avatarthree", "source": "/images/3u.jpg" },
      { "name": "avatarfour", "source": "/images/avatar.jpg" }
    ]
  },
  buttons: [
    { "name": "Open Account", "href": "/sign-up" },
    { "name": "Login", "href": "/login" }
  ]
}

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const Hero: React.FC<DarkProps> = ({ isDark }) => {
  const router = useRouter();

  return (
    <motion.section
      className='w-full'
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.5 }}
    >
      <section className='flex flex-row-reverse items-center justify-between lg:flex-col-reverse lg:space-y-6'>
        <motion.section className='w-[40%] h-auto lg:w-full lg:flex lg:justify-center lg:mx-auto relative' variants={variants}>
          <Image
            src={hero.image}
            width={692}
            height={720}
            alt={hero.title}
            loading="eager"
          />
          <section className=' animate-ping absolute top-24 left-0 rounded-full w-4 h-4 bg-yellow-500 flex items-center justify-center'>
            <section className='rounded-full w-2 h-2 bg-yellow-600' />
          </section>
        </motion.section>
        <section className='hero-content w-1/2 space-y-6 lg:w-full'>
          <motion.h1
            className='hero-title font-extrabold text-6xl leading-snug text-slate-800 dark:text-white lg:text-3xl'
            variants={variants}
          >
            {hero.title}
          </motion.h1>
          <motion.p
            className='hero-subtitle text-lg font-medium text-slate-500 dark:text-white/80'
            variants={variants}
          >
            {hero.subtitle}
          </motion.p>
          <motion.section
            className='hero-buttons flex space-x-4'
            variants={variants}
          >
            <button
              className='sign-up-button bg-indigo-500 text-white px-6 h-14 rounded-full hover:bg-blue-700'
              onClick={() => router.push(hero.buttons[0].href)}
            >
              {hero.buttons[0].name}
            </button>
            <button
              className='login-button bg-transparent text-slate-600 dark:text-white px-4 py-2'
              onClick={() => router.push(hero.buttons[1].href)}
            >
              {hero.buttons[1].name}
            </button>
          </motion.section>
          <motion.section
            className='hero-avatars mt-16 flex -space-x-2'
            variants={variants}
          >
            {hero.additionalInfo.avatars.map((avatar, index) => (
              <Image 
                src={avatar.source}
                width={36}
                height={36}
                alt={avatar.name}
                key={index}
                loading="lazy"
                className={`rounded-full border-4 ${isDark ? 'border-slate-900' : "border-white"}`}
              />
            ))}
          </motion.section>
          <motion.section
            className='hero-additional-info mt-4 text-sm text-slate-600 dark:text-white/80 w-1/2 lg:w-full'
            variants={variants}
          >
            <p className='text-sm font-medium text-slate-600 dark:text-white/80'>
              {hero.additionalInfo.subtitle}
            </p>
          </motion.section>
        </section>
      </section>
    </motion.section>
  );
}

export default Hero;
