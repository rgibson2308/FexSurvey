import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Star, CheckCircle2 } from "lucide-react";

export default function Index() {
  const services = [
    {
      title: "Indexed Universal Life (IUL)",
      description:
        "Flexible coverage with potential cash value growth tied to market indexes (with downside protection).",
    },
    {
      title: "Annuities",
      description:
        "Options for protected accumulation or guaranteed income you can't outlive.",
    },
    {
      title: "Mortgage Protection",
      description:
        "Coverage designed to help safeguard your home for your family.",
    },
    {
      title: "Final Expense",
      description: "Simplified policies intended to cover funeral and related expenses.",
    },
  ];

  const testimonials = [
    {
      text: "Ryan didn't push a product—he listened. We ended up with a plan that protects our mortgage and still fits our budget.",
      author: "Marissa P.",
    },
    {
      text: "He compared multiple carriers and explained everything in plain English. Zero pressure, super helpful.",
      author: "DeAndre S.",
    },
    {
      text: "We had unique health history. Ryan found a company that would actually approve us at a fair rate.",
      author: "Carolina R.",
    },
    {
      text: "Fast, clear, and trustworthy. He treated us like family from the first call.",
      author: "Ben & Tasha",
    },
    {
      text: "IUL finally made sense after Ryan's walkthrough. Now we have coverage and long-term value.",
      author: "Ahmed R.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-12 pb-20 md:pt-20 md:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Find the right coverage—
                <span className="text-blue-600">built around your life</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                I'm Ryan Gibson, an independent broker working with the top
                carriers across the U.S. Answer a few quick questions and I'll
                match you with options that fit your goals and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/survey"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Start your quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/why-broker"
                  className="inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Why work with a broker?
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              What I specialize in
            </h2>
            <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
              I focus on products that work for real families with real needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Survey Section */}
        <section className="bg-blue-50 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Quick Survey
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Takes ~60 seconds. I'll email you options tailored to your
                answers.
              </p>
              <Link
                to="/survey"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              What clients say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col justify-center items-center"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                  <p className="text-gray-900 font-semibold">
                    — {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to find the right coverage?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Take the quick survey and I'll prepare personalized options for you.
            </p>
            <Link
              to="/survey"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Start your quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
