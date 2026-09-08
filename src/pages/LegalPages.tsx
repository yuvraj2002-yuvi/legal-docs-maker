import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

function LegalLayout({ title, date = "Last Updated: September 6, 2026", children }: { title: string; date?: string; children: React.ReactNode }) {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  useEffect(() => {
    document.title = `${title} | Legal Docs Maker`;
  }, [title]);

  return (
    <div className="min-h-screen bg-[#020818] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-blue-400 hover:text-blue-200 transition-colors mb-8 text-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            {language === "hi" ? t("backToHome") : "Back to Home"}
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
function P({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-blue-200/70 leading-relaxed ${className}`}>{children}</p>;
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
  const { language } = useLanguage();
  const [agreed, setAgreed] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const isHindi = language === "hi";

  const title = isHindi ? "शर्तें और नियम" : "TERMS & CONDITIONS";
  const date = isHindi ? "अंतिम अपडेट: 6 सितंबर 2026" : "Last Updated: September 6, 2026";

  const content = isHindi ? (
    <>
      <P>ये शर्तें और नियम ("शर्तें") मोबाइल एप्लिकेशन <strong className="text-blue-100">Legal Drafting App / Legal Docs Maker</strong> ("एप्लिकेशन") के उपयोग को नियंत्रित करती हैं, जिसका स्वामित्व, विकास और संचालन ऐप मालिक/डेवलपर ("मालिक") द्वारा किया जाता है। इस एप्लिकेशन को डाउनलोड, इंस्टॉल, एक्सेस करने या उपयोग करने से, उपयोगकर्ता ("उपयोगकर्ता") इन शर्तों से कानूनी रूप से बाध्य होने के लिए सहमत होता है। यदि उपयोगकर्ता इससे सहमत नहीं है, तो उसे तुरंत एप्लिकेशन को अनइंस्टॉल कर दिया जाना चाहिए और इसका उपयोग बंद कर देना चाहिए।</P>

      <H2>1. ऐप की प्रकृति (कानूनी सलाह का अस्वीकरण)</H2>
      <H3>1.1 केवल तकनीकी उपकरण</H3>
      <P>एप्लिकेशन केवल एक तकनीकी ड्राफ्टिंग, दस्तावेज़ प्रारूपण और उत्पादकता टूल है।</P>
      <H3>1.2 कोई पेशेवर परामर्श नहीं</H3>
      <P>एप्लिकेशन किसी भी प्रकार की कानूनी सलाह, कानूनी राय, कानूनी प्रतिनिधित्व या कानूनी परामर्श प्रदान नहीं करता है।</P>
      <H3>1.3 केवल संदर्भ के उद्देश्य से</H3>
      <P>एप्लिकेशन के माध्यम से तैयार, संपादित या देखे गए किसी भी ड्राफ़्ट, टेम्पलेट, प्रारूप, कानून या टेक्स्ट का उपयोग केवल सूचना और सुविधा के उद्देश्यों के लिए किया जाता है।</P>
      <H3>1.4 उपयोगकर्ता की जिम्मेदारी</H3>
      <P>उपयोगकर्ता केवल स्वयं जिम्मेदार है कि वह संबंधित कानूनों के तहत एप्लिकेशन का उपयोग करके तैयार किए गए किसी भी दस्तावेज़ की कानूनी सहीता, सटीकता, लागूता, अनुपालन और उपयुक्तता की जाँच करे।</P>

      <H2>2. उपयोगकर्ता की जिम्मेदारी और पेशेवर उपयोग</H2>
      <H3>2.1 अपेक्षित दर्शक</H3>
      <P>यह एप्लिकेशन अधिवक्ताओं, विधि छात्रों, क्लर्कों और जानकारी रखने वाले पेशेवरों के उपयोग के लिए बनाया गया है।</P>
      <H3>2.2 अधिवक्ता-ग्राहक संबंध नहीं</H3>
      <P>किसी भी व्यक्ति द्वारा एप्लिकेशन का उपयोग करने से मालिक और उपयोगकर्ता के बीच अधिवक्ता-ग्राहक संबंध, निष्ठा संबंध, या किसी पेशेवर Verpflichtता का निर्माण नहीं होता है।</P>
      <H3>2.3 क्षेत्रीय भिन्नताएँ</H3>
      <P>उपयोगकर्ता स्वीकार करता है कि कानून क्षेत्राधिकार के अनुसार काफी भिन्न होते हैं और अक्सर संशोधन, विभिन्न व्याख्याएँ और न्यायिक निर्णयों के अधीन रहते हैं।</P>

      <H2>3. कोई देयता और क्षतिपूर्ति</H2>
      <H3>3.1 देयता का अपवर्जन</H3>
      <P>मालिक किसी भी प्रकार की हानि, क्षति, लागत, दावा, जुर्माना, मुकदमा, या प्रतिकूल आदेश के लिए उत्तरदायी नहीं होगा, जो निम्न कारणों से उत्पन्न होता है:</P>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <Li>एप्लिकेशन के उपयोग, दुरुपयोग, या उपयोग में असमर्थता</Li>
        <Li>ड्राफ़्ट, टेम्पलेट या स्वचालित गणना पर भरोसा</Li>
        <Li>एप्लिकेशन में त्रुटियाँ, चूक, बग, या पुरानी कानूनी सामग्री</Li>
        <Li>किसी भी न्यायालय, रजिस्ट्रार, प्राधिकरण या मंच द्वारा उत्पादित दस्तावेज़ों का अस्वीकृत किया जाना</Li>
      </ul>
      <H3>3.2 क्षतिपूर्ति</H3>
      <P>उपयोगकर्ता इन शर्तों के उल्लंघन या एप्लिकेशन के दुरुपयोग से उत्पन्न सभी दावों, विवादों, शिकायतों, कार्यवाहियों, हानियों या क्षतियों (सिविल या आपराधिक) से मालिक को क्षतिपूर्ति देने, बचाने और नुकसान से सुरक्षित रखने के लिए सहमत होता है।</P>

      <H2>4. डेटा, स्टोरेज और गोपनीयता अस्वीकरण</H2>
      <H3>4.1 स्थानीय स्टोरेज</H3>
      <P>ड्राफ़्ट और उपयोगकर्ता द्वारा दर्ज किए गए इनपुट उपयोगकर्ता के डिवाइस पर स्थानीय रूप से संग्रहीत रहते हैं, जब तक कि क्लाउड सिंक फीचर स्पष्ट रूप से प्रदान न किया गया हो और सक्रिय न किया गया हो।</P>
      <H3>4.2 डेटा बैकअप गारंटी नहीं</H3>
      <P>मालिक डेटा बैकअप, डेटा रिकवरी, या डिवाइस विफलता, फ़ाइल हटाने, सिस्टम क्रैश या डेटा खराबी से सुरक्षा की गारंटी नहीं देता है।</P>
      <H3>4.3 बैकअप की जिम्मेदारी</H3>
      <P>उपयोगकर्ता अपने ड्राफ़्ट और PDF के बाहरी कॉपी, बैकअप और एक्सपोर्ट बनाए रखने के लिए अकेले जिम्मेदार है।</P>

      <H2>5. बौद्धिक संपदा अधिकार</H2>
      <H3>5.1 स्वामित्व</H3>
      <P>एप्लिकेशन, इसका कोड, डिज़ाइन, लेआउट, यूजर इंटरफ़ेस (UI), ब्रांडिंग, लॉगो, और संकलित प्रॉपर्टी टेम्पलेट मालिक की अनन्य बौद्धिक संपदा हैं।</P>
      <H3>5.2 सीमित लाइसेंस</H3>
      <P>उपयोगकर्ता को व्यक्तिगत या पेशेवर ड्राफ्टिंग आवश्यकताओं के लिए एप्लिकेशन के उपयोग के लिए सीमित, व्यक्तिगत, गैर-हस्तांतरणीय, गैर-विशिष्ट, रद्द करने योग्य लाइसेंस प्रदान किया जाता है।</P>
      <H3>5.3 प्रतिबंध</H3>
      <P>एप्लिकेशन के स्रोत टेम्पलेट या फ्रेमवर्क की प्रतिलिपि बनाना, रिवर्स इंजीनियरिंग करना, डीकम्पाइल करना, पुनर्विक्रय करना, पुनर्वितरित करना, या व्यावसायिक रूप से उसका उपयोग करना सख्ती से निषिद्ध है।</P>

      <H2>6. भुगतान योग्य सुविधाएँ, सदस्यताएँ</H2>
      <H3>6.1 प्रीमियम एक्सेस</H3>
      <P>कुछ उन्नत सुविधाएँ, टेम्पलेट, या अपडेट सशुल्क सदस्यताएँ या एकल इन-ऐप खरीदारी के पीछे लॉक हो सकते हैं।</P>
      <H3>6.2 कोई रिफंड नहीं</H3>
      <P>Google Play Store, Apple App Store, या सीधे भुगतान गेटवे के माध्यम से किए गए सभी भुगतान अंतिम होते हैं। रिफंड केवल Google Play Store या Apple App Store नीतियों के अधीन है।</P>
      <H3>6.3 मूल्य परिवर्तन</H3>
      <P>मालिक किसी भी समय बिना पूर्व सूचना के मूल्य मॉडल, सदस्यता संरचना, या सुविधा उपलब्धता को संशोधित करने का अधिकार सुरक्षित रखता है।</P>

      <H2>7. एप्लिकेशन उपलब्धता और अपडेट</H2>
      <H3>7.1 कोई वारंटी नहीं</H3>
      <P>मालिक एप्लिकेशन को "जैसा है" और "उपलब्ध है" के आधार पर प्रदान करता है। निर्बाध, वायरस-मुक्त, या त्रुटि-मुक्त संचालन की कोई गारंटी नहीं है।</P>
      <H3>7.2 संशोधन</H3>
      <P>एप्लिकेशन को किसी भी समय बिना पूर्व सूचना या देयता के अपडेट, संशोधित, पैच, निलंबित, या बंद किया जा सकता है।</P>

      <H2>8. देयता की सीमा</H2>
      <H3>8.1 अप्रत्यक्ष हानि</H3>
      <P>किसी भी परिस्थिति में मालिक अप्रत्यक्ष, आकस्मिक, विशेष, परिणामी, या दंडात्मक हानियों (लाभ की हानि या कानूनी लागत सहित) के लिए उत्तरदायी नहीं होगा।</P>

      <H2>9. शासक कानून और विशेष अधिकार क्षेत्र</H2>
      <H3>9.1 अधिकार क्षेत्र का कानून</H3>
      <P>ये शर्तें भारत के कानूनों के अनुसार संचालित, समझी और लागू की जाएँगी।</P>
      <H3>9.2 मंच चयन</H3>
      <P>इन शर्तों या एप्लिकेशन उपयोग से उत्पन्न किसी भी कानूनी विवाद, दावा या मध्यस्थता के लिए विशेष अधिकार क्षेत्र केवल <strong className="text-blue-100">गुना, मध्य प्रदेश</strong> के सक्षम न्यायालयों में होगा, किसी अन्य मंच में नहीं।</P>

      <H2>10. उपभोक्ता मंच और कानूनी कार्रवाई का अस्वीकरण</H2>
      <H3>10.1 जोखिम को स्वीकृति</H3>
      <P>उपयोगकर्ता स्पष्ट रूप से सहमत करता है कि एप्लिकेशन का उपयोग पूरी तरह से स्वैच्छिक है और उनके अपने स्वतंत्र जोखिम पर है।</P>

      <H2>11. पूर्ण स्वीकृति</H2>
      <P>"मैं सहमत हूँ" क्लिक करने, इंस्टॉल करने, पंजीकरण करने, या एप्लिकेशन का उपयोग करने से, उपयोगकर्ता पुष्टि करता है कि उसने इन शर्तों और नियमों को पूरी तरह से पढ़ लिया है, समझ लिया है और उनका पूरा रूप से स्वीकार कर लिया है।</P>

      <div className="glass rounded-2xl p-5 border border-yellow-700/30 bg-yellow-900/10 mt-8">
        <P><strong className="text-yellow-200">अस्वीकरण</strong></P>
        <P><strong className="text-blue-100">यह ऐप एक उत्पादकता उपयोगिता उपकरण है और यह पेशेवर कानूनी निर्णय, योग्यताएँ, या स्वतंत्र कानूनी अनुसंधान का विकल्प नहीं है।</strong></P>
        <P className="mt-2 text-blue-400/70 text-xs"><strong>ऐप मालिक</strong><br /><strong>सभी अधिकार सुरक्षित।</strong></P>
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
            मैंने <Link to="/terms" className="text-blue-300 underline underline-offset-2 hover:text-white">शर्तें और नियम</Link> तथा <Link to="/privacy" className="text-blue-300 underline underline-offset-2 hover:text-white">गोपनीयता नीति</Link> को पढ़ लिया है और उनसे सहमत हूँ।
          </span>
        </label>
        <button
          type="button"
          disabled={!agreed}
          onClick={() => setAccepted(true)}
          className="mt-4 rounded-xl blue-gradient px-5 py-2.5 text-sm font-semibold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
        >
          मैं सहमत हूँ
        </button>
        {accepted && <p className="mt-3 text-sm text-green-300">आपकी सहमति इस सत्र के लिए दर्ज कर ली गई है।</p>}
      </div>
    </>
  ) : (
    <>
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
    </>
  );

  return (
    <LegalLayout title={title} date={date}>
      {content}
    </LegalLayout>
  );
}

export function PrivacyPolicy() {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const title = isHindi ? "गोपनीयता नीति" : "Privacy Policy";
  const date = isHindi ? "प्रभावी तिथि: 7 सितंबर 2026" : "Effective Date: 7 September 2026";

  const content = isHindi ? (
    <>
      <P>यह गोपनीयता नीति <strong className="text-blue-100">Legal Docs Maker</strong> मोबाइल एप्लिकेशन और इससे संबंधित सेवाओं (सामूहिक रूप से, “एप्लिकेशन”) पर लागू होती है, जिसका संचालन <strong className="text-blue-100">Saurabh Pal</strong> (“सेवा प्रदाता”) द्वारा किया जाता है।</P>
      <P>यह गोपनीयता नीति बताती है कि कौन-सी जानकारी एकत्र या संसाधित की जा सकती है, उसका उपयोग कैसे किया जाता है, उसे कैसे सुरक्षित रखा जाता है और उपयोगकर्ताओं के पास कौन-कौन से विकल्प उपलब्ध हैं।</P>

      <H2>1. हम कौन-सी जानकारी एकत्र करते हैं</H2>
      <P>आप एप्लिकेशन का उपयोग किस प्रकार करते हैं, उसके आधार पर हम निम्नलिखित जानकारी एकत्र या संसाधित कर सकते हैं:</P>

      <H3>A. आपके द्वारा प्रदान की गई जानकारी</H3>
      <P>यदि आप अकाउंट बनाते हैं, कोई PDF खरीदते हैं, किसी प्लान की सदस्यता लेते हैं या एप्लिकेशन की अन्य सुविधाओं का उपयोग करते हैं, तो आप स्वेच्छा से निम्नलिखित जानकारी प्रदान कर सकते हैं:</P>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <Li>नाम</Li>
        <Li>ईमेल पता</Li>
        <Li>अकाउंट/लॉगिन संबंधी जानकारी</Li>
        <Li>कानूनी दस्तावेज़ों के फॉर्म में दर्ज की गई जानकारी</Li>
        <Li>आपके द्वारा बनाए गए दस्तावेज़ों में शामिल जानकारी</Li>
        <Li>Contact Us फॉर्म के माध्यम से भेजी गई जानकारी</Li>
        <Li>खरीदारी या सदस्यता से संबंधित जानकारी</Li>
      </ul>
      <P>कृपया एप्लिकेशन में अनावश्यक संवेदनशील व्यक्तिगत जानकारी दर्ज न करें।</P>

      <H3>B. भुगतान संबंधी जानकारी</H3>
      <P>एप्लिकेशन भुगतान संसाधित करने के लिए <strong className="text-blue-100">Razorpay</strong> जैसे तृतीय-पक्ष भुगतान सेवा प्रदाताओं का उपयोग कर सकता है।</P>
      <P>सेवा प्रदाता जानबूझकर उपयोगकर्ताओं के पूर्ण कार्ड नंबर, UPI PIN, पासवर्ड, CVV नंबर या अन्य पूर्ण भुगतान संबंधी प्रमाण-पत्रों को अपने स्वयं के सर्वर पर संग्रहीत नहीं करता।</P>
      <P>भुगतान संबंधी जानकारी संबंधित भुगतान सेवा प्रदाता द्वारा सीधे संसाधित की जा सकती है और यह उसके अपने गोपनीयता नियमों एवं शर्तों के अनुसार होगी।</P>

      <H3>C. डिवाइस और तकनीकी जानकारी</H3>
      <P>जब आप एप्लिकेशन का उपयोग करते हैं, तो एप्लिकेशन में एकीकृत सेवाओं और SDKs के आधार पर कुछ तकनीकी जानकारी स्वतः संसाधित की जा सकती है। इसमें शामिल हो सकता है:</P>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <Li>डिवाइस का प्रकार और मॉडल</Li>
        <Li>ऑपरेटिंग सिस्टम और उसका संस्करण</Li>
        <Li>एप्लिकेशन का संस्करण</Li>
        <Li>IP पता</Li>
        <Li>सामान्य तकनीकी/नेटवर्क संबंधी जानकारी</Li>
        <Li>क्रैश और डायग्नोस्टिक जानकारी</Li>
        <Li>नाम उपयोग संबंधी जानकारी</Li>
      </ul>
      <P>इस जानकारी का उपयोग सुरक्षा, समस्या निवारण, एनालिटिक्स, प्रदर्शन में सुधार और एप्लिकेशन के रखरखाव के लिए किया जा सकता है।</P>

      <H2>2. एनालिटिक्स और ट्रैकिंग</H2>
      <P>एप्लिकेशन उपयोगकर्ता एप्लिकेशन के साथ किस प्रकार इंटरैक्ट करते हैं, यह समझने के लिए <strong className="text-blue-100">Google Analytics</strong> या संबंधित Google सेवाओं जैसी एनालिटिक्स और मापन सेवाओं का उपयोग कर सकता है।</P>
      <P>एनालिटिक्स संबंधी जानकारी में एप्लिकेशन के उपयोग की जानकारी, डिवाइस संबंधी जानकारी, तकनीकी जानकारी से प्राप्त अनुमानित/सामान्य स्थान संबंधी जानकारी और अन्य सांख्यिकीय जानकारी शामिल हो सकती है।</P>
      <P>एनालिटिक्स का उपयोग निम्नलिखित के लिए किया जाता है:</P>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <Li>एप्लिकेशन के उपयोग को समझना</Li>
        <Li>सुविधाओं और प्रदर्शन में सुधार करना</Li>
        <Li>तकनीकी समस्याओं की पहचान करना</Li>
        <Li>एप्लिकेशन के प्रदर्शन को मापना</Li>
        <Li>उपयोगकर्ता अनुभव में सुधार करना</Li>
      </ul>
      <P>हम एनालिटिक्स संबंधी जानकारी का उपयोग जानबूझकर व्यक्तिगत उपयोगकर्ताओं की पहचान करने के लिए नहीं करते, जब तक कि अन्यथा बताया न गया हो और कानूनन इसकी अनुमति न हो।</P>

      <H2>3. कानूनी दस्तावेज़ों में दर्ज की गई जानकारी</H2>
      <P>Legal Docs Maker उपयोगकर्ताओं को दस्तावेज़ फॉर्म में जानकारी दर्ज करके कानूनी दस्तावेज़ बनाने की सुविधा देता है।</P>
      <P>उपयोगकर्ता द्वारा दर्ज की गई जानकारी में नाम, पता, तारीख, वित्तीय जानकारी, समझौते से संबंधित विवरण या अनुरोधित दस्तावेज़ तैयार करने के लिए आवश्यक अन्य जानकारी शामिल हो सकती है।</P>
      <P>उपयोगकर्ता यह सुनिश्चित करने के लिए स्वयं जिम्मेदार हैं कि उनके पास एप्लिकेशन के माध्यम से दर्ज और उपयोग की जाने वाली जानकारी को दर्ज करने एवं उपयोग करने का उचित अधिकार है।</P>
      <P>सेवा प्रदाता कानूनी दस्तावेज़ों में दर्ज जानकारी का उपयोग संबंधित विज्ञापन या प्रोफाइलिंग उद्देश्यों के लिए नहीं करता।</P>
      <P>जहाँ दस्तावेज़ संबंधी जानकारी को एप्लिकेशन द्वारा उपयोग किए जाने वाले तृतीय-पक्ष इंफ्रास्ट्रक्चर या क्लाउड सेवाओं द्वारा संसाधित या संग्रहीत किया जाता है, वहाँ ऐसा प्रसंस्करण केवल अनुरोधित एप्लिकेशन सुविधा प्रदान करने तक सीमित रहेगा।</P>

      <H2>4. PDF बनाना और खरीदारी</H2>
      <P>एप्लिकेशन उपयोगकर्ताओं को कानूनी दस्तावेज़ों को PDF प्रारूप में बनाने या डाउनलोड करने की सुविधा दे सकता है।</P>
      <P>एक PDF की कीमत <strong className="text-blue-100">₹10 प्रति PDF</strong> हो सकती है और एप्लिकेशन <strong className="text-blue-100">₹350 प्रति माह की सदस्यता</strong> भी प्रदान कर सकता है, जिसके अंतर्गत सदस्यता अवधि के दौरान पात्र PDF बनाने वाली सुविधाओं का उपयोग उपलब्ध हो सकता है।</P>
      <P>सेवा प्रदाता समय-समय पर कीमतों और उपलब्ध सुविधाओं में बदलाव कर सकता है।</P>
      <P>भुगतान का प्रसंस्करण तृतीय-पक्ष भुगतान सेवा प्रदाताओं द्वारा किया जा सकता है।</P>

      <H2>5. तृतीय-पक्ष सेवाएँ</H2>
      <P>एप्लिकेशन को उपलब्ध कराने, संचालित करने, सुरक्षित रखने, विश्लेषण करने और बेहतर बनाने के लिए तृतीय-पक्ष सेवाओं और SDKs का उपयोग किया जा सकता है।</P>
      <P>जहाँ लागू हो, इन सेवाओं में निम्नलिखित शामिल हो सकते हैं:</P>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <Li><strong className="text-blue-100">Razorpay</strong></Li>
        <Li>अन्य होस्टिंग, इंफ्रास्ट्रक्चर, एनालिटिक्स, सुरक्षा या तकनीकी सेवा प्रदाता, जब लागू हों</Li>
      </ul>
      <P>तृतीय-पक्ष प्रदाता अपनी स्वयं की गोपनीयता नीतियों और संविदात्मक दायित्वों के अनुसार जानकारी को संसाधित कर सकते हैं।</P>
      <P>सेवा प्रदाता उपयोगकर्ताओं की व्यक्तिगत या संवेदनशील जानकारी को बेचता नहीं है।</P>
      <P>एप्लिकेशन में एकीकृत तृतीय-पक्ष SDKs अपनी कार्यक्षमता के लिए आवश्यक कुछ जानकारी एकत्र या संसाधित कर सकते हैं। सेवा प्रदाता लागू तृतीय-पक्ष डेटा प्रथाओं की समीक्षा और उचित जानकारी प्रदान करने के लिए जिम्मेदार है।</P>

      <H2>6. हम जानकारी का उपयोग कैसे करते हैं</H2>
      <P>जानकारी का उपयोग निम्नलिखित उद्देश्यों के लिए किया जा सकता है:</P>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <Li>एप्लिकेशन को उपलब्ध कराने और संचालित करने के लिए</Li>
        <Li>अनुरोधित कानूनी दस्तावेज़ बनाने और तैयार करने के लिए</Li>
        <Li>PDF बनाने के लिए</Li>
        <Li>खरीदारी और सदस्यता का प्रसंस्करण करने के लिए</Li>
        <Li>ग्राहक सहायता प्रदान करने के लिए</Li>
        <Li>Contact Us से संबंधित अनुरोधों का उत्तर देने के लिए</Li>
        <Li>एप्लिकेशन के प्रदर्शन को बनाए रखने और बेहतर बनाने के लिए</Li>
        <Li>धोखाधड़ी, दुरुपयोग और सुरक्षा संबंधी घटनाओं का पता लगाने और उन्हें रोकने के लिए</Li>
        <Li>तकनीकी समस्याओं का समाधान करने के लिए</Li>
        <Li>नाम/समेकित एप्लिकेशन उपयोग को समझने के लिए</Li>
        <Li>लागू कानूनों और कानूनी दायित्वों का पालन करने के लिए</Li>
      </ul>

      <H2>7. ईमेल और संचार</H2>
      <P>यदि आप स्वेच्छा से अपना ईमेल पता प्रदान करते हैं या हमसे संपर्क करते हैं, तो हम आपके ईमेल पते का उपयोग निम्नलिखित के लिए कर सकते हैं:</P>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <Li>आपके प्रश्नों का उत्तर देने के लिए</Li>
        <Li>ग्राहक सहायता प्रदान करने के लिए</Li>
        <Li>तकनीकी या अकाउंट से संबंधित समस्याओं का समाधान करने के लिए</Li>
        <Li>भुगतान, सदस्यता या खरीदारी से संबंधित अनुरोधों का उत्तर देने के लिए</Li>
        <Li>महत्वपूर्ण सेवा-संबंधी सूचनाएँ भेजने के लिए</Li>
      </ul>
      <P>जहाँ लागू हो, उपयोगकर्ता गैर-आवश्यक प्रचारात्मक संचार से बाहर निकल सकते हैं।</P>
      <P>गोपनीयता से संबंधित प्रश्नों के लिए संपर्क करें:</P>
      <P><a href="mailto:anandsahu7862@gmail.com" className="text-blue-300 hover:text-blue-100">anandsahu7862@gmail.com</a></P>

      <H2>8. डेटा साझा करना</H2>
      <P>हम जानकारी को केवल उन परिस्थितियों में तृतीय पक्षों के साथ साझा कर सकते हैं या उन्हें उस तक पहुँच प्रदान कर सकते हैं, जहाँ यह उचित रूप से निम्नलिखित के लिए आवश्यक हो:</P>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <Li>एप्लिकेशन की कार्यक्षमता प्रदान करने के लिए</Li>
        <Li>भुगतान संसाधित करने के लिए</Li>
        <Li>एनालिटिक्स के लिए</Li>
        <Li>क्लाउड होस्टिंग और इंफ्रास्ट्रक्चर के लिए</Li>
        <Li>सुरक्षा और धोखाधड़ी रोकथाम के लिए</Li>
        <Li>ग्राहक सहायता के लिए</Li>
        <Li>कानूनी अनुपालन के लिए</Li>
        <Li>सेवा प्रदाता, उपयोगकर्ताओं या अन्य व्यक्तियों के अधिकारों, संपत्ति या सुरक्षा की रक्षा के लिए</Li>
      </ul>
      <P>हम <strong className="text-blue-100">व्यक्तिगत या संवेदनशील उपयोगकर्ता डेटा को बेचते नहीं हैं।</strong></P>
      <P>Google Play के लिए डेवलपर्स को अपने ऐप और एकीकृत तृतीय-पक्ष SDKs द्वारा एकत्र या साझा किए जाने वाले डेटा का सही तरीके से खुलासा करना आवश्यक है।</P>

      <H2>9. डेटा बनाए रखने की अवधि</H2>
      <P>हम जानकारी को केवल उतने समय तक रखते हैं जितना एप्लिकेशन और उसकी सेवाएँ प्रदान करने, वैध व्यावसायिक उद्देश्यों को पूरा करने, विवादों को हल करने, सुरक्षा बनाए रखने, कानूनी दायित्वों का पालन करने या समझौतों को लागू करने के लिए उचित रूप से आवश्यक हो।</P>
      <P>डेटा बनाए रखने की अवधि जानकारी के प्रकार और उस उद्देश्य के आधार पर अलग-अलग हो सकती है जिसके लिए उसे एकत्र किया गया था।</P>
      <P>जब जानकारी की आवश्यकता नहीं रह जाती है, तो लागू कानूनी आवश्यकताओं के अधीन, हम उसे हटा, अनाम या सुरक्षित रूप से नष्ट कर सकते हैं।</P>

      <H2>10. डेटा हटाना</H2>
      <P>यदि आपने अकाउंट बनाया है या स्वेच्छा से व्यक्तिगत जानकारी प्रदान की है, तो आप अपनी व्यक्तिगत जानकारी हटाने का अनुरोध निम्नलिखित ईमेल पर संपर्क करके कर सकते हैं:</P>
      <P><a href="mailto:anandsahu7862@gmail.com" className="text-blue-300 hover:text-blue-100">anandsahu7862@gmail.com</a></P>
      <P>कृपया अपने अनुरोध की पहचान करने के लिए पर्याप्त जानकारी शामिल करें।</P>
      <P>जहाँ लागू हो, हम लागू कानून द्वारा निर्धारित समय सीमा के भीतर वैध डेटा हटाने के अनुरोधों को संसाधित करेंगे।</P>
      <P>कुछ जानकारी को कानून, धोखाधड़ी रोकथाम, सुरक्षा, वित्तीय रिकॉर्ड, विवाद समाधान या अन्य वैध कानूनी उद्देश्यों के लिए बनाए रखना आवश्यक हो सकता है।</P>

      <H2>11. सुरक्षा</H2>
      <P>हम जानकारी को अनधिकृत पहुँच, परिवर्तन, प्रकटीकरण या नष्ट होने से बचाने के उद्देश्य से उचित प्रशासनिक, तकनीकी और संगठनात्मक सुरक्षा उपायों का उपयोग करते हैं।</P>
      <P>जहाँ उचित हो, एप्लिकेशन और सर्वर के बीच भेजी जाने वाली जानकारी को HTTPS/TLS जैसी सुरक्षित संचार तकनीकों द्वारा सुरक्षित किया जा सकता है। हालाँकि, किसी भी इलेक्ट्रॉनिक संचार या स्टोरेज सिस्टम की पूर्ण सुरक्षा की गारंटी नहीं दी जा सकती।</P>

      <H2>12. सटीक स्थान संबंधी जानकारी</H2>
      <P>एप्लिकेशन आपके डिवाइस से <strong className="text-blue-100">सटीक रियल-टाइम GPS स्थान की जानकारी जानबूझकर एकत्र नहीं करता</strong>, जब तक कि भविष्य में किसी सुविधा के लिए ऐसी पहुँच आवश्यक न हो और उसके लिए उचित जानकारी एवं अनुमति प्रदान न की जाए।</P>

      <H2>13. कैमरा, कॉन्टैक्ट्स और अन्य डिवाइस अनुमतियाँ</H2>
      <P>एप्लिकेशन आपके कॉन्टैक्ट्स, फोनबुक, कैमरा, माइक्रोफोन या सटीक स्थान तक जानबूझकर पहुँच नहीं करता, जब तक कि किसी सुविधा के लिए ऐसी पहुँच आवश्यक न हो और आवश्यक अनुमति का अनुरोध न किया जाए।</P>
      <P>यदि भविष्य में ऐसी कार्यक्षमता शुरू की जाती है, तो इस गोपनीयता नीति और संबंधित एप्लिकेशन प्रकटीकरणों को उसी के अनुसार अपडेट किया जा सकता है।</P>

      <H2>14. यह एप्लीकेशन एडवोकेट, लॉ स्टूडेंट एवं विधिक जानकारों के लिये निर्मित है</H2>
      <P>यह एप्लीकेशन एडवोकेट, लॉ स्टूडेंट एवं विधिक जानकारों के लिये निर्मित है जो अपना काम मोबाइल के माध्यम से बिना कंप्यूटर टाइपिंग सीखे सीधे मोबाइल में टाइप करके PDF जनरेट कर सकते हैं।</P>

      <H2>15. आपके गोपनीयता अधिकार</H2>
      <P>आपके स्थान और लागू कानून के आधार पर, आपको अपनी व्यक्तिगत जानकारी के संबंध में निम्नलिखित अधिकार प्राप्त हो सकते हैं:</P>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <Li>अपनी जानकारी तक पहुँच का अनुरोध करने का अधिकार</Li>
        <Li>गलत जानकारी में सुधार का अनुरोध करने का अधिकार</Li>
        <Li>जानकारी हटाने का अनुरोध करने का अधिकार</Li>
        <Li>जहाँ डेटा प्रोसेसिंग सहमति पर आधारित हो, वहाँ सहमति वापस लेने का अधिकार</Li>
        <Li>कुछ प्रकार की डेटा प्रोसेसिंग पर आपत्ति करने का अधिकार</Li>
        <Li>अपने डेटा के उपयोग के तरीके के बारे में जानकारी प्राप्त करने का अधिकार</Li>
      </ul>
      <P>अपने अधिकारों का उपयोग करने के लिए संपर्क करें:</P>
      <P><a href="mailto:anandsahu7862@gmail.com" className="text-blue-300 hover:text-blue-100">anandsahu7862@gmail.com</a></P>

      <H2>16. सहमति वापस लेना</H2>
      <P>जहाँ व्यक्तिगत जानकारी का प्रसंस्करण आपकी सहमति पर आधारित है, वहाँ आप किसी भी समय हमसे संपर्क करके अपनी सहमति वापस ले सकते हैं।</P>
      <P>सहमति वापस लेने से उस समय तक कानूनन की गई प्रोसेसिंग प्रभावित नहीं होगी, जो सहमति वापस लेने से पहले वैध रूप से की गई थी।</P>

      <H2>17. कानूनी दस्तावेज़ और उपयोगकर्ता की जिम्मेदारी</H2>
      <P>Legal Docs Maker एक दस्तावेज़ ड्राफ्टिंग और दस्तावेज़ निर्माण उपकरण है।</P>
      <P>एप्लिकेशन के माध्यम से बनाए गए दस्तावेज़ उपयोगकर्ता द्वारा प्रदान की गई जानकारी और चुने गए विकल्पों के आधार पर तैयार किए जाते हैं।</P>
      <P>एप्लिकेशन कानूनी प्रतिनिधित्व प्रदान नहीं करता और यह गारंटी नहीं देता कि बनाया गया दस्तावेज़ प्रत्येक व्यक्ति की कानूनी परिस्थिति के लिए उपयुक्त होगा।</P>
      <P>उपयोगकर्ता बनाए गए दस्तावेज़ों की समीक्षा करने और जहाँ उचित हो, किसी योग्य कानूनी पेशेवर से सलाह लेने के लिए स्वयं जिम्मेदार हैं।</P>

      <H2>18. इस गोपनीयता नीति में बदलाव</H2>
      <P>हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं।</P>
      <P>जब हम कोई बदलाव करेंगे, तो इस गोपनीयता नीति की शुरुआत में दी गई <strong className="text-blue-100">प्रभावी तिथि</strong> को अपडेट किया जाएगा।</P>
      <P>महत्वपूर्ण बदलावों के बारे में जहाँ लागू कानून के अनुसार आवश्यक हो, एप्लिकेशन या अन्य उचित माध्यमों से भी जानकारी दी जा सकती है।</P>
      <P>उपयोगकर्ताओं को समय-समय पर इस गोपनीयता नीति की समीक्षा करने के लिए प्रोत्साहित किया जाता है।</P>

      <H2>19. हमसे संपर्क करें</H2>
      <P>यदि आपके पास गोपनीयता या आपकी जानकारी के प्रबंधन से संबंधित कोई प्रश्न, चिंता, अनुरोध या शिकायत है, तो कृपया हमसे संपर्क करें:</P>
      <P><strong className="text-blue-100">ईमेल:</strong> <a href="mailto:anandsahu7862@gmail.com" className="text-blue-300 hover:text-blue-100">anandsahu7862@gmail.com</a></P>
      <P><strong className="text-blue-100">सेवा प्रदाता:</strong> Saurabh Pal</P>
      <P><strong className="text-blue-100">एप्लिकेशन:</strong> Legal Docs Maker</P>

      <div className="text-blue-500/40 text-xs mt-8">प्रभावी तिथि: 7 सितंबर 2026</div>
    </>
  ) : (
    <>
      <P>This Privacy Policy applies to the <strong className="text-blue-100">Legal Docs Maker</strong> mobile application and related services (collectively, the “Application”), operated by <strong className="text-blue-100">Saurabh Pal</strong> (“Service Provider”).</P>
      <P>This Privacy Policy explains what information may be collected, how it is used, how it is protected, and what options are available to users.</P>

      <H2>1. Information We Collect</H2>
      <P>Depending on how you use the Application, we may collect or process the following information:</P>

      <H3>A. Information You Provide</H3>
      <P>If you create an account, purchase a PDF, subscribe to a plan, or use other features of the Application, you may voluntarily provide the following information:</P>
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
      <P>The Service Provider does not intentionally store users’ complete card numbers, UPI PINs, passwords, CVV numbers, or other complete payment credentials on its own servers.</P>
      <P>Payment information may be processed directly by the applicable payment service provider in accordance with its own privacy policy and terms.</P>

      <H3>C. Device and Technical Information</H3>
      <P>When you use the Application, some technical information may be processed automatically, depending on the services and SDKs integrated into the Application. This may include:</P>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <Li>Device type and model</Li>
        <Li>Operating system and version</Li>
        <Li>Application version</Li>
        <Li>IP address</Li>
        <Li>General technical/network information</Li>
        <Li>Crash and diagnostic information</Li>
        <Li>Usage information</Li>
      </ul>
      <P>This information may be used for security, troubleshooting, analytics, improving performance, and maintaining the Application.</P>

      <H2>2. Analytics and Tracking</H2>
      <P>The Application may use analytics and measurement services such as <strong className="text-blue-100">Google Analytics</strong> or related Google services to understand how users interact with the Application.</P>
      <P>Analytics information may include information about Application usage, device information, approximate/general location derived from technical information, and other statistical information.</P>
      <P>Analytics is used for the following purposes:</P>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <Li>To understand Application usage</Li>
        <Li>To improve features and performance</Li>
        <Li>To identify technical problems</Li>
        <Li>To measure Application performance</Li>
        <Li>To improve user experience</Li>
      </ul>
      <P>We do not use analytics information to intentionally identify individual users unless otherwise disclosed and legally permitted.</P>

      <H2>3. Information Entered Into Legal Documents</H2>
      <P>Legal Docs Maker allows users to create legal documents by entering information into document forms.</P>
      <P>Information entered by the user may include names, addresses, dates, financial information, agreement-related details, or other information necessary to prepare the requested document.</P>
      <P>Users are solely responsible for ensuring that they have the proper right to enter and use the information submitted through the Application.</P>
      <P>The Service Provider does not use information entered into legal documents for unrelated advertising or profiling purposes.</P>
      <P>Where document-related information is processed or stored by third-party infrastructure or cloud services used by the Application, such processing is limited solely to providing the requested Application functionality.</P>

      <H2>4. PDF Generation and Purchases</H2>
      <P>The Application may allow users to generate or download legal documents in PDF format.</P>
      <P>An individual PDF may be available at <strong className="text-blue-100">₹10 per PDF</strong>, and the Application may also offer a <strong className="text-blue-100">monthly subscription of ₹350</strong>, which may provide access to eligible PDF generation features during the subscription period.</P>
      <P>Prices and available features may be changed by the Service Provider from time to time.</P>
      <P>Payment processing may be handled by third-party payment providers.</P>

      <H2>5. Third-Party Services</H2>
      <P>The Application may use third-party services and SDKs to provide, operate, secure, analyze, and improve the Application.</P>
      <P>These services may include, where applicable:</P>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <Li><strong className="text-blue-100">Razorpay</strong></Li>
        <Li>Other hosting, infrastructure, analytics, security, or technical service providers</Li>
      </ul>
      <P>Third-party providers may process information according to their own privacy policies and contractual obligations.</P>
      <P>The Service Provider does not sell users’ personal or sensitive information.</P>
      <P>Third-party SDKs integrated into the Application may collect or process certain information as required for their functionality. The Service Provider is responsible for reviewing and disclosing applicable third-party data practices.</P>

      <H2>6. How We Use Information</H2>
      <P>Information may be used for the following purposes:</P>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <Li>To provide and operate the Application</Li>
        <Li>To create and prepare requested legal documents</Li>
        <Li>To generate PDFs</Li>
        <Li>To process purchases and subscriptions</Li>
        <Li>To provide customer support</Li>
        <Li>To respond to Contact Us requests</Li>
        <Li>To maintain and improve Application performance</Li>
        <Li>To detect and prevent fraud, abuse, and security incidents</Li>
        <Li>To resolve technical problems</Li>
        <Li>To understand application usage</Li>
        <Li>To comply with applicable laws and legal obligations</Li>
      </ul>

      <H2>7. Email and Communications</H2>
      <P>If you voluntarily provide your email address or contact us, we may use your email address to:</P>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <Li>Respond to your questions</Li>
        <Li>Provide customer support</Li>
        <Li>Resolve technical or account-related issues</Li>
        <Li>Respond to requests concerning payments, subscriptions, or purchases</Li>
        <Li>Send important service-related notifications</Li>
      </ul>
      <P>Where applicable, users may opt out of non-essential promotional communications.</P>
      <P>For privacy-related questions, contact:</P>
      <P><a href="mailto:anandsahu7862@gmail.com" className="text-blue-300 hover:text-blue-100">anandsahu7862@gmail.com</a></P>

      <H2>8. Data Sharing</H2>
      <P>We may share or provide access to information with third parties only in circumstances where it is reasonably necessary for the following purposes:</P>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <Li>To provide Application functionality</Li>
        <Li>To process payments</Li>
        <Li>For analytics</Li>
        <Li>For cloud hosting and infrastructure</Li>
        <Li>For security and fraud prevention</Li>
        <Li>For customer support</Li>
        <Li>For legal compliance</Li>
        <Li>To protect the rights, property, or safety of the Service Provider, users, or others</Li>
      </ul>
      <P>We do <strong className="text-blue-100">not sell personal or sensitive user data</strong>.</P>
      <P>Google Play requires developers to accurately disclose the data collected or shared by their app and the integrated third-party SDKs.</P>

      <H2>9. Data Retention</H2>
      <P>We retain information only for as long as is reasonably necessary to provide the Application and its services, fulfill legitimate business purposes, resolve disputes, maintain security, comply with legal obligations, or enforce agreements.</P>
      <P>The retention period may vary depending on the type of information and the purpose for which it was collected.</P>
      <P>When information is no longer required, we may delete, anonymize, or securely dispose of it, subject to applicable legal requirements.</P>

      <H2>10. Data Deletion</H2>
      <P>If you have created an account or voluntarily provided personal information, you may request deletion of your personal information by contacting:</P>
      <P><a href="mailto:anandsahu7862@gmail.com" className="text-blue-300 hover:text-blue-100">anandsahu7862@gmail.com</a></P>
      <P>Please include sufficient information to help us identify your request.</P>
      <P>Where applicable, we will process valid deletion requests within the time period required by applicable law.</P>
      <P>Some information may need to be retained where required by law, for fraud prevention, security, financial records, dispute resolution, or other legitimate legal purposes.</P>

      <H2>11. Security</H2>
      <P>We use reasonable administrative, technical, and organizational safeguards intended to protect information against unauthorized access, alteration, disclosure, or destruction.</P>
      <P>Where appropriate, information transmitted between the Application and servers may be protected using secure communication technologies such as HTTPS/TLS.</P>
      <P>However, no electronic communication or storage system can be guaranteed to be completely secure.</P>

      <H2>12. Precise Location Information</H2>
      <P>The Application does <strong className="text-blue-100">not intentionally collect precise real-time GPS location information</strong> from your device unless a future feature specifically requires such access and the necessary disclosure and consent have been provided.</P>

      <H2>13. Camera, Contacts, and Other Device Permissions</H2>
      <P>The Application does not intentionally access your contacts, phonebook, camera, microphone, or precise location unless a feature requires such access and the necessary permission is requested.</P>
      <P>If such functionality is introduced in the future, this Privacy Policy and the relevant Application disclosures may be updated accordingly.</P>

      <H2>14. This Application Is Designed For</H2>
      <P>This application is designed for advocates, law students, and legal professionals who can generate PDFs directly on their mobile devices by typing directly on the phone without learning computer typing.</P>

      <H2>15. Your Privacy Rights</H2>
      <P>Depending on your location and applicable law, you may have rights regarding your personal information, including:</P>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <Li>The right to request access to your information</Li>
        <Li>The right to request correction of inaccurate information</Li>
        <Li>The right to request deletion of information</Li>
        <Li>The right to withdraw consent where processing is based on consent</Li>
        <Li>The right to object to certain types of processing</Li>
        <Li>The right to request information about how your data is used</Li>
      </ul>
      <P>You may exercise your rights by contacting:</P>
      <P><a href="mailto:anandsahu7862@gmail.com" className="text-blue-300 hover:text-blue-100">anandsahu7862@gmail.com</a></P>

      <H2>16. Withdrawal of Consent</H2>
      <P>Where the processing of personal information is based on your consent, you may withdraw that consent at any time by contacting us.</P>
      <P>Withdrawing consent will not affect processing that was lawfully carried out before consent was withdrawn.</P>

      <H2>17. Legal Documents and User Responsibility</H2>
      <P>Legal Docs Maker is a document drafting and document-generation tool.</P>
      <P>Documents generated through the Application are based on information and selections provided by the user.</P>
      <P>The Application does not provide legal representation and does not guarantee that a generated document will be suitable for every individual legal situation.</P>
      <P>Users are responsible for reviewing the generated documents and obtaining advice from a qualified legal professional where appropriate.</P>

      <H2>18. Changes to This Privacy Policy</H2>
      <P>We may update this Privacy Policy from time to time.</P>
      <P>When we make changes, we will update the <strong className="text-blue-100">Effective Date</strong> shown at the beginning of this Privacy Policy.</P>
      <P>Material changes may also be communicated through the Application or other appropriate means where required by applicable law.</P>
      <P>Users are encouraged to review this Privacy Policy periodically.</P>

      <H2>19. Contact Us</H2>
      <P>If you have any questions, concerns, requests, or complaints regarding privacy or the handling of your information, please contact us at:</P>
      <P><strong className="text-blue-100">Email:</strong> <a href="mailto:anandsahu7862@gmail.com" className="text-blue-300 hover:text-blue-100">anandsahu7862@gmail.com</a></P>
      <P><strong className="text-blue-100">Service Provider:</strong> Saurabh Pal</P>
      <P><strong className="text-blue-100">Application:</strong> Legal Docs Maker</P>

      <div className="text-blue-500/40 text-xs mt-8">Effective Date: 7 September 2026</div>
    </>
  );

  return (
    <LegalLayout title={title} date={date}>
      {content}
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
