import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import {
  Users,
  Target,
  Eye,
  Heart,
  Award,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Star,
  Scale,
} from "lucide-react";

const About = () => {
  const { t, language } = useLanguage();

  const values = [
    {
      icon: Heart,
      title:
        language === "en" ? "Integrity and Transparency" : "Uwazi na Uaminifu",
      description:
        language === "en"
          ? "We uphold the highest standards of honesty and transparency in all our endeavors, ensuring accountability in every aspect of our work."
          : "Tunashikilia viwango vya juu vya uaminifu na uwazi katika jitihada zetu zote, tukihakikisha uwajibikaji katika kila kipengele cha kazi yetu.",
    },
    {
      icon: Target,
      title:
        language === "en"
          ? "Empowerment and Community Focus"
          : "Uwezeshaji na Umakini wa Jamii",
      description:
        language === "en"
          ? "Our programs are designed to enable individuals to realize their potential and lead fulfilling lives, fostering inclusivity, collaboration, and mutual respect."
          : "Mipango yetu imeundwa kuwezesha watu kutambua uwezo wao na kuishi maisha ya kutosheleza, kukuza ujumuishaji, ushirikiano, na heshima ya pamoja.",
    },
    {
      icon: Users,
      title:
        language === "en"
          ? "Environmental Stewardship"
          : "Uongozi wa Mazingira",
      description:
        language === "en"
          ? "We are dedicated to safeguarding the environment and promoting conservation practices that ensure sustainability for future generations."
          : "Tumejitolea kulinda mazingira na kukuza mbinu za uhifadhi ambazo zinahakikisha uendelevu kwa vizazi vijavyo.",
    },
    {
      icon: Scale,
      title: language === "en" ? "Sustainable Growth" : "Ukuaji Endelevu",
      description:
        language === "en"
          ? "We promote long-term growth through sustainable practices that benefit both communities and the environment while ensuring economic advancement."
          : "Tunakuza ukuaji wa muda mrefu kupitia mbinu endelevu ambazo zinafaidisha jamii na mazingira huku tukihakikisha maendeleo ya kiuchumi.",
    },
  ];

  const teamMembers = [
    {
      name: "Kasoe Dominic",
      title:
        language === "en"
          ? "CEO/Co-Founder"
          : "Mkurugenzi Mkuu/Mwanzilishi Mshirika",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0f7bde685416479ab2cfdd2fa6980d09%2F4ce2b8195fd1445f8ecf7969637249e5?format=webp&width=800",
      bio:
        language === "en"
          ? "Currently pursuing a Master of Science in Strategic Management at JKUAT, with a background in Community Resources Management from Machakos University. Field Operations Officer at Kenya Private Security Regulatory Authority and experienced in conservation through Maasai Mara Wildlife Conservancies Association."
          : "Anasoma shahada ya uzamili katika Usimamizi wa Kimkakati katika JKUAT, na asili ya Usimamizi wa Rasilimali za Jamii kutoka Chuo Kikuu cha Machakos. Aliwahi kuwa Afisa wa Shughuli za Uwandani katika Mamlaka ya Udhibiti wa Usalama wa Kibinafsi ya Kenya.",
      education:
        language === "en"
          ? "MSc Strategic Management (pursuing), BSc Community Resources Management"
          : "Uzamili wa Usimamizi wa Kimkakati (anasoma), Shahada ya Kwanza Usimamizi wa Rasilimali za Jamii",
    },
    {
      name: "Emmanuel Sananka",
      title:
        language === "en"
          ? "Managing Director/Co-Founder"
          : "Mkurugenzi wa Uongozi/Mwanzilishi Mshirika",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0f7bde685416479ab2cfdd2fa6980d09%2F1e7a63d628df44ce88747c07e0b23b94?format=webp&width=800",
      bio:
        language === "en"
          ? "Trueness Project Ambassador in Kenya and Founder of Maasaen, dedicated to empowering Maasai women through showcasing their beadwork globally. Former President of Kisii University Students Association representing over 25,000 students."
          : "Balozi wa Mradi wa Uaminifu nchini Kenya na Mwanzilishi wa Maasaen, aliyejitoa kuwawezesha wanawake wa Kimaasai kupitia kuonyesha kazi zao za ushanga ulimwenguni. Aliwahi kuwa Rais wa Chama cha Wanafunzi cha Chuo Kikuu cha Kisii.",
      education:
        language === "en"
          ? "University leadership and community development experience"
          : "Uzoefu wa uongozi wa chuo kikuu na maendeleo ya jamii",
    },
    {
      name: "Moriaso Salaon",
      title:
        language === "en"
          ? "EXECUTIVE DIRECTOR/CO-FOUNDER"
          : "MKURUGENZI MTENDAJI/MWANZILISHI MSAIDIZI",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0f7bde685416479ab2cfdd2fa6980d09%2Faf6f8cc88fc64e168c3cfa6059ebcd94?format=webp&width=800",
      bio:
        language === "en"
          ? "Passionate and results-driven Software Developer with a strong foundation in analytical thinking, honed through a Bachelor's degree in Actuarial Science. Beyond technology, Moriaso is a dedicated advocate for human rights and land justice, actively engaging in initiatives that seek to empower marginalized communities and promote equitable access to resources."
          : "Msanidi programu mwenye shauku na anayefanya kazi kwa matokeo yenye msingi imara wa ufikiri wa kiuchunguzi, uliokomezwa kupitia shahada ya kwanza katika Sayansi ya Takwimu. Zaidi ya teknolojia, Moriaso ni mtetezi aliyejitolea wa haki za binadamu na haki za ardhi, akishiriki kikamilifu katika miradi inayolenga kuwezesha jamii zilizotengwa na kukuza ufikiaji sawa wa rasilimali.",
      education:
        language === "en"
          ? "Bachelor's degree in Actuarial Science"
          : "Shahada ya kwanza katika Sayansi ya Takwimu",
    },
  ];

  const milestones = [
    {
      year: "2022",
      title:
        language === "en"
          ? "Youth Football Tournaments"
          : "Michuano ya Mpira wa Miguu ya Vijana",
      description:
        language === "en"
          ? "Organized football tournaments to engage youth while educating them on environmental conservation and the importance of preserving natural resources."
          : "Kuandaa michuano ya mpira wa miguu kushirikisha vijana huku tukiwafundisha kuhusu uhifadhi wa mazingira na umuhimu wa kulinda rasilimali za asili.",
    },
    {
      year: "2023",
      title:
        language === "en"
          ? "University Students Training Program"
          : "Mpango wa Mafunzo ya Wanafunzi wa Chuo Kikuu",
      description:
        language === "en"
          ? "Hosted transformative training in Thika, Kiambu County, equipping university students with skills for the evolving job market and emerging technologies like AI."
          : "Kuandaa mafunzo ya mabadiliko huko Thika, Kaunti ya Kiambu, kuwaandaa wanafunzi wa chuo kikuu na ujuzi wa soko la kazi linaloathiriwa na teknolojia mpya kama AI.",
    },
    {
      year: "2023",
      title:
        language === "en"
          ? "Menstrual Health Education Initiative"
          : "Mpango wa Elimu ya Afya ya Hedhi",
      description:
        language === "en"
          ? "Collaborated to organize impactful menstrual health education and sanitary pad distribution for high school girls in the Maasai Mara region."
          : "Kushirikiana kuandaa elimu yenye athari ya afya ya hedhi na kusambaza pedi za kiafya kwa wasichana wa shule za upili katika eneo la Maasai Mara.",
    },
    {
      year: "2024",
      title:
        language === "en"
          ? "Youth Mentorship in Maasai Mara"
          : "Uongozaji wa Vijana Maasai Mara",
      description:
        language === "en"
          ? "Successfully hosted youth mentorship event at Talek Maasai Mara, empowering 250 young individuals and addressing harmful cultural practices like FGM and child marriages."
          : "Kuandaa kwa mafanikio tukio la uongozaji wa vijana huko Talek Maasai Mara, kuwezesha vijana 250 na kushughulikia desturi mbaya kama tohara ya kike na ndoa za watoto.",
    },
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-resolute-green via-resolute-light-green to-resolute-pale-green py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Users className="w-16 h-16 mx-auto mb-6 text-resolute-yellow" />
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              {language === "en" ? "About ResoluteRise" : "Kuhusu ResoluteRise"}
            </h1>
            <p className="text-xl text-white text-opacity-95 leading-relaxed max-w-4xl mx-auto">
              {language === "en"
                ? "ResoluteRise Organization is dedicated to spreading positive education and empowerment through a variety of mediums, including books, talks, and training programs. Our mission is to inspire individuals to rise above challenges and achieve their fullest potential."
                : "Shirika la ResoluteRise limejitolea kusambaza elimu chanya na uwezeshaji kupitia vyombo mbalimbali, ikiwa ni pamoja na vitabu, mazungumzo, na mipango ya mafunzo. Dhamira yetu ni kuongoza watu kuinuka juu ya changamoto na kufikia uwezo wao kamili."}
            </p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Mission */}
              <div className="text-center">
                <div className="w-16 h-16 bg-resolute-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === "en" ? "Our Mission" : "Dhamira Yetu"}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {language === "en"
                    ? "To inspire individuals to rise above challenges and achieve their fullest potential through engaging publications, motivational speaking engagements, and comprehensive training programs. ResoluteRise aims to uplift and empower its audience personally and professionally."
                    : "Kuongoza watu kuinuka juu ya changamoto na kufikia uwezo wao kamili kupitia machapisho ya kuvutia, mazungumzo ya kutia moyo, na mipango ya kina ya mafunzo. ResoluteRise analenga kuinua na kuwezesha hadhira yake kibinafsi na kitaaluma."}
                </p>
              </div>

              {/* Vision */}
              <div className="text-center">
                <div className="w-16 h-16 bg-resolute-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-resolute-green" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === "en" ? "Our Vision" : "Maono Yetu"}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {language === "en"
                    ? "To empower and transform communities through sustainable development, leadership, education, financial literacy, and environmental conservation. ResoluteRise envisions a future where communities thrive with integrity, informed citizenship, and sustainable practices."
                    : "Kuwezesha na kubadilisha jamii kupitia maendeleo endelevu, uongozi, elimu, ujuzi wa kifedha, na uhifadhi wa mazingira. ResoluteRise inaona mustakabali ambapo jamii zinastawi kwa uaminifu, uraia wa kijuzi, na mbinu endelevu."}
                </p>
              </div>

              {/* Impact */}
              <div className="text-center">
                <div className="w-16 h-16 bg-resolute-pale-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === "en" ? "Our Impact" : "Athari Yetu"}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {language === "en"
                    ? "Since 2021, we have empowered over 500 community members, successfully advocated for landmark legal victories, and established sustainable programs across 15+ communities."
                    : "Tangu 2021, tumewezeesha zaidi ya wanajamii 500, kufanya kazi za utetezi za mafanikio za ushindi wa kisheria, na kuanzisha mipango endelevu katika jamii 15+."}
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language === "en" ? "Our Core Values" : "Maadili Yetu Makuu"}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {language === "en"
                  ? "These values guide every aspect of our work and define how we engage with communities and partners."
                  : "Maadili haya yanaongoza kila kipengele cha kazi yetu na kunafafanua jinsi tunavyojihusisha na jamii na washirika."}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <value.icon className="w-12 h-12 text-resolute-green mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                {language === "en"
                  ? "Our Leadership Team"
                  : "Timu Yetu ya Uongozi"}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {language === "en"
                  ? "Meet the dedicated professionals who lead our mission to empower communities across Kenya."
                  : "Kutana na wataalamu waliojitoa ambao wanaongoza dhamira yetu ya kuwezesha jamii nchini Kenya."}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden luxury-card animate-scale-in shadow-2xl"
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  <div className="aspect-[4/5] relative overflow-hidden rounded-t-2xl">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110"
                        style={{ objectPosition: "center 15%" }}
                      />
                    ) : (
                      <div className="h-full bg-gradient-to-br from-resolute-green to-resolute-pale-green flex items-center justify-center">
                        <Users className="w-20 h-20 text-white opacity-50 animate-luxury-float" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute top-4 right-4 w-3 h-3 bg-resolute-green rounded-full animate-pulse-glow opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-resolute-green via-resolute-yellow to-resolute-green"></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-resolute-green transition-colors duration-300 relative">
                      <span className="relative z-10">{member.name}</span>
                      <div className="absolute inset-0 bg-resolute-green/10 blur-sm animate-pulse opacity-0 hover:opacity-100 transition-opacity duration-300 rounded"></div>
                    </h3>
                    <p className="text-resolute-green font-semibold mb-3 text-sm uppercase tracking-wide animate-pulse-glow">
                      {member.title}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="flex items-start space-x-2 mt-4 pt-4 border-t border-gradient-to-r from-transparent via-gray-200 to-transparent">
                      <GraduationCap className="w-4 h-4 text-resolute-green mt-0.5 flex-shrink-0 animate-luxury-float" />
                      <p className="text-xs text-gray-500 font-medium">
                        {member.education}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline/History */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-resolute-green" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language === "en" ? "Our Journey" : "Safari Yetu"}
              </h2>
              <p className="text-lg text-gray-600">
                {language === "en"
                  ? "Key milestones in our mission to empower communities and advocate for their rights."
                  : "Hatua muhimu katika dhamira yetu ya kuwezesha jamii na kutetea haki zao."}
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-resolute-green"></div>
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative flex items-start mb-8 last:mb-0"
                >
                  <div className="w-4 h-4 bg-resolute-green rounded-full border-4 border-white mr-6 mt-2 z-10 shadow-lg"></div>
                  <div className="flex-1">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {milestone.title}
                        </h3>
                        <span className="text-sm text-white bg-resolute-green px-3 py-1 rounded-full font-medium">
                          {milestone.year}
                        </span>
                      </div>
                      <p className="text-gray-700">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-resolute-green to-resolute-light-green">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "en"
                ? "Join Our Mission"
                : "Jiunge na Dhamira Yetu"}
            </h2>
            <p className="text-xl mb-8 text-white text-opacity-95">
              {language === "en"
                ? "Whether through volunteering, donations, or partnerships, there are many ways to support our work and make a difference in communities across Kenya."
                : "Iwe kupitia kujitolea, michango, au ushirikiano, kuna njia nyingi za kusaidia kazi yetu na kuleta mabadiliko katika jamii nchini Kenya."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/support"
                className="bg-resolute-yellow text-resolute-green px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 hover:scale-105 transition-all duration-300 text-center"
              >
                {language === "en" ? "Get Involved" : "Jiunge"}
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-resolute-green hover:scale-105 transition-all duration-300 text-center"
              >
                {language === "en" ? "Contact Us" : "Wasiliana Nasi"}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
