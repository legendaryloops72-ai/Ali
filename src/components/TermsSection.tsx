import React from 'react';
import { FileCheck, Shield } from 'lucide-react';
import { AppConfig, Language } from '../types';
import { termsText } from '../data/defaultConfig';

interface TermsSectionProps {
  config: AppConfig;
  lang: Language;
}

export const TermsSection: React.FC<TermsSectionProps> = ({ config, lang }) => {
  const isAr = lang === 'ar';
  const terms = isAr ? termsText.ar : termsText.en;
  const appName = isAr ? config.appNameAr : config.appNameEn;

  return (
    <section id="terms" className="py-16 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
            <FileCheck className="w-3.5 h-3.5 text-slate-500" />
            <span>{isAr ? 'الاتفاقية القانونية' : 'Legal Agreement'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {isAr ? 'شروط وأحكام الاستخدام' : 'Terms & Conditions'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">{terms.lastUpdated}</p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 space-y-6">
          <p className="text-sm text-slate-700 font-medium leading-relaxed">
            {terms.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {terms.sections.map((sec, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-2xs space-y-2">
                <h4 className="text-sm font-bold text-slate-900">{sec.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{sec.content}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
