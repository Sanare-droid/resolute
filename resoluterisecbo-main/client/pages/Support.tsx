import { useState } from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import {
  Heart,
  CreditCard,
  Smartphone,
  DollarSign,
  Users,
  BookOpen,
  Scale,
} from "lucide-react";

const Support = () => {
  const [amount, setAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!amount || parseFloat(amount) <= 0) {
      errors.amount = "Please enter a valid donation amount";
    }

    if (!donorInfo.name.trim()) {
      errors.name = "Name is required";
    }

    if (!donorInfo.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(donorInfo.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (paymentMethod === "mpesa" && !donorInfo.phone.trim()) {
      errors.phone = "Phone number is required for M-Pesa payments";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Handle different payment methods
      if (paymentMethod === "stripe") {
        // Simulate Stripe integration
        // Process Stripe payment
        await new Promise((resolve) => setTimeout(resolve, 2500));
      } else if (paymentMethod === "paypal") {
        // Simulate PayPal integration
        // Process PayPal payment
        window.open(
          `https://www.paypal.com/donate/?business=info@resoluterisecbo.com&amount=${amount}&currency_code=KES&item_name=Donation to ResoluteRise`,
          "_blank",
        );
        await new Promise((resolve) => setTimeout(resolve, 1500));
      } else if (paymentMethod === "mpesa") {
        // M-Pesa instructions already provided in form
        // M-Pesa payment details provided
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      setSubmitStatus("success");

      // Donation submitted successfully
      // Log donation details for demonstration (removed for production)

      // Reset form after 4 seconds
      setTimeout(() => {
        setAmount("");
        setDonationType("one-time");
        setPaymentMethod("stripe");
        setDonorInfo({ name: "", email: "", phone: "" });
        setSubmitStatus("idle");
        setFormErrors({});
      }, 4000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const impactAreas = [
    {
      icon: BookOpen,
      title: "Civic Education",
      description:
        "Empowering community members with knowledge about their legal rights and civic responsibilities",
      color: "from-resolute-green to-resolute-light-green",
    },
    {
      icon: Scale,
      title: "Legal Advocacy",
      description:
        "Providing comprehensive legal support and advocacy for land rights and justice",
      color: "from-resolute-yellow to-yellow-400",
    },
    {
      icon: Users,
      title: "Community Programs",
      description:
        "Implementing transformative community development and empowerment initiatives",
      color: "from-resolute-pale-green to-green-400",
    },
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-resolute-green to-resolute-pale-green py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <Heart className="w-16 h-16 mx-auto mb-6 text-resolute-yellow" />
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              Support Our Mission
            </h1>
            <p className="text-xl mb-8 text-white text-opacity-95 leading-relaxed max-w-3xl mx-auto">
              Your support enables us to continue empowering communities,
              fighting for land rights, and providing essential civic education
              across Kenya. Every contribution makes a difference.
            </p>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">
              Your Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {impactAreas.map((area, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${area.color} p-6 rounded-xl text-white luxury-card animate-scale-in shadow-2xl`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <area.icon className="w-12 h-12 mb-4 opacity-90 animate-luxury-float" />
                  <h3 className="text-xl font-bold mb-3 relative">
                    <span className="relative z-10">{area.title}</span>
                    <div className="absolute inset-0 bg-white/20 blur-sm animate-pulse-glow opacity-50 rounded"></div>
                  </h3>
                  <p className="text-white text-opacity-90 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="mt-4 h-1 bg-white bg-opacity-20 rounded-full overflow-hidden">
                    <div className="h-full bg-white bg-opacity-40 rounded-full animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-resolute-green opacity-5 rounded-full blur-3xl animate-luxury-float"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-resolute-yellow opacity-5 rounded-full blur-3xl animate-luxury-float"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass rounded-3xl shadow-2xl border border-white/20 overflow-hidden luxury-card animate-scale-in">
              <div className="bg-gradient-to-r from-resolute-green via-resolute-light-green to-resolute-green p-6 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                <h2 className="text-3xl font-bold mb-2 relative z-10 animate-pulse-glow">
                  Make a Donation
                </h2>
                <p className="text-white text-opacity-90 relative z-10">
                  Secure and trusted donation processing
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-8">
                {/* Donation Type */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Donation Type
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setDonationType("one-time")}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        donationType === "one-time"
                          ? "border-resolute-green bg-resolute-green bg-opacity-10 text-resolute-green"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <div className="font-semibold">One-time</div>
                      <div className="text-sm text-gray-500">
                        Single donation
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDonationType("monthly")}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        donationType === "monthly"
                          ? "border-resolute-green bg-resolute-green bg-opacity-10 text-resolute-green"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <div className="font-semibold">Monthly</div>
                      <div className="text-sm text-gray-500">
                        Recurring support
                      </div>
                    </button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Donation Amount
                  </label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {["500", "1000", "2500", "5000", "10000", "25000"].map(
                      (preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => setAmount(preset)}
                          className={`p-3 rounded-lg border-2 transition-all hover:shadow-md transform hover:scale-105 ${
                            amount === preset
                              ? "border-resolute-green bg-resolute-green bg-opacity-10 text-resolute-green shadow-lg"
                              : "border-gray-300 hover:border-resolute-green/50"
                          }`}
                        >
                          <div className="font-semibold">
                            KSh {parseInt(preset).toLocaleString()}
                          </div>
                        </button>
                      ),
                    )}
                  </div>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm font-medium">
                      KSh
                    </div>
                    <input
                      type="number"
                      placeholder="Enter custom amount (KSh)"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-resolute-green focus:border-transparent transition-all ${
                        formErrors.amount ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {formErrors.amount && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.amount}
                      </p>
                    )}
                  </div>
                </div>

                {/* Donor Information */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={donorInfo.name}
                      onChange={(e) =>
                        setDonorInfo({ ...donorInfo, name: e.target.value })
                      }
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-resolute-green focus:border-transparent ${
                        formErrors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter your full name"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={donorInfo.email}
                      onChange={(e) =>
                        setDonorInfo({ ...donorInfo, email: e.target.value })
                      }
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-resolute-green focus:border-transparent ${
                        formErrors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter your email"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Payment Method
                  </label>
                  <div className="grid md:grid-cols-3 gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("stripe")}
                      className={`p-4 rounded-lg border-2 transition-all flex items-center space-x-3 ${
                        paymentMethod === "stripe"
                          ? "border-resolute-green bg-resolute-green bg-opacity-10"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <CreditCard className="w-6 h-6 text-blue-600" />
                      <div className="text-left">
                        <div className="font-semibold">Stripe</div>
                        <div className="text-sm text-gray-500">
                          Card payment
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("paypal")}
                      className={`p-4 rounded-lg border-2 transition-all flex items-center space-x-3 ${
                        paymentMethod === "paypal"
                          ? "border-resolute-green bg-resolute-green bg-opacity-10"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">
                        PP
                      </div>
                      <div className="text-left">
                        <div className="font-semibold">PayPal</div>
                        <div className="text-sm text-gray-500">
                          PayPal account
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("mpesa")}
                      className={`p-4 rounded-lg border-2 transition-all flex items-center space-x-3 ${
                        paymentMethod === "mpesa"
                          ? "border-resolute-green bg-resolute-green bg-opacity-10"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <Smartphone className="w-6 h-6 text-green-600" />
                      <div className="text-left">
                        <div className="font-semibold">M-Pesa</div>
                        <div className="text-sm text-gray-500">
                          Mobile money
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* M-Pesa Instructions */}
                {paymentMethod === "mpesa" && (
                  <div className="mb-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
                      <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                        <Smartphone className="w-5 h-5 mr-2" />
                        M-Pesa Payment Instructions
                      </h3>
                      <div className="space-y-3 text-green-700">
                        <div className="flex items-start">
                          <span className="bg-green-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5">
                            1
                          </span>
                          <span>Go to M-Pesa on your phone</span>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-green-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5">
                            2
                          </span>
                          <span>Choose "Lipa na M-Pesa" option</span>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-green-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5">
                            3
                          </span>
                          <span>Choose "Pay Bill"</span>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-green-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5">
                            4
                          </span>
                          <div>
                            <span>Enter Business Number: </span>
                            <span className="font-bold bg-green-100 px-2 py-1 rounded">
                              522533
                            </span>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-green-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5">
                            5
                          </span>
                          <div>
                            <span>Enter Account Number: </span>
                            <span className="font-bold bg-green-100 px-2 py-1 rounded">
                              8006859
                            </span>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-green-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5">
                            6
                          </span>
                          <span>Enter the amount you wish to donate</span>
                        </div>
                        <div className="flex items-start">
                          <span className="bg-green-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5">
                            7
                          </span>
                          <span>
                            Enter your M-Pesa PIN to complete the payment
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                        <p className="text-yellow-800 text-sm">
                          <strong>Note:</strong> You will receive an M-Pesa
                          confirmation message from{" "}
                          <strong>RESOLUTE RISE CBO</strong> after successful
                          payment.
                        </p>
                      </div>
                    </div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your M-Pesa Phone Number (for confirmation)
                    </label>
                    <input
                      type="tel"
                      required
                      value={donorInfo.phone}
                      onChange={(e) =>
                        setDonorInfo({ ...donorInfo, phone: e.target.value })
                      }
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-resolute-green focus:border-transparent ${
                        formErrors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="e.g., 254700123456"
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                )}

                {/* Submit Button */}
                {submitStatus === "success" ? (
                  <div className="w-full bg-green-50 border border-green-200 text-green-700 py-4 px-6 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="text-center">
                      <div className="font-bold text-xl mb-2">
                        Thank you for your generous donation!
                      </div>
                      <div className="text-green-600">
                        Your KSh{" "}
                        {amount ? parseInt(amount).toLocaleString() : "0"}{" "}
                        donation{" "}
                        {paymentMethod === "mpesa"
                          ? "instructions have been provided above"
                          : "is being processed"}
                        . We appreciate your support for our mission.
                      </div>
                    </div>
                  </div>
                ) : submitStatus === "error" ? (
                  <div className="w-full bg-red-50 border border-red-200 text-red-700 py-4 px-6 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 mb-4">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Please check your information and try again.</span>
                  </div>
                ) : null}

                {submitStatus !== "success" && (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-resolute-green to-resolute-light-green hover:shadow-lg hover:scale-105"
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <Heart className="w-5 h-5" />
                        <span>
                          Donate KSh{" "}
                          {amount ? parseInt(amount).toLocaleString() : "0"}{" "}
                          {donationType === "monthly" ? "/month" : ""}
                        </span>
                      </>
                    )}
                  </button>
                )}

                <div className="mt-4 text-center text-sm text-gray-500">
                  🔒 Your donation is secure and encrypted. We never store your
                  payment information.
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Other Ways to Help */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Other Ways to Help
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Users className="w-12 h-12 text-resolute-green mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Volunteer</h3>
                <p className="text-gray-600 mb-4">
                  Join our team of dedicated volunteers and make a direct impact
                  in communities.
                </p>
                <Link
                  to="/contact"
                  className="text-resolute-green font-semibold hover:underline transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <BookOpen className="w-12 h-12 text-resolute-green mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Spread Awareness</h3>
                <p className="text-gray-600 mb-4">
                  Share our mission with friends and family to expand our reach.
                </p>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: "ResoluteRise - Community Empowerment",
                        text: "Join ResoluteRise in empowering communities across Kenya",
                        url: window.location.origin,
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.origin);
                      alert("Link copied to clipboard!");
                    }
                  }}
                  className="text-resolute-green font-semibold hover:underline transition-colors duration-300"
                >
                  Share Now
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Scale className="w-12 h-12 text-resolute-green mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">
                  Corporate Partnership
                </h3>
                <p className="text-gray-600 mb-4">
                  Partner with us for sustainable community development
                  initiatives.
                </p>
                <Link
                  to="/contact"
                  className="text-resolute-green font-semibold hover:underline transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Support;
