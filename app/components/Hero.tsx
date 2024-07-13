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

const Hero: React.FC = () => {
  const router = useRouter();

  return (
    <motion.section className='w-full'>
      <section className='flex items-center justify-between'>
        <section className='hero-image w-1/2 relative h-64 md:h-auto'>
          <Image
            src={hero.image}
            width={816}
            height={960}
            alt={hero.title}
            loading="eager"
          />
        </section>
        <section className='hero-content w-1/2 p-6 space-y-6'>
          <h1 className='hero-title font-extrabold text-4xl md:text-7xl text-gray-900'>
            {hero.title}
          </h1>
          <p className='hero-subtitle text-lg font-medium'>
            {hero.subtitle}
          </p>
          <section className='hero-buttons flex space-x-4'>
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
          </section>
          <section className='hero-avatars mt-6 flex -space-x-2'>
            {hero.additionalInfo.avatars.map((avatar, index) => (
              <Image 
                src={avatar.source}
                width={24}
                height={24}
                alt={avatar.name}
                key={index}
                loading="lazy"
                className='rounded-full border-2 border-white'
              />
            ))}
          </section>
          <section className='hero-additional-info mt-4 text-sm md:text-base text-gray-600 w-1/2'>
            <p className='text-sm font-medium'>
              {hero.additionalInfo.subtitle}
            </p>
          </section>
        </section>
      </section>
    </motion.section>
  );
}

export default Hero;
