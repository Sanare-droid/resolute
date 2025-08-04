import React from "react";
import {
  ArrowRight,
  Users,
  BookOpen,
  Scale,
  Heart,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";

const Home = () => {
  const { t } = useLanguage();
  const { elementRef: missionRef, isVisible: missionVisible } =
    useScrollAnimation();
  const { elementRef: impactRef, isVisible: impactVisible } =
    useScrollAnimation();
  const { elementRef: testimonialsRef, isVisible: testimonialsVisible } =
    useScrollAnimation();
  const parallaxRef = useParallax(0.3);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-resolute-green via-resolute-light-green to-resolute-pale-green min-h-screen flex items-center overflow-hidden">
        {/* Enhanced gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20"></div>

        {/* Enhanced animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-resolute-yellow opacity-8 rounded-full blur-3xl animate-luxury-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white opacity-8 rounded-full blur-3xl animate-luxury-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-40 h-40 bg-resolute-green opacity-6 rounded-full blur-2xl animate-luxury-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-24 h-24 bg-resolute-yellow opacity-15 rounded-full blur-xl animate-luxury-float"
          style={{ animationDelay: "4s" }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white animate-slide-in-left space-y-8">
              {/* Enhanced title with better typography */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight preserve-text">
                  <span className="inline-block animate-fade-in-up delay-300 text-white/95">
                    {t("home.hero.title1")}
                  </span>
                  <span className="block text-resolute-yellow animate-scale-in delay-500 relative font-medium">
                    <span className="relative z-10 drop-shadow-sm">
                      {t("home.hero.title2")}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/30 via-resolute-yellow/30 to-yellow-400/30 blur-lg animate-pulse-glow rounded-lg"></div>
                  </span>
                  <span className="inline-block animate-fade-in-up delay-700 text-white/95">
                    {t("home.hero.title3")}
                  </span>
                </h1>
              </div>

              {/* Enhanced subtitle with better spacing */}
              <div className="animate-fade-in-up delay-1000">
                <p className="text-xl md:text-2xl leading-relaxed text-white/90 max-w-2xl font-light tracking-wide">
                  {t("home.hero.subtitle")}
                </p>
              </div>

              {/* Enhanced CTA buttons with better spacing and effects */}
              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up delay-1200 pt-4">
                <Link
                  to="/support"
                  className="group relative overflow-hidden bg-gradient-to-r from-resolute-yellow to-yellow-400 text-resolute-green px-10 py-5 rounded-2xl text-lg font-medium flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="relative z-10 font-semibold">
                    {t("home.hero.cta1")}
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/50 to-yellow-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link
                  to="/about"
                  className="group relative overflow-hidden backdrop-blur-sm bg-white/10 text-white px-10 py-5 rounded-2xl text-lg font-medium hover:bg-white hover:text-resolute-green transition-all duration-500 border-2 border-white/20 hover:border-white shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span className="relative z-10 font-semibold">
                    {t("home.hero.cta2")}
                  </span>
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>

            {/* Enhanced image section with better proportions */}
            <div className="relative animate-slide-in-right">
              <div className="relative">
                {/* Main image container with better aspect ratio */}
                <div className="w-full h-[500px] md:h-[600px] glass rounded-3xl overflow-hidden shadow-2xl luxury-card animate-scale-in delay-300 border border-white/20">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F0f7bde685416479ab2cfdd2fa6980d09%2F9812fb541de84d22b37bece821ec31d7?format=webp&width=800"
                    alt="ResoluteRise Community Members"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
                    <div className="p-8 text-white animate-fade-in-up delay-500 space-y-3">
                      <div className="text-2xl font-medium relative">
                        <span className="relative z-10 drop-shadow-lg">
                          Building Stronger Communities
                        </span>
                        <div className="absolute inset-0 bg-white/20 blur-sm animate-pulse opacity-40 rounded-lg"></div>
                      </div>
                      <p className="text-white/90 text-lg leading-relaxed max-w-md">
                        Empowering communities across Kenya through education
                        and advocacy
                      </p>
                    </div>
                  </div>
                </div>

                {/* Enhanced floating elements with better positioning */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-resolute-yellow/40 rounded-full opacity-60 animate-luxury-float blur-md"></div>
                <div
                  className="absolute -bottom-8 -left-8 w-24 h-24 bg-resolute-green/50 rounded-full opacity-70 animate-luxury-float blur-md"
                  style={{ animationDelay: "2s" }}
                ></div>
                <div
                  className="absolute top-1/2 -right-4 w-16 h-16 bg-white/30 rounded-full opacity-40 animate-luxury-float blur-sm"
                  style={{ animationDelay: "4s" }}
                ></div>
                <div
                  className="absolute top-1/4 -left-4 w-12 h-12 bg-resolute-yellow/40 rounded-full opacity-50 animate-luxury-float blur-sm"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-resolute-green opacity-5 rounded-full blur-3xl animate-luxury-float"></div>
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-resolute-yellow opacity-5 rounded-full blur-3xl animate-luxury-float"
          style={{ animationDelay: "3s" }}
        ></div>

        <div
          ref={missionRef as React.RefObject<HTMLDivElement>}
          className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative transition-all duration-1000 ${
            missionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8 relative">
            <span className="gradient-text relative z-10">
              {t("home.mission.title")}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-resolute-green/20 to-resolute-yellow/20 blur-sm animate-pulse-glow opacity-30 rounded-lg"></div>
          </h2>
          <div className="glass rounded-3xl p-8 md:p-12 premium-shadow luxury-card animate-scale-in delay-300">
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              {t("home.mission.text")}
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-resolute-green via-resolute-yellow to-resolute-green rounded-full animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              {t("home.focus.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("home.focus.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Civic Education */}
            <div className="group bg-gradient-to-br from-resolute-green to-resolute-light-green p-8 rounded-2xl text-white text-center hover:scale-105 hover:shadow-2xl transition-all duration-500 premium-shadow animate-fade-in-scale delay-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-opacity-30 transition-all duration-300">
                <BookOpen className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-resolute-yellow transition-colors duration-300">
                {t("home.civic.title")}
              </h3>
              <p className="text-lg mb-6 text-white text-opacity-90 group-hover:text-opacity-100 transition-all duration-300">
                {t("home.civic.desc")}
              </p>
              <Link
                to="/civic-education"
                className="inline-flex items-center text-resolute-yellow font-semibold hover:underline group-hover:scale-110 transition-transform duration-300"
              >
                {t("learn.more")}{" "}
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Land Rights Advocacy */}
            <div className="group bg-gradient-to-br from-resolute-yellow to-yellow-400 p-8 rounded-2xl text-resolute-green text-center hover:scale-105 hover:shadow-2xl transition-all duration-500 premium-shadow animate-fade-in-scale delay-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="w-16 h-16 bg-resolute-green bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-opacity-30 transition-all duration-300">
                <Scale className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-green-800 transition-colors duration-300">
                {t("home.land.title")}
              </h3>
              <p className="text-lg mb-6 group-hover:text-green-800 transition-colors duration-300">
                {t("home.land.desc")}
              </p>
              <Link
                to="/civic-education"
                className="inline-flex items-center text-resolute-green font-semibold hover:underline group-hover:scale-110 transition-transform duration-300"
              >
                Olkiombo Case{" "}
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Community Development */}
            <div className="group bg-gradient-to-br from-resolute-pale-green to-green-400 p-8 rounded-2xl text-white text-center hover:scale-105 hover:shadow-2xl transition-all duration-500 premium-shadow animate-fade-in-scale delay-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-opacity-30 transition-all duration-300">
                <Heart className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-resolute-yellow transition-colors duration-300">
                {t("home.community.title")}
              </h3>
              <p className="text-lg mb-6 text-white text-opacity-90 group-hover:text-opacity-100 transition-all duration-300">
                {t("home.community.desc")}
              </p>
              <Link
                to="/programs"
                className="inline-flex items-center text-resolute-yellow font-semibold hover:underline group-hover:scale-110 transition-transform duration-300"
              >
                Our Programs{" "}
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-resolute-green text-white">
        <div
          ref={impactRef as React.RefObject<HTMLDivElement>}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Real change happens through sustained effort and community
              collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div
              className={`group transition-all duration-700 ${impactVisible ? "animate-slide-in-bottom stagger-1" : "opacity-0"}`}
            >
              <div className="text-4xl md:text-5xl font-semibold text-resolute-yellow mb-2 hover-bounce cursor-pointer">
                25+
              </div>
              <p className="text-lg text-white text-opacity-90">
                Communities Served
              </p>
            </div>
            <div
              className={`group transition-all duration-700 ${impactVisible ? "animate-slide-in-bottom stagger-2" : "opacity-0"}`}
            >
              <div className="text-4xl md:text-5xl font-semibold text-resolute-yellow mb-2 hover-bounce cursor-pointer">
                850+
              </div>
              <p className="text-lg text-white text-opacity-90">
                People Educated
              </p>
            </div>
            <div
              className={`group transition-all duration-700 ${impactVisible ? "animate-slide-in-bottom stagger-3" : "opacity-0"}`}
            >
              <div className="text-4xl md:text-5xl font-semibold text-resolute-yellow mb-2 hover-bounce cursor-pointer">
                12
              </div>
              <p className="text-lg text-white text-opacity-90">
                Active Programs
              </p>
            </div>
            <div
              className={`group transition-all duration-700 ${impactVisible ? "animate-slide-in-bottom stagger-4" : "opacity-0"}`}
            >
              <div className="text-4xl md:text-5xl font-semibold text-resolute-yellow mb-2 hover-bounce cursor-pointer">
                3
              </div>
              <p className="text-lg text-white text-opacity-90">
                Years of Service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-resolute-yellow to-yellow-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-resolute-green mb-6">
            Join Our Movement
          </h2>
          <p className="text-xl text-resolute-green mb-8 max-w-3xl mx-auto">
            Every contribution, no matter how small, helps us build stronger
            communities and create lasting change. Be part of the solution
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/support"
              className="bg-gradient-to-r from-resolute-green to-resolute-light-green text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>{t("home.donate")}</span>
              <Heart className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-resolute-green text-resolute-green px-8 py-4 rounded-xl text-lg font-semibold hover:bg-resolute-green hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>{t("home.involved")}</span>
              <Users className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div
          ref={testimonialsRef as React.RefObject<HTMLDivElement>}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              Community Voices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from the communities and individuals whose lives have been
              transformed through our programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div
              className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 premium-shadow card-tilt magnetic ${testimonialsVisible ? "animate-slide-in-left stagger-1" : "opacity-0"}`}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-resolute-green to-resolute-light-green rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">MW</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Kaleku</h4>
                  <p className="text-gray-600 text-sm">
                    Community Leader, Olkiombo
                  </p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 leading-relaxed italic group-hover:text-gray-900 transition-colors duration-300">
                "ResoluteRise stood with us when we had nowhere else to turn.
                Their legal support helped us understand our rights and secure
                our ancestral lands. Today, our community thrives because of
                their dedication."
              </blockquote>
            </div>

            {/* Testimonial 2 */}
            <div
              className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 premium-shadow card-tilt magnetic ${testimonialsVisible ? "animate-fade-in-up stagger-2" : "opacity-0"}`}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-resolute-yellow to-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-resolute-green font-bold text-xl">
                    JK
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">James</h4>
                  <p className="text-gray-600 text-sm">Parent, Talek</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 leading-relaxed italic group-hover:text-gray-900 transition-colors duration-300">
                "My daughter was about to drop out of school due to financial
                constraints. The ResoluteRise scholarship program not only kept
                her in school but helped her graduate with honors!"
              </blockquote>
            </div>

            {/* Testimonial 3 */}
            <div
              className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 premium-shadow card-tilt magnetic ${testimonialsVisible ? "animate-slide-in-right stagger-3" : "opacity-0"}`}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-resolute-pale-green to-green-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Grace </h4>
                  <p className="text-gray-600 text-sm">
                    Health Volunteer, Narok
                  </p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 leading-relaxed italic group-hover:text-gray-900 transition-colors duration-300">
                "The mobile health clinic brought hope to our remote village.
                Many mothers and children received vital healthcare for the
                first time. It transformed our community's approach to
                wellness."
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
