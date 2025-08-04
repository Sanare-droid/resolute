import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Language = "en" | "sw";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.programs": "Programs",
    "nav.impact": "Our Impact",
    "nav.news": "News & Events",
    "nav.support": "Support Us",
    "nav.civic": "Olkiombo Land Case",
    "nav.contact": "Contact Us",
    "nav.tagline": "Education Meets Empowerment",

    // Homepage
    "home.hero.title1": "Education Meets",
    "home.hero.title2": "Empowerment",
    "home.hero.title3": "Together We Rise",
    "home.hero.subtitle":
      "We are excited to have you join us on our transformative journey of empowerment. At ResoluteRise, we believe in the unparalleled power of education and community to inspire individuals to overcome challenges and achieve their fullest potential.",
    "home.hero.cta1": "Join Our Journey",
    "home.hero.cta2": "Explore Our Programs",
    "home.mission.title": "Our Mission",
    "home.mission.text":
      "To inspire individuals to rise above challenges and achieve their fullest potential through positive education, empowerment programs, engaging publications, motivational speaking, and comprehensive training initiatives.",
    "home.focus.title": "Our Services",
    "home.focus.subtitle":
      "We offer a range of services designed to uplift and empower our audience through various mediums",
    "home.civic.title": "Educational Programs",
    "home.civic.desc":
      "Comprehensive training programs that equip participants with the tools and knowledge they need to thrive in both personal and professional spheres.",
    "home.land.title": "Publications & Speaking",
    "home.land.desc":
      "Engaging and insightful publications combined with dynamic and motivational speaking engagements that inspire and educate.",
    "home.community.title": "Events & Media Marketing",
    "home.community.desc":
      "Professional event organizing and tailored media marketing services that enhance visibility and foster community engagement.",
    "home.impact.title": "Our Impact",
    "home.impact.subtitle":
      "Real change happens through sustained effort and community collaboration",
    "home.join.title": "Transform Your Journey",
    "home.join.text":
      "Together with your support, we can build a future where communities thrive with integrity, informed citizenship, and sustainable practices. Your partnership is crucial in helping us create lasting, positive change.",
    "home.donate": "Support Our Mission",
    "home.involved": "Get Involved",

    // Footer
    "footer.about":
      "ResoluteRise Organization is dedicated to spreading positive education and empowerment through a variety of mediums, including books, talks, and training programs. We also serve as event organizers and provide media marketing services.",
    "footer.motto": "GIVING WINGS TO DREAMS",
    "footer.contact.phone": "+254758771683 / +254721513749",
    "footer.contact.email": "info@resoluterisecbo.com",
    "footer.contact.website": "www.resoluterisecbo.com",
    "footer.contact.address": "Maasai Mara Talek, Narok County Kenya",
    "footer.links": "Quick Links",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",

    // Support page
    "support.hero.title": "Support Our Mission",
    "support.hero.subtitle":
      "Your support enables us to continue empowering communities, fighting for land rights, and providing essential civic education across Kenya. Every contribution makes a difference.",

    // Common
    "learn.more": "Learn More",
    "contact.us": "Contact Us",
    "read.more": "Read More",
    "get.started": "Get Started",
  },
  sw: {
    // Navigation
    "nav.home": "Nyumbani",
    "nav.about": "Kuhusu Sisi",
    "nav.programs": "Mipango",
    "nav.impact": "Athari Zetu",
    "nav.news": "Habari na Matukio",
    "nav.support": "Tusaidie",
    "nav.civic": "Kesi ya Ardhi ya Olkiombo",
    "nav.contact": "Wasiliana Nasi",
    "nav.tagline": "Elimu Inakutana na Uwezeshaji",

    // Homepage
    "home.hero.title1": "Elimu Inakutana na",
    "home.hero.title2": "Uwezeshaji",
    "home.hero.title3": "Pamoja Tunaongea",
    "home.hero.subtitle":
      "Tunafurahi kuwa umejiunga nasi katika safari yetu ya mabadiliko ya uwezeshaji. Katika ResoluteRise, tunaamini katika nguvu isiyolinganishwa ya elimu na jamii kuongoza watu kushinda changamoto na kufikia uwezo wao kamili.",
    "home.hero.cta1": "Jiunge na Safari Yetu",
    "home.hero.cta2": "Gundua Mipango Yetu",
    "home.mission.title": "Dhamira Yetu",
    "home.mission.text":
      "Kuongoza watu kuinuka juu ya changamoto na kufikia uwezo wao kamili kupitia elimu chanya, mipango ya uwezeshaji, machapisho ya kuvutia, mazungumzo ya kutia moyo, na miradi ya kina ya mafunzo.",
    "home.focus.title": "Huduma Zetu",
    "home.focus.subtitle":
      "Tunatoa huduma mbalimbali zilizoundwa kuinua na kuwezesha hadhira yetu kupitia vyombo mbalimbali",
    "home.civic.title": "Mipango ya Kielimu",
    "home.civic.desc":
      "Mipango ya kina ya mafunzo ambayo inawaandaa washiriki na zana na maarifa wanayohitaji kustawi katika nyanja za kibinafsi na kitaaluma.",
    "home.land.title": "Machapisho na Mazungumzo",
    "home.land.desc":
      "Machapisho ya kuvutia na yenye busara pamoja na mazungumzo ya kichochezi na ya motisha yanayoongoza na kuelimisha.",
    "home.community.title": "Matukio na Uuzaji wa Vyombo",
    "home.community.desc":
      "Huduma za kitaalamu za kupanga matukio na uuzaji wa vyombo vya habari uliobinafsishwa ambao unaimarisha mwonekano na kukuza ushiriki wa jamii.",
    "home.impact.title": "Athari Zetu",
    "home.impact.subtitle":
      "Mabadiliko ya kweli hutatokea kupitia juhudi za kudumu na ushirikiano wa jamii",
    "home.join.title": "Jiunge na Harakati Zetu",
    "home.join.text":
      "Kila mchango, haijalishi ni mdogo kiasi gani, unatusaidia kujenga jamii imara na kuunda mabadiliko ya kudumu. Kuwa sehemu ya suluhisho leo.",
    "home.donate": "Changia Sasa",
    "home.involved": "Jiunge",

    // Footer
    "footer.about":
      "Shirika la ResoluteRise limejitolea kusambaza elimu chanya na uwezeshaji kupitia vyombo mbalimbali, ikiwa ni pamoja na vitabu, mazungumzo, na mipango ya mafunzo. Pia tunatumika kama waandaaji wa matukio na kutoa huduma za uuzaji wa vyombo vya habari.",
    "footer.motto": "KUTOA MABAWA KWA NDOTO",
    "footer.contact.phone": "+254758771683 / +254721513749",
    "footer.contact.email": "info@resoluterisecbo.com",
    "footer.contact.website": "www.resoluterisecbo.com",
    "footer.contact.address": "Maasai Mara Talek, Kaunti ya Narok Kenya",
    "footer.links": "Viungo vya Haraka",
    "footer.contact": "Mawasiliano",
    "footer.rights": "Haki zote zimehifadhiwa.",

    // Support page
    "support.hero.title": "Unga Mkono Dhamira Yetu",
    "support.hero.subtitle":
      "Msaada wako unatuwezesha kuendelea kuwezesha jamii, kupigania haki za ardhi, na kutoa elimu muhimu ya kiraia nchini Kenya. Kila mchango una maana.",

    // Common
    "learn.more": "Jifunze Zaidi",
    "contact.us": "Wasiliana Nasi",
    "read.more": "Soma Zaidi",
    "get.started": "Anza",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    // Hook called outside of provider - development error
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    // Provide a fallback during initial render/hydration
    try {
      return (
        translations[language][key as keyof (typeof translations)["en"]] || key
      );
    } catch (error) {
      // Translation error - using key as fallback
      return key;
    }
  };

  const contextValue = React.useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language],
  );

  // Ensure the provider always has a value
  if (!contextValue) {
    console.error("LanguageProvider: contextValue is null");
    return <div>Loading...</div>;
  }

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
