import { ReactNode } from "react";
import { Helmet } from "react-helmet";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout = ({ children, title, description, keywords }: LayoutProps) => {
  const defaultTitle = "RingVisit - Modern Telehealth Solutions for Healthcare Providers";
  const defaultDescription = "Transform your healthcare practice with RingVisit's secure, HIPAA-compliant telehealth platform. Improve patient outcomes and streamline virtual consultations.";
  const defaultKeywords = "telehealth, telemedicine, virtual healthcare, healthcare technology, video consultation, patient care, medical software";

  return (
    <>
      <Helmet>
        <title>{title || defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta name="keywords" content={keywords || defaultKeywords} />
        <meta property="og:title" content={title || defaultTitle} />
        <meta property="og:description" content={description || defaultDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title || defaultTitle} />
        <meta name="twitter:description" content={description || defaultDescription} />
      </Helmet>
      {children}
    </>
  );
};

export default Layout;
