import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function LegalLayout({ title, date = "Last Updated: September 6, 2026", children }: { title: string; date?: string; children: React.ReactNode }) {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = `${title} | Legal Docs Maker`;
  }, [title]);

  return (
    <div className="min-h-screen bg-[#020818] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-blue-400 hover:text-blue-200 transition-colors mb-8 text-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Back to Home
          </button>
          <div className="glass rounded-3xl p-8 sm:p-12 border border-blue-800/20">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">{title}</h1>
            <p className="text-blue-400/60 text-xs mb-8 pb-8 border-b border-blue-800/20">{date}</p>
            <div className="prose prose-invert prose-sm max-w-none text-blue-200/80 leading-relaxed space-y-6">
              {children}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-xl font-bold text-white mt-10 mb-3">{children}</h2>;
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="font-semibold text-blue-200 mt-6 mb-2">{children}</h3>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="text-blue-200/70 leading-relaxed">{children}</p>;
}
function Li({ children }: { children: React.ReactNode }) {
  return <li className="text-blue-200/70">{children}</li>;
}

export function Disclaimer() {
  return (
    <LegalLayout title="Legal Disclaimer">
      <div className="glass rounded-2xl p-5 border border-yellow-700/20 bg-yellow-900/5 mb-6">
        <P>Legal Docs Maker is a productivity and document-drafting utility. It does not provide legal advice, legal representation, legal opinions or professional legal consultancy.</P>
      </div>
      <P>Documents, templates, formats, laws or text available through the platform are provided for informational and convenience purposes only.</P>
      <P>Users are responsible for verifying the accuracy, applicability and suitability of documents before using or submitting them.</P>
      <P>Users should consult a qualified legal professional where appropriate.</P>
      <H2>Limitation of Liability</H2>
      <P>The platform owner shall not be liable for any loss, damage, or adverse order arising from use, misuse, or reliance on documents generated through this platform.</P>
      <H2>No Attorney-Client Relationship</H2>
      <P>Use of this platform does not create an advocate-client relationship, fiduciary relationship, or any professional obligation between the platform owner and the user.</P>
    </LegalLayout>
  );
}

export function TermsAndConditions() {
  const [agreed, setAgreed] = useState(false);
  const [accepted, setAccepted] = useState(false);

  return (
    <LegalLayout title="TERMS & CONDITIONS">
      <P>These Terms & Conditions ("Terms") govern the use of the mobile application <strong className="text-blue-100">Legal Drafting App / Legal Docs Maker</strong> ("App"), owned, developed, and operated by the App Owner/Developer ("Owner"). By downloading, installing, accessing, or using this App, the user ("User") agrees to be legally bound by these Terms. If the User does not agree, they must immediately uninstall and discontinue use of the App.</P>

      <H2>1. Nature of the App (No Legal Advice Disclaimer)</H2>
      <H3>1.1 Technical Tool Only</H3>
      <P>The App is a technical drafting, document-formatting, and productivity tool only.</P>
      <H3>1.2 No Professional Consultancy</H3>
      <P>The App does not provide legal advice, legal opinions, legal representation, or legal consultancy of any kind.</P>
      <H3>1.3 Reference Purposes Only</H3>
      <P>Any drafts, templates, formats, laws, or text generated, edited, or viewed through the App are for informational and convenience purposes only.</P>
      <H3>1.4 User Responsibility</H3>
      <P>The User is solely responsible for verifying the legal correctness, accuracy, applicability, compliance, and suitability of any document prepared using the App under relevant laws.</P>

      <H2>2. User Responsibility & Professional Use</H2>
      <H3>2.1 Intended Audience</H3>
      <P>The App is designed for use by advocates, law students, clerks, and informed professionals.</P>
      <H3>2.2 No Attorney-Client Relationship</H3>
      <P>Use of the App by any person does not create an advocate–client relationship, fiduciary relationship, or professional obligation between the Owner and the User.</P>
      <H3>2.3 Jurisdiction Variations</H3>
      <P>The User acknowledges that laws vary heavily by jurisdiction and are subject to frequent amendment, varying interpretations, and judicial pronouncements.</P>

      <H2>3. No Liability & Indemnity</H2>
      <H3>3.1 Exclusion of Liability</H3>
      <P>The Owner shall not be liable for any loss, damage, cost, claim, penalty, litigation, or adverse order arising out of:</P>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <Li>Use, misuse, or inability to use the App</Li>
        <Li>Reliance on drafts, templates, or automated calculations</Li>
        <Li>Errors, omissions, bugs, or outdated legal content within the App</Li>
        <Li>Rejection of generated documents by any court, registry, authority, or forum</Li>
      </ul>
      <H3>3.2 Indemnification</H3>
      <P>The User agrees to indemnify, defend, and hold harmless the Owner from and against all claims, disputes, complaints, proceedings, losses, or damages (civil or criminal) arising from the User's violation of these Terms or misuse of the App.</P>

      <H2>4. Data, Storage & Privacy Disclaimer</H2>
      <H3>4.1 Local Storage</H3>
      <P>Drafts and user-entered inputs are stored locally on the User's device unless cloud sync features are explicitly offered and activated.</P>
      <H3>4.2 No Data Backup Guarantee</H3>
      <P>The Owner does not guarantee data backup, data recovery, or protection against device failure, file deletion, system crashes, or data corruption.</P>
      <H3>4.3 Backup Responsibility</H3>
      <P>The User is solely responsible for maintaining external copies, backups, and exports of their drafts and PDFs.</P>

      <H2>5. Intellectual Property Rights</H2>
      <H3>5.1 Ownership</H3>
      <P>The App, its code, design, layout, user interface (UI), branding, logos, and compiled proprietary templates are the exclusive intellectual property of the Owner.</P>
      <H3>5.2 Limited License</H3>
      <P>The User is granted a limited, personal, non-transferable, non-exclusive, revocable license to use the App for personal or professional drafting needs.</P>
      <H3>5.3 Restrictions</H3>
      <P>Copying, reverse engineering, decompiling, reselling, redistributing, or commercially exploiting the App's source templates or framework is strictly prohibited.</P>

      <H2>6. Paid Features, Subscriptions</H2>
      <H3>6.1 Premium Access</H3>
      <P>Certain advanced features, templates, or updates may be locked behind paid subscriptions or one-time in-app purchases.</P>
      <H3>6.2 No Refunds</H3>
      <P>All payments made through Google Play Store, Apple App Store, or direct payment gateways are final. Refunds are only subject to Google Play Store or Apple App Store policies.</P>
      <H3>6.3 Pricing Changes</H3>
      <P>The Owner reserves the right to modify pricing models, subscription structures, or feature availability at any time without prior notice.</P>

      <H2>7. App Availability & Updates</H2>
      <H3>7.1 No Warranty</H3>
      <P>The Owner provides the App on an "As-Is" and "As-Available" basis. No uninterrupted, virus-free, or error-free operation is guaranteed.</P>
      <H3>7.2 Modifications</H3>
      <P>The App may be updated, modified, patched, suspended, or discontinued at any time without prior notice or liability.</P>

      <H2>8. Limitation of Liability</H2>
      <H3>8.1 Indirect Damages</H3>
      <P>Under no circumstances shall the Owner be liable for indirect, incidental, special, consequential, or punitive damages (including loss of profits or legal costs).</P>

      <H2>9. Governing Law & Exclusive Jurisdiction</H2>
      <H3>9.1 Jurisdiction Laws</H3>
      <P>These Terms shall be governed by, construed, and enforced in accordance with the laws of India.</P>
      <H3>9.2 Forum Selection</H3>
      <P>Exclusive jurisdiction for any legal disputes, claims, or arbitration arising from these Terms or App usage shall vest solely in the competent courts at <strong className="text-blue-100">Guna, Madhya Pradesh</strong>, and no other forum.</P>

      <H2>10. Consumer Forum & Legal Action Waiver</H2>
      <H3>10.1 Assumption of Risk</H3>
      <P>The User expressly agrees that use of the App is completely voluntary and at their own independent risk.</P>

      <H2>11. Complete Acceptance</H2>
      <P>By clicking "I Agree", installing, registering, or using the App, the User confirms that they have read, thoroughly understood, and accepted these Terms & Conditions in their entirety.</P>

      <div className="glass rounded-2xl p-5 border border-yellow-700/30 bg-yellow-900/10 mt-8">
        <P><strong className="text-yellow-200">Disclaimer</strong></P>
        <P><strong className="text-blue-100">This App is a productivity utility tool and is not a substitute for professional legal judgment, qualification, or independent legal research.</strong></P>
        <P className="mt-2 text-blue-400/70 text-xs"><strong>App Owner</strong><br /><strong>All Rights Reserved.</strong></P>
      </div>

      <div className="glass rounded-2xl p-5 border border-blue-500/30 mt-8">
        <label className="flex items-start gap-3 cursor-pointer text-blue-100/90">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(event) => {
              setAgreed(event.target.checked);
              setAccepted(false);
            }}
            className="mt-1 h-4 w-4 accent-blue-500"
          />
          <span>
            I have read and agree to the <Link to="/terms" className="text-blue-300 underline underline-offset-2 hover:text-white">Terms & Conditions</Link> and <Link to="/privacy" className="text-blue-300 underline underline-offset-2 hover:text-white">Privacy Policy</Link>.
          </span>
        </label>
        <button
          type="button"
          disabled={!agreed}
          onClick={() => setAccepted(true)}
          className="mt-4 rounded-xl blue-gradient px-5 py-2.5 text-sm font-semibold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
        >
          I Agree
        </button>
        {accepted && <p className="mt-3 text-sm text-green-300">Your agreement has been recorded for this session.</p>}
      </div>
    </LegalLayout>
  );
}

export function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" date="Effective Date: September 7, 2026">
      <P>This Privacy Policy applies to the <strong className="text-blue-100">Legal Docs Maker</strong> mobile application and related services (collectively, the “Application”), operated by <strong className="text-blue-100">Saurabh Pal</strong> (the “Service Provider”).</P>
      <P>This Privacy Policy explains what information may be collected, how it is used, how it is protected, and the choices available to users.</P>

      <H2>1. Information We Collect</H2>
      <P>Depending on how you use the Application, we may collect or process the following information:</P>
      <H3>A. Information You Provide</H3>
      <P>If you create an account, contact us, purchase a PDF, subscribe to a plan, or use other Application features, you may voluntarily provide information such as:</P>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <Li>Name</Li>
        <Li>Email address</Li>
        <Li>Account/login information</Li>
        <Li>Information entered into legal document forms</Li>
        <Li>Information included in documents created by you</Li>
        <Li>Information submitted through the Contact Us form</Li>
        <Li>Purchase or subscription-related information</Li>
      </ul>
      <P>Please do not enter unnecessary sensitive personal information into the Application.</P>
      <H3>B. Payment Information</H3>
      <P>The Application may use third-party payment service providers, such as <strong className="text-blue-100">Razorpay</strong>, to process payments.</P>
      <P>The Service Provider does not intentionally store users' complete card numbers, UPI PINs, passwords, CVV numbers, or other complete payment credentials on its own servers.</P>
      <P>Payment information may be processed directly by the applicable payment service provider according to its own privacy policy and terms.</P>
      <H3>C. Device and Technical Information</H3>
      <P>When you use the Application, certain technical information may be processed automatically, depending on the services and SDKs integrated into the Application. This may include:</P>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <Li>Device type and model</Li>
        <Li>Operating system and version</Li>
        <Li>Application version</Li>
        <Li>IP address</Li>
        <Li>General technical/network information</Li>
        <Li>Crash and diagnostic information</Li>
        <Li>Anonymous usage information</Li>
      </ul>
      <P>This information may be used for security, troubleshooting, analytics, performance improvement, and maintaining the Application.</P>

      <H2>2. Analytics and Tracking</H2>
      <P>The Application may use analytics and measurement services such as <strong className="text-blue-100">Google Analytics</strong> or related Google services to understand how users interact with the Application.</P>
      <P>Analytics information may include information about Application usage, device information, approximate/general location derived from technical information, and other statistical information.</P>
      <P>Analytics is used to:</P>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <Li>Understand Application usage</Li>
        <Li>Improve features and performance</Li>
        <Li>Identify technical problems</Li>
        <Li>Measure Application performance</Li>
        <Li>Improve user experience</Li>
      </ul>
      <P>We do not use analytics information to intentionally identify individual users unless otherwise disclosed and legally permitted.</P>

      <H2>3. Information Entered Into Legal Documents</H2>
      <P>Legal Docs Maker allows users to create legal documents by entering information into document forms.</P>
      <P>Information entered by a user may include names, addresses, dates, financial information, agreement details, or other information necessary to generate the requested document.</P>
      <P>Users are responsible for ensuring that they have the right to enter and use information submitted through the Application.</P>
      <P>The Service Provider does not use the information entered into legal documents for unrelated advertising or profiling purposes.</P>
      <P>Where document information is processed or stored by third-party infrastructure or cloud services used by the Application, such processing is limited to providing the requested Application functionality.</P>

      <H2>4. PDF Generation and Purchases</H2>
      <P>The Application may allow users to generate or download legal documents in PDF format.</P>
      <P>Individual PDF documents may be available for <strong className="text-blue-100">₹10 per PDF</strong>, and the Application may also offer a <strong className="text-blue-100">monthly subscription of ₹350</strong>, which may provide access to eligible PDF generation features during the subscription period.</P>
      <P>Pricing and available features may be changed by the Service Provider from time to time.</P>
      <P>Payment processing may be handled by third-party payment providers.</P>

      <H2>5. Third-Party Services</H2>
      <P>The Application may use third-party services and SDKs to provide, operate, secure, analyze, and improve the Application.</P>
      <P>These services may include, where applicable:</P>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <Li><strong className="text-blue-100">Firebase / Google services</strong></Li>
        <Li><strong className="text-blue-100">Google Analytics</strong></Li>
        <Li><strong className="text-blue-100">Razorpay</strong></Li>
        <Li>Other hosting, infrastructure, analytics, security, or technical service providers</Li>
      </ul>
      <P>Third-party providers may process information according to their own privacy policies and contractual obligations.</P>
      <P>The Service Provider does not sell users' personal or sensitive information.</P>
      <P>Third-party SDKs integrated into the Application may collect or process certain information as required for their functionality. The Service Provider is responsible for reviewing and disclosing applicable third-party data practices.</P>

      <H2>6. How We Use Information</H2>
      <P>Information may be used to:</P>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <Li>Provide and operate the Application</Li>
        <Li>Create and generate requested legal documents</Li>
        <Li>Generate PDFs</Li>
        <Li>Process purchases and subscriptions</Li>
        <Li>Provide customer support</Li>
        <Li>Respond to Contact Us requests</Li>
        <Li>Maintain and improve Application performance</Li>
        <Li>Detect and prevent fraud, abuse, and security incidents</Li>
        <Li>Troubleshoot technical problems</Li>
        <Li>Understand anonymous/aggregated Application usage</Li>
        <Li>Comply with applicable laws and legal obligations</Li>
      </ul>

      <H2>7. Email and Communications</H2>
      <P>If you voluntarily provide your email address or contact us, we may use your email address to:</P>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <Li>Respond to your questions</Li>
        <Li>Provide customer support</Li>
        <Li>Address technical or account-related issues</Li>
        <Li>Respond to requests concerning payments, subscriptions, or purchases</Li>
        <Li>Send important service-related communications</Li>
      </ul>
      <P>Where applicable, users may opt out of non-essential promotional communications.</P>
      <P>For privacy-related questions, contact:</P>
      <P><a href="mailto:anandsahu7862@gmail.com" className="text-blue-300 hover:text-blue-100">anandsahu7862@gmail.com</a></P>

      <H2>8. Data Sharing</H2>
      <P>We may share or provide access to information to third parties only when reasonably necessary for:</P>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <Li>Providing Application functionality</Li>
        <Li>Payment processing</Li>
        <Li>Analytics</Li>
        <Li>Cloud hosting and infrastructure</Li>
        <Li>Security and fraud prevention</Li>
        <Li>Customer support</Li>
        <Li>Legal compliance</Li>
        <Li>Protecting the rights, property, or safety of the Service Provider, users, or others</Li>
      </ul>
      <P>We do <strong className="text-blue-100">not sell personal or sensitive user data</strong>.</P>
      <P>Google Play requires developers to accurately disclose data collected or shared by their own app and by integrated third-party SDKs.</P>

      <H2>9. Data Retention</H2>
      <P>We retain information only for as long as reasonably necessary to provide the Application and its services, fulfill legitimate business purposes, resolve disputes, maintain security, comply with legal obligations, or enforce agreements.</P>
      <P>The retention period may vary depending on the type of information and the purpose for which it was collected.</P>
      <P>When information is no longer required, we may delete, anonymize, or securely dispose of it, subject to applicable legal requirements.</P>

      <H2>10. Data Deletion</H2>
      <P>If you have created an account or voluntarily provided personal information, you may request deletion of your personal information by contacting:</P>
      <P><a href="mailto:anandsahu7862@gmail.com" className="text-blue-300 hover:text-blue-100">anandsahu7862@gmail.com</a></P>
      <P>Please include enough information for us to identify your request.</P>
      <P>Where applicable, we will process valid deletion requests within the timeframe required by applicable law.</P>
      <P>If the Application provides account creation, an appropriate in-app account deletion mechanism should also be provided to satisfy Google Play's account-deletion requirements.</P>
      <P>Some information may need to be retained where required by law, for fraud prevention, security, financial records, dispute resolution, or other legitimate legal purposes.</P>

      <H2>11. Security</H2>
      <P>We use reasonable administrative, technical, and organizational safeguards intended to protect information against unauthorized access, alteration, disclosure, or destruction.</P>
      <P>Where appropriate, information transmitted between the Application and servers may be protected using secure communication technologies such as HTTPS/TLS.</P>
      <P>However, no electronic transmission or storage system can be guaranteed to be completely secure.</P>

      <H2>12. Precise Location Information</H2>
      <P>The Application does <strong className="text-blue-100">not intentionally collect precise real-time GPS location information</strong> from your device unless a future feature specifically requires such access and the relevant disclosure and permissions are provided.</P>

      <H2>13. Camera, Contacts and Other Device Permissions</H2>
      <P>The Application does not intentionally access your contacts, phonebook, camera, microphone, or precise location unless a feature requires such access and the necessary permission is requested.</P>
      <P>If such functionality is introduced in the future, this Privacy Policy and the relevant Application disclosures may be updated accordingly.</P>

      <H2>14. Children's Privacy</H2>
      <P>The Application is not intended for children under <strong className="text-blue-100">18 years of age</strong>, or such higher age as may be required by applicable law.</P>
      <P>We do not knowingly solicit or intentionally collect personal information from children.</P>
      <P>If a parent or guardian believes that a child has provided personal information to us, they may contact us at:</P>
      <P><a href="mailto:anandsahu7862@gmail.com" className="text-blue-300 hover:text-blue-100">anandsahu7862@gmail.com</a></P>
      <P>We will take reasonable steps to address the request in accordance with applicable law.</P>

      <H2>15. Your Privacy Rights</H2>
      <P>Depending on your location and applicable law, you may have rights regarding your personal information, including:</P>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <Li>Right to request access to your information</Li>
        <Li>Right to request correction of inaccurate information</Li>
        <Li>Right to request deletion</Li>
        <Li>Right to withdraw consent where processing is based on consent</Li>
        <Li>Right to object to certain processing</Li>
        <Li>Right to request information about how your data is used</Li>
      </ul>
      <P>To exercise applicable rights, contact:</P>
      <P><a href="mailto:anandsahu7862@gmail.com" className="text-blue-300 hover:text-blue-100">anandsahu7862@gmail.com</a></P>

      <H2>16. Withdrawal of Consent</H2>
      <P>Where processing of personal information is based on your consent, you may withdraw that consent at any time by contacting us.</P>
      <P>Withdrawal of consent will not affect processing that was lawfully carried out before consent was withdrawn.</P>

      <H2>17. Legal Documents and User Responsibility</H2>
      <P>Legal Docs Maker is a document drafting and document-generation tool.</P>
      <P>Documents generated through the Application are based on information and selections provided by the user.</P>
      <P>The Application does not provide legal representation or guarantee that a generated document is suitable for every individual legal situation.</P>
      <P>Users are responsible for reviewing generated documents and obtaining advice from a qualified legal professional where appropriate.</P>

      <H2>18. Changes to This Privacy Policy</H2>
      <P>We may update this Privacy Policy from time to time.</P>
      <P>When we make changes, we will update the <strong className="text-blue-100">Effective Date</strong> shown at the beginning of this Privacy Policy.</P>
      <P>Material changes may also be communicated through the Application or other appropriate means where required by applicable law.</P>
      <P>Users are encouraged to periodically review this Privacy Policy.</P>

      <H2>19. Contact Us</H2>
      <P>If you have any questions, concerns, requests, or complaints regarding privacy or the handling of your information, please contact us at:</P>
      <P><strong className="text-blue-100">Email:</strong> <a href="mailto:anandsahu7862@gmail.com" className="text-blue-300 hover:text-blue-100">anandsahu7862@gmail.com</a></P>
      <P><strong className="text-blue-100">Service Provider:</strong> Saurabh Pal</P>
      <P><strong className="text-blue-100">Application:</strong> Legal Docs Maker</P>

      <div className="text-blue-500/40 text-xs mt-8">Effective Date: September 7, 2026</div>
    </LegalLayout>
  );
}

export function RefundPolicy() {
  return (
    <LegalLayout title="Refund Policy">
      <P>Payments made through Google Play Store, Apple App Store, or direct payment gateways are final.</P>
      <H2>Refund Requests</H2>
      <P>Any refund request is subject to the policies and processes of the payment provider used for the transaction.</P>
      <H2>Contact</H2>
      <P>For payment-related questions, please contact us at:<br /><span className="text-blue-300">support@legaldocsmaker.in</span></P>
    </LegalLayout>
  );
}
