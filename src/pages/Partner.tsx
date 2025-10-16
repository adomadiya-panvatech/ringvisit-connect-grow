import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Handshake, TrendingUp, Award, Users, Loader2 } from "lucide-react";
import { toast } from "sonner";

const partnerSchema = z.object({
  companyName: z.string().trim().min(1, "Company name is required").max(200),
  contactName: z.string().trim().min(1, "Contact name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Valid phone number is required").max(20),
  website: z.string().trim().url("Invalid URL").max(500).optional().or(z.literal("")),
  partnershipType: z.string().min(1, "Please select a partnership type"),
  expectedVolume: z.string().optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type PartnerFormData = z.infer<typeof partnerSchema>;

const Partner = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<PartnerFormData>({
    resolver: zodResolver(partnerSchema),
  });

  const onSubmit = async (data: PartnerFormData) => {
    setIsSubmitting(true);
    
    const submissionData = {
      submission_id: crypto.randomUUID(),
      website_source: "RingVisit",
      form_type: "partner_inquiry",
      timestamp: new Date().toISOString(),
      user_data: {
        name: data.contactName,
        email: data.email,
        phone: data.phone,
        company: data.companyName,
        message: data.message,
        partnership_type: data.partnershipType,
        website: data.website || "",
        expected_volume: data.expectedVolume || "",
      },
      metadata: {
        user_agent: navigator.userAgent,
        referrer: document.referrer,
      },
    };

    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Partner inquiry data:", submissionData);
    
    toast.success("Thank you for your interest!", {
      description: "Our partnership team will contact you within 2 business days.",
    });
    
    reset();
    setIsSubmitting(false);
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Competitive Commissions",
      description: "Earn attractive commission rates on every referral with transparent payment terms."
    },
    {
      icon: Award,
      title: "Marketing Support",
      description: "Access co-branded materials, sales tools, and dedicated marketing resources."
    },
    {
      icon: Users,
      title: "Partner Success Team",
      description: "Dedicated support team to help you succeed and grow your partnership."
    },
    {
      icon: Handshake,
      title: "Long-term Partnership",
      description: "Build a sustainable business with recurring revenue opportunities."
    }
  ];

  return (
    <Layout
      title="Partner With RingVisit | Reseller & Partnership Opportunities"
      description="Join the RingVisit partner network. Earn competitive commissions while helping healthcare providers deliver better patient care through telehealth technology."
      keywords="healthcare partnership, reseller program, affiliate opportunities, telehealth reseller, healthcare technology partner"
    >
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold text-foreground lg:text-5xl">
            Grow Your Business with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              RingVisit Partnership
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Join our partner network and help healthcare providers transform patient care 
            while building a profitable business.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Partner Benefits</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-2 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
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

      {/* Partnership Types */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Partnership Opportunities</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-bold text-primary">Reseller Partner</h3>
                <p className="mb-6 text-muted-foreground">
                  Sell RingVisit directly to healthcare providers and earn competitive margins 
                  on each sale with ongoing commission on renewals.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 text-accent">✓</span>
                    <span>White-label options available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-accent">✓</span>
                    <span>Technical training included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-accent">✓</span>
                    <span>Sales enablement tools</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-bold text-primary">Affiliate Partner</h3>
                <p className="mb-6 text-muted-foreground">
                  Refer healthcare organizations to RingVisit and earn commission on 
                  successful conversions with minimal overhead.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 text-accent">✓</span>
                    <span>Easy referral tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-accent">✓</span>
                    <span>Marketing materials provided</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-accent">✓</span>
                    <span>No technical support required</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-bold text-primary">Integration Partner</h3>
                <p className="mb-6 text-muted-foreground">
                  Build integrations with RingVisit to enhance your existing healthcare 
                  technology solutions and create mutual value.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 text-accent">✓</span>
                    <span>API access and documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-accent">✓</span>
                    <span>Technical support team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-accent">✓</span>
                    <span>Co-marketing opportunities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Apply for Partnership</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and our partnership team will be in touch shortly.
              </p>
            </div>

            <Card className="border-2 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="companyName" className="mb-2 block text-sm font-medium">
                        Company Name *
                      </label>
                      <Input
                        id="companyName"
                        {...register("companyName")}
                        placeholder="ABC Healthcare Solutions"
                        className={errors.companyName ? "border-destructive" : ""}
                      />
                      {errors.companyName && (
                        <p className="mt-1 text-sm text-destructive">{errors.companyName.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contactName" className="mb-2 block text-sm font-medium">
                        Contact Name *
                      </label>
                      <Input
                        id="contactName"
                        {...register("contactName")}
                        placeholder="John Smith"
                        className={errors.contactName ? "border-destructive" : ""}
                      />
                      {errors.contactName && (
                        <p className="mt-1 text-sm text-destructive">{errors.contactName.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="john@company.com"
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        placeholder="(555) 123-4567"
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="website" className="mb-2 block text-sm font-medium">
                      Company Website
                    </label>
                    <Input
                      id="website"
                      type="url"
                      {...register("website")}
                      placeholder="https://www.yourcompany.com"
                      className={errors.website ? "border-destructive" : ""}
                    />
                    {errors.website && (
                      <p className="mt-1 text-sm text-destructive">{errors.website.message}</p>
                    )}
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="partnershipType" className="mb-2 block text-sm font-medium">
                        Partnership Interest *
                      </label>
                      <Select onValueChange={(value) => setValue("partnershipType", value)}>
                        <SelectTrigger className={errors.partnershipType ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select partnership type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="reseller">Reseller Partner</SelectItem>
                          <SelectItem value="affiliate">Affiliate Partner</SelectItem>
                          <SelectItem value="integration">Integration Partner</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.partnershipType && (
                        <p className="mt-1 text-sm text-destructive">{errors.partnershipType.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="expectedVolume" className="mb-2 block text-sm font-medium">
                        Expected Monthly Volume
                      </label>
                      <Input
                        id="expectedVolume"
                        {...register("expectedVolume")}
                        placeholder="e.g., 10-20 clients"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                      Additional Information *
                    </label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Tell us about your business and why you'd like to partner with RingVisit..."
                      rows={5}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <span className="font-semibold">🔒 Secure & Confidential</span>
                    </p>
                    <p className="mt-1">Your information is protected and will only be used for partnership evaluation.</p>
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partner;
