import Image from 'next/image';
import { useLanguage } from '@/app/context/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="container mx-auto px-6 pt-24 pb-16 md:px-12 lg:px-20 md:pt-32">
      <div className="grid gap-16 md:grid-cols-2 md:gap-20 items-center">
        
        {/* Texto principal */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                {t('about.subtitle')}
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                {t('about.title')}
              </h1>
            </div>
            <div className="w-16 h-0.5 bg-emerald-600"></div>
          </div>

          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl leading-relaxed text-gray-600">
              <strong className="text-gray-900">{t('collection.volume1').replace(' 1', ' (EMA)')}</strong>{" "}
              {t('about.description1')}
            </p>

            <p className="text-xl leading-relaxed text-gray-600">
              {t('about.description2')}
            </p>

            <p className="text-xl leading-relaxed text-gray-600">
              {t('about.description3')}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">80+</div>
              <div className="text-sm text-gray-500">{t('about.stats.countries')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">2</div>
              <div className="text-sm text-gray-500">{t('about.stats.volumes')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">5</div>
              <div className="text-sm text-gray-500">{t('about.stats.continents')}</div>
            </div>
          </div>
        </div>

        {/* Imagem */}
        <div className="relative">
          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
            <Image
              src="/colecao.png"
              width={400}
              height={400}
              alt="Dois livros da coleção Embalagens Mundo Afora"
              className="object-contain w-full h-auto"
              priority
            />
            
            {/* Badge sobreposto */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-600 border border-gray-200">
              {t('about.badge')}
            </div>
          </div>

          {/* Elementos decorativos minimalistas */}
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-emerald-50 rounded-full -z-10"></div>
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-100 rounded-full -z-10"></div>
        </div>
      </div>

      {/* Seção de características */}
      <div className="mt-24 pt-16 border-t border-gray-100">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('about.feature1.title')}</h3>
            <p className="text-gray-600">{t('about.feature1.description')}</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('about.feature2.title')}</h3>
            <p className="text-gray-600">{t('about.feature2.description')}</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('about.feature3.title')}</h3>
            <p className="text-gray-600">{t('about.feature3.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
