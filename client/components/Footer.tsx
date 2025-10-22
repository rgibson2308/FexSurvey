export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-white mb-4">Ryan Gibson</h3>
            <p className="text-sm text-gray-400">
              Independent Life Insurance Broker
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Serving families across licensed states in the U.S.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/survey" className="hover:text-white transition-colors">
                  Survey
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Indexed Universal Life
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Annuities
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Mortgage Protection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Final Expense
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <p className="text-sm mb-2">
              <a
                href="mailto:rgibson2308@gmail.com"
                className="hover:text-white transition-colors"
              >
                rgibson2308@gmail.com
              </a>
            </p>
            <p className="text-sm mb-3">
              <a
                href="tel:412-495-2234"
                className="hover:text-white transition-colors"
              >
                412-495-2234
              </a>
            </p>
            <p className="text-sm text-gray-400">
              24/7 365
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400 mb-4">
            Compliance note: Product availability, underwriting, and policy
            features vary by carrier and state. All recommendations are
            personalized and presented with carrier disclosures.
          </p>
          <p className="text-sm text-gray-500">
            © {currentYear} Ryan Gibson. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
