import React, { useState } from 'react';
import { Download, Globe, Shield, Smartphone, Sliders, Menu, X, CheckCircle2 } from 'lucide-react';
import { AppConfig, Language } from '../types';

interface NavbarProps {
  config: AppConfig;
  lang: Language;
  onToggleLang: () => void;
  onOpenCustomizer: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  config,
  lang,
  onToggleLang,
  onOpenCustomizer,
  onNavigate,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAr = lang === 'ar';
  const appName = isAr ? config.appNameAr : config.appNameEn;

  const navLinks = [
    { id: 'hero', label: isAr ? 'الرئيسية' : 'Home' },
    { id: 'features', label: isAr ? 'الميزات' : 'Features' },
    { id: 'screenshots', label: isAr ? 'الشاشات' : 'Screenshots' },
    { id: 'app-ads', label: 'app-ads.txt', highlight: true },
    { id: 'privacy', label: isAr ? 'الخصوصية' : 'Privacy' },
    { id: 'contact', label: isAr ? 'تواصل معنا' : 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 border-b border-slate-200/80 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo & App Title */}
          <div 
            id="brand-logo-container"
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {appName}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Android
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                {isAr ? 'الموقع الرسمي للتطبيق' : 'Official App Website'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  link.highlight
                    ? 'bg-amber-50 text-amber-900 border border-amber-200/80 hover:bg-amber-100/80'
                    : activeSection === link.id
                    ? 'text-emerald-700 bg-emerald-50/80 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Actions: Lang toggle, App Config, Play Store CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Customizer / Settings Trigger */}
            <button
              id="btn-open-customizer"
              onClick={onOpenCustomizer}
              title={isAr ? 'تخصيص معلومات التطبيق والدومين' : 'Customize App Info & Domain'}
              className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:text-emerald-600 hover:border-emerald-300 hover:bg-emerald-50/50 transition-colors"
            >
              <Sliders className="w-4 h-4" />
            </button>

            {/* Language Switcher */}
            <button
              id="btn-toggle-language"
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span>{isAr ? 'EN' : 'العربية'}</span>
            </button>

            {/* Google Play Download Button */}
            <a
              id="nav-btn-download-play"
              href={config.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm hover:shadow transition-all"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Google Play</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              id="btn-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-start px-4 py-2.5 rounded-lg text-sm font-medium ${
                  activeSection === link.id
                    ? 'bg-emerald-50 text-emerald-700 font-bold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 px-4">
              <a
                id="mobile-btn-download-play"
                href={config.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white text-sm font-bold py-3 rounded-xl shadow"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>{isAr ? 'تحميل من Google Play' : 'Download on Google Play'}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
