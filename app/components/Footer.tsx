// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 py-12 rounded-3xl">
      <div className="container mx-auto px-16 lg:px-8">
        <section className="w-full mb-12">
          <h4 className="font-bold text-white mb-4">
            Stay in the loop
          </h4>
          <p className="text-white mb-4">
            Join our mailing list and stay up to date on features and product updates.
          </p>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email here"
              className="px-4 py-2 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
            >
              Subscribe
            </button>
          </form>
          <p className="text-white mt-4 text-sm">
            By subscribing, you agree to our <a href="#" className="underline hover:text-cyan">Privacy Policy</a>.
          </p>
        </section>
        <div className="flex flex-wrap justify-between lg:flex-nowrap lg:space-x-12">
          <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:space-x-12">
            <div>
              <h4 className="font-bold text-white mb-4">Quicklinks</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:text-cyan">Home</a></li>
                <li><a href="#" className="text-white hover:text-cyan">Portfolios</a></li>
                <li><a href="#" className="text-white hover:text-cyan">Services</a></li>
                <li><a href="#" className="text-white hover:text-cyan">Works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:text-cyan">Terms & Conditions</a></li>
                <li><a href="#" className="text-white hover:text-cyan">Privacy Policy</a></li>
                <li><a href="#" className="text-white hover:text-cyan">Cookies</a></li>
                <li><a href="#" className="text-white hover:text-cyan">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Community</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:text-cyan">Help Center</a></li>
                <li><a href="#" className="text-white hover:text-cyan">Forum</a></li>
                <li><a href="#" className="text-white hover:text-cyan">Webinars</a></li>
                <li><a href="#" className="text-white hover:text-cyan">Professionals</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-white text-sm">
          © 2023 Tractpay Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
