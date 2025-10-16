import Layout from "@/components/Layout";

const Terms = () => {
  return (
    <Layout
      title="Terms and Conditions | RingVisit"
      description="Read RingVisit's terms and conditions for using our telehealth platform and services. Understand your rights and responsibilities."
      keywords="terms and conditions, terms of service, user agreement, legal terms"
    >
      <article className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold">Terms and Conditions</h1>
          
          <div className="mb-8 rounded-lg bg-muted/50 p-6">
            <p className="text-sm text-muted-foreground">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                Welcome to RingVisit. By accessing or using our website and services, you agree to be bound by these 
                Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our services. 
                We reserve the right to modify these Terms at any time, and your continued use of our services 
                constitutes acceptance of any changes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">2. Description of Services</h2>
              <p className="mb-4 text-muted-foreground">
                RingVisit provides a telehealth platform that enables healthcare providers to conduct secure video 
                consultations with patients. Our services include:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>HIPAA-compliant video consultation software</li>
                <li>Patient scheduling and management tools</li>
                <li>Secure data storage and transmission</li>
                <li>Technical support and training</li>
                <li>Integration capabilities with existing healthcare systems</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">3. User Obligations and Responsibilities</h2>
              <p className="mb-4 text-muted-foreground">
                As a user of RingVisit services, you agree to:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain the security and confidentiality of your account credentials</li>
                <li>Comply with all applicable federal, state, and local laws and regulations</li>
                <li>Use the services only for lawful healthcare purposes</li>
                <li>Not attempt to gain unauthorized access to our systems or networks</li>
                <li>Not transmit any malicious code, viruses, or harmful content</li>
                <li>Not use the services in any manner that could damage, disable, or impair our infrastructure</li>
                <li>Maintain appropriate professional licenses and credentials required for telehealth practice</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">4. Healthcare Provider Responsibilities</h2>
              <p className="mb-4 text-muted-foreground">
                Healthcare providers using RingVisit must:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Hold valid and current licenses to practice in applicable jurisdictions</li>
                <li>Comply with all applicable healthcare regulations and standards of care</li>
                <li>Obtain appropriate informed consent from patients</li>
                <li>Determine the appropriateness of telehealth for each patient encounter</li>
                <li>Maintain professional liability insurance</li>
                <li>Follow established protocols for medical emergencies</li>
                <li>Comply with HIPAA and other privacy regulations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">5. Intellectual Property Rights</h2>
              <p className="mb-4 text-muted-foreground">
                All content, features, and functionality of RingVisit, including but not limited to:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Software code and applications</li>
                <li>Text, graphics, logos, and images</li>
                <li>Audio and video content</li>
                <li>Design, layout, and user interface</li>
                <li>Trademarks and service marks</li>
              </ul>
              <p className="text-muted-foreground">
                are owned by RingVisit or our licensors and are protected by United States and international copyright, 
                trademark, patent, trade secret, and other intellectual property laws. You may not copy, modify, 
                distribute, sell, or lease any part of our services without express written permission.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">6. User Content and Data</h2>
              <p className="mb-4 text-muted-foreground">
                You retain all rights to any content you submit, upload, or transmit through our services ("User Content"). 
                However, by submitting User Content, you grant RingVisit a limited license to:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Store and process your data to provide services</li>
                <li>Create anonymized, aggregated data for analytics and improvement</li>
                <li>Backup and restore your data as part of our services</li>
              </ul>
              <p className="text-muted-foreground">
                You are solely responsible for the accuracy, quality, and legality of your User Content. You represent 
                and warrant that you have all necessary rights to submit User Content and that it does not violate 
                any laws or third-party rights.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">7. Payment Terms</h2>
              <p className="mb-4 text-muted-foreground">
                If you purchase services from RingVisit:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>You agree to pay all fees as specified in your service agreement</li>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>We reserve the right to change pricing with 30 days' notice</li>
                <li>Late payments may result in service suspension or termination</li>
                <li>You are responsible for all applicable taxes</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">8. Service Availability and Support</h2>
              <p className="mb-4 text-muted-foreground">
                While we strive to provide uninterrupted service:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>We do not guarantee 100% uptime or availability</li>
                <li>Scheduled maintenance may occur with advance notice</li>
                <li>Emergency maintenance may occur without notice</li>
                <li>Support is available during business hours as specified in your service agreement</li>
                <li>Response times may vary based on issue severity and service tier</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">9. Limitation of Liability</h2>
              <p className="mb-4 text-muted-foreground">
                To the maximum extent permitted by law:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>RingVisit shall not be liable for any indirect, incidental, special, or consequential damages</li>
                <li>Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim</li>
                <li>We are not liable for any loss of data, profits, revenue, or business opportunities</li>
                <li>We are not liable for issues arising from third-party services or integrations</li>
                <li>We are not liable for acts or omissions of healthcare providers using our platform</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">10. Disclaimer of Warranties</h2>
              <p className="mb-4 text-muted-foreground">
                RingVisit services are provided "as is" and "as available" without warranties of any kind, either 
                express or implied, including but not limited to:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Warranties of merchantability or fitness for a particular purpose</li>
                <li>Warranties of non-infringement</li>
                <li>Warranties regarding accuracy, reliability, or completeness of content</li>
                <li>Warranties that the service will be error-free or uninterrupted</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                RingVisit is a technology platform and does not provide medical advice, diagnosis, or treatment. 
                Healthcare providers are solely responsible for all clinical decisions and patient care.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">11. Indemnification</h2>
              <p className="text-muted-foreground">
                You agree to indemnify, defend, and hold harmless RingVisit, its affiliates, officers, directors, 
                employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable 
                attorneys' fees) arising from:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Your use of our services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Your User Content</li>
                <li>Your provision of healthcare services to patients</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">12. Termination</h2>
              <p className="mb-4 text-muted-foreground">
                We reserve the right to terminate or suspend your access to our services:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>For any violation of these Terms</li>
                <li>For non-payment of fees</li>
                <li>For fraudulent or illegal activity</li>
                <li>At our discretion with or without cause</li>
              </ul>
              <p className="text-muted-foreground">
                Upon termination, your right to use the services will immediately cease. We will provide reasonable 
                access to export your data within 30 days of termination.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">13. Governing Law and Dispute Resolution</h2>
              <p className="mb-4 text-muted-foreground">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, 
                without regard to its conflict of law provisions.
              </p>
              <p className="text-muted-foreground">
                Any disputes arising from these Terms or your use of our services shall be resolved through binding 
                arbitration in San Diego County, California, except that either party may seek injunctive relief in 
                any court of competent jurisdiction.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">14. Severability</h2>
              <p className="text-muted-foreground">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited 
                or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force 
                and effect.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">15. Entire Agreement</h2>
              <p className="text-muted-foreground">
                These Terms constitute the entire agreement between you and RingVisit regarding the use of our services, 
                superseding any prior agreements or understandings, whether written or oral.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">16. Contact Information</h2>
              <p className="mb-4 text-muted-foreground">
                For questions about these Terms, please contact us:
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
                  RingVisit Legal Department<br />
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

export default Terms;
