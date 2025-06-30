import {
  benefitCard1,
  benefitCard2, benefitCard3,
  benefitCard4, benefitCard5, benefitCard6,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";
{ benefitCard4 }
{ benefitCard2 }
{ benefitCard3 }
{ benefitCard1 }
{ benefitCard5 }
{ benefitCard6 }

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "AI",
    url: "https://comming-soon-ashy.vercel.app/",
  },
  {
    id: "3",
    title: "Developers Community",
    url: "https://comming-soon-ashy.vercel.app/",
  },
  {
    id: "4",
    title: "Portfolio",
    url: "https://portifolio-steel-psi-95.vercel.app/",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "AI Tools",
    url: "https://comming-soon-ashy.vercel.app/",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Chat Model for Instant Replies",
  "Reasoning Model for Smart Context",
  "Lightning-Fast Processing",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Pricing Plans",
    text: "Enable lifetime and premium access options for users. AI tool usage, creator discounts, and community benefits — all under one simple plan.",
    date: "July 2025",
    status: "IN DESIGN",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Developer Community",
    text: "Join groups, publish AI projects, and collaborate on learning journeys. A space made for AI devs, mentors, and creators to grow together.",
    date: "August 2025",
    status: "In Progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Blog + Tool Reviews",
    text: "We’re preparing a powerful AI blog and tools directory. From expert-written articles to a curated collection of free, paid, and credit-based AI tools — all categorized for easy discovery.",
    date: "July 2025",
    status: "Rolling Out",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "AI Learning Hub + Course System",
    text: "We’re preparing a dedicated learning platform for developers — where users can access AI courses, submit projects, join mentorship groups, and creators can publish their own courses. Premium users will also get exclusive discounts on paid content.",
    date: "Coming Soon",
    status: "IN PLANNING",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Collaborate, share AI tools, contribute to open-source projects, and learn with fellow AI enthusiasts and developers – all in one interactive platform.";

export const collabContent = [
  {
    id: "0",
    title: "Project Collaboration Rooms",
    text: collabText,
  },
  {
    id: "1",
    title: "Open Source AI Tool Submissions",
  },
  {
    id: "2",
    title: "Publish Courses & Tutorials",
  },
  {
    id: "3",
    title: "Group Projects & Hackathons",
  },
  {
    id: "4",
    title: "Connect with Global Devs",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Starter",
    description: "Best for users who want to explore and test the platform.",
    price: "0",
    features: [
      "7-day trial access to locked AI tools",
      "Join the community and access public groups",
      "Read blogs, browse free tools",
      "View course listings (no discount)",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "For power users who want full access and learning perks.",
    price: "399",
    features: [
      "Unlimited access to locked AI tools",
      "Lifetime access (no monthly fees)",
      "10–30% discount on community-paid courses",
      "Submit AI tools for fast approval",
      "Early access to beta features",
    ],
  },
  {
    id: "2",
    title: "Creator",
    description: "For educators and AI tool builders who want to publish and monetize.",
    price: null,
    features: [
      "Upload and sell your own courses",
      "Earn from subscriptions or tips",
      "Add your own AI tools inside courses",
      "Detailed insights & analytics",
      "Get featured on the community homepage",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Discover AI Tools",
    text: "Easily browse and explore a curated library of AI tools for every category—Free, Paid, or Credit-based.",
    backgroundUrl: benefitCard1,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,

  },
  {
    id: "1",
    title: "Join Developer Community",
    text: "Collaborate on projects, publish tutorials, and connect with developers building the future of AI.",
    backgroundUrl: benefitCard2,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Fast Messaging AI",
    text: "Instantly chat with an AI assistant  — lightning-fast, natural replies for all topics.",
    backgroundUrl: benefitCard3,
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Multi-Model AI Search",
    text: "Search across multiple AI models and APIs to get the most diverse and accurate answers in one place.",
    backgroundUrl: benefitCard4,
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Voice Interaction AI",
    text: "Speak to the AI — it listens, analyzes your voice, and replies intelligently using voice & text.",
    backgroundUrl: benefitCard5,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Learn from Top Developers",
    text: "Watch exclusive tutorials, walkthroughs, and interviews with AI builders and creators.",
    backgroundUrl: benefitCard6 ,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
