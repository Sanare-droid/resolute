import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Users, 
  MapPin, 
  Award, 
  Heart,
  BookOpen,
  Scale,
  GraduationCap,
  Building,
  Calendar,
  Quote,
  ChevronLeft,
  ChevronRight,
  Star,
  PlayCircle,
  CheckCircle,
  BarChart3
} from 'lucide-react';

const Impact = () => {
  const { t, language } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    communities: 0,
    people: 0,
    programs: 0,
    years: 0
  });

  // Animate numbers on load
  useEffect(() => {
    const targets = {
      communities: 15,
      people: 250,
      programs: 8,
      years: 3
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic

      setAnimatedNumbers({
        communities: Math.floor(targets.communities * easedProgress),
        people: Math.floor(targets.people * easedProgress),
        programs: Math.floor(targets.programs * easedProgress),
        years: Math.floor(targets.years * easedProgress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedNumbers(targets);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const impactStats = [
    {
      icon: Users,
      value: animatedNumbers.communities,
      suffix: '+',
      label: language === 'en' ? 'Communities Served' : 'Jamii Zilizotumikiwa',
      color: 'text-resolute-green',
      bgColor: 'bg-resolute-green/10'
    },
    {
      icon: GraduationCap,
      value: animatedNumbers.people,
      suffix: '+',
      label: language === 'en' ? 'People Educated' : 'Watu Waliofunzwa',
      color: 'text-resolute-yellow',
      bgColor: 'bg-resolute-yellow/10'
    },
    {
      icon: BookOpen,
      value: animatedNumbers.programs,
      suffix: '',
      label: language === 'en' ? 'Active Programs' : 'Mipango Inayofanya Kazi',
      color: 'text-resolute-pale-green',
      bgColor: 'bg-resolute-pale-green/10'
    },
    {
      icon: Calendar,
      value: animatedNumbers.years,
      suffix: '',
      label: language === 'en' ? 'Years of Service' : 'Miaka ya Huduma',
      color: 'text-blue-600',
      bgColor: 'bg-blue-600/10'
    }
  ];

  const successStories = [
    {
      title: language === 'en' ? 'Youth Football Tournaments & Conservation Education' : 'Michuano ya Mpira wa Miguu ya Vijana na Elimu ya Uhifadhi',
      location: 'Multiple Locations',
      date: '2022',
      category: language === 'en' ? 'Youth Engagement' : 'Ushiriki wa Vijana',
      description: language === 'en'
        ? 'Organized football tournaments to engage youth while educating them on environmental conservation. During these events, we organized engagement forums where experienced conservationists and community leaders spoke about the critical role of preserving natural resources.'
        : 'Kuandaa michuano ya mpira wa miguu kushirikisha vijana huku tukiwafundisha kuhusu uhifadhi wa mazingira. Wakati wa matukio haya, tuliandaa maforo ya ushiriki ambapo wahifadhi wenye uzoefu na viongozi wa jamii walizungumza kuhusu jukumu muhimu la kulinda rasilimali za asili.',
      impact: language === 'en' ? 'Hundreds of youth engaged in conservation awareness' : 'Mamia ya vijana walishiriki katika ufahamu wa uhifadhi',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F0f7bde685416479ab2cfdd2fa6980d09%2F32338b9a6b2d496b9a605fd968d5a260?format=webp&width=800'
    },
    {
      title: language === 'en' ? 'University Students Training - Job Market Preparation' : 'Mafunzo ya Wanafunzi wa Chuo Kikuu - Maandalizi ya Soko la Kazi',
      location: 'Thika, Kiambu County',
      date: '2023',
      category: language === 'en' ? 'Skills Development' : 'Maendeleo ya Ujuzi',
      description: language === 'en'
        ? 'Hosted a transformative event in Thika, Kiambu County, aimed at equipping university students with the necessary skills and knowledge to navigate the evolving job market, focusing on emerging technologies, particularly artificial intelligence (AI), and the importance of adapting to these advancements.'
        : 'Kuandaa tukio la mabadiliko huko Thika, Kaunti ya Kiambu, lenye lengo la kuwaandaa wanafunzi wa chuo kikuu na ujuzi na maarifa yanayohitajika kushughulikia soko la kazi linaloathiriwa, kuzingatia teknolojia mpya, hasa akili bandia (AI), na umuhimu wa kubadilika na maendeleo haya.',
      impact: language === 'en' ? 'University students equipped with modern job market skills' : 'Wanafunzi wa chuo kikuu wameandaliwa na ujuzi wa soko la kazi la kisasa',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F0f7bde685416479ab2cfdd2fa6980d09%2F437880233fee408d9501305a4fc9e505?format=webp&width=800'
    },
    {
      title: language === 'en' ? 'Menstrual Health Education & Sanitary Pad Distribution' : 'Elimu ya Afya ya Hedhi na Kusambaza Pedi za Kiafya',
      location: 'Maasai Mara Region',
      date: '2023',
      category: language === 'en' ? 'Health Education' : 'Elimu ya Afya',
      description: language === 'en'
        ? 'Collaborated to organize an impactful event focused on menstrual health education and distribution of essential hygiene products to high school girls in the Maasai Mara region. This education is crucial in empowering girls to manage their periods safely and with dignity, reducing school absenteeism.'
        : 'Kushirikiana kuandaa tukio lenye athari linalozingatia elimu ya afya ya hedhi na kusambaza bidhaa muhimu za usafi kwa wasichana wa shule za upili katika eneo la Maasai Mara. Elimu hii ni muhimu katika kuwezesha wasichana kushughulikia hedhi zao kwa usalama na heshima, kupunguza kutokuja shuleni.',
      impact: language === 'en' ? 'High school girls empowered with menstrual health knowledge' : 'Wasichana wa shule za upili wamewezeshwa na maarifa ya afya ya hedhi',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F0f7bde685416479ab2cfdd2fa6980d09%2F437880233fee408d9501305a4fc9e505?format=webp&width=800'
    }
  ];

  const testimonials = [
    {
      name: 'Youth Participant',
      role: language === 'en' ? 'Football Tournament Participant' : 'Mshiriki wa Mchuano wa Mpira',
      content: language === 'en'
        ? 'The football tournaments brought us together as young people while teaching us about the importance of protecting our environment. We learned that we can have fun while making a difference in our community.'
        : 'Michuano ya mpira wa miguu iliturushia pamoja kama vijana huku ikitufundisha umuhimu wa kulinda mazingira yetu. Tulijifunza kwamba tunaweza kufurahia huku tukifanya mabadiliko katika jamii yetu.',
      rating: 5,
      image: '/api/placeholder/100/100'
    },
    {
      name: 'University Student',
      role: language === 'en' ? 'Training Participant, Thika' : 'Mshiriki wa Mafunzo, Thika',
      content: language === 'en'
        ? 'The job market training opened my eyes to the opportunities available in the digital economy. Learning about AI and emerging technologies has given me confidence to pursue my career goals in this rapidly changing world.'
        : 'Mafunzo ya soko la kazi yalinifungua macho kuona fursa zinazopatikana katika uchumi wa kidijitali. Kujifunza kuhusu AI na teknolojia mpya kunenipatia ujasiri wa kufuatilia malengo yangu ya kazi katika ulimwengu huu unaobadilika haraka.',
      rating: 5,
      image: '/api/placeholder/100/100'
    },
    {
      name: 'High School Student',
      role: language === 'en' ? 'Maasai Mara Participant' : 'Mshiriki wa Maasai Mara',
      content: language === 'en'
        ? 'The menstrual health education program helped me understand my body better and gave me the confidence to attend school even during my periods. The knowledge I gained has been invaluable for my education journey.'
        : 'Mpango wa elimu ya afya ya hedhi ulinisaidia kuelewa mwili wangu vizuri na kunipatia ujasiri wa kuhudhuria shule hata wakati wa hedhi zangu. Maarifa niliyoyapata yamekuwa ya thamani kubwa kwa safari yangu ya elimu.',
      rating: 5,
      image: '/api/placeholder/100/100'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const milestoneTimeline = [
    {
      year: '2022',
      title: language === 'en' ? 'Youth Engagement Through Sports' : 'Ushiriki wa Vijana Kupitia Michezo',
      achievements: language === 'en' ? [
        'Organized youth football tournaments',
        'Conducted conservation education forums',
        'Engaged hundreds of youth in environmental awareness'
      ] : [
        'Kuandaa michuano ya mpira wa miguu ya vijana',
        'Kuongoza maforo ya elimu ya uhifadhi',
        'Kushirikisha mamia ya vijana katika ufahamu wa mazingira'
      ]
    },
    {
      year: '2023',
      title: language === 'en' ? 'Educational Empowerment Initiatives' : 'Miradi ya Uwezeshaji wa Kielimu',
      achievements: language === 'en' ? [
        'University students job market training in Thika',
        'Menstrual health education in Maasai Mara',
        'Sanitary pad distribution to high school girls'
      ] : [
        'Mafunzo ya soko la kazi ya wanafunzi wa chuo kikuu huko Thika',
        'Elimu ya afya ya hedhi katika Maasai Mara',
        'Kusambaza pedi za kiafya kwa wasichana wa shule za upili'
      ]
    },
    {
      year: '2024',
      title: language === 'en' ? 'Youth Mentorship and Cultural Transformation' : 'Uongozaji wa Vijana na Mabadiliko ya Kitamaduni',
      achievements: language === 'en' ? [
        'Youth mentorship event at Talek Maasai Mara',
        'Empowered 250 young individuals',
        'Addressed harmful cultural practices like FGM and child marriages'
      ] : [
        'Tukio la uongozaji wa vijana huko Talek Maasai Mara',
        'Kuwezesha vijana 250',
        'Kushughulikia desturi mbaya kama tohara ya kike na ndoa za watoto'
      ]
    }
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-resolute-green via-resolute-light-green to-resolute-pale-green py-20 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-resolute-yellow opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative">
            <div className="animate-fade-in-up">
              <TrendingUp className="w-16 h-16 mx-auto mb-6 text-resolute-yellow" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {language === 'en' ? 'Our Impact' : 'Athari Zetu'}
              </h1>
              <p className="text-xl text-white text-opacity-95 leading-relaxed max-w-4xl mx-auto">
                {language === 'en'
                  ? 'Measuring the real difference we\'re making in communities across Kenya through education, advocacy, and sustainable development.'
                  : 'Kupima tofauti ya kweli tunayoifanya katika jamii nchini Kenya kupitia elimu, utetezi, na maendeleo endelevu.'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'By the Numbers' : 'Kwa Nambari'}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {language === 'en'
                  ? 'Our commitment to transparency means sharing the concrete results of our work'
                  : 'Kujitolea kwetu kwa uwazi kunamaanisha kushiriki matokeo madhubuti ya kazi yetu'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300 animate-fade-in-scale"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`w-20 h-20 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300`}>
                    <stat.icon className={`w-10 h-10 ${stat.color}`} />
                  </div>
                  <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Success Stories' : 'Hadithi za Mafanikio'}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {language === 'en'
                  ? 'Real stories of transformation and positive change in the communities we serve'
                  : 'Hadithi za kweli za mabadiliko na mabadiliko mazuri katika jamii tunazotumikia'
                }
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  <div className="h-48 bg-gradient-to-br from-resolute-green to-resolute-pale-green relative overflow-hidden">
                    {story.image && (
                      <img 
                        src={story.image} 
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
                      <div className="p-4 text-white w-full">
                        <span className="inline-block bg-resolute-yellow text-resolute-green px-3 py-1 rounded-full text-sm font-medium mb-2">
                          {story.category}
                        </span>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">{story.location}</span>
                          <span className="text-sm">{story.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-resolute-green transition-colors duration-300">
                      {story.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
                      {story.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-resolute-green font-medium">
                        {story.impact}
                      </div>
                      <button className="text-resolute-green hover:scale-110 transition-transform duration-300">
                        <PlayCircle className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'What People Say' : 'Watu Wanasema Nini'}
              </h2>
              <p className="text-lg text-gray-600">
                {language === 'en'
                  ? 'Hear directly from the communities and individuals whose lives have been transformed'
                  : 'Sikia moja kwa moja kutoka kwa jamii na watu binafsi ambao maisha yao yamebadilika'
                }
              </p>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-resolute-green to-resolute-pale-green rounded-full flex items-center justify-center">
                      <Quote className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonials[currentTestimonial].name}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {testimonials[currentTestimonial].role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-6">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-resolute-green text-white rounded-full flex items-center justify-center hover:bg-opacity-90 hover:scale-110 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? 'bg-resolute-green scale-125'
                          : 'bg-gray-300 hover:bg-resolute-green hover:scale-110'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-resolute-green text-white rounded-full flex items-center justify-center hover:bg-opacity-90 hover:scale-110 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Our Journey' : 'Safari Yetu'}
              </h2>
              <p className="text-lg text-gray-600">
                {language === 'en'
                  ? 'Key milestones in our mission to empower communities across Kenya'
                  : 'Hatua muhimu katika dhamira yetu ya kuwezesha jamii nchini Kenya'
                }
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-resolute-green"></div>
              {milestoneTimeline.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="relative flex items-start mb-12 last:mb-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  <div className="w-4 h-4 bg-resolute-green rounded-full border-4 border-white mr-6 mt-2 z-10 shadow-lg"></div>
                  <div className="flex-1">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                        <span className="text-lg font-bold text-resolute-green bg-resolute-green bg-opacity-10 px-3 py-1 rounded-full">
                          {milestone.year}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {milestone.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-resolute-green mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
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
              {language === 'en' ? 'Be Part of Our Impact' : 'Kuwa Sehemu ya Athari Zetu'}
            </h2>
            <p className="text-xl mb-8 text-white text-opacity-95">
              {language === 'en'
                ? 'Join us in creating lasting positive change in communities across Kenya. Every contribution, every voice, every action matters.'
                : 'Jiunge nasi katika kuunda mabadiliko mazuri ya kudumu katika jamii nchini Kenya. Kila mchango, kila sauti, kila tendo ni muhimu.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/support"
                className="bg-resolute-yellow text-resolute-green px-8 py-4 rounded-xl text-lg font-semibold hover:bg-opacity-90 hover:scale-105 transition-all duration-300 text-center"
              >
                {language === 'en' ? 'Support Our Mission' : 'Unga Mkono Dhamira Yetu'}
              </Link>
              <Link
                to="/programs"
                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-resolute-green hover:scale-105 transition-all duration-300 text-center"
              >
                {language === 'en' ? 'Explore Our Programs' : 'Gundua Mipango Yetu'}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Impact;
