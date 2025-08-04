import { useState } from "react";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Building,
  User,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateContactForm = () => {
    const errors: string[] = [];

    if (!formData.name.trim()) errors.push("Name is required");
    if (!formData.email.trim()) errors.push("Email is required");
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.push("Valid email is required");
    if (!formData.subject.trim()) errors.push("Subject is required");
    if (!formData.message.trim()) errors.push("Message is required");

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateContactForm();
    if (errors.length > 0) {
      alert("Please fill in all required fields with valid information.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create mailto link for email client
      const emailSubject = encodeURIComponent(
        `${formData.subject} - ${inquiryTypes.find((t) => t.value === formData.type)?.label}`,
      );
      const emailBody = encodeURIComponent(
        `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `Phone: ${formData.phone || "Not provided"}\n` +
          `Inquiry Type: ${inquiryTypes.find((t) => t.value === formData.type)?.label}\n\n` +
          `Message:\n${formData.message}\n\n` +
          `---\nSent from ResoluteRise website contact form`,
      );

      // Create mailto link
      const mailtoLink = `mailto:info@resoluterisecbo.com?subject=${emailSubject}&body=${emailBody}`;

      // Try to open email client
      window.location.href = mailtoLink;

      // Simulate processing time
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus("success");

      // Log contact form data for demonstration
      // Contact form submitted successfully

      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          type: "general",
        });
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: language === "en" ? "Office Address" : "Anwani ya Ofisi",
      details: [
        "ResoluteRise Organization",
        "Maasai Mara Talek",
        "Narok County, Kenya",
      ],
    },
    {
      icon: Phone,
      title: language === "en" ? "Phone Numbers" : "Nambari za Simu",
      details: [
        "+254758771683",
        "+254721513749",
        language === "en"
          ? "Available for calls and WhatsApp"
          : "Zinapatikana kwa simu na WhatsApp",
      ],
    },
    {
      icon: Mail,
      title: language === "en" ? "Email & Website" : "Barua Pepe na Tovuti",
      details: [
        "info@resoluterisecbo.com",
        "www.resoluterisecbo.com",
        language === "en"
          ? "Follow us on social media"
          : "Tufuate kwenye mitandao ya kijamii",
      ],
    },
    {
      icon: Clock,
      title: language === "en" ? "Office Hours" : "Masaa ya Ofisi",
      details: [
        language === "en"
          ? "Monday - Friday: 8:00 AM - 5:00 PM"
          : "Jumatatu - Ijumaa: 8:00 AM - 5:00 PM",
        language === "en"
          ? "Saturday: 9:00 AM - 1:00 PM"
          : "Jumamosi: 9:00 AM - 1:00 PM",
        language === "en" ? "Sunday: Closed" : "Jumapili: Imejiwa",
      ],
    },
  ];

  const inquiryTypes = [
    {
      value: "general",
      label: language === "en" ? "General Inquiry" : "Hoja ya Jumla",
    },
    {
      value: "legal",
      label: language === "en" ? "Legal Assistance" : "Msaada wa Kisheria",
    },
    {
      value: "programs",
      label: language === "en" ? "Program Information" : "Habari za Mipango",
    },
    {
      value: "partnership",
      label:
        language === "en" ? "Partnership Opportunity" : "Fursa ya Ushirikiano",
    },
    {
      value: "volunteer",
      label: language === "en" ? "Volunteer Interest" : "Maslahi ya Kujitolea",
    },
    {
      value: "media",
      label: language === "en" ? "Media Inquiry" : "Hoja za Vyombo vya Habari",
    },
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-resolute-green via-resolute-light-green to-resolute-pale-green py-20 relative overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-resolute-yellow opacity-10 rounded-full blur-3xl animate-luxury-float"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl animate-luxury-float"
            style={{ animationDelay: "3s" }}
          ></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
            <MessageCircle className="w-16 h-16 mx-auto mb-6 text-resolute-yellow animate-luxury-float animate-pulse-glow" />
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 animate-scale-in">
              {language === "en" ? "Contact Us" : "Wasiliana Nasi"}
            </h1>
            <p className="text-xl text-white text-opacity-95 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-300">
              {language === "en"
                ? "We're here to help and answer any questions you may have. Reach out to us for legal assistance, program information, or partnership opportunities."
                : "Tuko hapa kusaidia na kujibu maswali yoyote unayoweza kuwa nayo. Tufikirie kwa msaada wa kisheria, habari za mipango, au fursa za ushirikiano."}
            </p>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-resolute-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {language === "en" ? "Send Us a Message" : "Tutumie Ujumbe"}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {language === "en"
                      ? "Fill out the form below and we'll get back to you as soon as possible."
                      : "Jaza fomu iliyo hapa chini na tutakujibu haraka iwezekanavyo."}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === "en" ? "Type of Inquiry" : "Aina ya Hoja"}
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-resolute-green focus:border-transparent"
                      required
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === "en" ? "Full Name" : "Jina Kamili"}
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-resolute-green focus:border-transparent"
                          placeholder={
                            language === "en"
                              ? "Enter your full name"
                              : "Ingiza jina lako kamili"
                          }
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === "en"
                          ? "Email Address"
                          : "Anwani ya Barua Pepe"}
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-resolute-green focus:border-transparent"
                          placeholder={
                            language === "en"
                              ? "Enter your email"
                              : "Ingiza barua pepe yako"
                          }
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone and Subject */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === "en" ? "Phone Number" : "Nambari ya Simu"}
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-resolute-green focus:border-transparent"
                          placeholder={
                            language === "en" ? "Optional" : "Si lazima"
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === "en" ? "Subject" : "Mada"}
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-resolute-green focus:border-transparent"
                        placeholder={
                          language === "en"
                            ? "Brief subject line"
                            : "Mstari mfupi wa mada"
                        }
                        required
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === "en" ? "Message" : "Ujumbe"}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-resolute-green focus:border-transparent resize-none"
                      placeholder={
                        language === "en"
                          ? "Tell us how we can help you..."
                          : "Tuambie jinsi tunavyoweza kukusaidia..."
                      }
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    {submitStatus === "success" ? (
                      <div className="flex items-center justify-center space-x-2 bg-green-50 text-green-700 py-3 px-4 rounded-lg">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-medium">
                          {language === "en"
                            ? "Message sent successfully!"
                            : "Ujumbe umetumwa kwa mafanikio!"}
                        </span>
                      </div>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-resolute-green text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            <span>
                              {language === "en" ? "Sending..." : "Inatuma..."}
                            </span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>
                              {language === "en"
                                ? "Send Message"
                                : "Tuma Ujumbe"}
                            </span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Map and Location Info */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {language === "en"
                      ? "Visit Our Office"
                      : "Tembelea Ofisi Yetu"}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {language === "en"
                      ? "We welcome visitors during our office hours. Schedule an appointment for personalized assistance."
                      : "Tunakaribisha wageni wakati wa masaa yetu ya ofisi. Panga miadi kwa msaada wa kibinafsi."}
                  </p>
                </div>

                {/* Interactive Google Maps */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-6">
                  <div className="relative h-80">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.234567890123!2d35.2431!3d-1.3456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182c8a9b8c9d8e7f%3A0x1234567890abcdef!2sTalek%2C%20Maasai%20Mara%2C%20Kenya!5e0!3m2!1sen!2ske!4v1703876543210!5m2!1sen!2ske"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-xl"
                    ></iframe>
                    <div className="absolute top-4 right-4">
                      <a
                        href="https://maps.app.goo.gl/ve1DFWagjRwLrpjD7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-resolute-green px-4 py-2 rounded-lg shadow-lg font-medium hover:bg-resolute-green hover:text-white transition-all duration-300 flex items-center space-x-2"
                      >
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">
                          {language === "en"
                            ? "Open in Maps"
                            : "Fungua kwenye Ramani"}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-gradient-to-r from-resolute-green to-resolute-light-green rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">
                    {language === "en"
                      ? "Need Immediate Assistance?"
                      : "Unahitaji Msaada wa Haraka?"}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5" />
                      <span>+254758771683 / +254721513749</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5" />
                      <span>info@resoluterisecbo.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5" />
                      <span>www.resoluterisecbo.com</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white border-opacity-30">
                    <p className="text-sm text-white text-opacity-90">
                      {language === "en"
                        ? "Join us in building sustainable futures! Together, let's make a difference in our communities."
                        : "Jiunge nasi katika kujenga mustakabali endelevu! Pamoja, tulete mabadiliko katika jamii zetu."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Building className="w-12 h-12 mx-auto mb-4 text-resolute-green" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {language === "en" ? "Regional Offices" : "Ofisi za Kikanda"}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {language === "en"
                ? "At ResoluteRise, we are committed to empowering communities and conserving our precious ecosystems. Together, we create sustainable livelihood projects that uplift youths, foster resilience, and promote environmental stewardship in Kenya and beyond."
                : "Katika ResoluteRise, tumejitolea kuwezesha jamii na kuhifadhi mazingira yetu ya thamani. Pamoja, tunaunda miradi ya maisha endelevu ambayo yanainua vijana, kukuza uvumilivu, na kukuza uongozi wa mazingira nchini Kenya na zaidi."}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {language === "en"
                    ? "How You Can Help"
                    : "Jinsi Unavyoweza Kusaidia"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === "en"
                    ? "Donate to fuel our initiatives"
                    : "Changia kuongeza miradi yetu"}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {language === "en" ? "Partner With Us" : "Shirikiana Nasi"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === "en"
                    ? "Collaborate to amplify our impact"
                    : "Shirikiana kuongeza athari zetu"}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {language === "en" ? "Advocate" : "Tetea"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === "en"
                    ? "Spread awareness about our mission"
                    : "Sambaza ufahamu kuhusu dhamira yetu"}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
