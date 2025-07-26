const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 17, 2024</p>
          </div>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using GroupDeliver, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Platform Description</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>GroupDeliver is a platform that connects vendors and suppliers for efficient group delivery services. Our service includes:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Order grouping and route optimization</li>
                  <li>Delivery coordination between vendors and suppliers</li>
                  <li>Cost-sharing mechanisms for deliveries</li>
                  <li>Real-time tracking and notifications</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>As a user of our platform, you agree to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account</li>
                  <li>Use the service in compliance with applicable laws</li>
                  <li>Respect other users and suppliers</li>
                  <li>Pay for services as agreed</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Vendor Terms</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>Vendors using our platform agree to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide accurate order information and delivery addresses</li>
                  <li>Be available to receive deliveries at scheduled times</li>
                  <li>Pay delivery fees as calculated by our system</li>
                  <li>Report any issues promptly</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Supplier Terms</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>Suppliers using our platform agree to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Maintain valid licenses and insurance</li>
                  <li>Follow assigned routes and delivery schedules</li>
                  <li>Handle items with care and professionalism</li>
                  <li>Communicate delays or issues promptly</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>GroupDeliver shall not be liable for:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Delays caused by external factors</li>
                  <li>Damage to items during transit (unless due to negligence)</li>
                  <li>Indirect or consequential damages</li>
                  <li>Actions of third-party service providers</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Termination</h2>
              <p className="text-muted-foreground">
                We reserve the right to terminate or suspend accounts that violate these terms or engage in fraudulent activity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Users will be notified of significant changes via email or platform notifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>For questions about these Terms of Service, contact us at:</p>
                <p>Email: legal@groupdeliver.com<br />
                Phone: +91 98765 43210</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;