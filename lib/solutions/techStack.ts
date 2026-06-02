/** Grouped technology stack data for the redesigned Tech section. */

export type TechStackItem = {
  id: string;
  name: string;
  logoSrc: string;
  logoAlt?: string;
};

export type TechStackGroup = {
  id: string;
  label: string;
  labelClassName: string;
  colSpan?: "one" | "two";
  items: TechStackItem[];
};

export type TechStackHighlight = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

const LOCAL_TECH_LOGO_BASE = "/assets/tech solutions/technologies/logos";

const tech = (id: string, name: string, slug: string, logoAlt?: string): TechStackItem => ({
  id,
  name,
  logoSrc: `${LOCAL_TECH_LOGO_BASE}/${slug}.svg`,
  ...(logoAlt ? { logoAlt } : {}),
});

export const TECH_STACK_GROUPS: TechStackGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    labelClassName: "text-[#65a9ff]",
    colSpan: "two",
    items: [
      tech("react", "React", "react"),
      tech("angular", "Angular", "angular"),
      tech("vuejs", "Vue.js", "vuedotjs"),
      tech("nextjs", "Next.js", "nextdotjs"),
      tech("html5", "HTML5", "html5"),
      tech("css3", "CSS3", "css"),
      tech("javascript", "JavaScript", "javascript"),
      tech("typescript", "TypeScript", "typescript"),
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    labelClassName: "text-[#b197fc]",
    items: [
      tech("flutter", "Flutter", "flutter"),
      tech("react-native", "React Native", "react"),
      tech("ios", "iOS", "apple"),
      tech("android", "Android", "android"),
    ],
  },
  {
    id: "backend",
    label: "Backend",
    labelClassName: "text-[#62dbb4]",
    items: [
      tech("nodejs", "Node.js", "nodedotjs", "Node.js"),
      tech("php", "PHP", "php"),
      tech("java", "Java", "openjdk"),
      tech("rails", "Ruby on Rails", "rubyonrails"),
      tech("aspnet", "ASP.NET Core", "dotnet"),
      tech("sharepoint", "SharePoint", "microsoftsharepoint"),
    ],
  },
  {
    id: "cloud-devops",
    label: "Cloud & DevOps",
    labelClassName: "text-[#ffb267]",
    items: [
      tech("aws", "Amazon Web Services", "amazonwebservices", "AWS"),
      tech("azure", "Microsoft Azure", "microsoftazure"),
    ],
  },
  {
    id: "database",
    label: "Database",
    labelClassName: "text-[#79a7ff]",
    items: [
      tech("mysql", "MySQL", "mysql"),
      tech("postgresql", "PostgreSQL", "postgresql"),
      tech("mssql", "Microsoft SQL Server", "microsoftsqlserver"),
    ],
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    labelClassName: "text-[#ff7fd8]",
    items: [tech("shopify", "Shopify", "shopify")],
  },
  {
    id: "integrations",
    label: "Integrations & Services",
    labelClassName: "text-[#ffd16b]",
    colSpan: "two",
    items: [
      tech("google", "Google", "google"),
      tech("facebook", "Facebook", "facebook"),
      tech("instagram", "Instagram", "instagram"),
      tech("whatsapp", "WhatsApp", "whatsapp"),
      tech("linkedin", "LinkedIn", "linkedin"),
    ],
  },
];

export const TECH_STACK_HIGHLIGHTS: TechStackHighlight[] = [
  { id: "secure", title: "Secure", description: "Built with security best practices", icon: "🛡" },
  { id: "scalable", title: "Scalable", description: "Designed to grow with your business", icon: "🚀" },
  { id: "performant", title: "Performant", description: "Optimized for speed and reliability", icon: "⚡" },
  { id: "future-ready", title: "Future-ready", description: "Using modern tech to stay ahead", icon: "</>" },
];
