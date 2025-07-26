const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 17, 2024</p>
          </div>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Personal information (name, email address, phone number)</li>
                  <li>Business information (company name, address, type of business)</li>
                  <li>Transaction data and order history</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Optimize delivery routes and group orders efficiently</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information Sharing and Disclosure</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>We may share your information in the following circumstances:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>With vendors and suppliers to facilitate deliveries</li>
                  <li>With service providers who assist in our operations</li>
                  <li>When required by law or to protect rights and safety</li>
                  <li>In connection with a merger, sale, or asset transfer</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request a copy of your data</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                <p>Email: privacy@groupdeliver.com<br />
                Phone: +91 98765 43210</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;