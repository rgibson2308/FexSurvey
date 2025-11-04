import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Check } from "lucide-react";

type SurveyStep = "form" | "success" | "error";

interface FormData {
  fullName: string;
  age: string;
  productInterest: string;
  smoker: string;
  monthlyBudget: string;
  coverageAmount: string;
  whyLooking: string;
}

export default function Survey() {
  const [step, setStep] = useState<SurveyStep>("form");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    age: "",
    productInterest: "",
    smoker: "",
    monthlyBudget: "",
    coverageAmount: "",
    whyLooking: "",
  });

  const formatNumberWithCommas = (value: string): string => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, "");
    // Add commas every third digit from the right
    return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let processedValue = value;

    // Format coverage amount with commas
    if (name === "coverageAmount") {
      processedValue = formatNumberWithCommas(value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: processedValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStep("success");
      } else {
        setStep("error");
      }
    } catch (error) {
      console.error("Error submitting survey:", error);
      setStep("error");
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid =
    formData.fullName &&
    formData.age &&
    formData.productInterest &&
    formData.smoker &&
    formData.monthlyBudget &&
    formData.coverageAmount &&
    formData.whyLooking;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {step === "form" && (
            <>
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Quick Survey
                </h1>
                <p className="text-lg text-gray-600">
                  Takes ~60 seconds. I'll email you options tailored to your
                  answers.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="flex flex-col text-lg font-semibold text-gray-900 mb-3">
                    Full Name
                    <span style={{ color: "rgb(239, 68, 68)" }}>
                      &nbsp;*
                      <br />
                    </span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Age <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Your age"
                    min="18"
                    max="120"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Product interested in <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select one</option>
                    <option value="iul">Indexed Universal Life (IUL)</option>
                    <option value="annuities">Annuities</option>
                    <option value="mortgage">Mortgage Protection</option>
                    <option value="final">Final Expense Coverage</option>
                    <option value="whole">Whole Life</option>
                    <option value="term">Term Life</option>
                    <option value="other">Other / Not sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Smoker? <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="smoker"
                        value="no"
                        checked={formData.smoker === "no"}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-blue-600"
                        required
                      />
                      <span className="text-gray-700">No</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="smoker"
                        value="yes"
                        checked={formData.smoker === "yes"}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-blue-600"
                        required
                      />
                      <span className="text-gray-700">Yes</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Monthly budget (USD) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="monthlyBudget"
                    value={formData.monthlyBudget}
                    onChange={handleInputChange}
                    placeholder="e.g., 100"
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Amount of coverage looking for (USD){" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    name="coverageAmount"
                    value={formData.coverageAmount}
                    onChange={handleInputChange}
                    placeholder="e.g., 250,000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Why are you looking for coverage?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="whyLooking"
                    value={formData.whyLooking}
                    onChange={handleInputChange}
                    placeholder="Tell me a bit about your situation..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
                  By submitting, you agree that Ryan may contact you by phone,
                  text, and email about life insurance options. Message/data
                  rates may apply. No purchase required.
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid || isLoading}
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <span className="animate-spin">���</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send my answers
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </>
          )}

          {step === "success" && (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Thanks! I'll review and reach out shortly.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                I've received your answers. I'll review options across multiple
                top-rated carriers and email you shortly. If you have any time
                constraints (e.g., closing on a home), feel free to reply to
                the confirmation email so I can prioritize.
              </p>
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                Back to Home
              </a>
            </div>
          )}

          {step === "error" && (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Hmm, that didn't send.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Please try again or contact us at rgibson2308@gmail.com
              </p>
              <button
                onClick={() => {
                  setStep("form");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                Back to form
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
