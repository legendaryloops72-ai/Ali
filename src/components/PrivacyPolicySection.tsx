import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Copy, 
  CheckCircle2, 
  Printer, 
  Download, 
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { AppConfig, Language } from '../types';
import { privacyPolicyText, EXACT_PUBLISHER_ID } from '../data/defaultConfig';

interface PrivacyPolicySectionProps {
  config: AppConfig;
  lang: Language;
}

export const PrivacyPolicySection: React.FC<PrivacyPolicySectionProps> = ({ config, lang }) => {
  const isAr = lang === 'ar';
  const policy = isAr ? privacyPolicyText.ar : privacyPolicyText.en;
  const appName = isAr ? config.appNameAr : config.appNameEn;

  const [copied, setCopied] = useState(false);
  const [expandedAll, setExpandedAll] = useState(true);

  const handleCopyPolicy = () => {
    const fullText = `${appName} - ${isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}\n${policy.lastUpdated}\n\n${policy.intro}\n\n` + 
      policy.sections.map(s => `${s.title}\n${s.content}\n`).join('\n') + 
      `\nContact: ${config.supportEmail}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="privacy" className="py-20 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{isAr ? 'حماية البيانات والخصوصية' : 'Privacy & Security'}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isAr ? 'سياسة الخصوصية الرسمية' : 'Official Privacy Policy'}
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            {isAr 
              ? 'وثيقة سياسة خصوصية قانونية شاملة ومتوافقة مع متطلبات متجر Google Play وسياسات AdMob الإعلانية.'
              : 'Comprehensive Privacy Policy compliant with Google Play Developer policies and AdMob requirements.'}
          </p>
        </div>

        {/* Policy Container Box */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-8">
          
          {/* Top Info Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-semibold text-slate-400 block mb-1">
                {policy.lastUpdated}
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                {appName} &bull; {isAr ? 'معتمد للمستخدمين' : 'Authorized User Policy'}
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                App ID: {config.packageName}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="btn-copy-privacy-policy"
                onClick={handleCopyPolicy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors"
              >
                {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? (isAr ? 'تم النسخ!' : 'Copied!') : (isAr ? 'نسخ النص' : 'Copy Policy')}</span>
              </button>

              <button
                id="btn-print-privacy-policy"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{isAr ? 'طباعة' : 'Print'}</span>
              </button>
            </div>
          </div>

          {/* Intro Text */}
          <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-4 sm:p-5 text-sm text-emerald-950 leading-relaxed font-medium">
            {policy.intro}
          </div>

          {/* Policy Sections */}
          <div className="space-y-6">
            {policy.sections.map((sec, idx) => (
              <div 
                key={idx} 
                id={`policy-section-${idx}`}
                className="space-y-2 pb-6 border-b border-slate-100 last:border-0 last:pb-0"
              >
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>{sec.title}</span>
                </h4>
                <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-line ps-4">
                  {sec.content}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support Footer in Policy */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-start">
              <p className="text-xs font-bold text-slate-900">{isAr ? 'مسؤول حماية البيانات والدعم الفني:' : 'Data Protection Officer & Support:'}</p>
              <p className="text-xs text-slate-600 font-mono mt-0.5">{config.supportEmail}</p>
            </div>
            <a
              id="privacy-contact-mailto-btn"
              href={`mailto:${config.supportEmail}?subject=${encodeURIComponent(`Privacy Policy Inquiry - ${appName}`)}`}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors"
            >
              <span>{isAr ? 'مراسلة المطور' : 'Contact Support'}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
