import { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { generateOrganizationSchema, generateMedicalBusinessSchema, generateFAQSchema, generateWebSiteSchema, FAQItem } from "@/lib/seo";
import { CONFIG } from "@/lib/config";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  faqs?: FAQItem[];
  includeMedicalBusinessSchema?: boolean;
  medicalBusinessData?: {
    description?: string;
    medicalSpecialty?: string;
    aggregateRating?: {
      ratingValue: string;
      reviewCount: string;
    };
  };
}

const Layout = ({ 
  children, 
  title, 
  description, 
  keywords, 
  ogImage,
  faqs,
  includeMedicalBusinessSchema = false,
  medicalBusinessData,
}: LayoutProps) => {
  const defaultTitle = "RingVisit - Modern Telehealth Solutions for Healthcare Providers";
  const defaultDescription = "Transform your healthcare practice with RingVisit's secure, HIPAA-compliant telehealth platform. Improve patient outcomes and streamline virtual consultations.";
  const defaultKeywords = "telehealth, telemedicine, virtual healthcare, healthcare technology, video consultation, patient care, medical software";
  
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://ringvisit.com";
  const defaultOgImage = `${baseUrl}/ringvisit-logo.png`;
  
  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageKeywords = keywords || defaultKeywords;
  const pageOgImage = ogImage || defaultOgImage;

  // Generate schema markup
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();
  const medicalBusinessSchema = includeMedicalBusinessSchema 
    ? generateMedicalBusinessSchema(medicalBusinessData)
    : null;
  const faqSchema = faqs && faqs.length > 0 ? generateFAQSchema(faqs) : null;

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <link rel="canonical" href={typeof window !== "undefined" ? window.location.href : baseUrl} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageOgImage} />
        <meta property="og:url" content={typeof window !== "undefined" ? window.location.href : baseUrl} />
        <meta property="og:site_name" content={CONFIG.COMPANY.NAME} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageOgImage} />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content={CONFIG.COMPANY.NAME} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        
        {medicalBusinessSchema && (
          <script type="application/ld+json">
            {JSON.stringify(medicalBusinessSchema)}
          </script>
        )}
        
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>
      
      {children}
    </>
  );
};

export default Layout;
