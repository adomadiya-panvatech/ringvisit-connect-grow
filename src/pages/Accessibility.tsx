import Layout from "@/components/Layout";

const Accessibility = () => {
  return (
    <Layout
      title="Accessibility Statement | RingVisit"
      description="RingVisit's commitment to accessibility and inclusive design. Learn about our WCAG compliance and accessibility features."
      keywords="accessibility statement, WCAG compliance, website accessibility, inclusive design"
    >
      <article className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold">Accessibility & Information Notice</h1>
          
          <div className="mb-8 rounded-lg bg-muted/50 p-6">
            <p className="text-sm text-muted-foreground">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Our Commitment to Accessibility</h2>
              <p className="text-muted-foreground">
                RingVisit is committed to ensuring digital accessibility for people with disabilities. We are continually 
                improving the user experience for everyone and applying the relevant accessibility standards to ensure we 
                provide equal access to all of our users.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Conformance Status</h2>
              <p className="mb-4 text-muted-foreground">
                We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These 
                guidelines explain how to make web content more accessible for people with disabilities and user-friendly 
                for everyone.
              </p>
              <p className="text-muted-foreground">
                Our website and telehealth platform are designed to be compatible with assistive technologies such as 
                screen readers, screen magnifiers, and voice recognition software.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Accessibility Features</h2>
              <p className="mb-4 text-muted-foreground">
                Our website includes the following accessibility features:
              </p>

              <h3 className="mb-3 text-xl font-semibold">Keyboard Navigation</h3>
              <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>All interactive elements can be accessed using keyboard controls</li>
                <li>Tab order follows a logical sequence</li>
                <li>Focus indicators are clearly visible</li>
                <li>Keyboard shortcuts do not interfere with assistive technology</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold">Screen Reader Compatibility</h3>
              <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Semantic HTML markup for proper content structure</li>
                <li>ARIA labels and landmarks for navigation</li>
                <li>Descriptive alternative text for images</li>
                <li>Properly labeled form fields and buttons</li>
                <li>Skip navigation links to bypass repetitive content</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold">Visual Design</h3>
              <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Sufficient color contrast ratios (WCAG AA compliant)</li>
                <li>Information not conveyed by color alone</li>
                <li>Resizable text up to 200% without loss of functionality</li>
                <li>Clear and consistent navigation</li>
                <li>Readable fonts and appropriate text spacing</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold">Content Accessibility</h3>
              <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Clear and simple language</li>
                <li>Consistent page layout and navigation</li>
                <li>Descriptive page titles and headings</li>
                <li>Captions and transcripts for video content</li>
                <li>Accessible PDF documents when applicable</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold">Forms and Interactive Elements</h3>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Clear instructions and labels for form fields</li>
                <li>Error messages that are descriptive and helpful</li>
                <li>Sufficient time to complete forms</li>
                <li>Ability to review and correct information before submission</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Information Collection Notice</h2>
              <p className="mb-4 text-muted-foreground">
                This website collects information from visitors for the following purposes:
              </p>

              <h3 className="mb-3 text-xl font-semibold">What Information We Collect</h3>
              <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
                <li><strong>Contact Form Submissions:</strong> Name, email, phone number, company, and message content</li>
                <li><strong>Partnership Applications:</strong> Company information, contact details, and business interests</li>
                <li><strong>Website Analytics:</strong> Anonymized usage data, page views, and navigation patterns</li>
                <li><strong>Cookies:</strong> Session cookies for functionality and analytics cookies for site improvement</li>
                <li><strong>Technical Information:</strong> Browser type, device information, and IP address</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold">Purpose of Data Collection</h3>
              <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Responding to inquiries and providing requested information</li>
                <li>Processing partnership and demo requests</li>
                <li>Improving website functionality and user experience</li>
                <li>Analyzing website traffic and usage patterns</li>
                <li>Complying with legal and regulatory requirements</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold">How Data is Protected</h3>
              <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Industry-standard encryption for data transmission (HTTPS/SSL)</li>
                <li>Secure servers with access controls and authentication</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Employee training on data protection practices</li>
                <li>Compliance with applicable data protection regulations</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold">Your Data Rights</h3>
              <p className="mb-4 text-muted-foreground">
                You have the right to:
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
              </ul>

              <p className="text-muted-foreground">
                For more detailed information about our data practices, please see our{" "}
                <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Known Limitations</h2>
              <p className="mb-4 text-muted-foreground">
                While we strive for full accessibility, we acknowledge the following limitations:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Some third-party embedded content may not be fully accessible</li>
                <li>Certain legacy documents may not meet current accessibility standards</li>
                <li>Complex interactive features may have varying levels of support across assistive technologies</li>
              </ul>
              <p className="text-muted-foreground">
                We are actively working to address these limitations and improve accessibility across all aspects 
                of our digital presence.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Assistive Technology Compatibility</h2>
              <p className="mb-4 text-muted-foreground">
                Our website is designed to be compatible with the following assistive technologies:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
                <li>Screen magnification software (ZoomText, MAGic)</li>
                <li>Speech recognition software (Dragon NaturallySpeaking)</li>
                <li>Alternative input devices (keyboard-only, switch devices)</li>
                <li>Browser accessibility features and extensions</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Ongoing Efforts</h2>
              <p className="mb-4 text-muted-foreground">
                We are committed to continuous improvement of our accessibility practices:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Regular accessibility audits and testing</li>
                <li>User testing with people with disabilities</li>
                <li>Staff training on accessibility best practices</li>
                <li>Incorporating accessibility into our development process</li>
                <li>Staying current with evolving accessibility standards and guidelines</li>
                <li>Soliciting and acting on feedback from users with disabilities</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Third-Party Content</h2>
              <p className="text-muted-foreground">
                Some content on our website may be provided by third-party services (embedded videos, maps, social media). 
                While we strive to ensure these are accessible, we may have limited control over their accessibility 
                features. We encourage third-party providers to maintain accessible content and will work with them 
                to address any accessibility concerns.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Feedback and Contact Information</h2>
              <p className="mb-4 text-muted-foreground">
                We welcome feedback on the accessibility of our website. If you encounter any accessibility barriers 
                or have suggestions for improvement, please contact us:
              </p>
              <div className="rounded-lg bg-muted/50 p-6">
                <p className="mb-4">
                  <strong>Accessibility Coordinator</strong>
                </p>
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
                <p className="mb-4">
                  <strong>Address:</strong><br />
                  RingVisit Accessibility Team<br />
                  14269 Danielson St, Suite 400<br />
                  Poway, CA 92064
                </p>
                <p className="text-sm">
                  We aim to respond to accessibility feedback within 3 business days and will work with you to 
                  provide the information, item, or transaction you are seeking through an alternative method if possible.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Formal Complaints</h2>
              <p className="text-muted-foreground">
                If you wish to report a complaint regarding the accessibility of this website, or if you are not 
                satisfied with our response to your accessibility concern, you may contact the U.S. Department of 
                Health and Human Services Office for Civil Rights or file a complaint with your local jurisdiction's 
                accessibility compliance authority.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Alternative Formats</h2>
              <p className="text-muted-foreground">
                If you require information from this website in an alternative format (such as large print, braille, 
                audio, or other accessible formats), please contact us using the information provided above. We will 
                make reasonable efforts to provide the information in your requested format within a reasonable timeframe.
              </p>
            </section>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Accessibility;
