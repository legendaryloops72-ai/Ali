import React, { useState } from 'react';
import { X, Save, RotateCcw, ShieldCheck, Sparkles, Check, Globe } from 'lucide-react';
import { AppConfig, Language } from '../types';
import { defaultAppConfig, EXACT_APP_ADS_TXT, EXACT_PUBLISHER_ID } from '../data/defaultConfig';

interface CustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: AppConfig;
  onSave: (newConfig: AppConfig) => void;
  lang: Language;
}

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
  lang
}) => {
  const isAr = lang === 'ar';
  const [form, setForm] = useState<AppConfig>({ ...config });
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Guarantee EXACT publisher ID & EXACT app-ads.txt are NEVER altered
    const securedConfig: AppConfig = {
      ...form,
      publisherId: EXACT_PUBLISHER_ID,
      appAdsTxtContent: EXACT_APP_ADS_TXT
    };
    onSave(securedConfig);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    setForm({ ...defaultAppConfig });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {isAr ? 'لوحة تخصيص بيانات التطبيق' : 'App Settings & Customization'}
              </h3>
              <p className="text-xs text-slate-500">
                {isAr ? 'قم بتعديل اسم تطبيقك ورابط المتجر وبيانات الاتصال' : 'Customize app name, Play Store link and support contacts'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Form */}
        <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
          
          {/* App Names (Arabic & English) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5 text-start">
              <label className="text-xs font-bold text-slate-700">
                {isAr ? 'اسم التطبيق (بالعربية)' : 'App Name (Arabic)'}
              </label>
              <input
                type="text"
                value={form.appNameAr}
                onChange={(e) => setForm({ ...form, appNameAr: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:bg-white focus:border-emerald-500 outline-hidden"
              />
            </div>

            <div className="space-y-1.5 text-start">
              <label className="text-xs font-bold text-slate-700">
                {isAr ? 'اسم التطبيق (بالإنجليزية)' : 'App Name (English)'}
              </label>
              <input
                type="text"
                value={form.appNameEn}
                onChange={(e) => setForm({ ...form, appNameEn: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:bg-white focus:border-emerald-500 outline-hidden"
              />
            </div>
          </div>

          {/* Slogans */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5 text-start">
              <label className="text-xs font-bold text-slate-700">
                {isAr ? 'الوصف القصير (بالعربية)' : 'Tagline (Arabic)'}
              </label>
              <input
                type="text"
                value={form.appTaglineAr}
                onChange={(e) => setForm({ ...form, appTaglineAr: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:bg-white focus:border-emerald-500 outline-hidden"
              />
            </div>

            <div className="space-y-1.5 text-start">
              <label className="text-xs font-bold text-slate-700">
                {isAr ? 'الوصف القصير (بالإنجليزية)' : 'Tagline (English)'}
              </label>
              <input
                type="text"
                value={form.appTaglineEn}
                onChange={(e) => setForm({ ...form, appTaglineEn: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:bg-white focus:border-emerald-500 outline-hidden"
              />
            </div>
          </div>

          {/* Google Play Links & Package Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5 text-start">
              <label className="text-xs font-bold text-slate-700">
                {isAr ? 'معرف الحزمة (Package Name)' : 'Android Package Name'}
              </label>
              <input
                type="text"
                value={form.packageName}
                onChange={(e) => setForm({ ...form, packageName: e.target.value })}
                placeholder="com.company.app"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm font-mono focus:bg-white focus:border-emerald-500 outline-hidden"
              />
            </div>

            <div className="space-y-1.5 text-start">
              <label className="text-xs font-bold text-slate-700">
                {isAr ? 'رابط صفحة Google Play' : 'Play Store URL'}
              </label>
              <input
                type="url"
                value={form.playStoreUrl}
                onChange={(e) => setForm({ ...form, playStoreUrl: e.target.value })}
                placeholder="https://play.google.com/store/apps/details?id=..."
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm font-mono focus:bg-white focus:border-emerald-500 outline-hidden"
              />
            </div>
          </div>

          {/* Developer Contact Email & Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5 text-start">
              <label className="text-xs font-bold text-slate-700">
                {isAr ? 'بريد الدعم الفني والمطور' : 'Support / Developer Email'}
              </label>
              <input
                type="email"
                value={form.supportEmail}
                onChange={(e) => setForm({ ...form, supportEmail: e.target.value, developerEmail: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm font-mono focus:bg-white focus:border-emerald-500 outline-hidden"
              />
            </div>

            <div className="space-y-1.5 text-start">
              <label className="text-xs font-bold text-slate-700">
                {isAr ? 'اسم المطور / الشركة' : 'Developer / Organization Name'}
              </label>
              <input
                type="text"
                value={form.developerNameAr}
                onChange={(e) => setForm({ ...form, developerNameAr: e.target.value, developerNameEn: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:bg-white focus:border-emerald-500 outline-hidden"
              />
            </div>
          </div>

          {/* Locked app-ads.txt Notice Box */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-1.5">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-xs">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>{isAr ? 'حساب AdMob المحمي (غير قابل للتعديل)' : 'Protected AdMob Verification Line'}</span>
            </div>
            <p className="text-xs font-mono text-amber-800 bg-amber-100/70 p-2 rounded-lg break-all">
              {EXACT_APP_ADS_TXT}
            </p>
            <p className="text-[11px] text-amber-700">
              {isAr ? 'تم قفل هذا السطر تلقائيًا لضمان التحقق السليم مع حساب AdMob الخاص بك.' : 'Locked to ensure exact compliance with your AdMob publisher account.'}
            </p>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isAr ? 'استعادة الافتراضي' : 'Reset Defaults'}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                {isAr ? 'إلغاء' : 'Cancel'}
              </button>

              <button
                id="btn-save-customizer"
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm"
              >
                {savedSuccess ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
                <span>{savedSuccess ? (isAr ? 'تم الحفظ!' : 'Saved!') : (isAr ? 'حفظ التعديلات' : 'Save Changes')}</span>
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
