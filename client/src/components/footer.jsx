function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Left Section: Brand Info */}
          <div>
            <h2 className="text-2xl font-bold">MyBrand</h2>
            <p className="text-gray-400 mt-2">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Middle Section: Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="/" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section: Social Media */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-3">
              <a href="#" className="hover:text-gray-300">
                🐦 Twitter
              </a>
              <a href="#" className="hover:text-gray-300">
                📘 Facebook
              </a>
              <a href="#" className="hover:text-gray-300">
                📷 Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-6 text-center text-gray-400 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} MyBrand. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
