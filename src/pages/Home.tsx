import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-telehealth.jpg";
import doctorImage from "@/assets/doctor-professional.jpg";
import teamImage from "@/assets/team-collaboration.jpg";
import patientImage from "@/assets/patient-consultation.jpg";
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
  Wallet
} from "lucide-react";

const Home = () => {
  const ringFeatures = [
    {
      icon: Building2,
      title: "Hospital Systems",
      description: "Seamless integration with EHR and hospital infrastructure",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Wallet,
      title: "Payers",
      description: "Real-time claims processing and authorization",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Patients",
      description: "Intuitive access to care and health information",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const aiFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Intelligent data analysis and predictive healthcare recommendations",
      image: doctorImage
    },
    {
      icon: Shield,
      title: "Zero-Trust Security",
      description: "Military-grade encryption with continuous authentication across the communication ring",
      image: patientImage
    },
    {
      icon: RefreshCw,
      title: "Real-Time Synchronization",
      description: "Instant data flow between all stakeholders with complete audit trails",
      image: teamImage
    },
    {
      icon: Network,
      title: "Unified Network",
      description: "One platform connecting hospitals, payers, and patients in a secure ecosystem",
      image: heroImage
    }
  ];

  const benefits = [
    { 
      stat: "95%", 
      label: "Reduction in claim processing time",
      icon: Zap
    },
    { 
      stat: "40%", 
      label: "Decrease in administrative costs",
      icon: CheckCircle
    },
    { 
      stat: "99.9%", 
      label: "Platform uptime & reliability",
      icon: Shield
    },
    { 
      stat: "100%", 
      label: "HIPAA & SOC 2 compliant",
      icon: Lock
    }
  ];

  return (
    <Layout
      title="RingVisit - AI-Powered Secure Healthcare Communication Platform"
      description="Connect hospital systems, payers, and patients in one secure AI-powered communication ring. Transform healthcare delivery with real-time data synchronization and zero-trust security."
      keywords="AI healthcare platform, hospital communication system, secure medical data exchange, telehealth, HIPAA compliant"
    >
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Modern healthcare technology interface"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <div className="mb-6 inline-block animate-fade-in">
              <span className="text-secondary text-sm font-medium tracking-wider uppercase">
                AI-Powered Healthcare Communication
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[1.1] animate-slide-up">
              The Art of Secure<br />
              Healthcare Connection
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl leading-relaxed animate-fade-in">
              Creating seamless communication rings between hospital systems, payers, and patients. 
              Where AI intelligence meets zero-trust security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
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
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Icon className="h-6 w-6 text-secondary mr-2" />
                    <div className="text-4xl md:text-5xl font-bold text-white">
                      {benefit.stat}
                    </div>
                  </div>
                  <p className="text-sm text-white/80">{benefit.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Ring Concept */}
      <section className="py-32 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-20">
            <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
              The RingVisit Ecosystem
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              One Secure Ring.<br />
              Three Connected Worlds.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our AI-powered platform creates an unbreakable communication ring, 
              seamlessly connecting hospital systems, payers, and patients in real-time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ringFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="group border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Features - Alternating Layout */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {aiFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index} 
                  className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
                >
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="inline-flex p-4 rounded-2xl bg-accent/10">
                      <Icon className="h-10 w-10 text-accent" />
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    <Link to="/contact">
                      <Button variant="outline" size="lg" className="group mt-4">
                        Learn More
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                  <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-accent rounded-3xl opacity-20 blur-3xl" />
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="relative rounded-3xl shadow-xl w-full"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-32 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-secondary text-sm font-medium tracking-wider uppercase mb-4 block">
              Seamless Integration
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Built for Healthcare.<br />
              Designed for Tomorrow.
            </h2>
            <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto">
              Enterprise-grade infrastructure that integrates with existing systems while 
              preparing you for the future of healthcare communication.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <CheckCircle className="h-8 w-8 text-secondary mb-4" />
                <h4 className="text-xl font-bold mb-2">Epic & Cerner Ready</h4>
                <p className="text-white/70">Direct integration with major EHR systems</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <CheckCircle className="h-8 w-8 text-secondary mb-4" />
                <h4 className="text-xl font-bold mb-2">FHIR Compliant</h4>
                <p className="text-white/70">Modern healthcare data standards</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <CheckCircle className="h-8 w-8 text-secondary mb-4" />
                <h4 className="text-xl font-bold mb-2">API-First Architecture</h4>
                <p className="text-white/70">Flexible integration capabilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Transform Your<br />
              Healthcare Ecosystem
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Join leading healthcare organizations building the future of secure, 
              AI-powered patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="group text-base font-semibold px-8 py-6 h-auto bg-primary hover:bg-primary-light"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/partner">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-base font-semibold px-8 py-6 h-auto border-2"
                >
                  View Partnerships
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-accent" />
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
