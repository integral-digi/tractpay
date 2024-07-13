"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const hero = {
  image: "/images/hero.png",
  title: "Simplifying Your Financial Transactions",
  subtitle: "Innovative payment platform designed to streamline all your financial transactions. Whether you need to make payments, transfer funds, or collect fees, Tractpay offers a seamless and efficient solution.",
  additionalInfo: {
    subtitle: "Tested and trusted by thousands of satisfied users who rely on Tractpay for their day-to-day payments",
    avatars: [
      { "name": "avatarone", "source": "/images/user.png" },
      { "name": "avatartwo", "source": "/images/user.png" },
      { "name": "avatarthree", "source": "/images/user.png" },
      { "name": "avatarfour", "source": "/images/user.png" }
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

const Hero: React.FC = () => {
  const router = useRouter();

  return (
    <motion.section
      className='w-full'
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.8 }}
    >
      <section className='flex items-center justify-between'>
        <motion.section className='w-1/2 h-auto' variants={variants}>
          <Image
            src={hero.image}
            width={816}
            height={960}
            alt={hero.title}
            loading="eager"
            className='animate-pulse'
          />
        </motion.section>
        <section className='hero-content w-1/2 space-y-6'>
          <motion.h1
            className='hero-title font-extrabold text-6xl leading-snug text-gray-900'
            variants={variants}
          >
            {hero.title}
          </motion.h1>
          <motion.p
            className='hero-subtitle text-lg font-medium text-slate-500'
            variants={variants}
          >
            {hero.subtitle}
          </motion.p>
          <motion.section
            className='hero-buttons flex space-x-4'
            variants={variants}
          >
            <button
              className='sign-up-button bg-indigo-500 text-white px-6 h-14 rounded-full'
              onClick={() => router.push(hero.buttons[0].href)}
            >
              {hero.buttons[0].name}
            </button>
            <button
              className='login-button bg-white text-gray-800 px-4 py-2'
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
                width={32}
                height={32}
                alt={avatar.name}
                key={index}
                loading="lazy"
                className='rounded-full border-2 border-white'
              />
            ))}
          </motion.section>
          <motion.section
            className='hero-additional-info mt-4 text-sm text-gray-600 w-1/2'
            variants={variants}
          >
            <p className='text-sm font-medium'>
              {hero.additionalInfo.subtitle}
            </p>
          </motion.section>
        </section>
      </section>
    </motion.section>
  );
}

export default Hero;
