import { useState } from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  Heart, 
  Scale, 
  GraduationCap,
  Stethoscope,
  DollarSign,
  Leaf,
  MapPin,
  Calendar,
  Target,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Play,
  Award
} from 'lucide-react';

const Programs = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState('education-training');
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);

  const programCategories = [
    {
      id: 'education-training',
      title: language === 'en' ? 'Education & Training' : 'Elimu na Mafunzo',
      icon: BookOpen,
      color: 'from-resolute-green to-resolute-light-green',
      description: language === 'en'
        ? 'Comprehensive training programs and educational initiatives that equip participants with essential tools and knowledge'
        : 'Mipango ya kina ya mafunzo na miradi ya kielimu ambayo inawaandaa washiriki na zana na maarifa muhimu'
    },
    {
      id: 'publications-speaking',
      title: language === 'en' ? 'Publications & Speaking' : 'Machapisho na Mazungumzo',
      icon: Users,
      color: 'from-resolute-yellow to-yellow-400',
      description: language === 'en'
        ? 'Engaging publications and dynamic motivational speaking engagements that inspire and educate audiences'
        : 'Machapisho ya kuvutia na mazungumzo ya kichochezi ya motisha ambayo yanaongoza na kuelimisha hadhira'
    },
    {
      id: 'events-marketing',
      title: language === 'en' ? 'Events & Marketing' : 'Matukio na Uuzaji',
      icon: Scale,
      color: 'from-resolute-pale-green to-green-400',
      description: language === 'en'
        ? 'Professional event organizing and media marketing services that enhance visibility and foster community engagement'
        : 'Huduma za kitaalamu za kupanga matukio na uuzaji wa vyombo vya habari zinazoimarisha mwonekano na kukuza ushiriki wa jamii'
    }
  ];

  const programs = {
    'education-training': [
      {
        id: 'personal-development',
        title: language === 'en' ? 'Personal Development Training' : 'Mafunzo ya Maendeleo ya Kibinafsi',
        duration: language === 'en' ? '3-month comprehensive program' : 'Mpango wa kina wa miezi 3',
        participants: '150+ participants annually',
        locations: language === 'en' ? 'Training centers and online platforms' : 'Vituo vya mafunzo na majukwaa ya mtandaoni',
        description: language === 'en'
          ? 'Comprehensive training programs that equip participants with essential tools and knowledge to thrive in personal and professional spheres.'
          : 'Mipango ya kina ya mafunzo ambayo inawaandaa washiriki na zana na maarifa muhimu ya kustawi katika nyanja za kibinafsi na kitaaluma.',
        objectives: language === 'en' ? [
          'Develop critical thinking and problem-solving skills',
          'Build leadership and communication abilities',
          'Foster resilience and emotional intelligence',
          'Create sustainable personal growth plans'
        ] : [
          'Kuendeleza ufikiri wa kinadharia na ujuzi wa kutatua matatizo',
          'Kujenga uwezo wa uongozi na mawasiliano',
          'Kukuza uvumilivu na akili ya kihisia',
          'Kuunda mipango endelevu ya ukuaji wa kibinafsi'
        ],
        impact: {
          trained: '300+',
          communities: '15',
          cases: '8'
        }
      },
      {
        id: 'professional-skills',
        title: language === 'en' ? 'Professional Skills Workshops' : 'Warsha za Ujuzi wa Kitaaluma',
        duration: language === 'en' ? 'Monthly intensive sessions' : 'Vipindi vikuu vya kila mwezi',
        participants: '50-80 per session',
        locations: language === 'en' ? 'Corporate venues and community centers' : 'Maeneo ya kibiashara na vituo vya jamii',
        description: language === 'en'
          ? 'Targeted workshops designed to enhance professional competencies and career advancement opportunities.'
          : 'Warsha maalum zilizoundwa kuimarisha uwezo wa kitaaluma na fursa za maendeleo ya kazi.',
        objectives: language === 'en' ? [
          'Enhance workplace productivity and efficiency',
          'Develop strategic thinking capabilities',
          'Improve networking and relationship building',
          'Master digital literacy and modern tools'
        ] : [
          'Kuimarisha uzalishaji na ufanisi mahali pa kazi',
          'Kuendeleza uwezo wa ufikiri wa kimkakati',
          'Kuboresha uwekaji wa mitandao na kujenga mahusiano',
          'Kuongoza ujuzi wa kidijitali na zana za kisasa'
        ],
        impact: {
          trained: '200+',
          communities: '8',
          cases: '12'
        }
      }
    ],
    'publications-speaking': [
      {
        id: 'motivational-books',
        title: language === 'en' ? 'Motivational Publications' : 'Machapisho ya Kutia Motisha',
        duration: language === 'en' ? 'Quarterly releases' : 'Kutolewa kila robo mwaka',
        participants: '1000+ readers annually',
        locations: language === 'en' ? 'Bookstores and digital platforms' : 'Maduka ya vitabu na majukwaa ya kidijitali',
        description: language === 'en'
          ? 'Engaging and insightful publications that inspire readers to overcome challenges and achieve personal transformation.'
          : 'Machapisho ya kuvutia na yenye busara ambayo yanaongoza wasomaji kushinda changamoto na kufikia mabadiliko ya kibinafsi.',
        objectives: language === 'en' ? [
          'Provide accessible wisdom and guidance',
          'Share real-life success stories and strategies',
          'Offer practical tools for personal growth',
          'Build a community of empowered readers'
        ] : [
          'Kutoa hekima na mwongozo unaofikiwa',
          'Kushiriki hadithi za kweli za mafanikio na mikakati',
          'Kutoa zana za vitendo kwa ukuaji wa kibinafsi',
          'Kujenga jamii ya wasomaji waliowezeshwa'
        ],
        impact: {
          trained: '1200+',
          communities: '25',
          cases: '15'
        }
      },
      {
        id: 'speaking-engagements',
        title: language === 'en' ? 'Dynamic Speaking Events' : 'Matukio ya Mazungumzo ya Kichochezi',
        duration: language === 'en' ? 'Customized presentations' : 'Mawasilisho yaliyobinafsishwa',
        participants: '100-500 per event',
        locations: language === 'en' ? 'Conferences, schools, and corporate venues' : 'Mikutano, shule, na maeneo ya kibiashara',
        description: language === 'en'
          ? 'Dynamic and motivational speaking engagements that energize audiences and provide actionable insights for success.'
          : 'Mazungumzo ya kichochezi na ya kutia motisha ambayo yanawapa nguvu hadhira na kutoa maarifa ya vitendo ya mafanikio.',
        objectives: language === 'en' ? [
          'Inspire audiences to take positive action',
          'Share proven strategies for overcoming obstacles',
          'Build confidence and self-belief',
          'Create lasting behavioral change'
        ] : [
          'Kuongoza hadhira kuchukua hatua chanya',
          'Kushiriki mikakati iliyothibitishwa ya kushinda vikwazo',
          'Kujenga ujasiri na imani ya kibinafsi',
          'Kuunda mabadiliko ya kudumu ya tabia'
        ],
        impact: {
          trained: '500+',
          communities: '12',
          cases: '20'
        }
      }
    ],
    'events-marketing': [
      {
        id: 'event-organizing',
        title: language === 'en' ? 'Professional Event Management' : 'Usimamizi wa Kitaaluma wa Matukio',
        duration: language === 'en' ? 'Project-based services' : 'Huduma za msingi wa miradi',
        participants: 'Custom event sizes',
        locations: language === 'en' ? 'Venues nationwide' : 'Maeneo nchini kote',
        description: language === 'en'
          ? 'Comprehensive event organizing services that create impactful events fostering community engagement and personal growth.'
          : 'Huduma za kina za kupanga matukio zinazound matukio yenye athari yanayokuza ushiriki wa jamii na ukuaji wa kibinafsi.',
        objectives: language === 'en' ? [
          'Design memorable and meaningful experiences',
          'Facilitate networking and community building',
          'Ensure seamless event execution',
          'Maximize participant engagement and satisfaction'
        ] : [
          'Kubuni uzoefu wa kukumbukwa na wenye maana',
          'Kuwezesha uwekaji wa mitandao na kujenga jamii',
          'Kuhakikisha utekelezaji bila matatizo wa tukio',
          'Kuongeza ushiriki na kuridhika kwa washiriki'
        ],
        impact: {
          trained: '50+',
          communities: '20',
          cases: '35'
        }
      },
      {
        id: 'media-marketing',
        title: language === 'en' ? 'Strategic Media Marketing' : 'Uuzaji wa Kimkakati wa Vyombo vya Habari',
        duration: language === 'en' ? 'Ongoing consultation services' : 'Huduma za ushauri zinazendelea',
        participants: 'Business and organizational clients',
        locations: language === 'en' ? 'Digital and traditional media platforms' : 'Majukwaa ya kidijitali na ya jadi ya vyombo vya habari',
        description: language === 'en'
          ? 'Tailored media marketing services that enhance client visibility and ensure their messages resonate with target audiences.'
          : 'Huduma za uuzaji wa vyombo vya habari zilizobinafsishwa zinazoimarisha mwonekano wa wateja na kuhakikisha ujumbe wao unafikia hadhira lengwa.',
        objectives: language === 'en' ? [
          'Develop comprehensive marketing strategies',
          'Create compelling content and messaging',
          'Build strong brand presence and recognition',
          'Generate sustainable income for community programs'
        ] : [
          'Kuendeleza mikakati ya kina ya uuzaji',
          'Kuunda maudhui na ujumbe wa kuvutia',
          'Kujenga uwepo mkuu wa chapa na utambuzi',
          'Kuzalisha mapato endelevu kwa mipango ya jamii'
        ],
        impact: {
          trained: '80+',
          communities: '30',
          cases: '25'
        }
      }
    ]
  };

  const activePrograms = programs[activeTab as keyof typeof programs] || [];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-resolute-green via-resolute-light-green to-resolute-pale-green py-20 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-resolute-yellow opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl animate-pulse"></div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative">
            <div className="animate-fade-in-up">
              <Users className="w-16 h-16 mx-auto mb-6 text-resolute-yellow" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {language === 'en' ? 'Our Programs' : 'Mipango Yetu'}
              </h1>
              <p className="text-xl text-white text-opacity-95 leading-relaxed max-w-4xl mx-auto">
                {language === 'en'
                  ? 'Comprehensive initiatives designed to empower communities, protect rights, and drive sustainable development across Kenya.'
                  : 'Miradi ya kina iliyoundwa kuwezesha jamii, kulinda haki, na kuongoza maendeleo endelevu nchini Kenya.'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Program Categories Tabs */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {programCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`group p-6 rounded-2xl transition-all duration-500 animate-fade-in-scale ${
                    activeTab === category.id
                      ? `bg-gradient-to-br ${category.color} text-white shadow-2xl scale-105`
                      : 'bg-white hover:shadow-lg hover:scale-102 text-gray-700'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    activeTab === category.id 
                      ? 'bg-white bg-opacity-20' 
                      : 'bg-gray-100 group-hover:bg-resolute-green group-hover:text-white'
                  } transition-all duration-300`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                  <p className={`text-sm leading-relaxed ${
                    activeTab === category.id ? 'text-white text-opacity-90' : 'text-gray-600'
                  }`}>
                    {category.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {activePrograms.map((program, index) => (
                <div
                  key={program.id}
                  className="bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  <div className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Program Info */}
                      <div className="lg:col-span-2">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                          <button
                            onClick={() => setExpandedProgram(
                              expandedProgram === program.id ? null : program.id
                            )}
                            className="text-resolute-green hover:scale-110 transition-transform duration-300"
                          >
                            {expandedProgram === program.id ? 
                              <ChevronUp className="w-6 h-6" /> : 
                              <ChevronDown className="w-6 h-6" />
                            }
                          </button>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                          <div className="flex items-center space-x-2 text-gray-600">
                            <Calendar className="w-4 h-4 text-resolute-green" />
                            <span className="text-sm">{program.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600">
                            <Users className="w-4 h-4 text-resolute-green" />
                            <span className="text-sm">{program.participants}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600">
                            <MapPin className="w-4 h-4 text-resolute-green" />
                            <span className="text-sm">{program.locations}</span>
                          </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">{program.description}</p>

                        {expandedProgram === program.id && (
                          <div className="space-y-6 animate-fade-in-up">
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                <Target className="w-5 h-5 text-resolute-green mr-2" />
                                {language === 'en' ? 'Key Objectives' : 'Malengo Makuu'}
                              </h4>
                              <ul className="space-y-2">
                                {program.objectives.map((objective, idx) => (
                                  <li key={idx} className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-resolute-green rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-700">{objective}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                              <Link
                                to="/contact"
                                className="group bg-resolute-green text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                              >
                                <span>{language === 'en' ? 'Join This Program' : 'Jiunge na Mpango Huu'}</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </Link>
                              <button className="border-2 border-resolute-green text-resolute-green px-6 py-3 rounded-lg font-medium hover:bg-resolute-green hover:text-white hover:scale-105 transition-all duration-300">
                                {language === 'en' ? 'Learn More' : 'Jifunze Zaidi'}
                              </button>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Impact Stats */}
                      <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <Award className="w-5 h-5 text-resolute-green mr-2" />
                            {language === 'en' ? 'Program Impact' : 'Athari za Mpango'}
                          </h4>
                          <div className="space-y-4">
                            <div className="text-center">
                              <div className="text-3xl font-bold text-resolute-green">{program.impact.trained}</div>
                              <div className="text-sm text-gray-600">{language === 'en' ? 'People Trained' : 'Watu Waliofunzwa'}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-resolute-yellow">{program.impact.communities}</div>
                              <div className="text-sm text-gray-600">{language === 'en' ? 'Communities Reached' : 'Jamii Zilizofikiwa'}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-resolute-pale-green">{program.impact.cases}</div>
                              <div className="text-sm text-gray-600">{language === 'en' ? 'Success Cases' : 'Kesi za Mafanikio'}</div>
                            </div>
                          </div>
                        </div>
                      </div>
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
              {language === 'en' ? 'Ready to Make a Difference?' : 'Uko Tayari Kuleta Mabadiliko?'}
            </h2>
            <p className="text-xl mb-8 text-white text-opacity-95">
              {language === 'en'
                ? 'Join our programs and be part of the movement that\'s transforming communities across Kenya.'
                : 'Jiunge na mipango yetu na uwe sehemu ya harakati zinazobadilisha jamii nchini Kenya.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-resolute-yellow text-resolute-green px-8 py-4 rounded-xl text-lg font-semibold hover:bg-opacity-90 hover:scale-105 transition-all duration-300 text-center"
              >
                {language === 'en' ? 'Get Involved Today' : 'Jiunge Leo'}
              </Link>
              <Link
                to="/support"
                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-resolute-green hover:scale-105 transition-all duration-300 text-center"
              >
                {language === 'en' ? 'Support Our Programs' : 'Unga Mkono Mipango Yetu'}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Programs;
