import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-telehealth.jpg";
import doctorImage from "@/assets/doctor-professional.jpg";
import teamImage from "@/assets/team-collaboration.jpg";
import patientImage from "@/assets/patient-consultation.jpg";
import { 
  Video, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle, 
  TrendingUp,
  Heart,
  Zap
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Video,
      title: "HD Video Consultations",
      description: "Crystal-clear video and audio quality for seamless patient-provider communication.",
      image: patientImage
    },
    {
      icon: Shield,
      title: "HIPAA Compliant Security",
      description: "Enterprise-grade encryption and security measures to protect patient data.",
      image: doctorImage
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Enable round-the-clock patient care with flexible scheduling and instant access.",
      image: teamImage
    },
    {
      icon: Users,
      title: "Easy Patient Onboarding",
      description: "Simple, intuitive interface that patients can use without technical expertise.",
      image: heroImage
    }
  ];

  const benefits = [
    { icon: TrendingUp, title: "Increase Revenue", description: "Expand your practice reach and serve more patients" },
    { icon: Heart, title: "Better Patient Outcomes", description: "Improve care continuity and patient satisfaction" },
    { icon: Zap, title: "Save Time", description: "Reduce no-shows and streamline workflow efficiency" },
    { icon: CheckCircle, title: "Quick Implementation", description: "Get started in days, not months" }
  ];

  const steps = [
    { number: "1", title: "Schedule Demo", description: "Connect with our team to see RingVisit in action" },
    { number: "2", title: "Customize Setup", description: "We tailor the platform to your practice needs" },
    { number: "3", title: "Train Your Team", description: "Comprehensive onboarding and support included" },
    { number: "4", title: "Start Treating", description: "Begin seeing patients virtually within days" }
  ];

  return (
    <Layout
      title="RingVisit - Transform Healthcare with Telehealth Solutions"
      description="Join thousands of healthcare providers using RingVisit's secure, HIPAA-compliant telehealth platform. Improve patient care, increase efficiency, and expand your practice."
      keywords="telehealth software, telemedicine platform, virtual healthcare, HIPAA compliant, patient care technology"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-in space-y-8">
              <h1 className="text-4xl font-bold leading-tight text-foreground lg:text-6xl">
                Transform Healthcare with{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Modern Telehealth
                </span>
              </h1>
              <p className="text-lg text-muted-foreground lg:text-xl">
                Deliver exceptional patient care from anywhere. RingVisit provides secure, 
                HIPAA-compliant virtual consultations that improve outcomes and streamline your practice.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    Request a Demo
                  </Button>
                </Link>
                <Link to="/partner">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Become a Partner
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Easy Setup</span>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src={heroImage} 
                alt="Healthcare professional using RingVisit telehealth platform on tablet in modern medical office"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="border-y border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-lg font-medium text-muted-foreground">
            Trusted by thousands of healthcare providers nationwide
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
              Why Healthcare Providers Choose RingVisit
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Everything you need to deliver world-class virtual care
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-2 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
              Powerful Features for Modern Healthcare
            </h2>
          </div>
          <div className="space-y-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index} 
                  className={`grid items-center gap-12 lg:grid-cols-2 ${!isEven && "lg:grid-flow-dense"}`}
                >
                  <div className={`space-y-4 ${!isEven && "lg:col-start-2"}`}>
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold lg:text-3xl">{feature.title}</h3>
                    <p className="text-lg text-muted-foreground">{feature.description}</p>
                  </div>
                  <div className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <img 
                      src={feature.image} 
                      alt={`${feature.title} - RingVisit telehealth feature`}
                      className="rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
              Get Started in 4 Simple Steps
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              From consultation to treating patients in days, not months
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary text-2xl font-bold text-primary-foreground shadow-lg">
                  {step.number}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-0.5 w-full bg-gradient-to-r from-primary to-transparent lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
            Ready to Transform Your Practice?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            Join thousands of healthcare providers delivering exceptional care with RingVisit. 
            Schedule your personalized demo today.
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="bg-background text-primary hover:bg-background/90">
              Schedule Your Demo Now
            </Button>
          </Link>
          <div className="mt-8 text-sm opacity-80">
            <Shield className="mx-auto mb-2 h-6 w-6" />
            <p>Secure & Confidential | HIPAA Compliant | Enterprise-Grade Security</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
