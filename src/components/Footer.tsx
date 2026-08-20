import React from 'react';
import { Smartphone, ShieldCheck, FileCode, Heart, ExternalLink } from 'lucide-react';
import { AppConfig, Language } from '../types';
import { EXACT_PUBLISHER_ID } from '../data/defaultConfig';

interface FooterProps {
  config: AppConfig;
  lang: Language;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ config, lang, onNavigate }) => {
  const isAr = lang === 'ar';
  const appName = isAr ? config.appNameAr : config.appNameEn;
  const developerName = isAr ? config.developerNameAr : config.developerNameEn;

  return (
    <footer className="bg-slate-950 text-slate-400 py-14 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-lg text-white block leading-tight">{appName}</span>
                <span className="text-xs text-slate-400">{developerName}</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {isAr 
                ? 'الموقع الرسمي المعتمد لتطبيق Android. مجهز بالكامل للمطابقة مع صفحة المطور في Google Play وسياسات AdMob الإعلانية.'
                : 'Official Android application website. Fully configured for Google Play Developer Page linking and AdMob monetization.'}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-emerald-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>AdMob Pub: {EXACT_PUBLISHER_ID}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              {isAr ? 'روابط سريعة' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-emerald-400 transition-colors">
                  {isAr ? 'الصفحة الرئيسية' : 'Home'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('features')} className="hover:text-emerald-400 transition-colors">
                  {isAr ? 'ميزات التطبيق' : 'Features'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('screenshots')} className="hover:text-emerald-400 transition-colors">
                  {isAr ? 'شاشات من داخل التطبيق' : 'Screenshots'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy')} className="hover:text-emerald-400 transition-colors">
                  {isAr ? 'سياسة الخصوصية الرسمية' : 'Privacy Policy'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="hover:text-emerald-400 transition-colors">
                  {isAr ? 'شروط وأحكام الاستخدام' : 'Terms & Conditions'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-emerald-400 transition-colors">
                  {isAr ? 'تواصل مع الدعم الفني' : 'Contact Developer'}
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Verification Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              {isAr ? 'ملفات التحقق والمتاجر' : 'Verification & Stores'}
            </h4>
            <div className="space-y-2.5">
              <a
                id="footer-raw-app-ads-link"
                href="/app-ads.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800/80 border border-slate-800 text-xs font-mono text-emerald-400 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-emerald-400" />
                  <span>/app-ads.txt</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                id="footer-google-play-link"
                href={config.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800/80 border border-slate-800 text-xs text-slate-200 transition-colors"
              >
                <span className="font-semibold">{isAr ? 'متجر Google Play' : 'Google Play Store'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & notes */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {appName}. {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </p>

          <p className="flex items-center gap-1.5">
            <span>{isAr ? 'تم التطوير خصيصًا لمطوري Android' : 'Built for Android Developers & Google Play'}</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
