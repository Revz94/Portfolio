// ALL CONTENT LIVES HERE. Edit this file to customise the site.
// Items marked TODO are placeholders: replace with real numbers/links only if true.
export const profile = {
  name: "Revathy Remesh",
  title: "Data Analyst",
  tagline: "Sales & Operations Analytics",
  value: "I turn multi-source sales, inventory and operations data into dashboards and automated reports that give teams real-time visibility and faster, more confident decisions.",
  location: "Dubai, UAE",
  email: "jobsrevathyremesh1994@gmail.com",
  phone: "+971 55 207 6690",
  linkedin: "https://www.linkedin.com/in/revathyremesh",
  github: "https://github.com/your-username", // TODO
  resume: "/Revathy_Remesh_CV.pdf",
  siteUrl: "https://your-domain.vercel.app", // TODO
  about: "Data Analyst with 5+ years across retail, e-commerce, ride-hailing and agri-analytics. I build Power BI dashboards, automate recurring KPI reporting with SQL and Python, and reconcile data across systems so numbers can be trusted. Based in Dubai on a spouse visa and available immediately.",
};

export const experience = [
  { company: "MLM Furniture", role: "Data Assistant, Sales & Operations", period: "Jun 2023 – Apr 2026", place: "Dubai, UAE",
    tech: ["Power BI", "DAX", "Python", "Excel", "Zoho Inventory", "Shopify"],
    bullets: [
      "Consolidated sales, POS, invoice and stock data from 4 platforms (Zoho, Shopify, Amazon, Noon) into accurate revenue reporting for finance and operations leaders.",
      "Built and maintained 2 interactive Power BI dashboards covering sales and campaign performance, revenue trends, deliveries, pending orders and stock movement, giving managers near real-time visibility.",
      "Replaced manual report building with Python and Excel automation, cutting preparation time by 60% and making outputs more consistent.",
      "Reconciled figures with the finance team every month and cross-checked platforms against each other, keeping sales, inventory and finance numbers aligned.",
      "Owned the catalogue of 3,000+ imported furniture items in Zoho Inventory (SKU naming, cost pricing, images, categories), working at a pace of 300 new listings per week.",
      "Tracked competitor pricing and positioning through Python web scraping to support pricing decisions.",
    ] },
  { company: "Myn Global", role: "Data Analyst, Ride-Hailing & E-commerce", period: "Sep 2022 – Apr 2023", place: "Bangalore, India",
    tech: ["SQL", "Python", "Cohort Analysis", "Funnel Analysis"],
    bullets: [
      "Mapped the rider journey from sign-up to repeat use and drop-off, uncovering friction points behind lost customers.",
      "Ran cohort and segmentation analysis to compare retention, usage frequency and booking behaviour across customer groups.",
      "Built a funnel from app visit to completed booking that pinpointed where conversions leaked, guiding targeted fixes.",
      "Studied peak-hour demand, ride density and regional differences to support pricing and demand planning.",
      "Provided ad-hoc analysis to product and operations teams that informed feature changes and performance work.",
    ] },
  { company: "Satyukt Analytics", role: "Junior Data Analyst", period: "Feb 2021 – Aug 2022", place: "Bangalore, India",
    tech: ["Python", "SQL", "R", "Web Scraping", "ML data prep"],
    bullets: [
      "Automated Python pipelines that turned raw, unstructured data into clean datasets, and validated large datasets used for machine learning.",
      "Wrote advanced SQL across multiple databases to answer exploratory questions and meet reporting needs.",
      "Collected data from government and public agricultural sites through scraping to build dependable research datasets.",
      "Assisted with earthquake simulation analysis in R for catastrophe risk modelling for international clients.",
      "Worked with data scientists and domain experts to turn business requirements into model-ready datasets.",
    ] },
];

// SAMPLE projects drawn from your CV work. Replace with real projects, datasets, metrics and links.
export const projects = [
  { title: "Multi-Channel Sales Dashboard", problem: "Sales data was split across Zoho, Shopify, Amazon and Noon, so revenue visibility was slow and manual.",
    dataset: "Invoice, POS and order data from 4 platforms", tools: ["Power BI", "DAX", "SQL"],
    insights: "TODO: add 2–3 real insights (e.g. top channels, delivery delays).", impact: "2 dashboards giving near real-time visibility across 4 sales platforms.", github: "#", demo: "#" },
  { title: "Automated KPI Reporting Pipeline", problem: "Recurring operational reports took repeated manual work and risked inconsistencies.",
    dataset: "Sales, inventory and finance exports", tools: ["Python", "Excel"],
    insights: "TODO: add insights.", impact: "Cut report preparation time by 60%.", github: "#", demo: "#" },
  { title: "Competitor Pricing Intelligence", problem: "Pricing decisions lacked a structured view of competitor prices and positioning.",
    dataset: "Public competitor product pages (scraped)", tools: ["Python", "Requests", "Beautiful Soup", "Pandas"],
    insights: "TODO: add insights.", impact: "TODO: add measured impact.", github: "#", demo: "#" },
];

// level: 1–5 (edit to match your honest self-assessment)
export const skills: { group: string; items: [string, number][] }[] = [
  { group: "Programming", items: [["Python (Pandas, NumPy)", 4], ["SQL (CTEs, Window Functions)", 5], ["R", 2]] },
  { group: "Visualization & BI", items: [["Power BI", 5], ["DAX & Data Modelling", 4], ["Data Storytelling", 4]] },
  { group: "Databases", items: [["MySQL", 4], ["Relational Databases", 4]] },
  { group: "Analytics", items: [["Advanced Excel", 5], ["KPI Frameworks", 4], ["Regression & Time Series", 3], ["Hypothesis Testing", 3]] },
  { group: "Other", items: [["Power Query", 4], ["Git & GitHub", 3], ["REST APIs", 3], ["Web Scraping", 4]] },
];

export const certs = [
  { name: "B.Tech, Electrical & Electronics Engineering", org: "Kerala University", year: "2016", type: "Degree" },
  { name: "Post Graduate Certification in Data Science", org: "IIIT Bangalore", year: "2021", type: "Data Science" },
  { name: "Exploratory Data Analysis for Machine Learning", org: "Coursera", year: "TODO", type: "Analytics" },
  { name: "Claude 101 & Claude Code 101", org: "Claude Academy (Anthropic)", year: "2026", type: "AI Tools" },
];

// Only facts that come from your CV. Add more if you can verify them.
export const stats = [
  { label: "Years of Experience", value: 5, suffix: "+" },
  { label: "Power BI Dashboards", value: 2, suffix: "" },
  { label: "Platforms Integrated", value: 4, suffix: "" },
  { label: "Inventory Items Managed", value: 3000, suffix: "+" },
];
