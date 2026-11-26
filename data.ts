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
    tech: ["Power BI", "DAX", "SQL", "Python", "Excel", "Zoho", "Shopify"],
    bullets: [
      "Built Power BI dashboards tracking revenue trends, delivery performance, pending orders and stock movement, giving management real-time visibility.",
      "Integrated Zoho, Shopify, Amazon and Noon sales, POS and invoice data into one reporting view for accurate revenue reporting.",
      "Automated recurring sales and operations reports with SQL, Python and Excel, cutting manual effort and speeding up management reporting.",
      "Validated and reconciled data across sales, inventory and finance systems to improve reporting reliability.",
      "Ran Python web-scraping competitor analysis to support pricing and positioning decisions.",
      "Managed the Zoho Inventory product lifecycle (SKUs, pricing, categorisation) to keep product data structured and scalable.",
    ] },
  { company: "Myn Global", role: "Data Analyst, Ride-Hailing & E-commerce", period: "Sep 2022 – Apr 2023", place: "Bangalore, India",
    tech: ["SQL", "Python", "Cohort Analysis", "Funnel Analysis"],
    bullets: [
      "Analysed the ride lifecycle (acquisition, activation, repeat use, drop-off) to uncover customer-journey friction.",
      "Ran cohort and segmentation analysis to understand retention and booking behaviour across customer groups.",
      "Built funnel analysis from app visit to completed booking to pinpoint conversion leakage for targeted optimisation.",
      "Analysed peak-hour demand, ride density and regional performance to support pricing and demand decisions.",
      "Delivered ad-hoc insights to product and operations teams to guide feature and performance improvements.",
    ] },
  { company: "Satyukt Analytics", role: "Junior Data Analyst", period: "Feb 2021 – Aug 2022", place: "Bangalore, India",
    tech: ["Python", "SQL", "R", "Web Scraping", "ML data prep"],
    bullets: [
      "Automated data extraction and preprocessing in Python, turning raw unstructured data into analysis-ready datasets.",
      "Wrote advanced SQL across multi-source databases for exploratory analysis and reporting.",
      "Scraped government and public agricultural platforms to build reliable datasets for research.",
      "Supported earthquake simulation analysis in R for catastrophe risk modelling for international clients.",
      "Prepared and validated large datasets for machine-learning workflows, ensuring quality and feature consistency.",
    ] },
];

// SAMPLE projects drawn from your CV work. Replace with real projects, datasets, metrics and links.
export const projects = [
  { title: "Multi-Channel Sales Dashboard", problem: "Sales data was split across Zoho, Shopify, Amazon and Noon, so revenue visibility was slow and manual.",
    dataset: "Invoice, POS and order data from 4 platforms", tools: ["Power BI", "DAX", "SQL"],
    insights: "TODO: add 2–3 real insights (e.g. top channels, delivery delays).", impact: "TODO: add measured impact (e.g. hours saved per week).", github: "#", demo: "#" },
  { title: "Automated KPI Reporting Pipeline", problem: "Recurring operational reports took repeated manual work and risked inconsistencies.",
    dataset: "Sales, inventory and finance exports", tools: ["Python", "SQL", "Excel"],
    insights: "TODO: add insights.", impact: "TODO: add measured impact.", github: "#", demo: "#" },
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
  { name: "Post Graduate Certification in Data Science", org: "IIIT Bangalore", year: "2021", type: "Data Science" },
  { name: "Exploratory Data Analysis for Machine Learning", org: "Coursera", year: "TODO", type: "Analytics" },
  { name: "Claude 101 & Claude Code 101", org: "Claude Academy (Anthropic)", year: "2026", type: "AI Tools" },
];

// Only facts that come from your CV. Add more if you can verify them.
export const stats = [
  { label: "Years of Experience", value: 5, suffix: "+" },
  { label: "Companies", value: 3, suffix: "" },
  { label: "Data Sources Integrated", value: 4, suffix: "" },
  { label: "Industries Served", value: 4, suffix: "" },
];
