import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout
      title="Privacy Policy | RingVisit"
      description="Learn how RingVisit protects your privacy and handles your personal information. Our commitment to data security and HIPAA compliance."
      keywords="privacy policy, data protection, HIPAA compliance, healthcare privacy"
    >
      <article className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>
          
          <div className="mb-8 rounded-lg bg-muted/50 p-6">
            <p className="text-sm text-muted-foreground">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
              <p className="text-muted-foreground">
                RingVisit ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
                how we collect, use, disclose, and safeguard your information when you visit our website or use our 
                telehealth services. Please read this privacy policy carefully. If you do not agree with the terms of 
                this privacy policy, please do not access the site or use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Information We Collect</h2>
              
              <h3 className="mb-3 text-xl font-semibold">Personal Information</h3>
              <p className="mb-4 text-muted-foreground">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Fill out contact forms or request information</li>
                <li>Register for an account or demo</li>
                <li>Subscribe to our newsletter or communications</li>
                <li>Apply for partnership programs</li>
                <li>Contact us for support</li>
              </ul>
              
              <p className="mb-4 text-muted-foreground">
                This information may include:
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Company or organization name</li>
                <li>Professional credentials and license information</li>
                <li>Payment and billing information</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold">Automatically Collected Information</h3>
              <p className="mb-4 text-muted-foreground">
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Clickstream data</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">How We Use Your Information</h2>
              <p className="mb-4 text-muted-foreground">
                We use the information we collect to:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Provide, operate, and maintain our services</li>
                <li>Process your requests and respond to inquiries</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Communicate with you about products, services, and promotional offers</li>
                <li>Improve our website and services</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
                <li>Comply with legal obligations and enforce our terms</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Data Storage and Security</h2>
              <p className="mb-4 text-muted-foreground">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Access controls and authentication protocols</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we 
                strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Third-Party Sharing</h2>
              <p className="mb-4 text-muted-foreground">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf</li>
                <li><strong>Business Partners:</strong> With your consent, for co-marketing or partnership purposes</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">HIPAA Compliance</h2>
              <p className="text-muted-foreground">
                RingVisit's telehealth platform is designed to comply with the Health Insurance Portability and 
                Accountability Act (HIPAA). For healthcare providers using our services, we act as a Business Associate 
                and execute appropriate Business Associate Agreements (BAAs). Protected Health Information (PHI) is 
                handled in accordance with HIPAA Privacy and Security Rules, including encryption, access controls, 
                and audit logging.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Cookies and Tracking Technologies</h2>
              <p className="mb-4 text-muted-foreground">
                We use cookies and similar tracking technologies to enhance your experience on our website. These may include:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Marketing Cookies:</strong> Track visitor activity to deliver relevant advertising</li>
              </ul>
              <p className="text-muted-foreground">
                You can control cookies through your browser settings. However, disabling cookies may limit your 
                ability to use certain features of our website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Your Privacy Rights</h2>
              <p className="mb-4 text-muted-foreground">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Object:</strong> Object to processing of your information</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                To exercise these rights, please contact us at{" "}
                <a href="mailto:support@panvatech.com" className="text-primary hover:underline">
                  support@panvatech.com
                </a>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
                information from children. If you become aware that a child has provided us with personal information, 
                please contact us immediately.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this 
                Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer 
                need your information, we will securely delete or anonymize it.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">International Data Transfers</h2>
              <p className="text-muted-foreground">
                Your information may be transferred to and processed in countries other than your country of residence. 
                These countries may have data protection laws different from your jurisdiction. We ensure appropriate 
                safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                We will notify you of any material changes by posting the new Privacy Policy on this page and updating the 
                "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the 
                updated policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
              <p className="mb-4 text-muted-foreground">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="rounded-lg bg-muted/50 p-6">
                <p className="mb-2">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@panvatech.com" className="text-primary hover:underline">
                    support@panvatech.com
                  </a>
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong>{" "}
                  <a href="tel:1-800-916-2459" className="text-primary hover:underline">
                    1-800-916-2459
                  </a>
                </p>
                <p>
                  <strong>Address:</strong><br />
                  RingVisit / Panvatech<br />
                  14269 Danielson St, Suite 400<br />
                  Poway, CA 92064
                </p>
              </div>
            </section>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Privacy;
