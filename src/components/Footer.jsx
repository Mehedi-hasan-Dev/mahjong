import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Us */}
        <div>
          <h3 className="uppercase font-bold text-white mb-3">About Us</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Numerous conversations have also referred to the supposed restaurant
            owner's eccentric habit of treating her custom cuttlefish to the
            establishment, dressed in elaborate fashions and brandishing a
            sword.
          </p>
        </div>

        {/* Find Us */}
        <div>
          <h3 className="italic text-amber-500 text-lg mb-3">Find us</h3>
          <div className="flex justify-center md:justify-start gap-4 mb-4">
            <a href="#" className="hover:text-amber-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-amber-500">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-amber-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-amber-500">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="uppercase font-bold text-white mb-3">Newsletter</h3>
          <form className="flex justify-center md:justify-start">
            <input
              type="email"
              placeholder="Your email address..."
              className="px-3 py-2 text-sm bg-transparent border border-amber-500 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-amber-500 text-black px-3 py-2 text-sm hover:bg-amber-600"
            >
              →
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center max-sm:pt-5">
        <div className="w-12 h-px bg-gray-600"></div>
        <div className="mx-2 text-amber-500">•</div>
        <div className="w-12 h-px bg-gray-600"></div>
      </div>
      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
        <p>
          +1 123 456 789 | 270 St. Brooklyn New York, NY 10025 |
          youremail@domain.com
        </p>
      </div>
    </footer>
  );
}
