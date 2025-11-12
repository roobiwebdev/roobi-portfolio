import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Roobi Mulatu",
  initials: "RM",
  url: "https://github.com/roobiwebdev",
  location: " Hawassa, Ethiopia",
  locationLink: "https://maps.app.goo.gl/SDaUMo2GCskmfuuH7",
  description:
    "AI Enginner & Full-stack Developer helping businesses save time, cut costs, and scale faster with smart AI systems that just work.",
  // summary:
  //   "I am a Intermediate Full stack web and mobile developer with experience of working in a Typescript ecosystem. I use various technologies to build scaleable, fast and efficient software that satisfy the need of companies and client's. I like working in the challenging enviroment where i get to learn and grow as a professional while bringing a value to a company. ",
  titles: [
    "AI Automation Systems",
    "Voice AI & Real-Time Agents",
    "Custom Integrations & Dashboards",
  ],
  summary:
    "I build full end-to-end AI automation & voice AI systems, not just workflows, but complete setups that actually saves time and money. My goal is to turn complex, manual business operations into smooth, 24/7 AI-powered systems that scale without breaking.",
  summary1:
    "I automate business operations using tools like n8n, Make, and Zapier by connecting any CRMs, forms, calls, and databases into one intelligent flow. From onboarding and client management to lead qualification and internal ops, I design systems that cut hundreds of manual hours and keep teams focused on growth.",
  summary2:
    "Using tools like Vapi, ElevenLabs, Retail, Twilio, and GPT, I build AI voice agent that talk, qualify, and take action. This system answer calls, handle bookings, update CRMs, and deliver full voice automation that saves companies tens of thousands of dollars a year.",
  summary3:
    "Beyond plug-and-play tools, I use Javascript, Python, and Next.js to build custom dashboards and real-time control panels that track automation performance live. This makes every system transparent, measurable, and easy to scale giving businesses true ownership of their automations.",
  avatarUrl: "/mee.JPG",
  skills: [
    // AI & Automation
    "AI Automation",
    "AI Agent Development",
    "Workflow Automation",
    "n8n",
    "Make.com",
    "Zapier",
    "GoHighLevel",
    "Vapi",
    "Retell",
    "Voiceflow",
    "Airtable",
    "Apify",
    "Twilio",
    "HubSpot",
    "OpenAI API",
    "LangChain",
    "LlamaIndex",
    "RAG Systems",
    "Vector Databases",
    "LLM Fine-tuning",
    "Model Training",

    // Frontend
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Python",
    "Expo",
    "TailwindCSS",
    "Electron.js",

    // Backend & APIs
    "Node.js",
    "Express.js",
    "Nest.js",
    "Serverless Backend",
    "tRPC",
    "Socket.io",

    // Databases & ORMs
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Prisma",
    "Drizzle",
    "Redis",
    "Supabase",
    "Firebase",

    // Cloud & DevOps
    "Docker",
    "AWS",
    "GCP",
    "Cloudflare",
    "Monorepos",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mulaturhobot7@gmail.com",
    tel: "+251987000383",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/roobiwebdev",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/devnerd/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/devnerd0",
        icon: Icons.x,

        navbar: true,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/+251987000383",
        icon: Icons.whatsapp,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=mulaturhobot7@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  // work: [
  //   {
  //     company: "MemhirEt",
  //     badges: [],
  //     href: "https://memhiret.com/",
  //     location: "Remote",
  //     title: "Mobile Engineer",
  //     logoUrl: "/memhir.jpg",
  //     start: "Augest 2024",
  //     end: "October 2024",
  //     description:
  //       "MemeherEt is an online learning platform based in Ethiopia, which targets students in their highschool to provide a preparation for EUEE(Ethiopian University Entrance Examination).I have Built their Mobile application from the Ground up , assuring cross platform compatibility, responsiveness, clean UI and efficient in its performance.The teh stack includes React Native, Expo, Zustand, React Query, DDD architecture Native-wind",
  //   },
  //   {
  //     company: "Upstart Studio",
  //     href: "https://up-start-studio-4bqe.vercel.app/",
  //     badges: [],
  //     location: "Addis Ababa, Ethiopia",
  //     title: "Full stack Software Engineer",
  //     logoUrl: "/upstart.svg",
  //     start: "October 2024",
  //     end: "now",
  //     description:
  //       "Upstart studio is a creative and product focused agency that works on helping startups build mvp, handle branding and more. I have successfully Build the the landing page for the Agency. Architected and wrote the entire MVP of the internal tool for the Agency. currently building a SAAS Application for Freelancers.",
  //   },
  //   {
  //     company: "Fincraze",
  //     href: "#",
  //     badges: [],
  //     location: "Remote, Contract",
  //     title: "Fullstack Web and Mobile Developer",
  //     logoUrl: "/fincraze.svg",
  //     start: "May 2024",
  //     end: "July 2024",
  //     description:
  //       "Fincraze is a company that works on business and logestics .. my main role was to build an end to end secured agent based money transaction flow system. Worked on the soul product minimum valuable product (MVP). built the Entire backend infrastructure, Ui Design and frontend Development for the admin Dashboard. Build 3 different mobile apps for money sender, receiver and agents. Deployed the entire Backend in a virtual private server(VPS).",
  //   },
  //   {
  //     company: "Xplor",
  //     href: "#",
  //     badges: [],
  //     location: "Addis Ababa Ethiopia",
  //     title: "CFO - Mobile Developer",
  //     logoUrl: "/xplor.png",
  //     start: "February 2024",
  //     end: "October 2024",
  //     description:
  //       "Explore was meant to be a go to platform for peoples who live in Addis ( Capital of Ethiopia ) to find Events amd places from the tip of their finger. I was a co-founding member of the Xplor team and also has worked on building the MVP for the app. Unfortunately the startup is currently not running",
  //   },
  //   {
  //     company: "NerdSpace",
  //     href: "https://li.me/",
  //     badges: [],
  //     location: "San Francisco, CA",
  //     title: "Founder and Full stack developer",
  //     logoUrl: "/nerdspace.png",
  //     start: "January 2018",
  //     end: "April 2018",
  //     description:
  //       "Nerdspace is a social networking platform for anyone passionate about tech, art, gaming, building cool projects, or simply meeting like-minded people and also a space to connect, collaborate, and bring ideas to life. I build nerdspace in my learning time and write the entire backend and also mobile app with Javascript, currently migrating to Ts in my free time. not actively working on it.",
  //   },
  //   // {
  //   //   company: "Mitre Media",
  //   //   href: "https://mitremedia.com/",
  //   //   badges: [],
  //   //   location: "Toronto, ON",
  //   //   title: "Software Engineer",
  //   //   logoUrl: "/mitremedia.png",
  //   //   start: "May 2017",
  //   //   end: "August 2017",
  //   //   description:
  //   //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
  //   // },
  // ],

  work: [
    {
      company: "Animoveo.com",
      badges: [],
      href: "https://animoveo.com",
      location: "Remote",
      title: "AI Automation Specialist",
      logoUrl: "/workvolve.jpeg",
      start: "February 2024",
      end: "October 2025",
      description:
        "Built AI automations and voice agents for real estate agencies — including a full lead reactivation system that brought back inactive clients. Designed end-to-end systems integrating CRMs, dashboards, and AI workflows for real-time business efficiency.",
    },
    {
      company: "Upstart.ai",
      badges: [],
      href: "#",
      location: "Remote",
      title: "AI Enginner",
      logoUrl: "/upstart.svg",
      start: "January 2025",
      end: "July 2025",
      description:
        "I tuned and optimized LLM models for accuracy, collaborated with data and backend teams to integrate AI insights into production, and built scalable ML infrastructure to power analytics and automation.",
    },
    {
      company: "MegaMess",
      badges: [],
      href: "#",
      location: "Remote",
      title: "FullStack Developer",
      logoUrl: "/xplor.png",
      start: "December 2023",
      end: "November 2024",
      description:
        "Developed custom web solutions and automation systems for businesses, including real-time dashboards and workflow optimizations. Focused on improving operational efficiency and reducing manual workload.",
    },
    {
      company: "Independent Full-Stack Developer",
      badges: [],
      href: "#",
      location: "Remote",
      title: "Independent Developer",
      logoUrl: "/nerdspace.png",
      start: "September 2024",
      end: "Augest 2025",
      description:
        "Built and shipped multiple full-stack and AI-powered products, including an AI article summarizer and productivity tools using Next.js, TypeScript, Python, and OpenAI API. Contributed to open-source projects while focusing on system architecture, performance optimization, and reusable components that streamline development and enhance user experience.",
    },
    // {
    //   company: "Full-Stack Projects & Open Source / Next.js Developer",
    //   badges: [],
    //   href: "#",
    //   location: "Remote",
    //   title: "Independent Developer",
    //   logoUrl: "/fincraze.svg",
    //   start: "March 2025",
    //   end: "Present",
    //   description:
    //     "Contributed to open-source and built multiple real-world Full-Stack projects, including a Dictionary app, QR-code generator, Pomodoro app, and more. Focused on system architecture, performance, and reusable components.",
    // },
    {
      company: "Freelance & Contract Projects",
      badges: [],
      href: "#",
      location: "Remote",
      title: "Available for Hire",
      logoUrl: "/ib.png",
      start: "September 2022",
      end: "Present",
      description:
        "Delivering AI automations, web apps, and AI solutions for clients across industries. I take on freelance and contract projects to build systems that save time, cut costs, and scale operations efficiently.",
    },
  ],

  education: [
    {
      school: "Hawassa University",
      href: "https://www.hu.edu.et/",
      degree: "Bachelor's of Computer Science",
      logoUrl: "/aau1.png",
      start: "2023",
      end: "Dropped Out",
    },
  ],
  projects: [
    {
      title: "Dental AI Receptionist",
      type: "voice agent",
      href: "https://elevenlabs.io",
      dates: "March 05 2025",
      active: true,
      description:
        "Saved the clinic $45,000/year by fully automating patient calls, bookings, reschedules, and CRM updates. Built a 24/7 AI voice receptionist that answers calls, qualifies patients, manages appointments, updates the CRM automatically, and transfers calls when needed.",
      technologies: [
        "Twilio",
        "ElevenLabs",
        "GPT",
        "n8n",
        "AI Agent Development",
        "API Integrations",
      ],
      links: [
        {
          type: "Test Agent",
          href: "https://elevenlabs.io",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/roobiwebdev/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ai-dental-receptionist.png",
      video: "",
    },
    {
      title: "B2B Lead Qualification AI",
      type: "AI Automations",
      href: "",
      dates: "April 23 2025",
      active: true,
      description:
        "Saved the agency $65,500/year by automating lead scoring, follow-ups, and CRM updates. Built an n8n + GPT-4 system that analyzes new leads, scores them, sends personalized replies, and pushes only qualified leads to the CRM. The automation runs 24/7, cut 5,000+ minutes of manual work monthly, and improved conversion rates.",
      technologies: ["Automation", "n8n", "CRM Integrations", "OpenAI API"],
      links: [
        {
          type: "Test",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/roobiwebdev",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/b2b-lead-qualifier.png",
      video: "",
    },
    {
      title: "Admin Analytics",
      type: "web app",
      href: "https://github.com/roobiwebdev/next-shadcn-dashboard-starter",
      dates: "October 2023 - march 2024",
      active: true,
      description:
        "Gave the business real-time insights into sales, visitor trends, and engagement, enabling faster decisions and improving revenue tracking. Built a dynamic admin dashboard showing interactive bar charts, stacked area trends, and visitor breakdowns. The dashboard tracks desktop/mobile traffic, recent sales, and browser usage, giving the team a clear picture of performance and helping them prioritize growth strategies.",
      technologies: [
        "JavaScript",
        "Next.js",
        "Typescript",
        "Python",
        "Data Visualization",
        "Admin UX",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/roobiwebdev/next-shadcn-dashboard-starter",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/roobiwebdev/next-shadcn-dashboard-starter",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/dashboard.png",
      video: "",
    },
    {
      title: "Hireon AI",
      type: "web app",
      href: "https://hireon-aii.vercel.app/",
      dates: "April 2025 - Augest 2025",
      active: true,
      description:
        "Helps delelopers improve technical interview performance with instant AI feedback, boosting their confidence and readiness for real job interviews. Built an AI-powered platform that simulates real technical interviews, analyzes answers, and provides actionable feedback. Users can practice coding, system design, and behavioral questions, receiving personalized guidance to improve and score higher.",
      technologies: [
        "Next.js",
        "Vapi AI",
        "Typescript",
        "Gemini",
        "TailwindCSS",
        "Shadcn UI",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://hireon-aii.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/roobiwebdev/Hireon",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/hireon-ai.png",
      video: "",
    },
    {
      title: "Client Onboarding Automation",
      type: "AI Automation",
      href: "",
      dates: "June 03 2025",
      active: true,
      description:
        "Cut 200+ manual hours/month and saved the agency $50K+/year by fully automating client onboarding. Built a Make.com automation that handles the entire onboarding workflow collecting client info, sending emails, and organizing files using Typeform, Slack, Gmail, GHL, and Google Drive. The system reduced 80% of manual work and ensures smooth, error-free onboarding.",
      technologies: [
        "Make",
        "Slack",
        "Typeform",
        "Gmail",
        "CRM",
        "GHL",
        "Google Drive",
      ],
      links: [
        {
          type: "Test",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/onboarding-automation.png",
      video: "",
    },
    {
      title: "Lyro AI Agent",
      type: "chatbot",
      href: "",
      dates: "September 2025",
      active: true,
      description:
        "Boosted customer engagement and sales on an eCommerce camera tools website by providing instant AI support for pricing, product model checks, and detailed product guidance. Integrated into the client’s website to assist visitors 24/7, reducing customer support workload by 70% and increasing conversion rates by 18%.",
      technologies: [
        "Next.js",
        "GPT",
        "AI Chatbot",
        "Ecommerce Integrations",
        "CRM",
      ],
      links: [
        {
          type: "Website",
          href: "https://edelkrone.com/", // add live link if available
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "", // add GitHub repo if public
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/lyro-ai-agent.png",
      video: "",
    },
    {
      title: "Sumz AI",
      type: "web app",
      href: "https://my-sumz-ai.vercel.app/",
      dates: "september 2024",
      active: true,
      description:
        "Helps users save time by instantly generating concise summaries from any article or blog, boosting productivity and knowledge retention. Built a web app that uses OpenAI’s GPT model to create quick, clear summaries from URLs or text input. Designed for readers and professionals who need the gist fast without reading the full content.",
      technologies: ["Next.js", "OpenAI API", "Typescript", "Productive-tool"],
      links: [
        {
          type: "Website",
          href: "https://my-sumz-ai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/roobiwebdev/Sumz-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/my-sumz-ai.png",
      video: "",
    },
    {
      title: "SoulScribe: Android app",
      type: "mobile app",
      href: "https://soulscribe-landing.vercel.app/",
      dates: "March 2024",
      active: true,
      description:
        "SoulScribe is a mobile app that serves as a pocket cheat sheet for Bible verses, meticulously categorized and presented for various life situations.",
      technologies: ["React Native", "Expo", "Native-wind"],
      links: [
        {
          type: "Website",
          href: "https://soulscribe-landing.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/roobiwebdev",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/soul.png",
      video: "",
    },
    {
      title: "No Junk: Android app",
      type: "mobile app",
      href: "https://no-junk-landing.vercel.app/",
      dates: "September 2024",
      active: true,
      description:
        "No Junk is an Android app that helps users discover and share the most valuable content from across all social media. It streamlines content discovery, saves users time, and encourages community engagement by surfacing top posts efficiently.",
      technologies: [
        "React Native",
        "Expo",
        "Firebase",
        "Native-wind",
        "Clerk",
      ],
      links: [
        {
          type: "Website",
          href: "https://no-junk-landing.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/roobiwebdev",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/noJunk.png",
      video: "",
    },
    {
      title: "Orimon AI Bot",
      type: "chatbot",
      href: "",
      dates: "October 2025",
      active: true,
      description:
        "Deployed a conversational AI bot that drives instant engagement and improves user onboarding. Enabled the client platform to automatically respond to customer queries, streamline onboarding, and provide personalized guidance, cutting manual support by 60% and increasing onboarding completion rate by 25%.",
      technologies: [
        "Next.js",
        "GPT",
        "AI Chatbot",
        "Real-time Messaging",
        "Automation",
      ],
      links: [
        {
          type: "Website",
          href: "https://bot.orimon.ai/deploy/index.html?tenantId=538f4190-6d59-4c6f-9fa6-9ca9e127afb4&testBot=true&defaultOpen=true", // add live link
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://orimon.ai/?utm_source=client_bot&utm_medium=chatbot&utm_campaign=powered_by_link", // add GitHub repo if public
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/orimon-ai-bot.png",
      video: "",
    },
    {
      title: "Relevance AI Agent",
      type: "chatbot",
      href: "",
      dates: "November 2025",
      active: true,
      description:
        "Embedded a powerful conversational AI with advanced tool integrations and memory capabilities, improving response accuracy and user satisfaction. The agent automatically retrieves relevant data using LangChain and Vector DB integrations, cutting research time by 50% and increasing customer task completion rate by 30%.",
      technologies: [
        "GPT",
        "LangChain",
        "Vector DB",
        "AI Chatbot",
        "Tool Integrations",
      ],
      links: [
        {
          type: "Website",
          href: "https://app.relevanceai.com/agents/bcbe5a/f4e532452cc0-43f2-902c-409648b1382b/8c4553d6-9eca-4854-a300-93e0ca412313/embed-chat?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd/chat&input_placeholder_text=Type+your+message...&hide_logo=false&conversationId=new", // add live link
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://relevanceai.com/", // add GitHub repo if public
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/relevance-ai-agent.png",
      video: "",
    },
    {
      title: "AI Influencer Video Generator",
      type: "AI Automation",
      href: "",
      dates: "November 2025",
      active: true,
      description:
        "Built an automated AI-driven UGC-style video content pipeline for influencers and brands. From a single Telegram message, the workflow generates 7 daily influencer scripts, creates images, converts them into videos with captions & hashtags, stores everything in Drive, and logs actions in Sheets. Reduced manual content creation time by 90% and enabled brands and agencies to scale campaigns efficiently without hiring extra editors.",
      technologies: [
        "n8n",
        "OpenAI GPT",
        "AI Video Generation",
        "Telegram API",
        "Google Drive",
        "Google Sheets",
        "Automation Pipelines",
      ],
      links: [
        {
          type: "Demo Workflow",
          href: "", // add link if you have a public demo
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "", // add GitHub repo if public
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ai-infulencer-video-generator.png",
      video: "",
    },
    {
      title: "Sales Voice Agent",
      type: "Voice Agent",
      href: "",
      dates: "September 2025",
      active: true,
      description:
        "Deployed an outbound voice AI that qualifies leads through natural conversations, automating initial outreach and scoring. Reduced manual calling time by 75%, engaged 1,500+ leads weekly, and increased qualified lead conversion by 22%.",
      technologies: [
        "VapiVoice AI",
        "GPT",
        "Voice Agent",
        "CRM Integrations",
        "Automation",
      ],
      links: [
        {
          type: "Test Agent",
          href: "https://vapi.ai/?demo=true&shareKey=443f87ab-a416-4c4d-afeb-e7b295df26be&assistantId=9c63beb4-f919-47a6-9c30-4246541c28eb", // add live demo if available
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://vapi.ai", // GitHub repo if public
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sales-voice-agent.png",
      video: "",
    },
    {
      title: "Product Support Voice Agent",
      type: "voice Agent",
      href: "",
      dates: "October 2025",
      active: true,
      description:
        "Built a real-time voice assistant for product support that guides users through troubleshooting and FAQs. Integrated Retail AI to handle queries instantly, reducing support call duration by 60% and increasing customer satisfaction by 30%.",
      technologies: [
        "Retail AI",
        "GPT",
        "Voice Agent",
        "Automation",
        "Real-time Support",
      ],
      links: [
        {
          type: "Test Agent",
          href: "", // add demo link if available
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "", // add GitHub repo if public
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/product-support-voice-agent.webp",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "React Native UI library",
      type: "web app",
      dates: "a week ago",
      location: "active",
      description:
        "Currently on a progress of building and publishing a shadCN like ui component library for react native.",
      image: "",
      mlh: "",
      links: [],
    },
    {
      title: "Building an AI powered Book Mark Manager",
      dates: "Started 2 weeks ago",
      location: "active",
      description:
        "building an app that will act as a second brain for peoples to help memorize query over all the memories and chat with the ai",
      image: "",
      mlh: "",
      links: [],
    },
    {
      title:
        "Researching to Build an application building AI agent ( kinda like bolt.new )",
      dates: "Started this week",
      location: "pending",
      description:
        "building an app that will help anyone build apps by just prompting and conversation. this is teaching me a lot like how toknization works, embedings, LLMS, it also gave me interest to learn more about stuff like agents.",
      image: "",
      mlh: "",
      links: [],
    },
    {
      title:
        "Building in real life version of manHunt game with ReactNative and Golang",
      dates: "started this week",
      location: "3 days in a week",
      description:
        "I am building this to work more with maps, microservices and also Golang. I also stream building this app in public while learning it at the same time.",
      image: "",
      mlh: "",
      links: [],
    },
  ],
} as const;
