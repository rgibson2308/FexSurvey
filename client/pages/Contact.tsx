import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Contact
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Ryan Gibson
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-600 text-sm">Email</p>
                    <a
                      href="mailto:rgibson2308@gmail.com"
                      className="text-gray-900 font-semibold hover:text-blue-600 transition-colors"
                    >
                      rgibson2308@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-600 text-sm">Phone</p>
                    <a
                      href="tel:412-495-2234"
                      className="text-gray-900 font-semibold hover:text-blue-600 transition-colors"
                    >
                      412-495-2234
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-600 text-sm">Hours</p>
                    <p className="text-gray-900 font-semibold">
                      24/7 a week
                    </p>
                    <p className="text-gray-900 font-semibold">
                      365 days a year
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Licensed States
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">Currently licensed in:</p>
                  <div className="flex flex-wrap gap-2">
                    {["AZ", "HI", "MN", "NM", "PA", "TX", "VA", "OH"].map(
                      (state) => (
                        <span
                          key={state}
                          className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm font-semibold"
                        >
                          {state}
                        </span>
                      )
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mt-4">
                    More states coming soon—I keep the list lean so I can focus
                    on serving clients closely.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Prefer a quick intro call?
              </h2>
              <p className="text-gray-600 mb-6">
                Send the survey first so I can prepare quotes, then we'll talk
                through options step-by-step.
              </p>
              <Link
                to="/survey"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                Go to Survey
              </Link>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2Fa58ddf16299e48819fced6ba16caf7e6%2F787b9e971d30422ca77e29b2c5da171b?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fa58ddf16299e48819fced6ba16caf7e6%2F787b9e971d30422ca77e29b2c5da171b?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fa58ddf16299e48819fced6ba16caf7e6%2F787b9e971d30422ca77e29b2c5da171b?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fa58ddf16299e48819fced6ba16caf7e6%2F787b9e971d30422ca77e29b2c5da171b?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fa58ddf16299e48819fced6ba16caf7e6%2F787b9e971d30422ca77e29b2c5da171b?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fa58ddf16299e48819fced6ba16caf7e6%2F787b9e971d30422ca77e29b2c5da171b?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fa58ddf16299e48819fced6ba16caf7e6%2F787b9e971d30422ca77e29b2c5da171b?width=2000 2000w"
                style={{
                  aspectRatio: "1.42",
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  marginTop: "20px",
                  minHeight: "20px",
                  minWidth: "20px",
                  overflow: "hidden",
                }}
              />
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Compliance note
            </h3>
            <p className="text-gray-600">
              Product availability, underwriting, and policy features vary by
              carrier and state. All recommendations are personalized and
              presented with carrier disclosures.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
