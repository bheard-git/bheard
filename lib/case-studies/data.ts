import type { CaseStudyContent } from "./types";
import { publicAsset } from "@/lib/utils/publicAsset";

const workImage = (filename: string) => publicAsset("assets", "work", filename);

/**
 * Case studies from BHeard Final Content V4 — verified metrics only where documented.
 */
export const CASE_STUDIES: CaseStudyContent[] = [
  {
    slug: "radisson-blu-goa",
    listTitle: "Radisson Blu Goa",
    listTagline: "Building a digital growth engine for hospitality.",
    listDescription:
      "A digital strategy that turned social media into a reliable channel for engagement, enquiries, and guest consideration.",
    listMeta: "Social Media Strategy · Content Production · Performance Campaigns",
    listImage: workImage("Hospitality case study.jpg"),
    listImageAlt: "Radisson Blu Goa resort pool at dusk",
    listStats: [
      { value: "1.4M+", label: "Reach" },
      { value: "12%", label: "Engagement rate" },
      { value: "9.4%", label: "Lower CAC" },
    ],
    heroTitle: "Building a Digital Growth Engine",
    heroTitleAccent: "for a Hospitality Brand",
    heroSubtitle:
      "In an increasingly competitive hospitality market, hotels are no longer competing only on location, amenities, or pricing. They are competing for attention long before a guest makes a booking.\n\nWorking with Radisson Blu Goa, we helped build a digital presence designed to increase engagement, generate qualified leads, and create stronger connections with travellers throughout the guest journey.",
    heroMeta: "Hospitality Marketing",
    heroImage: workImage("Hospitality case study.jpg"),
    heroImageAlt: "Radisson Blu Goa luxury resort exterior and pool",
    trustedBy: { name: "Radisson Blu Goa", logo: "/assets/client-logos/radisson-blu.webp" },
    overview: {
      heading: "The brief",
      body: "Radisson Blu Goa needed a digital strategy that would differentiate the property beyond rooms and offers while driving measurable business outcomes.",
    },
    challenge: {
      heading: "The Challenge",
      intro:
        "With travellers discovering, researching, and comparing hotels online, Radisson Blu needed a digital strategy that would differentiate the property beyond rooms and offers while driving measurable business outcomes.\n\nThe challenge was to turn social media from a brand visibility channel into a reliable channel of engagement, enquiries, and guest consideration.",
    },
    strategy: {
      heading: "Our Approach",
      intro:
        "We built Radisson Blu's social media presence from the ground up, creating a strategy centred around audience-led content, seasonal campaign planning, and lead generation-focused performance marketing.\n\nRather than focusing solely on the property itself, we highlighted the experiences surrounding a stay, from dining and wellness to local culture, celebrations, and destination-led storytelling. This allowed the brand to connect with travellers at different stages of their decision-making journey while creating content that encouraged engagement and enquiry.\n\nAlongside marketing initiatives, we also explored technology-led guest experience enhancements through [Guest AI](/services/tech-solutions/ai-chatbots-agents), enabling the property to create more responsive and personalised interactions across key guest touchpoints.",
    },
    execution: [],
    results: {
      heading: "Impact",
      stats: [
        { value: "204%", label: "Engagement growth" },
        { value: "2X", label: "Lead growth in two months" },
        { value: "AI-led", label: "Guest engagement via Guest AI" },
      ],
      closing:
        "Engagement increased from 108,433 to 329,673 during a high-performing seasonal campaign period, with 2X lead growth achieved within two months through campaign optimisation and performance marketing.",
    },
    impactItems: [
      {
        icon: "chart",
        value: "204%",
        title: "Engagement Growth",
        description:
          "Increasing from 108,433 to 329,673 engagements during a high-performing seasonal campaign period.",
      },
      {
        icon: "users",
        value: "2X",
        title: "Lead Growth",
        description: "Achieved within two months through campaign optimisation and performance marketing.",
      },
      {
        icon: "bot",
        value: "AI-Led",
        title: "Guest Engagement",
        description: "Introduced AI-led guest engagement capabilities through Guest AI.",
        href: "/services/tech-solutions/ai-chatbots-agents",
        hrefLabel: "Guest AI",
      },
    ],
    closingStatement:
      "By combining audience-first content, performance marketing, and hospitality-focused technology, we helped Radisson Blu strengthen its digital presence while creating a more connected experience for today's traveller. [Learn more about our hospitality expertise](/industries/hospitality-luxury).",
    cta: {
      title: "Let's build what's next",
      subtext: "If your brand operates in hospitality where experience and digital innovation drive growth, we'd love to talk.",
    },
  },
  {
    slug: "zumba-wear",
    listTitle: "Zumba Wear",
    listTagline: "Building a global lifestyle brand's community in India.",
    listDescription:
      "Community-led content and Meta performance marketing that turned brand affinity into measurable e-commerce sales.",
    listMeta: "India Market Entry Strategy · Brand Positioning · Digital Marketing",
    listImage: workImage("zumba forever case study-compressed.jpg"),
    listImageAlt: "Zumba Wear activewear lifestyle campaign",
    listStats: [
      { value: "23.3K", label: "Instagram followers" },
      { value: "274+", label: "Facebook purchases" },
      { value: "19%", label: "Peak FB engagement" },
    ],
    heroTitle: "Building a Global Lifestyle Brand's Community",
    heroTitleAccent: "in India",
    heroSubtitle:
      "When a global brand enters a new market, awareness alone isn't enough. It needs a community that identifies with the brand, engages with it, and buys from it.\n\nWorking with Zumba Wear, the global lifestyle and activewear e-commerce brand, we helped its India entity build a digital presence from the ground up — combining social media content creation, community management, website creatives, and [Meta performance marketing](/services/brand-solutions) into one connected growth engine.",
    heroMeta: "Lifestyle & E-Commerce Marketing",
    heroImage: workImage("zumba forever case study-compressed.jpg"),
    heroImageAlt: "Zumba Wear India community and activewear",
    trustedBy: { name: "Zumba Wear India" },
    overview: {
      heading: "The brief",
      body: "Zumba had a passionate global following, but its India apparel business was starting from a small digital footprint.",
    },
    challenge: {
      heading: "The Challenge",
      intro:
        "Zumba had a passionate global following, but its India apparel business was starting from a small digital footprint. The challenge was to turn brand affinity among India's Zumba community — instructors, fitness enthusiasts, and lifestyle buyers — into an engaged audience and, ultimately, into measurable e-commerce sales.",
    },
    strategy: {
      heading: "Our Approach",
      intro:
        "We built Zumba Shop India's social media presence around the community itself, not just the products.\n\nContent celebrated the instructors and events at the heart of the Zumba movement — from ZIN promotions across nine cities to live coverage of international events including Zincon Orlando and Gina Grant's Mumbai event — creating content people wanted to share, not just see.\n\nAlongside community-led content, we ran Meta ad campaigns designed for commerce: product launches, seasonal sales, and collection pre-bookings, each supported by website creatives built to convert the traffic those campaigns generated.",
    },
    execution: [],
    results: {
      heading: "Impact",
      stats: [
        { value: "23.3K", label: "Instagram followers (from 1.5K)" },
        { value: "274+", label: "Facebook ad purchases in one year" },
        { value: "15%+", label: "Website traffic from Facebook" },
      ],
      closing:
        "Peak monthly engagement rate of 19% on Facebook, with Instagram engagement reaching 5.38%. 5.5 lakh+ Facebook page reach and 6.7 lakh+ impressions in a single quarter.",
    },
    impactItems: [
      {
        icon: "users",
        value: "23.3K",
        title: "Instagram Followers",
        description: "Community grown from 1,500 to 23.3K followers over the course of the engagement.",
      },
      {
        icon: "trending",
        value: "274+",
        title: "Purchases",
        description: "Driven through Facebook ad campaigns in a single year.",
      },
      {
        icon: "chart",
        value: "19%",
        title: "Peak Engagement",
        description:
          "Peak monthly engagement rate on Facebook, with Instagram engagement reaching 5.38%. Over 15% of all website traffic driven by Facebook alone.",
      },
    ],
    closingStatement:
      "By combining community storytelling with performance marketing, we helped a global lifestyle brand find its voice in India — proving that when content builds belonging, commerce follows. [Explore consumer & FMCG work](/industries/consumer-fmcg).",
    cta: {
      title: "Let's build what's next",
      subtext: "Ready to grow your lifestyle or e-commerce brand in India? Let's talk.",
    },
  },
  {
    slug: "curly-tales-app",
    listTitle: "Curly Tales",
    listTagline: "From content platform to mobile-first experience.",
    listDescription:
      "A mobile application that brought food, travel, lifestyle, and local experiences into a single discovery ecosystem.",
    listMeta: "Mobile App Development · Content Experience Platform · Travel & Lifestyle Discovery",
    listImage: workImage("Curly tales case study-compressed.jpg"),
    listImageAlt: "Curly Tales mobile app experience",
    listStats: [
      { value: "2M+", label: "Readers reached" },
      { value: "4.7★", label: "App rating" },
    ],
    heroTitle: "Building Digital Products That Create",
    heroTitleAccent: "Stronger Customer Relationships",
    heroSubtitle:
      "As brands evolve, websites and social media channels are no longer enough to own the customer experience. Mobile applications and digital products enable brands to build deeper engagement, create direct relationships with users, and unlock new opportunities for growth.\n\nOne such example is our work with Curly Tales, one of India's most recognisable food, travel, and lifestyle media brands.",
    heroMeta: "Product & App Development",
    heroImage: workImage("Curly tales case study-compressed.jpg"),
    heroImageAlt: "Curly Tales app on mobile device",
    trustedBy: { name: "Curly Tales" },
    overview: {
      heading: "Helping Curly Tales Move Beyond Content",
      body: "As its audience grew, so did the opportunity to create a more direct relationship with users—one that extended beyond social platforms and transformed content consumption into experience discovery.",
    },
    challenge: {
      heading: "The Challenge",
      intro:
        "Curly Tales had successfully built a loyal audience across digital channels, but social media alone limited how users could discover, save, and engage with recommendations.\n\nThe challenge was to create a dedicated platform that could bring together food, travel, lifestyle, and local experiences into a single mobile-first ecosystem while remaining true to the Curly Tales brand.",
    },
    strategy: {
      heading: "Our Approach",
      intro:
        "We partnered with Curly Tales to design and develop a [mobile application](/services/tech-solutions) built around how people discover experiences today.\n\nRather than simply repurposing website content into an app, we focused on creating a product experience that made exploration more intuitive. Users could discover places, browse curated recommendations, save experiences, and access content through a platform designed specifically for mobile engagement.\n\nThe app brought together Curly Tales' content, community, and recommendations into a single destination, creating a stronger connection between inspiration and action.",
    },
    execution: [],
    results: {
      heading: "Impact",
      stats: [
        { value: "Mobile-first", label: "Platform transformation" },
        { value: "Unified", label: "Discovery ecosystem" },
        { value: "Scalable", label: "Product foundation" },
      ],
      closing:
        "Successfully transformed Curly Tales from a content-first platform into a mobile-first experience, strengthening audience engagement beyond traditional social media channels.",
    },
    impactItems: [
      {
        icon: "sparkles",
        value: "Mobile-First",
        title: "Transformation",
        description: "Successfully transformed Curly Tales from a content-first platform into a mobile-first experience.",
      },
      {
        icon: "globe",
        value: "Unified",
        title: "Discovery",
        description:
          "Created a dedicated destination for food, travel, lifestyle, and local experience discovery.",
      },
      {
        icon: "trending",
        value: "Scalable",
        title: "Foundation",
        description:
          "Established a scalable digital product capable of supporting future platform expansion.",
      },
    ],
    extraSections: [
      {
        heading: "Beyond One Product",
        body: "Our work extends beyond content and marketing into [digital product development](/services/tech-solutions), helping brands create platforms, applications, and technology experiences that strengthen audience engagement and support long-term growth.",
      },
    ],
    closingStatement:
      "By helping Curly Tales create a dedicated mobile experience, we enabled the brand to move closer to its audience—transforming inspiration into discovery through a platform designed for how people explore today.",
    cta: {
      title: "Let's build what's next",
      subtext: "Need a mobile product that deepens customer relationships? Let's talk.",
    },
  },
  {
    slug: "goa-tourism",
    listTitle: "Goa Tourism",
    listTagline: "Reframing Goa beyond peak season.",
    listDescription:
      "Destination-led storytelling that shifted perception and showcased Goa as a year-round experience.",
    listMeta: "Destination Marketing · Campaign Strategy · Digital Content",
    listImage: workImage("goa tourism case study-compressed.jpg"),
    listImageAlt: "Goa tourism destination campaign",
    listStats: [
      { value: "261.6K", label: "Views" },
      { value: "130K+", label: "Reach" },
      { value: "12.5%", label: "Engagement rate" },
    ],
    heroTitle: "Reframing Goa",
    heroTitleAccent: "Beyond Peak Season",
    heroSubtitle:
      "The strongest destinations aren't promoted through attractions alone, they're built through stories that inspire people to visit, stay longer, and return. For many travellers, Goa is defined by a familiar set of images: beaches, nightlife, and year-end holidays.\n\nWorking alongside the Travel & Tourism Association of Goa and Goa Tourism, we helped build a destination-led platform created to showcase a different side of Goa through culture, food, wellness, festivals, and local experiences that exist throughout the year.",
    heroMeta: "Destination Marketing",
    heroImage: workImage("goa tourism case study-compressed.jpg"),
    heroImageAlt: "Goa cultural and tourism experiences",
    trustedBy: { name: "Goa Tourism" },
    overview: {
      heading: "The brief",
      body: "Goa attracts millions of visitors every year, yet much of its tourism narrative remains concentrated around a few peak months and a handful of familiar experiences.",
    },
    challenge: {
      heading: "The Challenge",
      intro:
        "Goa attracts millions of visitors every year, yet much of its tourism narrative remains concentrated around a few peak months and a handful of familiar experiences.\n\nThe challenge was to shift perception, making travellers see Goa as a year-round destination rather than a seasonal getaway.",
    },
    strategy: {
      heading: "Our Approach",
      intro:
        "We built a storytelling-first destination brand, focusing on the experiences that make Goa unique beyond its beaches. Through seasonal narratives, cultural storytelling, creator collaborations, and [tourism-led campaigns](/industries/travel-tourism), we created content that showcased a richer and more authentic side of the destination.\n\nA defining example was the campaign \"There's Only One Goa\" — it took a bold strategic approach by repositioning Goa not as a competitor, but as a category of its own. Rather than relying on comparisons, it rendered them irrelevant by highlighting what only Goa could offer—its 450-year Indo-Portuguese cultural fusion, the susegad philosophy, and everyday experiences that couldn't be replicated elsewhere.\n\nWe also led the digital execution of a large-scale World Tourism Day campaign that brought together tourism businesses, creators, and government stakeholders, generating over 130,000 reach while amplifying visibility for Goa's tourism ecosystem.",
    },
    execution: [],
    results: {
      heading: "Impact",
      stats: [
        { value: "1.2M+", label: "Total reach" },
        { value: "183K+", label: "Campaign views" },
        { value: "12.5%", label: "Average engagement rate" },
      ],
      closing:
        "12K+ interactions driven through seasonal storytelling and stakeholder-led campaigns, outperforming typical destination marketing benchmarks.",
    },
    impactItems: [
      {
        icon: "globe",
        value: "1.2M+",
        title: "Reach",
        description: "Including 130K+ from the World Tourism Day campaign.",
      },
      {
        icon: "chart",
        value: "183K+",
        title: "Campaign Views",
        description: "Across tourism initiatives.",
      },
      {
        icon: "users",
        value: "12.5%",
        title: "Engagement Rate",
        description:
          "12K+ interactions driven through seasonal storytelling, outperforming typical destination marketing benchmarks.",
      },
    ],
    closingStatement:
      "By bringing together tourism stakeholders, local experiences, seasonal narratives, and community stories, we helped showcase Goa not as a destination people visit once a year, but as a destination worth discovering in every season. Our destination marketing experience also extends beyond Goa through our work with Caper Travel. [Explore travel & tourism](/industries/travel-tourism).",
    cta: {
      title: "Let's build what's next",
      subtext: "Ready to reframe your destination's story? Let's talk.",
    },
  },
  {
    slug: "dr-mickey-mehta",
    listTitle: "Dr. Mickey Mehta",
    listTagline: "Building one of India's earliest wellness personal brands online.",
    listDescription:
      "Long-term social media strategy that turned credibility into scalable digital influence and community participation.",
    listMeta: "Social Media Strategy · Content Production · Community Building",
    listImage: workImage("dr micky mehta case study-compressed.jpg"),
    listImageAlt: "Dr. Mickey Mehta wellness brand",
    listStats: [
      { value: "4M+", label: "Campaign impressions" },
      { value: "10+", label: "Milestone campaigns" },
    ],
    heroTitle: "Building One of India's Earliest Wellness",
    heroTitleAccent: "Personal Brands Online",
    heroSubtitle:
      "Before wellness creators became digital businesses and personal branding became a growth strategy, we were helping wellness experts build audiences online.\n\nOur work in the [health and wellness space](/industries/health-wellness) spans fitness leaders, yoga communities, healthcare professionals, and wellness programmes. One of these partnerships demonstrates our approach: helping wellness pioneer Dr. Mickey Mehta build and grow his digital presence over the long term.",
    heroMeta: "Health & Wellness Marketing",
    heroImage: workImage("dr micky mehta case study-compressed.jpg"),
    heroImageAlt: "Dr. Mickey Mehta wellness content",
    trustedBy: { name: "Dr. Mickey Mehta" },
    overview: {
      heading: "The brief",
      body: "Dr. Mickey Mehta was already a recognised name in the wellness industry, but his influence was largely driven through speaking engagements, workshops, and offline communities.",
    },
    challenge: {
      heading: "The Challenge",
      intro:
        "Dr. Mickey Mehta was already a recognised name in the wellness industry, but like many thought leaders of the time, his influence was largely driven through speaking engagements, workshops, and offline communities.\n\nThe challenge was to translate that credibility into a scalable digital presence—one that could consistently engage audiences, amplify his message, and create meaningful participation around wellness.",
    },
    strategy: {
      heading: "Our Approach",
      intro:
        "We built and managed Dr. Mickey Mehta's social media presence across Instagram, Facebook, and LinkedIn, creating a content ecosystem designed to educate, engage, and grow a community around holistic wellness.\n\nRather than relying on promotional content, we focused on turning key moments into high-engagement brand-building opportunities. Over the course of our engagement, we conceptualised and executed more than 10 birthday campaigns, transforming annual milestones into audience participation campaigns that reinforced Dr. Mehta's positioning while driving visibility and engagement.\n\nOne of the most successful initiatives was the \"Fittest at 55\" campaign. Built around Dr. Mehta's 55th birthday, the campaign combined storytelling, community engagement, and membership promotion into a single digital movement. The campaign generated over 4 million impressions and was featured by Social Samosa, earning recognition within the marketing and advertising industry.\n\nBeyond campaign execution, our role was to create consistency—building a digital presence that could sustain engagement year after year rather than relying on one-off viral moments.",
    },
    execution: [],
    results: {
      heading: "Impact",
      stats: [
        { value: "4M+", label: "\"Fittest at 55\" impressions" },
        { value: "10+", label: "Milestone campaigns executed" },
        { value: "Multi-platform", label: "IG, Facebook & LinkedIn" },
      ],
      closing:
        "Instagram, Facebook and LinkedIn presence built and managed from the ground up for one of India's most recognised wellness personalities.",
    },
    impactItems: [
      {
        icon: "chart",
        value: "4M+",
        title: "Impressions",
        description: "Generated through the \"Fittest at 55\" campaign.",
      },
      {
        icon: "sparkles",
        value: "10+",
        title: "Milestone Campaigns",
        description: "Conceptualised and executed over a long-term engagement.",
      },
      {
        icon: "users",
        value: "Multi-Platform",
        title: "Presence",
        description:
          "Instagram, Facebook and LinkedIn presence built and managed from the ground up for one of India's most recognised wellness personalities.",
      },
    ],
    extraSections: [
      {
        heading: "Beyond One Brand",
        body: "Our experience in the wellness sector extends beyond a single engagement. We worked with wellness expert Dr. Sameera Gupta to strengthen her personal brand through content and video-led communication. For Shammi's Yogalaya, we helped transition wellness programmes online during the COVID-19 pandemic, promoting a 21-day digital wellness initiative. We also collaborated with creators such as thatquirkymamma and supported wellness-led experiences including Yoga by the Bay by Shaina NC.",
      },
    ],
    closingStatement:
      "For wellness brands, credibility is earned over time. Our focus has always been on helping experts turn their knowledge into influence, and their influence into lasting communities.",
    cta: {
      title: "Let's build what's next",
      subtext: "Ready to grow your wellness brand online? Let's talk.",
    },
  },
  {
    slug: "rodha-edtech",
    listTitle: "Rodha",
    listTagline: "Building a scalable academic support platform.",
    listDescription:
      "An enterprise-grade EdTech platform connecting students, mentors, and administrators in one ecosystem.",
    listMeta: "EdTech Platform Development · Doubt Resolution System · Exam Preparation",
    listImage: workImage("rodha case study-compressed.jpg"),
    listImageAlt: "Rodha EdTech learning platform",
    listStats: [
      { value: "10,000+", label: "Concurrent users" },
      { value: "500+", label: "Simultaneous DB connections" },
    ],
    heroTitle: "Building a Scalable",
    heroTitleAccent: "Academic Support Platform",
    heroSubtitle:
      "As education moves beyond classrooms, students expect instant access to guidance while institutions need structured systems that can scale with growing learner communities.\n\nFor Rodha, we designed and developed a comprehensive [learning platform](/services/tech-solutions) that connected students, mentors, and administrators through a single digital ecosystem, making academic support faster, more organised, and easier to manage.",
    heroMeta: "Education Technology",
    heroImage: workImage("rodha case study-compressed.jpg"),
    heroImageAlt: "Rodha academic support platform interface",
    trustedBy: { name: "Rodha" },
    overview: {
      heading: "The brief",
      body: "As Rodha's student community grew, managing academic queries through traditional communication channels became increasingly difficult.",
    },
    challenge: {
      heading: "The Challenge",
      intro:
        "As Rodha's student community grew, managing academic queries through traditional communication channels became increasingly difficult.\n\nThe challenge was to create a platform capable of handling thousands of student interactions while ensuring faster mentor responses, structured workflows, and complete administrative visibility.",
    },
    strategy: {
      heading: "Our Approach",
      intro:
        "We designed a mobile-first platform built around the complete academic support journey—from raising a doubt to receiving mentor guidance and tracking its resolution.\n\nStudents could submit multimedia doubts, search previously answered questions, follow conversation threads, and track every stage of the resolution process through a dedicated mobile and web experience.\n\nMentors received a dedicated workspace to manage assigned queries, respond using rich tools, monitor performance, and build a searchable repository of resolved questions. Administrators gained complete operational control through real-time dashboards, reporting, mentor management, taxonomy controls, and workflow automation.\n\nDesigned for enterprise-scale deployment, the platform supports 10,000+ concurrent users, 500+ simultaneous database connections, and real-time notifications across the entire ecosystem.",
    },
    execution: [],
    results: {
      heading: "Impact",
      stats: [
        { value: "10,000+", label: "Concurrent users supported" },
        { value: "500+", label: "Simultaneous DB connections" },
        { value: "Unified", label: "Student-mentor-admin workflow" },
      ],
      closing:
        "Enabled real-time doubt management, automated workflows, and performance monitoring through dedicated role-based platforms.",
    },
    impactItems: [
      {
        icon: "users",
        value: "10,000+",
        title: "Concurrent Users",
        description: "Enterprise-grade platform capable of supporting large-scale student communities.",
      },
      {
        icon: "trending",
        value: "Unified",
        title: "Workflow",
        description:
          "Created a unified academic support workflow connecting students, mentors, and administrators within a single ecosystem.",
      },
      {
        icon: "sparkles",
        value: "Scalable",
        title: "Foundation",
        description:
          "Established a scalable foundation for Rodha's future growth and expanding student community. [Explore EdTech](/industries/education-edtech).",
        href: "/industries/education-edtech",
        hrefLabel: "EdTech",
      },
    ],
    closingStatement:
      "By connecting students, mentors, and administrators in one ecosystem, Rodha now has a platform built to scale with its community.",
    cta: {
      title: "Let's build what's next",
      subtext: "Need an EdTech platform built for scale? Let's talk.",
    },
  },
];

export function getAllCaseStudies(): CaseStudyContent[] {
  return CASE_STUDIES;
}

export function getCaseStudyBySlug(slug: string): CaseStudyContent | undefined {
  return CASE_STUDIES.find((s) => s.slug === slug);
}

export function getCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((s) => s.slug);
}
