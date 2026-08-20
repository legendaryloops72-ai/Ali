import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Copy, 
  ExternalLink, 
  FileCode, 
  AlertCircle, 
  Download, 
  RefreshCw, 
  HelpCircle, 
  ShieldCheck, 
  Globe2, 
  Layers
} from 'lucide-react';
import { AppConfig, Language } from '../types';
import { EXACT_APP_ADS_TXT, EXACT_PUBLISHER_ID } from '../data/defaultConfig';

interface AppAdsTxtSectionProps {
  config: AppConfig;
  lang: Language;
}

export const AppAdsTxtSection: React.FC<AppAdsTxtSectionProps> = ({ config, lang }) => {
  const isAr = lang === 'ar';
  const [copied, setCopied] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [testStatus, setTestStatus] = useState<'idle' | 'checking' | 'success' | 'error'>('idle');
  const [fetchedContent, setFetchedContent] = useState<string>('');
  const [currentOrigin, setCurrentOrigin] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentOrigin(window.location.origin);
      // Auto check live app-ads.txt on mount
      verifyAppAdsTxtFile();
    }
  }, []);

  const appAdsTxtUrl = `${currentOrigin || 'https://YOUR-DOMAIN.com'}/app-ads.txt`;

  const handleCopyContent = () => {
    navigator.clipboard.writeText(EXACT_APP_ADS_TXT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(appAdsTxtUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  const verifyAppAdsTxtFile = async () => {
    setTestStatus('checking');
    try {
      const res = await fetch('/app-ads.txt');
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      const text = (await res.text()).trim();
      setFetchedContent(text);
      if (text.includes(EXACT_PUBLISHER_ID)) {
        setTestStatus('success');
      } else {
        setTestStatus('error');
      }
    } catch (err) {
      console.error('Error fetching app-ads.txt:', err);
      setTestStatus('error');
    }
  };

  const downloadFile = () => {
    const blob = new Blob([EXACT_APP_ADS_TXT], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'app-ads.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="app-ads" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
            <FileCode className="w-4 h-4" />
            <span>AdMob app-ads.txt Verification Center</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {isAr ? 'ملف التحقق من إعلانات AdMob (app-ads.txt)' : 'AdMob app-ads.txt Verification'}
          </h2>
          
          <p className="text-slate-400 text-base leading-relaxed">
            {isAr 
              ? 'تم إنشاء وتضمين ملف app-ads.txt المطلوب مباشرة في جذر الموقع للتحقق التلقائي من حسابك في AdMob وحماية أرباح إعلانات تطبيقك.'
              : 'The required app-ads.txt file is directly served at the root directory of this domain for automatic AdMob crawler validation.'}
          </p>
        </div>

        {/* Live Status Card */}
        <div className="max-w-4xl mx-auto bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-md mb-10">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-700">
            <div className="flex items-center gap-3">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                testStatus === 'success' 
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                  : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
              }`}>
                {testStatus === 'success' ? <CheckCircle2 className="w-6 h-6" /> : <RefreshCw className={`w-6 h-6 ${testStatus === 'checking' ? 'animate-spin' : ''}`} />}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg text-white">
                    {isAr ? 'حالة الملف على الموقع المباشر' : 'Live Root File Status'}
                  </h3>
                  {testStatus === 'success' && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500 text-slate-950">
                      {isAr ? 'تم التحقق بنجاح ✓' : 'Verified Active ✓'}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400 mt-0.5 font-mono">
                  GET /app-ads.txt &bull; Content-Type: text/plain
                </p>
              </div>
            </div>

            {/* Test button & direct link */}
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <button
                id="btn-retest-ads-txt"
                onClick={verifyAppAdsTxtFile}
                disabled={testStatus === 'checking'}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${testStatus === 'checking' ? 'animate-spin' : ''}`} />
                <span>{isAr ? 'إعادة الفحص المباشر' : 'Re-test Live'}</span>
              </button>

              <a
                id="btn-open-raw-ads-txt"
                href="/app-ads.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{isAr ? 'فتح الملف كنص خام' : 'Open /app-ads.txt'}</span>
              </a>
            </div>
          </div>

          {/* Code Viewer Container */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                {isAr ? 'محتوى الملف (سطر واحد فقط بدون تنسيق):' : 'File Content (Exact single raw line):'}
              </span>
              <span className="text-xs text-emerald-400 font-mono">
                Publisher ID: {EXACT_PUBLISHER_ID}
              </span>
            </div>

            {/* Exact Content Display */}
            <div className="relative group">
              <pre 
                id="app-ads-content-box"
                className="p-4 bg-slate-950 rounded-xl border border-slate-700/80 text-emerald-400 font-mono text-xs sm:text-sm overflow-x-auto whitespace-pre selection:bg-emerald-900 selection:text-white"
              >
                {EXACT_APP_ADS_TXT}
              </pre>

              <button
                id="btn-copy-ads-txt"
                onClick={handleCopyContent}
                className="absolute top-2.5 end-2.5 inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-600 transition-colors shadow-xs"
              >
                {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? (isAr ? 'تم النسخ!' : 'Copied!') : (isAr ? 'نسخ السطر' : 'Copy')}</span>
              </button>
            </div>

            {/* Direct URL Box */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-700/50 text-xs">
              <div className="flex items-center gap-2 overflow-hidden w-full">
                <Globe2 className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span className="text-slate-400 font-medium flex-shrink-0">{isAr ? 'الرابط المباشر:' : 'Direct URL:'}</span>
                <span className="text-slate-200 font-mono truncate">{appAdsTxtUrl}</span>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0 self-end sm:self-auto">
                <button
                  id="btn-copy-ads-url"
                  onClick={handleCopyUrl}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-[11px] font-semibold transition-colors flex items-center gap-1"
                >
                  {copiedUrl ? <CheckCircle2 className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedUrl ? (isAr ? 'تم نسخ الرابط' : 'URL Copied') : (isAr ? 'نسخ الرابط' : 'Copy URL')}</span>
                </button>
                <button
                  id="btn-download-ads-file"
                  onClick={downloadFile}
                  title={isAr ? 'تنزيل ملف app-ads.txt' : 'Download app-ads.txt file'}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-[11px] font-semibold transition-colors flex items-center gap-1"
                >
                  <Download className="w-3 h-3" />
                  <span>{isAr ? 'تنزيل ملف' : 'Download .txt'}</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Step-by-Step Google Play & AdMob Linking Instructions */}
        <div className="max-w-4xl mx-auto space-y-6">
          <h3 className="text-xl font-bold text-white text-center flex items-center justify-center gap-2">
            <Layers className="w-5 h-5 text-amber-400" />
            <span>{isAr ? 'خطوات ربط الموقع في Google Play و AdMob' : 'How to Link with Google Play & AdMob'}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Step 1 */}
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-5 space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 font-extrabold text-sm flex items-center justify-center">
                1
              </div>
              <h4 className="font-bold text-sm text-white">
                {isAr ? 'إضافة الدومين في Google Play Console' : 'Add Domain in Google Play Console'}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isAr 
                  ? 'انتقل إلى Google Play Console ← صفحة المتجر الرئيسية أو إعدادات المتجر ← أدخل رابط موقعك الكامل في خانة "موقع الويب" (Website URL).'
                  : 'Open Google Play Console -> Store Presence -> Store Settings -> Enter your website domain in the "Website" field.'}
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-5 space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-extrabold text-sm flex items-center justify-center">
                2
              </div>
              <h4 className="font-bold text-sm text-white">
                {isAr ? 'الزحف التلقائي من AdMob' : 'Automatic AdMob Crawling'}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isAr 
                  ? 'يقوم روبوت Google AdMob بقراءة رابط موقعك من متجر Google Play ثم جلب الرابط المباشر https://your-domain.com/app-ads.txt تلقائيًا.'
                  : 'The Google AdMob crawler reads your domain from Google Play Store listing and fetches https://your-domain.com/app-ads.txt.'}
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-5 space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 font-extrabold text-sm flex items-center justify-center">
                3
              </div>
              <h4 className="font-bold text-sm text-white">
                {isAr ? 'اعتماد وحماية الأرباح' : 'Authorized & Protected'}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isAr 
                  ? 'خلال 24 ساعة، ستظهر علامة الصح الخضراء "تم العثور على الملف والتحقق منه" في لوحة تحكم AdMob لحماية عوائد إعلاناتك بالكامل.'
                  : 'Within 24 hours, AdMob will verify the file and show a green "Authorized" status, ensuring 100% revenue protection.'}
              </p>
            </div>

          </div>

          {/* Important Security Notice */}
          <div className="bg-emerald-950/40 border border-emerald-800/60 rounded-xl p-4 flex items-start gap-3 text-xs text-emerald-200">
            <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {isAr
                ? 'ملاحظة أمنية: هذا الموقع مصمم كـ Static Web Application نظيف بالكامل. لا يحتوي على أي مفاتيح سرية أو كلمات مرور أو ملفات Keystore، وهو جاهز للنشر الفوري على أي استضافة (Cloud Run, Vercel, Netlify, Firebase Hosting, Apache, Nginx).'
                : 'Security Note: This is a secure static web application. It contains no secret keys, keystores, or credentials, and is ready for immediate deployment on any custom hosting and domain.'}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
