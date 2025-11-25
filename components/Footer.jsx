import { FaGlobe, FaChevronRight } from "react-icons/fa";

export default function Footer() {
  const links = [
    "FAQ", "Help Centre", "Account", "Media Centre", "Investor Relations", "Jobs", "Ways to Watch",
    "Terms of Use", "Privacy", "Cookie Preferences", "Corporate Information", "Contact Us",
    "Speed Test", "Legal Notices", "Only on Netflix",
  ];

  return (
    <footer className="bg-black text-[#999] px-6 py-12 text-sm">
      <div className="max-w-6xl mx-auto">
        <button className="flex items-center gap-2 px-8 py-4 bg-[#e50914] text-white text-2xl font-bold rounded hover:bg-[#f6121d] transition mb-10">
          Finish Sign-Up
          <FaChevronRight className="text-xl" />
        </button>

        <p className="mb-8">
          Questions? Call{" "}
          <a href="tel:000-800-919-1743" className="underline hover:text-white">
            000-800-919-1743
          </a>
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-3 mb-8">
          {links.map((link, i) => (
            <a key={i} href="#" className="hover:underline hover:text-white">
              {link}
            </a>
          ))}
        </div>

        <div className="inline-flex items-center border border-[#333] px-3 py-1 rounded w-fit mb-6">
          <FaGlobe className="text-lg mr-2" />
          <select className="bg-black text-[#999] focus:outline-none">
            <option>English</option>
          </select>
        </div>

        <p className="text-[#999]">Netflix India</p>
      </div>
    </footer>
  );
}
