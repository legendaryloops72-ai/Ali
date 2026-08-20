import React, { useState } from 'react';
import { 
  Download, 
  Star, 
  ShieldCheck, 
  Sparkles, 
  Smartphone, 
  CheckCircle2, 
  ExternalLink,
  Code2,
  FileText,
  Zap,
  Moon,
  WifiOff
} from 'lucide-react';
import { AppConfig, Language } from '../types';

interface HeroProps {
  config: AppConfig;
  lang: Language;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ config, lang, onNavigate }) => {
  const isAr = lang === 'ar';
  const [activeScreenTab, setActiveScreenTab] = useState<'home' | 'features' | 'mode'>('home');

  const appName = isAr ? config.appNameAr : config.appNameEn;
  const appTagline = isAr ? config.appTaglineAr : config.appTaglineEn;
  const appDescription = isAr ? config.appDescriptionAr : config.appDescriptionEn;
  const developerName = isAr ? config.developerNameAr : config.developerNameEn;

  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* Decorative background grid & subtle glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-emerald-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-teal-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Main Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
            
            {/* Top badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {isAr ? 'التطبيق الرسمي المعتمد' : 'Official Verified App'}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                {isAr ? 'Google Play & AdMob Ready' : 'Google Play & AdMob Ready'}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono bg-slate-900 text-slate-200">
                {config.appVersion}
              </span>
            </div>

            {/* App Title & Slogan */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {appName}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-emerald-700 leading-snug">
                {appTagline}
              </p>
            </div>

            {/* App Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {appDescription}
            </p>

            {/* Key App Highlights Quick Bar */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0 py-2">
              <div className="bg-white/80 backdrop-blur-xs border border-slate-200/80 p-3 rounded-xl text-center shadow-xs">
                <div className="flex items-center justify-center gap-1 text-amber-500 font-bold text-base sm:text-lg">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{config.rating}</span>
                </div>
                <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
                  {isAr ? `${config.reviewsCount} تقييم` : `${config.reviewsCount} reviews`}
                </span>
              </div>
              <div className="bg-white/80 backdrop-blur-xs border border-slate-200/80 p-3 rounded-xl text-center shadow-xs">
                <div className="font-bold text-slate-900 text-base sm:text-lg">
                  {config.downloadsCount}
                </div>
                <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
                  {isAr ? 'تنزيل على Google Play' : 'Downloads'}
                </span>
              </div>
              <div className="bg-white/80 backdrop-blur-xs border border-slate-200/80 p-3 rounded-xl text-center shadow-xs">
                <div className="font-bold text-emerald-700 text-base sm:text-lg">
                  8.0+
                </div>
                <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
                  {isAr ? 'نظام أندرويد' : 'Min Android'}
                </span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              {/* Google Play Download Button */}
              <a
                id="hero-playstore-btn"
                href={config.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-bold px-7 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 group"
              >
                {/* Google Play Styled Icon */}
                <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M3.609 1.814L13.792 12 3.61 22.186a2.03 2.03 0 0 1-.61-1.46V3.274c0-.572.23-1.096.61-1.46z"/>
                  <path fill="#FBBC04" d="M17.18 8.613l-3.388 3.387 3.388 3.388 3.826-2.19c.773-.443.773-1.161 0-1.603l-3.826-2.982z"/>
                  <path fill="#EA4335" d="M3.609 1.814l10.183 10.186 3.388-3.387L6.877.78C5.88.21 4.417.65 3.609 1.814z"/>
                  <path fill="#34A853" d="M3.609 22.186l13.571-7.799-3.388-3.387L3.609 22.186z"/>
                </svg>
                <div className="text-start leading-tight">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                    {isAr ? 'متاح الآن على' : 'GET IT ON'}
                  </span>
                  <span className="block text-base font-extrabold text-white">
                    Google Play
                  </span>
                </div>
              </a>

              {/* app-ads.txt Quick Link Button */}
              <button
                id="hero-ads-txt-btn"
                onClick={() => onNavigate('app-ads')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-bold px-5 py-4 rounded-2xl transition-all shadow-xs"
              >
                <Code2 className="w-4 h-4 text-amber-700" />
                <span>{isAr ? 'فحص ملف app-ads.txt' : 'Verify app-ads.txt'}</span>
              </button>

              {/* Privacy Policy Quick Link */}
              <button
                id="hero-privacy-btn"
                onClick={() => onNavigate('privacy')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-medium px-4 py-4 rounded-2xl transition-all"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>{isAr ? 'سياسة الخصوصية' : 'Privacy'}</span>
              </button>
            </div>

            {/* Developer Metadata */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <span className="font-semibold text-slate-700">{isAr ? 'المطور:' : 'Developer:'}</span> {developerName}
              </span>
              <span>•</span>
              <span className="font-mono text-[11px] bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                {config.packageName}
              </span>
            </div>

          </div>

          {/* Right / Phone Mockup Showcase Column */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Interactive Mockup Tabs */}
            <div className="flex items-center bg-slate-200/80 p-1 rounded-xl mb-4 text-xs font-semibold text-slate-700">
              <button
                onClick={() => setActiveScreenTab('home')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeScreenTab === 'home' ? 'bg-white text-emerald-700 shadow-xs' : 'hover:text-slate-900'
                }`}
              >
                {isAr ? 'الشاشة الرئيسية' : 'App UI'}
              </button>
              <button
                onClick={() => setActiveScreenTab('features')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeScreenTab === 'features' ? 'bg-white text-emerald-700 shadow-xs' : 'hover:text-slate-900'
                }`}
              >
                {isAr ? 'الميزات' : 'Features'}
              </button>
              <button
                onClick={() => setActiveScreenTab('mode')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeScreenTab === 'mode' ? 'bg-white text-emerald-700 shadow-xs' : 'hover:text-slate-900'
                }`}
              >
                {isAr ? 'الوضع المظلم' : 'Dark Theme'}
              </button>
            </div>

            {/* Android Device Shell */}
            <div className="relative w-[280px] sm:w-[320px] rounded-[44px] p-3 bg-slate-900 shadow-2xl shadow-slate-900/30 border-[6px] border-slate-800">
              {/* Speaker notch & front camera */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-950 rounded-full flex items-center justify-center gap-2 z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700" />
                <div className="w-8 h-1 rounded-full bg-slate-800" />
              </div>

              {/* Phone Screen Canvas */}
              <div className={`w-full aspect-[9/18.5] rounded-[34px] overflow-hidden flex flex-col transition-colors ${
                activeScreenTab === 'mode' ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
              }`}>
                
                {/* Android Status Bar */}
                <div className="pt-3 px-5 pb-2 flex items-center justify-between text-[11px] font-semibold opacity-75 select-none">
                  <span>10:45</span>
                  <div className="flex items-center gap-1.5">
                    <WifiOff className="w-3 h-3 rotate-45" />
                    <span>5G</span>
                    <div className="w-4 h-2 border border-current rounded-xs p-0.5 flex items-center">
                      <div className="h-full w-full bg-current rounded-2xs" />
                    </div>
                  </div>
                </div>

                {/* Simulated Screen Contents */}
                <div className="flex-1 px-4 py-3 space-y-3 overflow-y-auto">
                  
                  {/* In-App Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                        A
                      </div>
                      <div>
                        <p className="text-xs font-bold leading-tight">{appName}</p>
                        <p className="text-[10px] text-emerald-600 font-semibold">{isAr ? 'متصل وجاهز' : 'Connected'}</p>
                      </div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>

                  {activeScreenTab === 'home' && (
                    <div className="space-y-3">
                      {/* Main Feature Highlight Card */}
                      <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-md">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-[10px] font-semibold uppercase opacity-80">{isAr ? 'النسخة الرسمية' : 'PRO VERSION'}</span>
                          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                        </div>
                        <p className="text-sm font-bold">{isAr ? 'أداء سريع وتجربة سلسة' : 'Smooth & Fast UI'}</p>
                        <p className="text-[11px] opacity-90 mt-1">{isAr ? 'جاهز للاستخدام اليومي' : 'Optimized for daily productivity'}</p>
                      </div>

                      {/* Quick Action Tiles */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                          <Zap className="w-4 h-4 text-amber-500 mb-1" />
                          <p className="text-xs font-bold">{isAr ? 'سرعة فائقة' : 'Fast Speed'}</p>
                          <p className="text-[10px] text-slate-500">{isAr ? 'أداء مخصص' : 'Native power'}</p>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                          <ShieldCheck className="w-4 h-4 text-emerald-500 mb-1" />
                          <p className="text-xs font-bold">{isAr ? 'حماية مشفرة' : 'Encrypted'}</p>
                          <p className="text-[10px] text-slate-500">{isAr ? 'أمان تام' : 'Full security'}</p>
                        </div>
                      </div>

                      {/* Simulated In-App Banner Ad Container (Illustrating AdMob Integration) */}
                      <div className="p-2 rounded-lg border border-dashed border-slate-300 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-900/60 text-center">
                        <span className="text-[9px] text-slate-400 font-mono block mb-0.5">
                          AdMob Verified Banner (pub-4760027279848820)
                        </span>
                        <div className="h-6 bg-slate-200/80 dark:bg-slate-800/80 rounded flex items-center justify-center text-[10px] text-slate-500 font-medium">
                          {isAr ? 'إعلان معتمد عبر app-ads.txt' : 'Authorized Ad Placement'}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeScreenTab === 'features' && (
                    <div className="space-y-2">
                      <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
                          <Zap className="w-3.5 h-3.5" />
                        </div>
                        <div className="text-start">
                          <p className="text-xs font-bold">{isAr ? 'استهلاك منخفض للطاقة' : 'Battery Saver'}</p>
                          <p className="text-[10px] text-slate-500">{isAr ? 'محسن لنظام Android' : 'Lightweight build'}</p>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-teal-100 dark:bg-teal-950/60 text-teal-600 flex items-center justify-center">
                          <WifiOff className="w-3.5 h-3.5" />
                        </div>
                        <div className="text-start">
                          <p className="text-xs font-bold">{isAr ? 'دعم العمل بدون نت' : 'Offline Support'}</p>
                          <p className="text-[10px] text-slate-500">{isAr ? 'حفظ تلقائي محلي' : 'Local caching'}</p>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 flex items-center justify-center">
                          <ShieldCheck className="w-3.5 h-3.5" />
                        </div>
                        <div className="text-start">
                          <p className="text-xs font-bold">{isAr ? 'حماية البيانات' : 'Strict Privacy'}</p>
                          <p className="text-[10px] text-slate-500">{isAr ? 'متوافق مع GDPR' : 'Compliant'}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeScreenTab === 'mode' && (
                    <div className="space-y-3">
                      <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-white">
                        <div className="flex items-center gap-2 mb-2">
                          <Moon className="w-4 h-4 text-teal-400" />
                          <span className="text-xs font-bold">{isAr ? 'الوضع المظلم OLED' : 'OLED Dark Mode'}</span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          {isAr ? 'مريح للعين وموفر للبطارية بنسبة تصل إلى 40%' : 'High contrast dark theme tailored for night usage and AMOLED displays.'}
                        </p>
                      </div>
                      <div className="h-14 rounded-xl bg-slate-900 border border-slate-800/80 flex items-center justify-between px-3 text-xs text-slate-300">
                        <span>{isAr ? 'السطوع التكيفي' : 'Adaptive Glow'}</span>
                        <div className="w-8 h-4 bg-emerald-600 rounded-full flex items-center justify-end p-0.5">
                          <div className="w-3 h-3 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>
                  )}

                </div>

                {/* Android Navigation Pill Bar */}
                <div className="py-2.5 flex items-center justify-center">
                  <div className="w-24 h-1 rounded-full bg-slate-400/40" />
                </div>

              </div>
            </div>

            {/* Bottom device label */}
            <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">
              <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
              <span>{isAr ? 'متوافق مع جميع هواتف وأجهزة Android' : 'Compatible with all Android devices'}</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
