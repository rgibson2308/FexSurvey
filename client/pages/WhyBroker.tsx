import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, TrendingUp, Shield, Users } from "lucide-react";

export default function WhyBroker() {
  const benefits = [
    {
      icon: Users,
      title: "Multiple Carriers",
      description:
        "I compare options across many of the top-rated companies in the country. You're not limited to one carrier's offerings.",
    },
    {
      icon: Shield,
      title: "Your Advocate",
      description:
        "I work for you, not a single carrier. My job is to find the right fit for your goals and budget, not push a specific product.",
    },
    {
      icon: TrendingUp,
      title: "Better Options",
      description:
        "With access to multiple carriers, I can help you find better rates, features, and terms tailored to your specific situation.",
    },
  ];

  const whySection = [
    {
      title: "You Deserve Clarity",
      description:
        "Families deserve clarity when the stakes are highest. Over the years I've sat at kitchen tables, on video calls, and in living rooms helping people understand how coverage really works—and how to avoid paying for things they don't need.",
    },
    {
      title: "Expert Guidance",
      description:
        "Instead of navigating complex insurance options alone, you get personalized guidance from someone who's dedicated to understanding your unique needs and finding solutions that actually work for you.",
    },
    {
      title: "Time & Money Saved",
      description:
        "A broker saves you time by doing the research and comparison shopping. More importantly, you save money by avoiding unnecessary coverage and finding the best rates available across multiple carriers.",
    },
    {
      title: "Personalized Recommendations",
      description:
        "Whether you're protecting a new mortgage, planning for retirement income, building tax-advantaged cash value, or making sure final expenses never become a burden—I'll recommend a path tailored to your situation.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why a broker is the best fit for you
          </h1>

          <p className="text-xl text-gray-600 mb-12">
            Working with an independent broker means getting personalized options
            tailored to your needs—not a one-size-fits-all product from a single
            company.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-blue-50 rounded-xl p-8">
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          {/* Detailed Why Section */}
          <div className="space-y-12">
            {whySection.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-700">{section.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-12 mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to get personalized options?
            </h2>
            <p className="text-blue-100 mb-6 text-lg">
              Take a quick survey and I'll match you with solutions tailored to your
              needs and budget.
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
