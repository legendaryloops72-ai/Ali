import { AppConfig } from '../types';

export const EXACT_APP_ADS_TXT = 'google.com, pub-4760027279848820, DIRECT, f08c47fec0942fa0';
export const EXACT_PUBLISHER_ID = 'pub-4760027279848820';

export const defaultAppConfig: AppConfig = {
  appNameAr: 'تطبيقي الرائع',
  appNameEn: 'My Super App',
  appTaglineAr: 'تجربة أندرويد استثنائية تجمع بين السرعة والأمان والتصميم العصري',
  appTaglineEn: 'An exceptional Android experience combining speed, security and modern design',
  appDescriptionAr: 'تطبيق أندرويد متكامل مصمم بعناية فائقة لتوفير أفضل أداء وسهولة في الاستخدام، مع دعم كامل للغة العربية والوضع الليلي والتحديثات المستمرة.',
  appDescriptionEn: 'A comprehensive Android application crafted with precision to deliver optimal performance, intuitive usability, dark mode, and seamless continuous updates.',
  packageName: 'com.developer.myapp',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.developer.myapp',
  developerNameAr: 'المطور المستقل',
  developerNameEn: 'Independent Developer',
  developerEmail: 'legendaryloops72@gmail.com',
  supportEmail: 'legendaryloops72@gmail.com',
  publisherId: EXACT_PUBLISHER_ID,
  appAdsTxtContent: EXACT_APP_ADS_TXT,
  appVersion: 'v2.4.0',
  appCategoryAr: 'أدوات وإنتاجية',
  appCategoryEn: 'Tools & Productivity',
  rating: '4.8',
  downloadsCount: '+10,000',
  reviewsCount: '1,420',
  minAndroidVersion: 'Android 8.0 (Oreo) وما فوق',
  features: [
    {
      id: 'f1',
      iconName: 'Zap',
      titleAr: 'أداء فائق وسرعة استجابة',
      titleEn: 'Ultra Fast & Responsive',
      descriptionAr: 'تم بناء التطبيق بأحدث تقنيات أندرويد لضمان استهلاك قليل للبطارية وأقصى سرعة تشغيل.',
      descriptionEn: 'Built with modern Android architectures ensuring minimal battery usage and instant launch speeds.',
      badgeAr: 'سريع للغاية',
      badgeEn: 'Blazing Fast'
    },
    {
      id: 'f2',
      iconName: 'ShieldCheck',
      titleAr: 'حماية وأمان عالي للبيانات',
      titleEn: 'High Security & Privacy',
      descriptionAr: 'تشفير كامل للبيانات مع التزام صارم بسياسات الخصوصية وحماية أمان المستخدم.',
      descriptionEn: 'End-to-end data encryption adhering strictly to privacy standards and user protection.',
      badgeAr: 'مشفر وآمن',
      badgeEn: 'Encrypted'
    },
    {
      id: 'f3',
      iconName: 'WifiOff',
      titleAr: 'يعمل بدون اتصال بالإنترنت',
      titleEn: 'Works Seamlessly Offline',
      descriptionAr: 'يمكنك الوصول لمعظم ميزات التطبيق والبيانات المخزنة دون الحاجة لشبكة إنترنت دائمة.',
      descriptionEn: 'Access essential features and locally cached data anytime without needing active internet.',
      badgeAr: 'أوفلاين',
      badgeEn: 'Offline'
    },
    {
      id: 'f4',
      iconName: 'Moon',
      titleAr: 'الوضع الليلي المريح للعين',
      titleEn: 'Eye-Safe Dark Mode',
      descriptionAr: 'واجهة مريحة تدعم الوضع المظلم التلقائي المتوافق مع إعدادات نظام أندرويد.',
      descriptionEn: 'Sleek dark theme that adapts automatically to system settings to save battery and reduce eye strain.',
      badgeAr: 'مريح للعين',
      badgeEn: 'Dark Theme'
    },
    {
      id: 'f5',
      iconName: 'Cloud',
      titleAr: 'مزامنة سحابية تلقائية',
      titleEn: 'Auto Cloud Backup',
      descriptionAr: 'مزامنة آمنة تحفظ بياناتك وتتيح استرجاعها عند تغيير الهاتف أو إعادة التثبيت.',
      descriptionEn: 'Secure automatic sync ensuring your data is backed up and easily restored on new devices.',
      badgeAr: 'سحابي',
      badgeEn: 'Cloud Sync'
    },
    {
      id: 'f6',
      iconName: 'Sparkles',
      titleAr: 'تحديثات وميزات مستمرة',
      titleEn: 'Regular Feature Updates',
      descriptionAr: 'تحديثات دورية تضيف تحسينات وميزات جديدة بناءً على اقتراحات المستخدمين.',
      descriptionEn: 'Continuous improvements and exciting new tools added regularly based on user feedback.',
      badgeAr: 'دعم دائم',
      badgeEn: 'Active Support'
    }
  ]
};

export const privacyPolicyText = {
  ar: {
    lastUpdated: 'آخر تحديث: 20 أغسطس 2026',
    intro: 'نحن نولي أهمية قصوى لخصوصية مستخدمينا. توضح هذه الوثيقة سياسة جمع واستخدام وحماية المعلومات عند استخدام تطبيقنا والموقع الرسمي الخاص به.',
    sections: [
      {
        title: '1. المعلومات التي نجمعها',
        content: 'لا نطلب من المستخدمين تقديم معلومات هوية شخصية حساسة لاستخدام الميزات الأساسية للتطبيق. قد نقوم بجمع بعض المعلومات غير المعرّفة تلقائيًا لتحسين تجربة الاستخدام مثل: نوع الجهاز، إصدار نظام التشغيل أندرويد، تقارير الأعطال التشخيصية، ومعدلات الأداء.'
      },
      {
        title: '2. خدمات الطرف الثالث والإعلانات (Google AdMob)',
        content: 'يستخدم التطبيق خدمات تابعة لجهات خارجية موثوقة قد تقوم بجمع معلومات تُستخدم للتعرف عليك وفقًا لسياسات الخصوصية الخاصة بها. تشمل هذه الخدمات:\n• Google Play Services\n• Google AdMob (لعرض الإعلانات ومطابقة ملف app-ads.txt المعرّف برقم الناشر pub-4760027279848820)\n• Firebase Crashlytics & Analytics (لتحليل استقرار التطبيق والأعطال).\nتستخدم Google AdMob معرّفات الإعلانات لتقديم إعلانات ملائمة ومتوافقة مع تفضيلاتك وفقًا لسياسات Google المعتمدة.'
      },
      {
        title: '3. ملفات تعريف الارتباط وتقنيات التتبع',
        content: 'لا يستخدم التطبيق نفسه ملفات تعريف الارتباط بشكل صريح، ولكن قد تستخدم مكتبات الطرف الثالث المدمجة (مثل أدوات إعلانات Google) تقنيات التخزين المؤقت لجمع المعلومات وتحسين خدماتها الإعلانية.'
      },
      {
        title: '4. أمان البيانات والتشفير',
        content: 'نحن نقدر ثقتك في استخدام تطبيقنا، ونسعى جاهدين لاستخدام وسائل مقبولة تجاريًا وتقنيًا لحماية البيانات المخزنة محليًا على جهازك أو المنقولة عبر بروتوكولات آمنة (HTTPS / TLS).'
      },
      {
        title: '5. خصوصية الأطفال (COPPA & Google Play Families Policy)',
        content: 'تطبيقنا لا يوجه خدماته عن قصد للأطفال دون سن 13 عامًا. إذا اكتشفنا أن طفلاً دون سن 13 عامًا قد زودنا بمعلومات شخصية، فإننا نقوم فورًا بحذفها من خوادمنا. إذا كنت أحد الوالدين أو الوصي وعلمت أن طفلك قد قدم معلومات، يرجى التواصل معنا.'
      },
      {
        title: '6. التغييرات على سياسة الخصوصية',
        content: 'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر لمواكبة التحديثات التقنية أو المتطلبات القانونية. ننصحك بمراجعة هذه الصفحة بشكل دوري لمعرفة أي تغييرات. تسري التغييرات فور نشرها على هذه الصفحة.'
      },
      {
        title: '7. التواصل معنا',
        content: 'إذا كانت لديك أي أسئلة أو اقتراحات حول سياسة الخصوصية الخاصة بنا أو أذونات التطبيق، فلا تتردد في مراسلتنا عبر البريد الإلكتروني الرسمي للمطور.'
      }
    ]
  },
  en: {
    lastUpdated: 'Last Updated: August 20, 2026',
    intro: 'We value your privacy immensely. This Privacy Policy outlines how our Android application and official website collect, use, and protect your information.',
    sections: [
      {
        title: '1. Information We Collect',
        content: 'We do not collect sensitive personally identifiable information for general app usage. We may collect non-personal diagnostic information such as device model, Android OS version, crash logs, and performance metrics to continually improve app stability.'
      },
      {
        title: '2. Third-Party Services & Advertising (Google AdMob)',
        content: 'The app uses verified third-party services that may collect information used to identify you in compliance with their privacy policies:\n• Google Play Services\n• Google AdMob (for serving ads verified via app-ads.txt Publisher ID pub-4760027279848820)\n• Firebase Crashlytics & Analytics\nAdMob uses mobile advertising identifiers to present personalized or contextual ads strictly according to Google policies.'
      },
      {
        title: '3. Cookies and Local Storage',
        content: 'The application itself does not use cookies directly; however, integrated third-party SDKs (such as Google Mobile Ads) may use internal identifiers to manage frequency capping and ad performance.'
      },
      {
        title: '4. Data Security',
        content: 'We strive to use commercially acceptable means to protect any application data, leveraging standard encryption and secure transmission protocols (HTTPS/TLS).'
      },
      {
        title: '5. Children’s Privacy',
        content: 'Our services are not directed at children under the age of 13. If you believe your child has provided us with personal information, please contact us immediately so we can promptly remove it.'
      },
      {
        title: '6. Policy Changes',
        content: 'We may update our Privacy Policy periodically. We recommend checking this page occasionally for updates. Changes are effective immediately upon publication on this official page.'
      },
      {
        title: '7. Contact Us',
        content: 'For any questions or inquiries regarding this Privacy Policy, please reach out via our official developer contact channels.'
      }
    ]
  }
};

export const termsText = {
  ar: {
    lastUpdated: 'آخر تحديث: 20 أغسطس 2026',
    intro: 'باستخدامك لهذا التطبيق، فإنك توافق على الالتزام بشروط الاستخدام التالية وجميع القوانين واللوائح المعمول بها.',
    sections: [
      {
        title: '1. ترخيص الاستخدام',
        content: 'يُمنح المستخدم ترخيصًا شخصيًا وغير حصري وغير قابل للتحويل لتنزيل التطبيق واستخدامه للأغراض الشخصية غير التجارية فقط.'
      },
      {
        title: '2. القيود والمحظورات',
        content: 'يُحظر على المستخدم: محاولة الهندسة العكسية للتطبيق، استخراج الكود المصدري، إعادة بيع التطبيق أو تعديله، أو استخدام التطبيق بأي طريقة تنتهك حقوق الملكية الفكرية.'
      },
      {
        title: '3. إخلاء المسؤولية',
        content: 'يتم توفير التطبيق "كما هو" وبحسب التوفر، دون أي ضمانات صريحة أو ضمنية. لا يتحمل المطور أي مسؤولية عن أي أضرار ناتجة عن استخدام أو عدم القدرة على استخدام التطبيق.'
      },
      {
        title: '4. التحديثات والتعديلات',
        content: 'يحتفظ المطور بالحق في تحديث أو تحسين أو إيقاف أي جزء من التطبيق في أي وقت لتحسين الأداء والأمان.'
      }
    ]
  },
  en: {
    lastUpdated: 'Last Updated: August 20, 2026',
    intro: 'By downloading or using this application, you agree to abide by these terms and all applicable rules and regulations.',
    sections: [
      {
        title: '1. Usage License',
        content: 'A non-exclusive, non-transferable, revocable license is granted to download and use the application solely for personal, non-commercial purposes.'
      },
      {
        title: '2. Prohibited Uses',
        content: 'You may not attempt to decompile, reverse engineer, extract the source code, modify, or distribute unauthorized derivatives of the application.'
      },
      {
        title: '3. Disclaimer',
        content: 'The application is provided "AS IS" without warranties of any kind. The developer shall not be liable for any damages arising out of the use or inability to use the application.'
      },
      {
        title: '4. Modifications',
        content: 'The developer reserves the right to modify, update, or discontinue features of the application at any time to enhance security and user experience.'
      }
    ]
  }
};
