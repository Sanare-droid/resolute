import { Construction, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PlaceholderPageProps {
  title: string;
  titleSwahili: string;
  description: string;
  descriptionSwahili: string;
}

const PlaceholderPage = ({
  title,
  titleSwahili,
  description,
  descriptionSwahili
}: PlaceholderPageProps) => {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-resolute-green to-resolute-pale-green flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="w-24 h-24 bg-resolute-yellow rounded-full flex items-center justify-center mx-auto mb-6">
            <Construction className="w-12 h-12 text-resolute-green" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {language === 'en' ? title : titleSwahili}
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            {language === 'en' ? description : descriptionSwahili}
          </p>
          
          <div className="bg-resolute-green bg-opacity-10 rounded-lg p-6 mb-8">
            <p className="text-resolute-green font-medium">
              {language === 'en' 
                ? 'This page is currently under development. We\'re working hard to bring you quality content soon!' 
                : 'Ukurasa huu bado unaandaliwa. Tunafanya kazi kwa bidii kuleta maudhui ya ubora hivi karibuni!'
              }
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-resolute-green text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>{language === 'en' ? 'Back to Home' : 'Rudi Nyumbani'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button 
              onClick={() => window.location.href = '/contact'}
              className="border-2 border-resolute-green text-resolute-green px-6 py-3 rounded-lg font-medium hover:bg-resolute-green hover:text-white transition-all duration-200"
            >
              {language === 'en' ? 'Contact Us' : 'Wasiliana Nasi'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
