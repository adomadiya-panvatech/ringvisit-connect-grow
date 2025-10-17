import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Clock, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { CONFIG } from "@/lib/config";

const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Valid phone number is required").max(20, "Phone number too long"),
  company: z.string().trim().max(200, "Company name too long").optional(),
  serviceInterest: z.string().trim().min(1, "Service interest is required").max(500, "Service interest must be less than 500 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Split name into first and last
    const nameParts = data.fullName.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    
    // Prepare webhook payload for n8n
    const webhookPayload = {
      formType: "Contact",
      timestamp: new Date().toISOString(),
      source: "RingVisit",
      data: {
        name: data.fullName,
        firstName: firstName,
        lastName: lastName,
        email: data.email,
        phone: data.phone,
        company: data.company || "",
        serviceInterest: data.serviceInterest,
        message: data.message,
        source: "OneTriage Marketing Website"
      }
    };

    // Send to n8n webhook
    try {
      const webhookResponse = await fetch(CONFIG.WEBHOOKS.CONTACT_FORM, {
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
    //   const apiResponse = await fetch(CONFIG.API_ENDPOINTS.CONTACT_SUBMIT, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(submissionData),
    //   });
    //   if (!apiResponse.ok) throw new Error('API submission failed');
    // } catch (error) {
    //   console.error('API Error:', error);
    // }
    
    console.log("Form submission data:", webhookPayload);
    
    toast.success("Thank you! We'll get back to you within 24 hours.", {
      description: "Check your email for confirmation.",
    });
    
    reset();
    setIsSubmitting(false);
  };

  const faqs = [
    {
      question: "How quickly can I get started with RingVisit?",
      answer: "Most practices are up and running within 3-5 business days after the initial consultation."
    },
    {
      question: "Is RingVisit HIPAA compliant?",
      answer: "Yes, RingVisit is fully HIPAA compliant with enterprise-grade encryption and security measures."
    },
    {
      question: "Do you offer training and support?",
      answer: "Absolutely! We provide comprehensive onboarding, training, and 24/7 technical support."
    },
    {
      question: "Can RingVisit integrate with my existing systems?",
      answer: "Yes, RingVisit integrates with most major EHR/EMR systems. Contact us to discuss your specific needs."
    }
  ];

  return (
    <Layout
      title="Contact RingVisit | Get Healthcare Technology Support"
      description="Get in touch with RingVisit for telehealth solutions. Our team is ready to help you transform your practice with modern virtual care technology."
      keywords="contact ringvisit, telehealth support, healthcare technology help, telemedicine consultation"
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">
              Get in Touch
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Have questions? We're here to help you transform your practice with modern telehealth solutions.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="border-2 shadow-lg">
              <CardContent className="p-8">
                <h2 className="mb-2 text-2xl font-bold">Send Us a Message</h2>
                <p className="mb-6 text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="mb-2 block text-sm font-medium">
                      Full Name *
                    </label>
                    <Input
                      id="fullName"
                      {...register("fullName")}
                      placeholder="John Doe"
                      className={errors.fullName ? "border-destructive" : ""}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-destructive">{errors.fullName.message}</p>
                    )}
                  </div>

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

                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium">
                      Company/Organization
                    </label>
                    <Input
                      id="company"
                      {...register("company")}
                      placeholder="Your Company (Optional)"
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceInterest" className="mb-2 block text-sm font-medium">
                      Service Interest *
                    </label>
                    <Input
                      id="serviceInterest"
                      {...register("serviceInterest")}
                      placeholder="e.g., Healthcare IT Solutions, Telemedicine, etc."
                      className={errors.serviceInterest ? "border-destructive" : ""}
                    />
                    {errors.serviceInterest && (
                      <p className="mt-1 text-sm text-destructive">{errors.serviceInterest.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                      Message/Comments *
                    </label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Tell us how we can help you..."
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
                    <p className="mt-1">Your information is protected and will never be shared.</p>
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
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href="tel:1-800-916-2459" className="text-lg text-primary hover:underline">
                          1-800-916-2459
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:support@panvatech.com" className="text-lg text-primary hover:underline">
                          support@panvatech.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-muted-foreground">
                          14269 Danielson St, Suite 400<br />
                          Poway, CA 92064
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index}>
                        <h3 className="mb-2 font-semibold">{faq.question}</h3>
                        <p className="text-sm text-muted-foreground">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
