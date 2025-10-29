import { CONFIG } from "./config";

/**
 * SEO and Schema Markup Utilities
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SchemaOrganization {
  name: string;
  url: string;
  logo?: string;
  contactPoint?: {
    telephone: string;
    contactType: string;
    email: string;
  };
}

/**
 * Generate FAQPage Schema JSON-LD
 */
export const generateFAQSchema = (faqs: FAQItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
};

/**
 * Generate MedicalBusiness Schema JSON-LD
 */
export const generateMedicalBusinessSchema = (additionalData?: {
  description?: string;
  medicalSpecialty?: string;
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
  };
}) => {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://ringvisit.com";
  
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": CONFIG.COMPANY.NAME,
    "description": additionalData?.description || "Secure, HIPAA-compliant telehealth platform for healthcare providers",
    "url": baseUrl,
    "telephone": CONFIG.COMPANY.PHONE,
    "email": CONFIG.EMAILS.SUPPORT,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "14269 Danielson St, Suite 400",
      "addressLocality": "Poway",
      "addressRegion": "CA",
      "postalCode": "92064",
      "addressCountry": "US",
    },
    "medicalSpecialty": additionalData?.medicalSpecialty || "Telemedicine",
    "priceRange": "$$",
    ...(additionalData?.aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: additionalData.aggregateRating.ratingValue,
        reviewCount: additionalData.aggregateRating.reviewCount,
      },
    }),
  };
};

/**
 * Generate Organization Schema JSON-LD
 */
export const generateOrganizationSchema = () => {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://ringvisit.com";
  
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": CONFIG.COMPANY.NAME,
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": CONFIG.COMPANY.PHONE,
        "contactType": "customer service",
        "email": CONFIG.EMAILS.SUPPORT,
        "availableLanguage": ["English"],
      },
      {
        "@type": "ContactPoint",
        "telephone": CONFIG.COMPANY.PHONE,
        "contactType": "sales",
        "email": CONFIG.EMAILS.SALES,
        "availableLanguage": ["English"],
      },
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "14269 Danielson St, Suite 400",
      "addressLocality": "Poway",
      "addressRegion": "CA",
      "postalCode": "92064",
      "addressCountry": "US",
    },
  };
};

/**
 * Generate BreadcrumbList Schema JSON-LD
 */
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
};

/**
 * Generate WebSite Schema with SearchAction
 */
export const generateWebSiteSchema = () => {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://ringvisit.com";
  
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": CONFIG.COMPANY.NAME,
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
};

