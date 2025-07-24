"use client";

import { motion } from "framer-motion";

export default function Privacy() {
    return (
        <div className="bg-[#fdfaf5] min-h-screen py-12 px-6 sm:px-12 md:px-24 font-sans text-[#2e2e2e]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl font-serif font-bold mb-8 text-[#1e1e1e] tracking-wide">
                    Privacy Policy
                </h1>
                <p className="text-lg leading-relaxed mb-6">
                    Welcome to <span className="italic font-semibold">VibeOnTop</span>.
                    We respect your privacy and are committed to protecting your personal
                    information. This Privacy Policy explains how we collect, use,
                    disclose, and safeguard your information when you visit our e-commerce
                    platform <span className="underline">www.vibeontop.com</span> whether
                    as a wholesale business or a retail customer.
                </p>

                {/* Sections */}
                {sections.map((section, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="mb-10"
                    >
                        <h2 className="text-2xl font-serif font-semibold text-[#1e1e1e] mb-2 tracking-wide">
                            {section.title}
                        </h2>
                        <p className="text-base leading-loose whitespace-pre-line">
                            {section.content}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

const sections = [
    {
        title: "1. Information We Collect",
        content: `Account Information: Name, email address, password, phone number

Contact Information: Shipping and billing addresses

Payment Details: Processed securely via third-party payment providers (e.g., Stripe, PayPal)

Communication Data: Messages or inquiries you send to us

Business (Wholesale) User Data:
- Business name, registration number, tax ID (if applicable)
- Business address and contact information
- Purchase history, pricing tiers, and bulk order preferences

Customer (Retail) User Data:
- Purchase history and product preferences
- Wishlist and saved items
- Marketing preferences

Automatically Collected Data:
- IP address, browser type, device information
- Cookies and usage data (e.g., pages visited, actions taken)`
    },
    {
        title: "2. How We Use Your Information",
        content: `- Create and manage your account
- Facilitate transactions and deliver orders
- Provide customer support and respond to inquiries
- Customize user experience based on role
- Send role-based marketing and promotions
- Detect and prevent fraudulent transactions or activities
- Comply with legal obligations`
    },
    {
        title: "3. Role-Based Access & Use",
        content: `We separate access and experiences on our platform based on your account type:

- Wholesale Accounts have access to bulk pricing, minimum order quantities, and B2B tools.
- Retail Accounts access standard product listings, customer-focused support, and offers.

Your information is used within the scope of your assigned role and is not shared between roles without your explicit consent.`
    },
    {
        title: "4. How We Share Your Information",
        content: `We may share your data with:

- Service Providers: For payment processing, shipping, IT support
- Business Partners: If necessary for completing wholesale transactions
- Legal Authorities: If required to comply with laws, regulations, or legal processes
- In Case of Business Transfer: Your data may be shared or transferred as part of any merger, sale, or acquisition

We do not sell your personal data.`
    },
    {
        title: "5. Your Rights and Choices",
        content: `Depending on your jurisdiction, you may have the right to:

- Access, update, or delete your personal information
- Object to or restrict certain data processing activities
- Withdraw consent at any time
- Opt-out of marketing communications

You can manage your preferences via your account settings or by contacting us.`
    },
    {
        title: "6. Data Security",
        content: `We implement industry-standard security measures including:

- Secure Socket Layer (SSL) encryption
- Role-based data access controls
- Secure password hashing
- Regular audits and monitoring`
    },
    {
        title: "7. Data Retention",
        content: `We retain your data only as long as necessary to fulfill the purposes stated in this policy or as required by law.`
    },
    {
        title: "8. Cookies and Tracking Technologies",
        content: `We use cookies to:

- Remember login sessions
- Analyze site traffic and usage
- Personalize content

You can control cookies via your browser settings. However, disabling them may limit certain functionality.`
    },
    {
        title: "9. Childrens Privacy",
        content: `Our services are not intended for individuals under the age of 18. We do not knowingly collect personal data from children.`
    },
    {
        title: "10. International Data Transfers",
        content: `If you are located outside of [Insert Hosting Country], your data may be transferred to and processed in our servers located in [Insert Country]. By using our platform, you consent to such transfers.`
    },
    {
        title: "11. Changes to This Privacy Policy",
        content: `We may update this policy periodically. Changes will be posted on this page with a new effective date. Continued use of the platform after updates constitutes acceptance.`
    }
];
