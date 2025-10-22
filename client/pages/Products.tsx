import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, TrendingUp, Gift, Home, DollarSign } from "lucide-react";

export default function Products() {
  const products = [
    {
      icon: TrendingUp,
      title: "Indexed Universal Life (IUL)",
      tagline: "Flexible coverage with growth potential",
      description:
        "An IUL combines the benefits of universal life insurance with the potential for cash value growth tied to market indexes. Unlike traditional policies, your cash value doesn't directly track the stock market—instead, it's linked to the performance of market indexes with built-in downside protection.",
      features: [
        "Flexible premiums—pay more when you can, less when you need to",
        "Potential cash value growth tied to market index performance",
        "Floor protection ensures your cash value won't drop when markets decline",
        "Access to your cash value through loans or withdrawals",
        "Death benefit plus accumulated cash value for your beneficiaries",
      ],
      bestFor: [
        "Building long-term wealth while maintaining coverage",
        "Supplementing retirement income in a tax-efficient way",
        "Those who want market-linked growth with downside protection",
        "Business owners looking for tax-advantaged accumulation",
      ],
    },
    {
      icon: DollarSign,
      title: "Annuities",
      tagline: "Protected growth or guaranteed income you can't outlive",
      description:
        "Annuities provide options for both accumulation and guaranteed income. Whether you're looking to grow money safely or create a reliable income stream in retirement, annuities can be structured to meet your specific goals.",
      features: [
        "Guaranteed income options you cannot outlive",
        "Protected accumulation with tax-deferred growth",
        "Flexibility to adjust income levels as needed",
        "Options for leaving money to beneficiaries",
        "Lifetime income available regardless of market performance",
      ],
      bestFor: [
        "Creating predictable retirement income",
        "Protecting assets while generating returns",
        "Ensuring you never run out of money in retirement",
        "Those who value peace of mind over market returns",
      ],
    },
    {
      icon: Home,
      title: "Mortgage Protection",
      tagline: "Safeguard your family's home",
      description:
        "Mortgage protection insurance is designed to help ensure your family can keep your home even if something happens to you. The benefit can be used to pay off the mortgage or cover other family needs.",
      features: [
        "Coverage amounts that match your mortgage balance",
        "Declining benefit that aligns with your loan paydown",
        "Lower premiums due to decreasing coverage over time",
        "Helps ensure your family isn't burdened with mortgage debt",
        "Flexible terms and coverage options",
      ],
      bestFor: [
        "Homeowners with significant mortgage balances",
        "Young families building equity in their homes",
        "Anyone who wants to protect their family's housing",
        "Those seeking affordable protection with a specific purpose",
      ],
    },
    {
      icon: Gift,
      title: "Final Expense",
      tagline: "Cover funeral and related costs",
      description:
        "Final expense insurance is a simplified, smaller policy designed to cover the costs associated with your passing—funeral services, burial or cremation, medical bills, and other end-of-life expenses. These policies are easier to qualify for than traditional life insurance.",
      features: [
        "Simplified underwriting—easier to qualify for",
        "Coverage amounts typically between $5,000 and $50,000",
        "Guaranteed issue options available",
        "Covers funeral, burial, cremation, and related expenses",
        "Leaves money to your family instead of burdening them with costs",
      ],
      bestFor: [
        "Seniors looking for easy-to-qualify coverage",
        "Those with health challenges affecting standard insurance options",
        "Anyone wanting to spare family the burden of final expenses",
        "Supplementing a larger policy or standing alone",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Products I specialize in
          </h1>

          <p className="text-xl text-gray-600 mb-16">
            Each product is designed to solve different financial needs. I'll help you
            find the right fit for your goals and budget.
          </p>

          {/* Products Grid */}
          <div className="space-y-16">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 md:p-12">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        {product.title}
                      </h2>
                      <p className="text-lg text-blue-600 font-semibold mt-1">
                        {product.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 mb-8">{product.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {product.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        Best for you if...
                      </h3>
                      <ul className="space-y-3">
                        {product.bestFor.map((item, iIndex) => (
                          <li key={iIndex} className="flex gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Why These Work For You */}
          <div className="bg-blue-50 rounded-xl p-12 mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why these products work best for you
            </h2>

            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Life insurance isn't one-size-fits-all. Your situation is unique—your
                goals, budget, health, and timeline all matter. Each product I specialize
                in serves a specific purpose, and often the best approach combines more
                than one product.
              </p>

              <p className="text-lg text-gray-700">
                My job is to listen to your situation and recommend the right combination
                of products that will actually protect what matters most. Whether that's
                your mortgage, your family's lifestyle, your retirement, or simply
                ensuring your loved ones aren't burdened with final expenses—there's a
                solution designed for you.
              </p>

              <p className="text-lg text-gray-700">
                Take the quick survey and I'll analyze your needs against each of these
                products. I'll then prepare personalized quotes showing you exactly how
                each option works for your specific situation.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-12 mt-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to find your right fit?
            </h2>
            <p className="text-blue-100 mb-6 text-lg">
              Answer a quick survey and I'll show you options tailored to your needs.
            </p>
            <Link
              to="/survey"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Start your quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
