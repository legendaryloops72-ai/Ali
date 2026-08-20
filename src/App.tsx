/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AppConfig, Language } from './types';
import { defaultAppConfig, EXACT_APP_ADS_TXT, EXACT_PUBLISHER_ID } from './data/defaultConfig';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AppAdsTxtSection } from './components/AppAdsTxtSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ScreenshotsSection } from './components/ScreenshotsSection';
import { PrivacyPolicySection } from './components/PrivacyPolicySection';
import { TermsSection } from './components/TermsSection';
import { ContactSection } from './components/ContactSection';
import { CustomizerModal } from './components/CustomizerModal';
import { Footer } from './components/Footer';

const STORAGE_KEY = 'android_app_site_config';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Load config with safety fallback to default
  const [config, setConfig] = useState<AppConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Force the exact publisher and app-ads line
        return {
          ...defaultAppConfig,
          ...parsed,
          publisherId: EXACT_PUBLISHER_ID,
          appAdsTxtContent: EXACT_APP_ADS_TXT
        };
      }
    } catch (e) {
      console.warn('Could not read from localStorage', e);
    }
    return defaultAppConfig;
  });

  // Sync HTML dir and lang attributes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleSaveConfig = (newConfig: AppConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newConfig));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-500 selection:text-white">
      
      {/* Navigation Bar */}
      <Navbar
        config={config}
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          config={config}
          lang={lang}
          onNavigate={handleNavigate}
        />

        {/* AdMob app-ads.txt Verification Center */}
        <AppAdsTxtSection
          config={config}
          lang={lang}
        />

        {/* Features Section */}
        <FeaturesSection
          config={config}
          lang={lang}
        />

        {/* Screenshots Showcase */}
        <ScreenshotsSection
          config={config}
          lang={lang}
        />

        {/* Privacy Policy Section */}
        <PrivacyPolicySection
          config={config}
          lang={lang}
        />

        {/* Terms of Service Section */}
        <TermsSection
          config={config}
          lang={lang}
        />

        {/* Contact Us Section */}
        <ContactSection
          config={config}
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer
        config={config}
        lang={lang}
        onNavigate={handleNavigate}
      />

      {/* Developer Customizer Modal */}
      <CustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        config={config}
        onSave={handleSaveConfig}
        lang={lang}
      />

    </div>
  );
}
