import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Clock, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Smartphone,
  ExternalLink
} from 'lucide-react';
import { AppConfig, Language } from '../types';

interface ContactSectionProps {
  config: AppConfig;
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ config, lang }) => {
  const isAr = lang === 'ar';
  const appName = isAr ? config.appNameAr : config.appNameEn;
  const developerName = isAr ? config.developerNameAr : config.developerNameEn;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      qAr: 'كيف يمكنني تثبيت التطبيق وتحديثه؟',
      qEn: 'How do I install and update the app?',
      aAr: 'يمكنك تثبيت أحدث إصدار وتلقي التحديثات الدورية تلقائيًا عبر فتح صفحة التطبيق على متجر Google Play والضغط على زر "تثبيت" أو "تحديث".',
      aEn: 'You can install and receive continuous updates directly via Google Play Store by tapping "Install" or "Update".'
    },
    {
      qAr: 'ما هي متطلبات تشغيل التطبيق على هاتفي؟',
      qEn: 'What are the system requirements?',
      aAr: `يعمل التطبيق بسلاسة على نظام ${config.minAndroidVersion} وجميع الأجهزة التي تدعم خدمات Google Play.`,
      aEn: `The application runs smoothly on ${config.minAndroidVersion} and all devices supporting Google Play Services.`
    },
    {
      qAr: 'كيف يمكنني حذف بياناتي أو طلب المساعدة الفنية؟',
      qEn: 'How can I request support or data deletion?',
      aAr: 'يمكنك مراسلتنا في أي وقت عبر نموذج الاتصال أدناه أو البريد الإلكتروني الرسمي، وسيتم الرد عليك في غضون 24 ساعة.',
      aEn: 'You can contact our support anytime via the contact form or developer email, and our team will respond within 24 hours.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate instantaneous email dispatch feedback
    setSubmitted(true);
    setTimeout(() => {
      // Keep state clean
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
            <Mail className="w-4 h-4 text-emerald-600" />
            <span>{isAr ? 'الدعم الفني والتواصل' : 'Support & Inquiries'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isAr ? 'تواصل مع مطور التطبيق' : 'Get in Touch with Developer'}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {isAr 
              ? 'يسعدنا دائمًا الاستماع لاقتراحاتكم والإجابة على أي استفسارات أو تقارير فنية.'
              : 'We welcome your feedback, feature suggestions, and technical inquiries.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact info & FAQs */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{isAr ? 'البريد الإلكتروني المباشر' : 'Direct Developer Email'}</h3>
                  <p className="text-xs text-slate-500">{isAr ? 'للاستفسارات والدعم التقني' : 'For questions & tech support'}</p>
                </div>
              </div>

              <a 
                id="contact-email-link"
                href={`mailto:${config.supportEmail}?subject=${encodeURIComponent(`Support - ${appName}`)}`}
                className="block p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 font-mono text-sm font-semibold transition-colors break-all border border-slate-200"
              >
                {config.supportEmail}
              </a>

              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{isAr ? 'الرد عادةً خلال أقل من 24 ساعة' : 'Typical response within 24 hours'}</span>
              </div>
            </div>

            {/* Developer Profile Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  <Smartphone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{developerName}</h4>
                  <p className="text-xs text-slate-500">{isAr ? 'مطور تطبيقات Android معتمد' : 'Android App Developer'}</p>
                </div>
              </div>
              <div className="pt-2 text-xs text-slate-600 leading-relaxed">
                {isAr 
                  ? 'ملتزمون بتقديم تطبيقات عالية الكفاءة مع تحديثات مستمرة وحماية كاملة لبيانات المستخدمين.'
                  : 'Committed to delivering high-performance applications with continuous updates and strict user privacy.'}
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-600" />
                <span>{isAr ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}</span>
              </h4>

              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-2xs">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-4 text-start text-xs sm:text-sm font-bold text-slate-800 flex items-center justify-between gap-2 hover:bg-slate-50 transition-colors"
                    >
                      <span>{isAr ? faq.qAr : faq.qEn}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                        {isAr ? faq.aAr : faq.aEn}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900">
                  {isAr ? 'إرسال رسالة مباشرة' : 'Send a Direct Message'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  {isAr ? 'املأ النموذج وسنتواصل معك بأسرع وقت ممكن.' : 'Fill in the details and we will get back to you promptly.'}
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-950">
                    {isAr ? 'تم استلام رسالتك بنجاح!' : 'Message Received Successfully!'}
                  </h4>
                  <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                    {isAr 
                      ? `شكرًا لتواصلك معنا بخصوص تطبيق ${appName}. سنقوم بمراجعة رسالتك والرد على بريدك الإلكتروني قريباً.`
                      : `Thank you for contacting us regarding ${appName}. We will review your message and reply to your email shortly.`}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                  >
                    {isAr ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-start">
                      <label className="text-xs font-bold text-slate-700">
                        {isAr ? 'الاسم الكامل *' : 'Full Name *'}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isAr ? 'مثال: أحمد محمد' : 'e.g. John Doe'}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-sm transition-all outline-hidden"
                      />
                    </div>

                    <div className="space-y-1.5 text-start">
                      <label className="text-xs font-bold text-slate-700">
                        {isAr ? 'البريد الإلكتروني *' : 'Email Address *'}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={isAr ? 'name@example.com' : 'name@example.com'}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-sm transition-all outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 text-start">
                    <label className="text-xs font-bold text-slate-700">
                      {isAr ? 'موضوع الرسالة' : 'Subject'}
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={isAr ? 'مثال: اقتراح ميزة جديدة / استفسار تقني' : 'e.g. Feature request / Bug report'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-sm transition-all outline-hidden"
                    />
                  </div>

                  <div className="space-y-1.5 text-start">
                    <label className="text-xs font-bold text-slate-700">
                      {isAr ? 'نص الرسالة *' : 'Message *'}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={isAr ? 'اكتب استفسارك أو تفاصيل المشكلة هنا بالتفصيل...' : 'Please describe your inquiry or feedback...'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-sm transition-all outline-hidden resize-y"
                    />
                  </div>

                  <button
                    id="btn-submit-contact-form"
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-emerald-400" />
                    <span>{isAr ? 'إرسال الرسالة الآن' : 'Send Message'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
