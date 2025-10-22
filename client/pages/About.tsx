import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            About Ryan Gibson
          </h1>

          <div className="prose prose-lg max-w-none text-gray-600 mb-12">
            <p className="text-xl text-gray-700 mb-6">
              <strong>Independent Life Insurance Broker</strong> • Serving
              families across licensed states in the U.S.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
              Why I do this
            </h2>
            <p>
              I got into life insurance for a simple reason: families deserve
              clarity when the stakes are highest. Over the years I've sat at
              kitchen tables, on video calls, and in living rooms helping people
              understand how coverage really works—and how to avoid paying for
              things they don't need. I'm a broker, which means I work for you,
              not a single carrier. I compare options across many of the
              top-rated companies in the country to find the right fit for your
              goals and budget.
            </p>
            <p>
              Whether you're protecting a new mortgage, planning for retirement
              income, building tax-advantaged cash value, or making sure final
              expenses never become a burden, my job is to simplify the
              decisions and advocate for your best outcome.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
              Products I specialize in
            </h2>
            <ul>
              <li>
                <strong>Indexed Universal Life (IUL):</strong> Flexible coverage
                with potential cash value growth tied to market indexes (with
                downside protection).
              </li>
              <li>
                <strong>Annuities:</strong> Options for protected accumulation
                or guaranteed income you can't outlive.
              </li>
              <li>
                <strong>Mortgage Protection:</strong> Coverage designed to help
                safeguard your home for your family.
              </li>
              <li>
                <strong>Final Expense:</strong> Simplified policies intended to
                cover funeral and related expenses.
              </li>
            </ul>
            <p>
              Not sure what you need? Start with the quick survey and I'll
              recommend a path.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Ready to get started?
            </h2>
            <p className="text-gray-600 mb-6">
              Take a quick survey and I'll prepare personalized options for you.
            </p>
            <Link
              to="/survey"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
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
