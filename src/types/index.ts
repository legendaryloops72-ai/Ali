export type Language = 'ar' | 'en';

export interface AppFeature {
  id: string;
  iconName: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  badgeAr?: string;
  badgeEn?: string;
}

export interface AppScreenshot {
  id: string;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  accentColor: string;
  mockupTextAr: string;
  mockupTextEn: string;
}

export interface AppConfig {
  appNameAr: string;
  appNameEn: string;
  appTaglineAr: string;
  appTaglineEn: string;
  appDescriptionAr: string;
  appDescriptionEn: string;
  packageName: string;
  playStoreUrl: string;
  developerNameAr: string;
  developerNameEn: string;
  developerEmail: string;
  supportEmail: string;
  publisherId: string;
  appAdsTxtContent: string;
  appVersion: string;
  appCategoryAr: string;
  appCategoryEn: string;
  rating: string;
  downloadsCount: string;
  reviewsCount: string;
  minAndroidVersion: string;
  features: AppFeature[];
}
