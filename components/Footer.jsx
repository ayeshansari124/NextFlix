import React from 'react';
import { FaGlobe, FaChevronRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-[#999] px-6 py-12 text-sm">
      <div className="max-w-6xl mx-auto">

        {/* Finish Sign-Up Button */}
        <button className="flex items-center gap-2 px-8 py-4 bg-[#e50914] text-white text-2xl font-bold rounded hover:bg-[#f6121d] transition-all duration-200 mb-10">
          Finish Sign-Up
          <FaChevronRight className="text-xl" />
        </button>

        {/* Contact Info */}
        <p className="mb-8">
          Questions? Call{' '}
          <a href="tel:000-800-919-1743" className="underline hover:text-white">
            000-800-919-1743
          </a>
        </p>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-3 mb-8">
          {[
            'FAQ',
            'Help Centre',
            'Account',
            'Media Centre',
            'Investor Relations',
            'Jobs',
            'Ways to Watch',
            'Terms of Use',
            'Privacy',
            'Cookie Preferences',
            'Corporate Information',
            'Contact Us',
            'Speed Test',
            'Legal Notices',
            'Only on Netflix',
          ].map((link, idx) => (
            <a
              key={idx}
              href="#"
              className="hover:underline hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Language Selector */}
        <div className="inline-flex items-center border border-[#333] px-3 py-1 rounded w-fit mb-6">
          <FaGlobe className="text-lg mr-2" />
          <select className="bg-black text-[#999] focus:outline-none">
            <option value="en">English</option>
          </select>
        </div>

        <p className="text-[#999]">Netflix India</p>
      </div>
    </footer>
  );
};

export default Footer;
