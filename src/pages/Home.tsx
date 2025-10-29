import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import { 
  Shield, 
  Zap,
  Network,
  Lock,
  Brain,
  RefreshCw,
  CheckCircle,
  ArrowRight,
  Building2,
  Users,
  Wallet,
  TrendingUp,
  Clock,
  Database,
  BarChart3,
  Target,
  Award,
  Activity
} from "lucide-react";

const Home = () => {
  const keyMetrics = [
    { 
      stat: "95%", 
      label: "Reduction in claim processing time",
      description: "Healthcare organizations using RingVisit experience a 95% reduction in claim processing time, from an average of 14 days to less than 1 day.",
      icon: Clock
    },
    { 
      stat: "40%", 
      label: "Decrease in administrative costs",
      description: "Providers report a 40% decrease in administrative overhead, freeing up resources for direct patient care.",
      icon: TrendingUp
    },
    { 
      stat: "99.9%", 
      label: "Platform uptime & reliability",
      description: "Enterprise-grade infrastructure ensures 99.9% uptime with less than 44 minutes of downtime per month.",
      icon: Activity
    },
    { 
      stat: "100%", 
      label: "HIPAA & SOC 2 compliant",
      description: "Full compliance with HIPAA, SOC 2 Type II, and HITRUST CSF standards with continuous monitoring and auditing.",
      icon: Shield
    }
  ];

  const solutions = [
    {
      icon: Brain,
      title: "AI-Powered Revenue Cycle Management",
      description: "Automate medical coding, claims processing, and revenue cycle workflows with 99.5% accuracy using advanced machine learning algorithms.",
      benefits: [
        "Real-time claim validation and error detection",
        "Automated ICD-10 and CPT code assignment",
        "Predictive analytics for denial prevention",
        "Integrated compliance checking"
      ],
      metrics: "Reduces coding errors by 92% and accelerates reimbursement by 85%"
    },
    {
      icon: Shield,
      title: "Zero-Trust Security Architecture",
      description: "Enterprise-grade security with end-to-end encryption, continuous authentication, and immutable audit trails protecting patient data across the entire communication ring.",
      benefits: [
        "AES-256 encryption at rest and in transit",
        "Multi-factor authentication and SSO",
        "Role-based access control (RBAC)",
        "24/7 security monitoring and threat detection"
      ],
      metrics: "Zero security breaches across 10,000+ healthcare facilities"
    },
    {
      icon: RefreshCw,
      title: "Real-Time Data Synchronization",
      description: "Instant bidirectional data flow between hospital systems, payers, and patients with guaranteed consistency and complete transaction history.",
      benefits: [
        "Sub-second data propagation across systems",
        "Conflict resolution and version control",
        "Complete audit trails for compliance",
        "Event-driven architecture for scalability"
      ],
      metrics: "Processes 50,000+ transactions per second with 99.99% accuracy"
    },
    {
      icon: Network,
      title: "Unified Healthcare Communication Platform",
      description: "Seamlessly connect EHR systems, payer networks, and patient portals in a single, interoperable ecosystem with FHIR R4 and HL7 standards.",
      benefits: [
        "Native Epic and Cerner integration",
        "FHIR R4 and HL7 v2/v3 support",
        "RESTful and GraphQL APIs",
        "Webhook and event streaming capabilities"
      ],
      metrics: "Integrates with 200+ healthcare systems and reduces integration time by 80%"
    }
  ];

  const useCases = [
    {
      title: "Large Hospital Systems",
      challenge: "Managing complex revenue cycles across multiple departments and locations",
      solution: "Centralized platform with automated coding, real-time claims processing, and predictive analytics",
      results: [
        "Reduced days in accounts receivable from 45 to 12 days",
        "Increased first-pass claim acceptance rate from 72% to 94%",
        "Eliminated 85% of manual coding tasks"
      ]
    },
    {
      title: "Health Insurance Payers",
      challenge: "Processing high volumes of claims efficiently while maintaining accuracy and compliance",
      solution: "AI-powered claim adjudication with automated prior authorization and fraud detection",
      results: [
        "Process 3x more claims with the same workforce",
        "Reduced claim processing costs by 55%",
        "Improved member satisfaction scores by 28%"
      ]
    },
    {
      title: "Medical Practices & Clinics",
      challenge: "Streamlining administrative workflows to focus on patient care",
      solution: "All-in-one platform handling scheduling, billing, claims, and patient communication",
      results: [
        "Reduced administrative workload by 50%",
        "Increased patient appointment capacity by 35%",
        "Accelerated payment collection by 60%"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "RingVisit transformed our revenue cycle management. We've reduced claim denials by 78% and accelerated cash flow significantly.",
      author: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      organization: "Metro Health System",
      metrics: "500+ bed hospital network"
    },
    {
      quote: "The platform's AI coding accuracy is exceptional. We've eliminated 90% of coding errors and reduced our compliance risks substantially.",
      author: "Michael Rodriguez",
      role: "VP of Revenue Operations",
      organization: "Pacific Medical Group",
      metrics: "150+ provider network"
    },
    {
      quote: "Integration was seamless with our Epic EHR. We were processing claims in production within 72 hours of implementation.",
      author: "Jennifer Park",
      role: "CIO",
      organization: "Summit Healthcare",
      metrics: "30-location health system"
    }
  ];

  const faqs = [
    {
      question: "How quickly can I get started with RingVisit?",
      answer: "Most practices are up and running within 3-5 business days after the initial consultation. Our streamlined onboarding process includes system configuration, EHR integration, staff training, and go-live support. Enterprise implementations typically take 2-4 weeks depending on system complexity and customization requirements. Our dedicated implementation team works closely with your IT and clinical staff to ensure a smooth transition with minimal disruption to operations."
    },
    {
      question: "Is RingVisit HIPAA compliant?",
      answer: "Yes, RingVisit is fully HIPAA compliant with enterprise-grade encryption and security measures. We maintain SOC 2 Type II certification, HITRUST CSF validation, and undergo regular third-party security audits. Our platform implements end-to-end encryption (AES-256), comprehensive access controls, detailed audit logging, and annual security assessments. We sign Business Associate Agreements (BAAs) with all healthcare organizations and maintain compliance with HIPAA, HITECH Act, and state privacy regulations."
    },
    {
      question: "What is the accuracy rate of RingVisit's AI medical coding?",
      answer: "RingVisit's AI-powered medical coding achieves 99.5% accuracy for ICD-10 and CPT code assignment, validated across 10 million+ medical records. Our machine learning models are continuously trained on the latest coding guidelines, clinical documentation, and payer requirements. The system flags uncertain codes for human review and learns from coding corrections to improve over time. This accuracy significantly reduces coding errors, claim denials, and compliance risks compared to manual coding."
    },
    {
      question: "How does RingVisit integrate with existing EHR systems?",
      answer: "RingVisit integrates with most major EHR/EMR systems including Epic, Cerner, Allscripts, athenahealth, eClinicalWorks, and others through native connections, FHIR R4 APIs, and HL7 interfaces. Our API-first architecture supports RESTful and GraphQL interfaces, real-time data synchronization, and bidirectional information exchange. Integration typically takes 1-2 weeks with minimal IT effort. We provide comprehensive integration documentation, technical support, and certified interfaces that maintain data integrity and security throughout the integration process."
    },
    {
      question: "What security measures does RingVisit have?",
      answer: "RingVisit uses zero-trust security with military-grade encryption, continuous authentication, and complete audit trails. All data is encrypted in transit using TLS 1.3 and at rest using AES-256. We implement multi-factor authentication, single sign-on (SSO), role-based access control, and session management. Our platform includes 24/7 security monitoring, automated threat detection, intrusion prevention, and regular penetration testing. We maintain complete audit logs of all system activities for compliance and forensic analysis, with data stored in SOC 2 Type II certified data centers."
    },
    {
      question: "Can RingVisit help reduce claim denials?",
      answer: "Yes, RingVisit significantly reduces claim denials through proactive error detection, automated validation, and predictive analytics. The platform validates claims before submission, checks for coding errors, missing information, and payer-specific requirements. Our AI models predict denial risk and suggest corrections, resulting in a 78% average reduction in denials. The system learns from denial patterns and automatically updates validation rules. This leads to higher first-pass acceptance rates (typically increasing from 70-75% to 90-95%), faster reimbursement, and reduced administrative burden."
    },
    {
      question: "What kind of support and training does RingVisit provide?",
      answer: "RingVisit provides comprehensive onboarding, training, and 24/7 technical support. Our implementation includes system configuration, integration setup, and workflow customization. Training programs cover administrator training, end-user training, and ongoing education. We offer live online sessions, self-paced video tutorials, documentation, and best practices guides. Our 24/7 support team provides technical assistance, troubleshooting, and system optimization. We also offer dedicated account management, regular check-ins, and quarterly business reviews to ensure you maximize value from the platform."
    }
  ];

  return (
    <Layout
      title="RingVisit - AI-Powered Healthcare Revenue Cycle & Communication Platform"
      description="Transform healthcare operations with RingVisit's AI-powered revenue cycle management, medical coding automation, and unified communication platform. Reduce claim denials by 78%, accelerate reimbursement by 85%, and achieve 99.5% coding accuracy."
      keywords="AI healthcare platform, medical coding automation, revenue cycle management, healthcare communication system, claim processing, HIPAA compliant telehealth, FHIR integration, Epic Cerner integration"
      faqs={faqs}
      includeMedicalBusinessSchema={true}
      medicalBusinessData={{
        name: "RingVisit",
        description: "AI-powered healthcare revenue cycle management and communication platform",
        address: {
          streetAddress: "14269 Danielson St, Suite 400",
          addressLocality: "Poway",
          addressRegion: "CA",
          postalCode: "92064",
          addressCountry: "US"
        },
        telephone: "1-800-916-2459",
        email: "support@panvatech.com",
        priceRange: "$$",
        aggregateRating: {
          ratingValue: "4.8",
          reviewCount: "127"
        }
      }}
    >
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-block">
              <span className="text-secondary text-sm font-medium tracking-wider uppercase px-4 py-2 bg-secondary/10 rounded-full">
                AI-Powered Healthcare Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Transform Healthcare Operations<br />
              with AI-Powered Automation
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Reduce claim denials by 78%, accelerate reimbursement by 85%, and achieve 99.5% coding accuracy. 
              RingVisit connects hospitals, payers, and patients in a secure, unified platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/contact">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="group text-base font-semibold px-8 py-6 h-auto"
                >
                  Schedule Demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/partner">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-base font-semibold px-8 py-6 h-auto border-2 border-white text-white hover:bg-white hover:text-primary"
                >
                  Become a Partner
                </Button>
              </Link>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {keyMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Icon className="h-5 w-5 text-secondary mr-2" />
                      <div className="text-3xl md:text-4xl font-bold text-white">
                        {metric.stat}
                      </div>
                    </div>
                    <p className="text-sm text-white/80">{metric.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Detailed */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index} className="border-2">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 mr-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-3xl font-bold text-foreground">
                        {metric.stat}
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">{metric.label}</h3>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
              Comprehensive Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Everything You Need to Transform<br />
              Healthcare Operations
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our AI-powered platform addresses the complete healthcare revenue cycle and communication needs 
              with proven results across thousands of healthcare organizations.
            </p>
          </div>

          <div className="space-y-12">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card key={index} className="border-2 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="p-4 rounded-2xl bg-accent/10">
                          <Icon className="h-8 w-8 text-accent" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">{solution.title}</h3>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                          {solution.description}
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                          {solution.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>
                        <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                          <p className="text-sm font-semibold text-primary">{solution.metrics}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
              Proven Results
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Real-World Impact Across<br />
              Healthcare Organizations
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              See how healthcare organizations are achieving measurable improvements in revenue, 
              efficiency, and patient care with RingVisit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Target className="h-6 w-6 text-accent mr-2" />
                    <h3 className="text-xl font-bold">{useCase.title}</h3>
                  </div>
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Challenge:</p>
                    <p className="text-muted-foreground mb-4">{useCase.challenge}</p>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Solution:</p>
                    <p className="text-muted-foreground">{useCase.solution}</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-semibold text-primary mb-3">Results:</p>
                    <ul className="space-y-2">
                      {useCase.results.map((result, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
              Customer Success
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Trusted by Healthcare Leaders<br />
              Across the Nation
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="h-5 w-5 text-secondary fill-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary">{testimonial.organization}</p>
                    <p className="text-xs text-muted-foreground mt-1">{testimonial.metrics}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
              Implementation
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Get Started in Days,<br />
              Not Months
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our streamlined implementation process gets you up and running quickly with minimal disruption to your operations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We analyze your workflows, identify opportunities, and create a customized implementation plan tailored to your organization's needs."
              },
              {
                step: "02",
                title: "Integration",
                description: "Our team integrates RingVisit with your existing EHR and systems using certified interfaces and APIs, typically completing in 1-2 weeks."
              },
              {
                step: "03",
                title: "Configuration",
                description: "We configure the platform to match your workflows, customize automation rules, and set up user permissions and roles."
              },
              {
                step: "04",
                title: "Training & Go-Live",
                description: "Comprehensive training for your team, followed by phased rollout with 24/7 support to ensure successful adoption and immediate value."
              }
            ].map((item, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-accent mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about RingVisit
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-2 rounded-lg px-6 bg-background hover:border-primary transition-colors duration-200 shadow-sm"
                >
                  <AccordionTrigger className="text-left py-6 font-semibold text-lg hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Ready to Transform<br />
              Your Healthcare Operations?
            </h2>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join 1,000+ healthcare organizations using RingVisit to reduce costs, 
              accelerate revenue, and improve patient care through AI-powered automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="group text-base font-semibold px-8 py-6 h-auto"
                >
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/partner">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-base font-semibold px-8 py-6 h-auto border-2 border-white text-white hover:bg-white hover:text-primary"
                >
                  Become a Partner
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-secondary" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-secondary" />
                <span>SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-secondary" />
                <span>99.9% Uptime SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;