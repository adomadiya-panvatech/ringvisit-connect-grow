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
import { CONFIG } from "@/lib/config";

const partnerSchema = z.object({
  organizationName: z.string().trim().min(1, "Organization name is required").max(200),
  yourName: z.string().trim().min(1, "Your name is required").max(100),
  titleRole: z.string().trim().min(1, "Title/Role is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Valid phone number is required").max(20),
  organizationType: z.string().min(1, "Please select an organization type"),
  potentialUsers: z.string().min(1, "Please select potential users range"),
  partnershipInterest: z.string().trim().min(10, "Partnership interest must be at least 10 characters").max(1000),
});

type PartnerFormData = z.infer<typeof partnerSchema>;

const Partner = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<PartnerFormData>({
    resolver: zodResolver(partnerSchema),
  });

  const onSubmit = async (data: PartnerFormData) => {
    setIsSubmitting(true);
    
    // Split name into first and last
    const nameParts = data.yourName.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    
    // Prepare webhook payload for n8n
    const webhookPayload = {
      formType: "Partner",
      timestamp: new Date().toISOString(),
      source: "RingVisit",
      data: {
        name: data.yourName,
        firstName: firstName,
        lastName: lastName,
        email: data.email,
        phone: data.phone,
        company: data.organizationName,
        titleRole: data.titleRole,
        organizationType: data.organizationType,
        potentialUsers: data.potentialUsers,
        partnershipInterest: data.partnershipInterest,
        source: "OneTriage Marketing Website"
      }
    };

    // Send to n8n webhook
    try {
      const webhookResponse = await fetch(CONFIG.WEBHOOKS.PARTNER_FORM, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(webhookPayload),
      });
      console.log("Webhook response:", webhookResponse.status);
    } catch (error) {
      console.error('Webhook error (non-blocking):', error);
    }

    // API endpoint call commented out
    // try {
    //   const apiResponse = await fetch(CONFIG.API_ENDPOINTS.PARTNER_SUBMIT, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(submissionData),
    //   });
    //   if (!apiResponse.ok) throw new Error('API submission failed');
    // } catch (error) {
    //   console.error('API Error:', error);
    // }
    
    console.log("Partner inquiry data:", webhookPayload);
    
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
              <h2 className="mb-4 text-3xl font-bold">Become a Partner</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and our partnerships team will reach out
              </p>
            </div>

            <Card className="border-2 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="organizationName" className="mb-2 block text-sm font-medium">
                      Organization Name *
                    </label>
                    <Input
                      id="organizationName"
                      {...register("organizationName")}
                      placeholder="Your Organization"
                      className={errors.organizationName ? "border-destructive" : ""}
                    />
                    {errors.organizationName && (
                      <p className="mt-1 text-sm text-destructive">{errors.organizationName.message}</p>
                    )}
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="yourName" className="mb-2 block text-sm font-medium">
                        Your Name *
                      </label>
                      <Input
                        id="yourName"
                        {...register("yourName")}
                        placeholder="John Doe"
                        className={errors.yourName ? "border-destructive" : ""}
                      />
                      {errors.yourName && (
                        <p className="mt-1 text-sm text-destructive">{errors.yourName.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="titleRole" className="mb-2 block text-sm font-medium">
                        Title/Role *
                      </label>
                      <Input
                        id="titleRole"
                        {...register("titleRole")}
                        placeholder="Chief Medical Officer"
                        className={errors.titleRole ? "border-destructive" : ""}
                      />
                      {errors.titleRole && (
                        <p className="mt-1 text-sm text-destructive">{errors.titleRole.message}</p>
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
                        placeholder="john@example.com"
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

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="organizationType" className="mb-2 block text-sm font-medium">
                        Organization Type *
                      </label>
                      <Select onValueChange={(value) => setValue("organizationType", value)}>
                        <SelectTrigger className={errors.organizationType ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent className="bg-background z-50">
                          <SelectItem value="hospital">Hospital</SelectItem>
                          <SelectItem value="clinic">Clinic</SelectItem>
                          <SelectItem value="private_practice">Private Practice</SelectItem>
                          <SelectItem value="urgent_care">Urgent Care</SelectItem>
                          <SelectItem value="health_system">Health System</SelectItem>
                          <SelectItem value="reseller">Technology Reseller</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.organizationType && (
                        <p className="mt-1 text-sm text-destructive">{errors.organizationType.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="potentialUsers" className="mb-2 block text-sm font-medium">
                        Potential Users *
                      </label>
                      <Select onValueChange={(value) => setValue("potentialUsers", value)}>
                        <SelectTrigger className={errors.potentialUsers ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent className="bg-background z-50">
                          <SelectItem value="1-10">1-10 users</SelectItem>
                          <SelectItem value="11-50">11-50 users</SelectItem>
                          <SelectItem value="51-100">51-100 users</SelectItem>
                          <SelectItem value="101-500">101-500 users</SelectItem>
                          <SelectItem value="501+">501+ users</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.potentialUsers && (
                        <p className="mt-1 text-sm text-destructive">{errors.potentialUsers.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="partnershipInterest" className="mb-2 block text-sm font-medium">
                      Partnership Interest *
                    </label>
                    <Textarea
                      id="partnershipInterest"
                      {...register("partnershipInterest")}
                      placeholder="Tell us about your partnership interests..."
                      rows={5}
                      className={errors.partnershipInterest ? "border-destructive" : ""}
                    />
                    {errors.partnershipInterest && (
                      <p className="mt-1 text-sm text-destructive">{errors.partnershipInterest.message}</p>
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
