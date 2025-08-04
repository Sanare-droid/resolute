import { useState } from "react";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ExternalLink,
  Share2,
  BookOpen,
  Megaphone,
  Award,
  FileText,
  Filter,
  Search,
  Tag,
  ChevronRight,
  Eye,
  Heart,
  MessageCircle,
} from "lucide-react";

const News = () => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filterCategories = [
    { id: "all", label: language === "en" ? "All Updates" : "Sasisho Zote" },
    { id: "news", label: language === "en" ? "News" : "Habari" },
    { id: "events", label: language === "en" ? "Events" : "Matukio" },
    {
      id: "success",
      label: language === "en" ? "Success Stories" : "Hadithi za Mafanikio",
    },
    { id: "advocacy", label: language === "en" ? "Advocacy" : "Utetezi" },
  ];

  const newsItems = [
    {
      id: 1,
      type: "success",
      title:
        language === "en"
          ? "Youth Mentorship Event Empowers 250 Young People in Maasai Mara"
          : "Tukio la Uongozaji wa Vijana Linawezesha Vijana 250 Maasai Mara",
      excerpt:
        language === "en"
          ? "ResoluteRise successfully hosted a transformative youth mentorship event at Talek Maasai Mara, addressing harmful cultural practices and promoting education."
          : "ResoluteRise imefanikisha kuandaa tukio la mabadiliko la uongozaji wa vijana huko Talek Maasai Mara, kushughulikia desturi mbaya na kukuza elimu.",
      content:
        language === "en"
          ? "ResoluteRise Community-Based Organization hosted a successful youth mentorship event at Talek Maasai Mara, empowering 250 young individuals through education. The event addressed retrogressive cultural practices like Female Genital Mutilation (FGM) and child marriages, urging participants to prioritize education and personal development. Speakers emphasized that education is key to unlocking potential and achieving true empowerment."
          : "Shirika la ResoluteRise liliandaa kwa mafanikio tukio la uongozaji wa vijana huko Talek Maasai Mara, kuwezesha vijana 250 kupitia elimu. Tukio hilo lilishughulikia desturi mbaya kama tohara ya kike na ndoa za watoto, kuwaomba washiriki kuweka kipaumbele elimu na maendeleo ya kibinafsi. Wazungumzaji walisisitiza kuwa elimu ni ufunguo wa kufungua uwezo na kufikia uwezeshaji wa kweli.",
      date: "2024-03-15",
      category:
        language === "en" ? "Youth Empowerment" : "Uwezeshaji wa Vijana",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0f7bde685416479ab2cfdd2fa6980d09%2F437880233fee408d9501305a4fc9e505?format=webp&width=800",
      author: "Kasoe Dominic",
      readTime: "4 min",
      views: 1234,
      likes: 89,
      featured: true,
    },
    {
      id: 2,
      type: "news",
      title:
        language === "en"
          ? "University Students Training Program Equips Youth with Modern Skills"
          : "Mpango wa Mafunzo ya Wanafunzi wa Chuo Kikuu Unawaandaa Vijana na Ujuzi wa Kisasa",
      excerpt:
        language === "en"
          ? "ResoluteRise hosted transformative training in Thika, Kiambu County, focusing on job market preparation and emerging technologies like AI."
          : "ResoluteRise iliandaa mafunzo ya mabadiliko huko Thika, Kaunti ya Kiambu, yakizingatia maandalizi ya soko la kazi na teknolojia mpya kama AI.",
      content:
        language === "en"
          ? "ResoluteRise Community-Based Organization recently hosted a transformative event in Thika, Kiambu County, aimed at equipping university students with the necessary skills and knowledge to navigate the evolving job market. Understanding the pressing issue of unemployment in Kenya, this initiative focused on discussing emerging technologies, particularly artificial intelligence (AI), and the importance of adapting to these advancements."
          : "Shirika la ResoluteRise liliandaa hivi karibuni tukio la mabadiliko huko Thika, Kaunti ya Kiambu, lenye lengo la kuwaandaa wanafunzi wa chuo kikuu na ujuzi na maarifa yanayohitajika kushughulikia soko la kazi linaloathiriwa. Kuelewa tatizo kuu la ukosefu wa ajira nchini Kenya, mpango huu ulizingatia kujadili teknolojia mpya, hasa akili bandia (AI), na umuhimu wa kubadilika na maendeleo haya.",
      date: "2024-01-20",
      category: language === "en" ? "Skills Development" : "Maendeleo ya Ujuzi",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0f7bde685416479ab2cfdd2fa6980d09%2F437880233fee408d9501305a4fc9e505?format=webp&width=800",
      author: "Emmanuel Sananka",
      readTime: "5 min",
      views: 892,
      likes: 67,
      featured: false,
    },
    {
      id: 3,
      type: "success",
      title:
        language === "en"
          ? "Menstrual Health Education Transforms Lives of High School Girls"
          : "Elimu ya Afya ya Hedhi Inabadilisha Maisha ya Wasichana wa Shule za Upili",
      excerpt:
        language === "en"
          ? "ResoluteRise organized impactful menstrual health education and sanitary pad distribution for high school girls in the Maasai Mara region."
          : "ResoluteRise iliandaa elimu yenye athari ya afya ya hedhi na kusambaza pedi za kiafya kwa wasichana wa shule za upili katika eneo la Maasai Mara.",
      content:
        language === "en"
          ? "In collaboration with education partners, ResoluteRise Community-Based Organization organized an impactful event focused on menstrual health education and the distribution of essential hygiene products to high school girls in the Maasai Mara region. This education is crucial in empowering the girls to manage their periods safely and with dignity, thereby reducing school absenteeism and promoting better health."
          : "Kwa kushirikiana na washirika wa elimu, Shirika la ResoluteRise liliandaa tukio lenye athari linalozingatia elimu ya afya ya hedhi na kusambaza bidhaa muhimu za usafi kwa wasichana wa shule za upili katika eneo la Maasai Mara. Elimu hii ni muhimu katika kuwezesha wasichana kushughulikia hedhi zao kwa usalama na heshima, hivyo kupunguza kutokuja shuleni na kukuza afya bora.",
      date: "2023-11-15",
      category: language === "en" ? "Health Education" : "Elimu ya Afya",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0f7bde685416479ab2cfdd2fa6980d09%2F437880233fee408d9501305a4fc9e505?format=webp&width=800",
      author: "ResoluteRise Team",
      readTime: "4 min",
      views: 756,
      likes: 134,
      featured: true,
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title:
        language === "en"
          ? "Youth Football Tournament & Environmental Conservation Forum"
          : "Mchuano wa Mpira wa Miguu ya Vijana na Foro la Uhifadhi wa Mazingira",
      description:
        language === "en"
          ? "Join us for a football tournament while learning about environmental conservation and the importance of protecting natural resources."
          : "Jiunge nasi katika mchuano wa mpira wa miguu huku ukijifunza kuhusu uhifadhi wa mazingira na umuhimu wa kulinda rasilimali za asili.",
      date: "2024-04-20",
      time: "8:00 AM - 5:00 PM",
      location: "Community Sports Ground",
      type: "workshop",
      capacity: 150,
      registered: 89,
      status: "open",
    },
    {
      id: 2,
      title:
        language === "en"
          ? "Professional Skills Development Workshop"
          : "Warsha ya Maendeleo ya Ujuzi wa Kitaaluma",
      description:
        language === "en"
          ? "Comprehensive workshop on modern job market skills, digital literacy, and career advancement for young professionals."
          : "Warsha ya kina ya ujuzi wa soko la kazi la kisasa, ujuzi wa kidijitali, na maendeleo ya kazi kwa vijana wataalamu.",
      date: "2024-05-25",
      time: "9:00 AM - 4:00 PM",
      location: "Thika Business Center",
      type: "workshop",
      capacity: 80,
      registered: 45,
      status: "open",
    },
    {
      id: 3,
      title:
        language === "en"
          ? "Community Health & Wellness Education Program"
          : "Mpango wa Elimu ya Afya na Ustawi wa Jamii",
      description:
        language === "en"
          ? "Comprehensive health education program including reproductive health awareness and hygiene product distribution."
          : "Mpango wa kina wa elimu ya afya ikiwa ni pamoja na ufahamu wa afya ya uzazi na kusambaza bidhaa za usafi.",
      date: "2024-06-10",
      time: "10:00 AM - 3:00 PM",
      location: "Maasai Mara Region Schools",
      type: "health",
      capacity: 200,
      registered: 87,
      status: "open",
    },
  ];

  const filteredNews = newsItems.filter((item) => {
    const matchesFilter = activeFilter === "all" || item.type === activeFilter;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleShare = (item: any) => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.excerpt,
        url: window.location.href + "#" + item.id,
      });
    } else {
      navigator.clipboard.writeText(window.location.href + "#" + item.id);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-resolute-green via-resolute-light-green to-resolute-pale-green py-20 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-resolute-yellow opacity-10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl animate-pulse"></div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative">
            <div className="animate-fade-in-up">
              <Megaphone className="w-16 h-16 mx-auto mb-6 text-resolute-yellow" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {language === "en" ? "News & Events" : "Habari na Matukio"}
              </h1>
              <p className="text-xl text-white text-opacity-95 leading-relaxed max-w-4xl mx-auto">
                {language === "en"
                  ? "Stay updated with the latest news, events, and developments from ResoluteRise and the communities we serve."
                  : "Baki umepata habari za hivi karibuni, matukio, na maendeleo kutoka ResoluteRise na jamii tunazotumikia."}
              </p>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 bg-gray-50 border-b">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={
                    language === "en"
                      ? "Search news and events..."
                      : "Tafuta habari na matukio..."
                  }
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-resolute-green focus:border-transparent"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                {filterCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeFilter === category.id
                        ? "bg-resolute-green text-white shadow-lg scale-105"
                        : "bg-white text-gray-700 border border-gray-300 hover:border-resolute-green hover:text-resolute-green hover:scale-105"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured News */}
        {filteredNews.some((item) => item.featured) && (
          <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {language === "en" ? "Featured Stories" : "Hadithi Kuu"}
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {filteredNews
                  .filter((item) => item.featured)
                  .map((item, index) => (
                    <article
                      key={item.id}
                      className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in-scale"
                      style={{ animationDelay: `${index * 300}ms` }}
                    >
                      <div className="h-64 bg-gradient-to-br from-resolute-green to-resolute-pale-green relative overflow-hidden">
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        )}
                        <div className="absolute top-4 left-4">
                          <span className="bg-resolute-yellow text-resolute-green px-3 py-1 rounded-full text-sm font-medium">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar className="w-4 h-4 mr-2" />
                          {item.date}
                          <span className="mx-2">•</span>
                          <Clock className="w-4 h-4 mr-1" />
                          {item.readTime}
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-resolute-green transition-colors duration-300">
                          {item.title}
                        </h3>

                        <p className="text-gray-700 leading-relaxed mb-6">
                          {item.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {item.views}
                            </div>
                            <div className="flex items-center">
                              <Heart className="w-4 h-4 mr-1" />
                              {item.likes}
                            </div>
                          </div>

                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleShare(item)}
                              className="p-2 text-gray-400 hover:text-resolute-green hover:scale-110 transition-all duration-300"
                            >
                              <Share2 className="w-5 h-5" />
                            </button>
                            <button className="flex items-center text-resolute-green font-medium hover:scale-105 transition-transform duration-300">
                              {language === "en" ? "Read More" : "Soma Zaidi"}
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          </section>
        )}

        {/* All News */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {language === "en"
                  ? "Latest Updates"
                  : "Sasisho za Hivi Karibuni"}
              </h2>
            </div>

            <div className="space-y-6">
              {filteredNews
                .filter((item) => !item.featured)
                .map((item, index) => (
                  <article
                    key={item.id}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 animate-fade-in-up"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="grid lg:grid-cols-4 gap-6">
                      <div className="lg:col-span-1">
                        <div className="h-48 lg:h-32 bg-gradient-to-br from-resolute-green to-resolute-pale-green rounded-lg overflow-hidden">
                          {item.image && (
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                          )}
                        </div>
                      </div>

                      <div className="lg:col-span-3">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-2" />
                            {item.date}
                            <span className="mx-2">•</span>
                            <span className="text-resolute-green font-medium">
                              {item.category}
                            </span>
                          </div>

                          <button
                            onClick={() => handleShare(item)}
                            className="p-2 text-gray-400 hover:text-resolute-green hover:scale-110 transition-all duration-300"
                          >
                            <Share2 className="w-5 h-5" />
                          </button>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-resolute-green transition-colors duration-300 cursor-pointer">
                          {item.title}
                        </h3>

                        <p className="text-gray-700 leading-relaxed mb-4">
                          {item.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>By {item.author}</span>
                            <div className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {item.views}
                            </div>
                            <div className="flex items-center">
                              <Heart className="w-4 h-4 mr-1" />
                              {item.likes}
                            </div>
                          </div>

                          <button className="flex items-center text-resolute-green font-medium hover:scale-105 transition-transform duration-300">
                            {language === "en" ? "Read More" : "Soma Zaidi"}
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {language === "en" ? "Upcoming Events" : "Matukio Yanayokuja"}
              </h2>
              <p className="text-lg text-gray-600">
                {language === "en"
                  ? "Join us at these upcoming events and be part of positive change"
                  : "Jiunge nasi katika matukio haya yanayokuja na uwe sehemu ya mabadiliko mazuri"}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group animate-fade-in-scale"
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  <div className="h-4 bg-gradient-to-r from-resolute-green to-resolute-yellow"></div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          event.type === "workshop"
                            ? "bg-blue-100 text-blue-800"
                            : event.type === "fundraiser"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-green-100 text-green-800"
                        }`}
                      >
                        {event.type === "workshop" &&
                          (language === "en" ? "Workshop" : "Warsha")}
                        {event.type === "fundraiser" &&
                          (language === "en" ? "Fundraiser" : "Ukusanyaji")}
                        {event.type === "health" &&
                          (language === "en"
                            ? "Health Program"
                            : "Mpango wa Afya")}
                      </span>
                      <span className="text-sm text-gray-500">
                        {event.registered}/{event.capacity}{" "}
                        {language === "en" ? "registered" : "wamejisajili"}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-resolute-green transition-colors duration-300">
                      {event.title}
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      {event.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-3 text-resolute-green" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-3 text-resolute-green" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-3 text-resolute-green" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <Link
                        to="/contact"
                        className="bg-resolute-green text-white py-3 px-4 rounded-lg font-medium text-center hover:bg-opacity-90 hover:scale-105 transition-all duration-300"
                      >
                        {language === "en" ? "Register Now" : "Jisajili Sasa"}
                      </Link>
                      <button className="border-2 border-resolute-green text-resolute-green py-2 px-4 rounded-lg font-medium hover:bg-resolute-green hover:text-white hover:scale-105 transition-all duration-300">
                        {language === "en" ? "Learn More" : "Jifunze Zaidi"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-resolute-green to-resolute-light-green">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "en" ? "Stay Updated" : "Baki Umejua"}
            </h2>
            <p className="text-xl mb-8 text-white text-opacity-95">
              {language === "en"
                ? "Subscribe to our newsletter to receive the latest news, events, and updates from ResoluteRise."
                : "Jiandikishe kwa jarida letu ili kupokea habari za hivi karibuni, matukio, na sasisho kutoka ResoluteRise."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder={
                  language === "en"
                    ? "Enter your email"
                    : "Ingiza barua pepe yako"
                }
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-resolute-yellow"
              />
              <button className="bg-resolute-yellow text-resolute-green px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 hover:scale-105 transition-all duration-300">
                {language === "en" ? "Subscribe" : "Jiandikishe"}
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default News;
