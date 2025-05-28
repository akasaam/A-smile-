import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-secondary">
      <Navbar />

      <div className="relative bg-teal text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Privacy Policy</h1>
          <p className="max-w-2xl mx-auto text-white/80">How we collect, use, and protect your information</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl shadow-md p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              A-Smiles Dental Clinic ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website or our
              dental clinic located at 734001, Raja Rammohan Roy Rd, Ward 15, Hakim Para, Siliguri, West Bengal 734001.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect information about you in a variety of ways including:</p>
            <ul>
              <li>
                <strong>Personal Data:</strong> Personally identifiable information, such as your name, address, email
                address, telephone number, and demographic information that you voluntarily give to us when you register
                with us or when you choose to participate in various activities related to our services.
              </li>
              <li>
                <strong>Medical Information:</strong> Information about your medical and dental history, current
                medications, allergies, and other health-related information necessary for providing appropriate dental
                care.
              </li>
              <li>
                <strong>Derivative Data:</strong> Information our servers automatically collect when you access our
                website, such as your IP address, browser type, operating system, access times, and the pages you have
                viewed directly before and after accessing the website.
              </li>
              <li>
                <strong>Financial Data:</strong> Financial information, such as data related to your payment method
                (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase our
                services.
              </li>
            </ul>

            <h2>Use of Your Information</h2>
            <p>We may use the information we collect about you for various purposes, including to:</p>
            <ul>
              <li>Provide, maintain, and improve our services to you</li>
              <li>Process transactions and send related information including confirmations and invoices</li>
              <li>
                Send administrative information, such as appointment reminders and changes to our terms, conditions, and
                policies
              </li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about products, services, offers, and promotions</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>

            <h2>Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information may be
              disclosed as follows:
            </p>
            <ul>
              <li>
                <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is
                necessary to respond to legal process, to investigate or remedy potential violations of our policies, or
                to protect the rights, property, and safety of others, we may share your information as permitted or
                required by any applicable law, rule, or regulation.
              </li>
              <li>
                <strong>Third-Party Service Providers:</strong> We may share your information with third parties that
                perform services for us or on our behalf, including payment processing, data analysis, email delivery,
                hosting services, customer service, and marketing assistance.
              </li>
              <li>
                <strong>Marketing Communications:</strong> With your consent, or with an opportunity for you to withdraw
                consent, we may share your information with third parties for marketing purposes.
              </li>
              <li>
                <strong>Business Transfers:</strong> We may share or transfer your information in connection with, or
                during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a
                portion of our business to another company.
              </li>
            </ul>

            <h2>Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal
              information.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
