import { Gauge, RocketIcon, ShieldCheckIcon } from "lucide-react";

export type TechLogoItem = {
  id: string;
  name: string;
  logo: string;
};

export type TechCategory = {
  id: string;
  title: string;
  titleClassName: string;
  className: string;
  items: TechLogoItem[];
};

export type TechFeature = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const LOGO_BASE = "/assets/tech%20solutions/technologies/logos";

const logo = (id: string, name: string, file: string): TechLogoItem => ({
  id,
  name,
  logo: `${LOGO_BASE}/${file}`,
});

export const TECHNOLOGY_GROUPS = [
  {
    title: "Frontend",
    color: "#53a1ff",
    groupSpan: "45%",
    span: "grid grid-cols-2 md:grid-cols-4",
    items: [
      {
        name: "React",
        icon: "/assets/tech solutions/technologies/react-svgrepo-com.svg",
      },
      {
        name: "Angular",
        icon: "/assets/tech solutions/technologies/brand-angularjs-svgrepo-com.svg",
      },
      {
        name: "Vue.js",
        icon: "/assets/tech solutions/technologies/vue-svgrepo-com.svg",
      },
      {
        name: "Next.js",
        icon: "/assets/tech solutions/technologies/next-dot-js-svgrepo-com.svg",
      },
      {
        name: "HTML5",
        icon: "/assets/tech solutions/technologies/html-5-svgrepo-com.svg",
      },
      {
        name: "CSS3",
        icon: "/assets/tech solutions/technologies/css3-svgrepo-com.svg",
      },
      {
        name: "JavaScript",
        icon: "/assets/tech solutions/technologies/javascript-svgrepo-com.svg",
      },
      {
        name: "TypeScript",
        icon: "/assets/tech solutions/technologies/typescript-svgrepo-com.svg",
      },
    ],
  },

  {
    title: "Mobile",
    color: "#9f8dff",
    groupSpan: "20%",
    span: "grid grid-cols-2",
    items: [
      {
        name: "Flutter",
        icon: "/assets/tech solutions/technologies/flutter-svgrepo-com (1).svg",
      },
      {
        name: "React Native",
        icon: "/assets/tech solutions/technologies/react-svgrepo-com.svg",
      },
      {
        name: "iOS",
        icon: "/assets/tech solutions/technologies/apple-svgrepo-com.svg",
      },
      {
        name: "Android",
        icon: "/assets/tech solutions/technologies/android-color-svgrepo-com.svg",
      },
    ],
  },

  {
    title: "Backend",
    color: "#35d58e",
    groupSpan: "35%",
    span: "grid grid-cols-3",
    items: [
      {
        name: "Node.js",
        icon: "/assets/tech solutions/technologies/node-js-svgrepo-com.svg",
      },
      {
        name: "PHP",
        icon: "/assets/tech solutions/technologies/php-svgrepo-com.svg",
      },
      {
        name: "Java",
        icon: "/assets/tech solutions/technologies/java-4-logo-svgrepo-com.svg",
      },
      {
        name: "Ruby on Rails",
        icon: "/assets/tech solutions/technologies/rails-svgrepo-com.svg",
      },

      // TODO: ASP.NET icon missing
      {
        name: "ASP.NET Core",
        icon: "/assets/tech solutions/technologies/dotnet-svgrepo-com.svg",
      },

      // TODO: SharePoint icon missing
      {
        name: "SharePoint",
        icon: "/assets/tech solutions/technologies/ms-sharepoint-svgrepo-com.svg",
      },
    ],
  },

  {
    title: "Database",
    color: "#00b7ff",
    groupSpan: "20%",
    span: "grid grid-cols-2",
    items: [
      // TODO: MySQL icon missing
      {
        name: "MySQL",
        icon: "/assets/tech solutions/technologies/MySQL.svg",
      },
      {
        name: "PostgreSQL",
        icon: "/assets/tech solutions/technologies/PostgresSQL.svg",
      },

      // TODO: SQL Server icon missing
      // {
      //   name: "MongoDB",
      //   icon: "/assets/tech solutions/technologies/MongoDB.svg",
      // },
    ],
  },

  {
    title: "E-Commerce",
    color: "#ff4be1",
    groupSpan: "10%",
    span: "grid grid-cols-1",
    items: [
      {
        name: "Shopify",
        icon: "/assets/tech solutions/technologies/shopify-color-svgrepo-com.svg",
      },
    ],
  },

  {
    title: "Integrations & Services",
    color: "#ff9240",
    groupSpan: "30%",
    span: "grid grid-cols-3",
    items: [
      // TODO: Google icon missing
      {
        name: "Google Analytics",
        icon: "/assets/tech solutions/technologies/google_analytics-icon.svg",
      },
      {
        name: "Facebook",
        icon: "/assets/tech solutions/technologies/meta-icon.svg",
      },

      // TODO: WhatsApp icon missing
      {
        name: "WhatsApp",
        icon: "/assets/tech solutions/technologies/whatsapp-business-icon.svg",
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    color: "#ff9240",
    groupSpan: "40%",
    span: "grid grid-cols-4",
    items: [
      {
        name: "AWS",
        icon: "/assets/tech solutions/technologies/AWS.svg",
      },
      {
        name: "Azure",
        icon: "/assets/tech solutions/technologies/Azure.svg",
      },
      {
        name: "Docker",
        icon: "/assets/tech solutions/technologies/Docker.svg",
      },
      {
        name: "Git",
        icon: "/assets/tech solutions/technologies/Git.svg",
      },
    ],
  },
];

export const TECH_SHOWCASE_FEATURES: TechFeature[] = [
  { id: "secure", title: "Secure", description: "Built with security best practices", icon: <ShieldCheckIcon className="text-[#F38358] h-12 w-12 flex-shrink-0" strokeWidth={1.5} /> },
  { id: "scalable", title: "Scalable", description: "Designed to grow with your business", icon: <RocketIconSvg className="text-[#F38358] h-12 w-12 flex-shrink-0" /> },
  { id: "performant", title: "Performant", description: "Optimized for speed and reliability", icon: <GaugeIcon className="text-[#F38358] h-12 w-12 flex-shrink-0" /> },
  { id: "future-ready", title: "Future-ready", description: "Using modern tech to stay ahead", icon: <CodeIcon className="text-[#F38358] h-12 w-12 flex-shrink-0" /> },
];


export function CodeIcon({ className }: { className: string }) {
  return (
    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 10V18C3 19.1046 3.89543 20 5 20H9M3 10V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V10M3 10H21M21 10V13" stroke="#F38358" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 16L13 18L15 20" stroke="#F38358" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 16L21 18L19 20" stroke="#F38358" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="6" cy="7" r="1" fill="#F38358"/>
<circle cx="9" cy="7" r="1" fill="#F38358"/>
</svg>
  )
}

export function RocketIconSvg({ className }: { className: string }) {
  return (
    <svg fill="#F38358" width="800px" height="800px" viewBox="0 0 16 16" id="rocket-16px" xmlns="http://www.w3.org/2000/svg">
  <path id="Path_54" data-name="Path 54" d="M-3.5,0H-7.028a6.257,6.257,0,0,0-5.466,3.2l-1.137,1.806A5.5,5.5,0,0,0-19,10.5a.5.5,0,0,0,.5.5h1.793L-14,13.707V15.5a.5.5,0,0,0,.5.5,5.5,5.5,0,0,0,5.493-5.369l1.782-1.122A6.271,6.271,0,0,0-3,4.028V.5A.5.5,0,0,0-3.5,0ZM-4,4.028a5.284,5.284,0,0,1-2.734,4.62l-6.695,4.216-2.435-2.435,4.23-6.719A5.274,5.274,0,0,1-7.028,1H-4ZM-14.305,6.076-16.776,10h-1.2A4.508,4.508,0,0,1-14.305,6.076Zm1.305,8.9v-1.2l3.924-2.471A4.506,4.506,0,0,1-13,14.972Zm2.077-9.857A2.811,2.811,0,0,0-8.115,7.923,2.81,2.81,0,0,0-5.308,5.115,2.81,2.81,0,0,0-8.115,2.308,2.811,2.811,0,0,0-10.923,5.115Zm2.808,1.808A1.81,1.81,0,0,1-9.923,5.115,1.81,1.81,0,0,1-8.115,3.308,1.809,1.809,0,0,1-6.308,5.115,1.809,1.809,0,0,1-8.115,6.923Z" transform="translate(19)"/>
</svg>
  )
}

export function GaugeIcon({ className }: { className: string }) {
  return (
    <svg height="800px" width="800px" fill="#F38358" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512">
{/* <style type="text/css">
	.st0{fill:#F38358;}
</style> */}
<g>
	<path className="st0" d="M491.896,264.561c-19.448-45.944-51.883-84.992-92.734-112.589C358.311,124.367,308.96,108.214,256,108.214
		c-35.29,0-69,7.169-99.633,20.129C110.4,147.786,71.351,180.23,43.75,221.076C16.154,261.899,0,311.287,0,364.214
		c0,4.427,0.109,8.814,0.331,13.185h80.202v-26.371H37.775c1.512-25.395,7.338-49.589,16.766-71.895
		c9.315-22.04,22.174-42.25,37.819-59.903l30.234,30.242l18.656-18.661l-30.214-30.218c7.186-6.363,14.766-12.307,22.746-17.677
		c31.508-21.274,68.754-34.501,109.033-36.896v42.734h26.37v-42.766c25.423,1.524,49.617,7.338,71.92,16.774
		c22.044,9.315,42.258,22.17,59.903,37.814l-30.234,30.234l18.632,18.661l30.238-30.218c6.371,7.186,12.279,14.766,17.69,22.75
		c21.266,31.509,34.5,68.758,36.891,109.024h-42.738v26.371h80.162c0.242-4.371,0.35-8.758,0.35-13.185
		C512.025,328.931,504.838,295.222,491.896,264.561z"/>
	<path className="st0" d="M329.375,199.471c-1.415-0.621-3.169,0.073-4.133,1.653l-75.383,124.072c-18.915,2.96-33.4,19.291-33.4,39.033
		c0,21.847,17.706,39.556,39.553,39.556c21.842,0,39.553-17.709,39.553-39.556c0-7.395-2.064-14.282-5.593-20.202l40.968-140.396
		C331.46,201.859,330.791,200.093,329.375,199.471z M256.012,384.004c-10.924,0-19.778-8.847-19.778-19.774
		c0-10.927,8.854-19.782,19.778-19.782c10.92,0,19.774,8.855,19.774,19.782C275.786,375.157,266.932,384.004,256.012,384.004z"/>
</g>
</svg>
  )
}
