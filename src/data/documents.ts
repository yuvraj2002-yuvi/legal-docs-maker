export interface Document {
  id: string;
  title: string;
  titleHi?: string;
  court: string;
  category: string;
  description: string;
  descriptionHi?: string;
  courtHi?: string;
  categoryHi?: string;
}

export interface Category {
  name: string;
  count: number;
  documents: Document[];
}

export interface Court {
  id: string;
  name: string;
  subtitle: string;
  count: number;
  icon: string;
  categories: Category[];
}

export const hindiCourtNames: Record<string, string> = {
  "High Court": "उच्च न्यायालय",
  "District Court": "जिला न्यायालय",
  "Family Court": "पारिवारिक न्यायालय",
  "Juvenile Court": "किशोर न्यायालय",
  "Revenue Court": "राजस्व न्यायालय",
  "Forum Court": "फोरम न्यायालय",
};

export const hindiCategoryNames: Record<string, string> = {
  "Bail Applications": "जमानत आवेदन",
  "Civil Cases": "सिविल मामले",
  Claims: "दावे",
  "Criminal Cases": "आपराधिक मामले",
  "General Formats": "सामान्य प्रारूप",
  "Matrimonial Cases": "वैवाहिक मामले",
  "Agreements & Drafts": "अनुबंध और प्रारूप",
  RTI: "सूचना का अधिकार",
  Divorce: "तलाक",
  Maintenance: "भरण-पोषण",
  "Consent Terms": "सहमति शर्तें",
  Bail: "जमानत",
  Appeals: "अपील",
  Collector: "कलेक्टर",
  Commissioner: "कमिश्नर",
  SDM: "अनुविभागीय दंडाधिकारी",
  Tehsil: "तहसील",
  "Consumer Forum": "उपभोक्ता फोरम",
  Administrative: "प्रशासनिक",
};

export const courts: Court[] = [
  {
    id: "high-court",
    name: "High Court",
    subtitle: "WP, MCRC, CRA, SA, WA",
    count: 46,
    icon: "⚖️",
    categories: [
      {
        name: "Bail Applications",
        count: 6,
        documents: [
          { id: "hc-bail-1", title: "Anticipatory Bail Application", titleHi: "अग्रिम जमानत आवेदन", court: "High Court", category: "Bail Applications", description: "Application for anticipatory bail under Section 438 CrPC" },
          { id: "hc-bail-2", title: "Regular Bail Application", titleHi: "नियमित जमानत आवेदन", court: "High Court", category: "Bail Applications", description: "Regular bail application under Section 439 CrPC" },
          { id: "hc-bail-3", title: "Bail Cancellation Application", titleHi: "जमानत रद्द आवेदन", court: "High Court", category: "Bail Applications", description: "Application for cancellation of bail granted by lower court" },
          { id: "hc-bail-4", title: "Surety Application", titleHi: "जमानत पत्र", court: "High Court", category: "Bail Applications", description: "Surety bond for bail application" },
          { id: "hc-bail-5", title: "NDPS Bail Application", titleHi: "NDPS जमानत आवेदन", court: "High Court", category: "Bail Applications", description: "Bail application in NDPS Act cases" },
          { id: "hc-bail-6", title: "Juvenile Bail Application", titleHi: "किशोर जमानत आवेदन", court: "High Court", category: "Bail Applications", description: "Bail application for juvenile offenders" },
        ],
      },
      {
        name: "Civil Cases",
        count: 17,
        documents: [
          { id: "hc-civil-1", title: "Writ Petition (Civil)", titleHi: "रिट याचिका (सिविल)", court: "High Court", category: "Civil Cases", description: "Writ petition under Article 226 of Constitution" },
          { id: "hc-civil-2", title: "First Appeal", titleHi: "प्रथम अपील", court: "High Court", category: "Civil Cases", description: "First appeal against decree of civil court" },
          { id: "hc-civil-3", title: "Second Appeal", titleHi: "द्वितीय अपील", court: "High Court", category: "Civil Cases", description: "Second appeal on substantial question of law" },
          { id: "hc-civil-4", title: "Stay Application", titleHi: "स्थगन आवेदन", court: "High Court", category: "Civil Cases", description: "Application for stay of proceedings" },
        ],
      },
      { name: "Claims", count: 1, documents: [{ id: "hc-claim-1", title: "MAC Claim Petition", titleHi: "MAC दावा याचिका", court: "High Court", category: "Claims", description: "Motor Accident Claims Tribunal petition" }] },
      { name: "Criminal Cases", count: 9, documents: [
        { id: "hc-cr-1", title: "Criminal Revision", titleHi: "आपराधिक पुनरीक्षण", court: "High Court", category: "Criminal Cases", description: "Criminal revision under Section 397 CrPC" },
        { id: "hc-cr-2", title: "Writ Petition (Criminal)", titleHi: "रिट याचिका (आपराधिक)", court: "High Court", category: "Criminal Cases", description: "Habeas corpus and other criminal writs" },
      ] },
      { name: "General Formats", count: 9, documents: [
        { id: "hc-gen-1", title: "Vakalatnama", titleHi: "वकालतनामा", court: "High Court", category: "General Formats", description: "Power of attorney to advocate" },
        { id: "hc-gen-2", title: "Memo of Parties", titleHi: "पक्षकारों का ज्ञापन", court: "High Court", category: "General Formats", description: "Details of parties in the case" },
      ] },
      { name: "Matrimonial Cases", count: 4, documents: [
        { id: "hc-mat-1", title: "Divorce Petition", titleHi: "तलाक याचिका", court: "High Court", category: "Matrimonial Cases", description: "Petition for dissolution of marriage" },
        { id: "hc-mat-2", title: "Maintenance Appeal", titleHi: "भरण-पोषण अपील", court: "High Court", category: "Matrimonial Cases", description: "Appeal against maintenance order" },
      ] },
    ],
  },
  {
    id: "district-court",
    name: "District Court",
    subtitle: "Criminal, Civil, Claims, NI Act",
    count: 129,
    icon: "🏛️",
    categories: [
      {
        name: "Agreements & Drafts",
        count: 12,
        documents: [
          { id: "dc-agr-1", title: "Rent Agreement", titleHi: "किराया अनुबंध", court: "District Court", category: "Agreements & Drafts", description: "Residential/commercial rent agreement format" },
          { id: "dc-agr-2", title: "Loan Agreement", titleHi: "ऋण अनुबंध", court: "District Court", category: "Agreements & Drafts", description: "Personal or business loan agreement" },
          { id: "dc-agr-3", title: "Adoption Deed", titleHi: "दत्तक ग्रहण विलेख", court: "District Court", category: "Agreements & Drafts", description: "Legal adoption deed format" },
          { id: "dc-agr-4", title: "Agreement for Sale of Agricultural Land", titleHi: "कृषि भूमि बिक्री अनुबंध", court: "District Court", category: "Agreements & Drafts", description: "Sale agreement for agricultural property" },
          { id: "dc-agr-5", title: "Agreement to Sell House", titleHi: "मकान बिक्री अनुबंध", court: "District Court", category: "Agreements & Drafts", description: "Agreement to sell residential property" },
          { id: "dc-agr-6", title: "Land Sale Agreement", titleHi: "भूमि बिक्री अनुबंध", court: "District Court", category: "Agreements & Drafts", description: "Land sale and purchase agreement" },
          { id: "dc-agr-7", title: "Mortgage Deed", titleHi: "बंधक विलेख", court: "District Court", category: "Agreements & Drafts", description: "Property mortgage deed format" },
          { id: "dc-agr-8", title: "Partition Deed", titleHi: "विभाजन विलेख", court: "District Court", category: "Agreements & Drafts", description: "Family property partition deed" },
          { id: "dc-agr-9", title: "Partnership Deed", titleHi: "साझेदारी विलेख", court: "District Court", category: "Agreements & Drafts", description: "Business partnership agreement" },
          { id: "dc-agr-10", title: "Vehicle Power of Attorney", titleHi: "वाहन पावर ऑफ अटॉर्नी", court: "District Court", category: "Agreements & Drafts", description: "POA for vehicle related matters" },
          { id: "dc-agr-11", title: "Vehicle Sale Agreement", titleHi: "वाहन बिक्री अनुबंध", court: "District Court", category: "Agreements & Drafts", description: "Motor vehicle sale agreement" },
          { id: "dc-agr-12", title: "Will", titleHi: "वसीयत", court: "District Court", category: "Agreements & Drafts", description: "Last will and testament format" },
        ],
      },
      { name: "RTI", count: 3, documents: [
        { id: "dc-rti-1", title: "RTI Application Form", titleHi: "RTI आवेदन प्रपत्र", court: "District Court", category: "RTI", description: "Right to Information Act 2005 application" },
        { id: "dc-rti-2", title: "First Appeal under RTI", titleHi: "RTI प्रथम अपील", court: "District Court", category: "RTI", description: "First appeal under Section 19(1) of RTI Act" },
        { id: "dc-rti-3", title: "Second Appeal under RTI", titleHi: "RTI द्वितीय अपील", court: "District Court", category: "RTI", description: "Second appeal to Information Commission" },
      ] },
      { name: "Bail Applications", count: 15, documents: [
        { id: "dc-bail-1", title: "Regular Bail Application", titleHi: "नियमित जमानत आवेदन", court: "District Court", category: "Bail Applications", description: "Regular bail under Section 437 CrPC" },
        { id: "dc-bail-2", title: "Interim Bail Application", titleHi: "अंतरिम जमानत आवेदन", court: "District Court", category: "Bail Applications", description: "Interim bail for medical/personal reasons" },
      ] },
      { name: "Civil Cases", count: 20, documents: [
        { id: "dc-civil-1", title: "Civil Suit", titleHi: "सिविल वाद", court: "District Court", category: "Civil Cases", description: "General civil suit format" },
        { id: "dc-civil-2", title: "Injunction Application", titleHi: "निषेधाज्ञा आवेदन", court: "District Court", category: "Civil Cases", description: "Temporary/permanent injunction application" },
      ] },
    ],
  },
  {
    id: "family-court",
    name: "Family Court",
    subtitle: "Divorce, Maintenance, Consent",
    count: 22,
    icon: "👨‍👩‍👧",
    categories: [
      { name: "Divorce", count: 8, documents: [
        { id: "fc-div-1", title: "Mutual Consent Divorce Petition", titleHi: "आपसी सहमति तलाक याचिका", court: "Family Court", category: "Divorce", description: "Joint petition for divorce by mutual consent under Section 13B HMA" },
        { id: "fc-div-2", title: "Contested Divorce Petition", titleHi: "विवादित तलाक याचिका", court: "Family Court", category: "Divorce", description: "Divorce petition on grounds of cruelty, desertion, etc." },
      ] },
      { name: "Maintenance", count: 7, documents: [
        { id: "fc-main-1", title: "Maintenance Application (Section 125)", titleHi: "भरण-पोषण आवेदन", court: "Family Court", category: "Maintenance", description: "Maintenance application under Section 125 CrPC" },
        { id: "fc-main-2", title: "Interim Maintenance Application", titleHi: "अंतरिम भरण-पोषण", court: "Family Court", category: "Maintenance", description: "Urgent interim maintenance request" },
      ] },
      { name: "Consent Terms", count: 7, documents: [
        { id: "fc-con-1", title: "Divorce Consent Terms", titleHi: "तलाक सहमति शर्तें", court: "Family Court", category: "Consent Terms", description: "Settlement terms for mutual consent divorce" },
      ] },
    ],
  },
  {
    id: "juvenile-court",
    name: "Juvenile Court",
    subtitle: "Bail, Appeals, JJ Act",
    count: 11,
    icon: "🔒",
    categories: [
      { name: "Bail", count: 5, documents: [
        { id: "jc-bail-1", title: "Juvenile Bail Application", titleHi: "किशोर जमानत आवेदन", court: "Juvenile Court", category: "Bail", description: "Bail application under Juvenile Justice Act" },
      ] },
      { name: "Appeals", count: 6, documents: [
        { id: "jc-app-1", title: "JJ Act Appeal", titleHi: "JJ अधिनियम अपील", court: "Juvenile Court", category: "Appeals", description: "Appeal against order of Juvenile Justice Board" },
      ] },
    ],
  },
  {
    id: "revenue-court",
    name: "Revenue Court",
    subtitle: "Tehsil, SDM, Collector, Commissioner",
    count: 15,
    icon: "📋",
    categories: [
      { name: "Collector", count: 3, documents: [
        { id: "rc-col-1", title: "First Appeal under Section 44 MPLRC", titleHi: "धारा 44 MPLRC अपील", court: "Revenue Court", category: "Collector", description: "First appeal under MPLRC before Collector" },
        { id: "rc-col-2", title: "Section 133 CrPC / Section 152 BNSS, 2023", titleHi: "धारा 133 CrPC आवेदन", court: "Revenue Court", category: "Collector", description: "Application for removal of public nuisance" },
        { id: "rc-col-3", title: "Section 165 MPLRC", titleHi: "धारा 165 MPLRC", court: "Revenue Court", category: "Collector", description: "Land dispute application before Collector" },
      ] },
      { name: "Commissioner", count: 4, documents: [
        { id: "rc-com-1", title: "Revenue Appeal to Commissioner", titleHi: "कमिश्नर को राजस्व अपील", court: "Revenue Court", category: "Commissioner", description: "Appeal against Collector's order to Commissioner" },
      ] },
      { name: "SDM", count: 4, documents: [
        { id: "rc-sdm-1", title: "SDM Application", titleHi: "SDM आवेदन", court: "Revenue Court", category: "SDM", description: "General application before Sub-Divisional Magistrate" },
      ] },
      { name: "Tehsil", count: 4, documents: [
        { id: "rc-teh-1", title: "Tehsildar Application", titleHi: "तहसीलदार आवेदन", court: "Revenue Court", category: "Tehsil", description: "Revenue application before Tehsildar" },
      ] },
    ],
  },
  {
    id: "forum-court",
    name: "Forum Court",
    subtitle: "Consumer Cases, Administrative",
    count: 18,
    icon: "🏢",
    categories: [
      { name: "Consumer Forum", count: 12, documents: [
        { id: "foc-con-1", title: "Consumer Complaint", titleHi: "उपभोक्ता शिकायत", court: "Forum Court", category: "Consumer Forum", description: "Complaint before District Consumer Forum" },
        { id: "foc-con-2", title: "Consumer Appeal", titleHi: "उपभोक्ता अपील", court: "Forum Court", category: "Consumer Forum", description: "Appeal to State Consumer Commission" },
      ] },
      { name: "Administrative", count: 6, documents: [
        { id: "foc-adm-1", title: "Administrative Appeal", titleHi: "प्रशासनिक अपील", court: "Forum Court", category: "Administrative", description: "Administrative tribunal appeal" },
      ] },
    ],
  },
];

export const allDocuments: Document[] = courts.flatMap(c =>
  c.categories.flatMap(cat => cat.documents)
);

export function searchDocuments(query: string): Document[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return allDocuments.filter(
    d =>
      d.title.toLowerCase().includes(q) ||
      (d.titleHi && d.titleHi.includes(query)) ||
      d.court.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q)
  );
}
