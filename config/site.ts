export type SiteConfig = typeof siteConfig;

/**
 * Mostly translation keys for strings
 */
export const siteConfig = {
  name: "MartinPrivoznik",
  title: "siteTitle",
  description: "siteDescription",
  keywords: "siteKeywords",
  siteLocales: ["en", "cs", "chewbacca", "groot"],
  siteLocalesData: [
    {
      name: "en",
      displayName: "English",
      flagSrc: "/images/languages/en.webp",
    },
    {
      name: "cs",
      displayName: "Česky",
      flagSrc: "/images/languages/cs.webp",
    },
    {
      name: "chewbacca",
      displayName: "Chewbacca",
      flagSrc: "/images/languages/chewbacca.webp",
    },
    {
      name: "groot",
      displayName: "Groot",
      flagSrc: "/images/languages/groot.webp",
    },
  ],
  defaultLocales: "en",
  navItems: [
    {
      label: "home",
      href: "/",
    },
    {
      label: "about",
      href: "/about",
    },
    {
      label: "projects",
      href: "/projects",
    },
    {
      label: "cv",
      href: "/cv",
    },
    {
      label: "contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "home",
      href: "/",
    },
    {
      label: "about",
      href: "/about",
    },
    {
      label: "projects",
      href: "/projects",
    },
    {
      label: "cv",
      href: "/cv",
    },
    {
      label: "contact",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/MartinPrivoznik",
    linkedIn:
      "https://www.linkedin.com/in/martin-p%C5%99%C3%ADvozn%C3%ADk-5b16a0192/",
    discord: "https://discord.com/users/252171172974821386",
  },
  currentPositions: [
    {
      name: "Foxentry",
      period: "dec2024",
      role: "foxentryRole",
      length: "now",
      urlText: "foxentry.com",
      url: "https://foxentry.com/",
      description: "foxentryDesc",
      logoUrl: "/images/companies/foxentry.svg",
      skills: [
        { text: "Typescript", importance: "primary" },
        { text: "NextJS", importance: "primary" },
        { text: "React", importance: "default" },
        { text: "Node.js", importance: "default" },
      ],
    },
  ],
  experiences: [
    {
      name: "Valatron s.r.o.",
      period: "nov2020todec2024",
      role: "valatronRole",
      length: "4yr",
      urlText: "valatron.com",
      url: "https://www.valatron.com/",
      description: "valatronDesc",
      logoUrl: "/images/companies/valatron.png",
      skills: [
        { text: "C#", importance: "primary" },
        { text: "ASP.NET", importance: "primary" },
        { text: "React", importance: "default" },
        { text: "Angular", importance: "default" },
        { text: "WPF", importance: "default" },
        { text: "MSSQL", importance: "default" },
        { text: "OCR", importance: "default" },
      ],
    },
    {
      name: "Praha CODING School",
      period: "mar2022tomar2023",
      role: "prahaCodingRole",
      length: "1yr1mo",
      urlText: "prahacoding.cz",
      url: "https://prahacoding.cz/",
      description: "prahaCodingDesc",
      logoUrl: "/images/companies/praha-coding.jpg",
      skills: [
        { text: "Teaching", importance: "primary" },
        { text: "PHP", importance: "primary" },
        { text: "HTML", importance: "default" },
        { text: "CSS", importance: "default" },
        { text: "JavaScript", importance: "default" },
      ],
    },
    {
      name: "Whitesoft s.r.o.",
      period: "oct2019tojul2020",
      role: "whitesoftRole",
      length: "10months",
      urlText: "whitesoft.cz",
      url: "https://www.whitesoft.cz/",
      description: "whitesoftDesc",
      logoUrl: "/images/companies/whitesoft.jpg",
      skills: [
        { text: "C#", importance: "primary" },
        { text: "WinForms", importance: "primary" },
        { text: "MSSQL", importance: "default" },
      ],
    },
    {
      name: "Valatron s.r.o.",
      period: "jun2019tosep2019",
      role: "valatronOldRole",
      length: "4months",
      urlText: "valatron.com",
      url: "https://www.valatron.com/",
      description: "valatronOldDesc",
      logoUrl: "/images/companies/valatron.png",
      skills: [
        { text: "C#", importance: "primary" },
        { text: "Xamarin", importance: "primary" },
        { text: "Firebase", importance: "default" },
        { text: "SQLite", importance: "default" },
      ],
    },
  ],
  studies: [
    {
      name: "spsseName",
      period: "sep2016tojun2020",
      status: "spsseStatus",
      field: "spsseField",
      logoUrl: "/images/prumka.jpg",
      url: "https://www.prumyslovkaliberec.cz/",
      urlText: "www.prumyslovkaliberec.cz",
    },
    {
      name: "fisName",
      period: "fisVsePeriod",
      status: "fisStatus",
      field: "fisField",
      logoUrl: "/images/vse.webp",
      url: "https://fis.vse.cz/",
      urlText: "fis.vse.cz",
    },
  ],
  projects: [
    {
      name: "thisPortfolioName",
      shortDescription: "thisPortfolioShortDesc",
      links: [
        {
          text: "home",
          url: "/",
          private: false,
        },
      ],
      text: "thisPortfolioText",
      technologies: ["Next.JS", "TypeScript", "Tailwind", "Framer Motion"],
    },
    {
      name: "eshopCymedicaName",
      shortDescription: "eshopCymedicaShortDesc",
      links: [
        {
          text: "eshop.cymedica.cz",
          url: "https://eshop.cymedica.cz",
          private: true,
          internal: null,
        },
      ],
      text: "eshopCymedicaText",
      technologies: [
        "ASP.NET Core",
        "MVC",
        "MSSQL",
        "REDIS",
        "WCF",
        "DevOps CI/CD",
      ],
    },
    {
      name: "petShopCymedicaName",
      shortDescription: "petShopCymedicaShortDesc",
      links: [
        {
          text: "petshop.cymedica.cz/weilovna",
          url: "https://petshop.cymedica.cz/weilovna",
          private: false,
        },
        {
          text: "shop.vetnem.cz",
          url: "https://shop.vetnem.cz",
          private: false,
        },
      ],
      text: "petShopCymedicaText",
      technologies: ["ASP.NET Core", "MVC", "MSSQL", "Hangfire", "REST API"],
    },
    {
      name: "markeetoName",
      shortDescription: "markeetoShortDesc",
      links: [
        {
          text: "markeeto.cz",
          url: "https://markeeto.cz",
          private: false,
        },
      ],
      text: "markeetoText",
      technologies: ["ASP.NET Core", "REST API", "MSSQL", "Angular"],
    },
    {
      name: "praetorName",
      shortDescription: "praetorShortDesc",
      text: "praetorText",
      technologies: [
        "ASP.NET Core",
        "REST API",
        "MSSQL",
        "Hangfire",
        "React",
        "OCR",
      ],
    },
    {
      name: "confinName",
      shortDescription: "confinShortDesc",
      links: [
        {
          text: "www.pozemky-mirotice.cz/",
          url: "https://www.pozemky-mirotice.cz",
          private: false,
        },
        {
          text: "www.pozemky-vinarice.cz/",
          url: "https://www.pozemky-vinarice.cz",
          private: false,
        },
      ],
      text: "confinText",
      technologies: ["Next.JS", "REST API", "Bootstrap"],
    },
    {
      name: "degaName",
      shortDescription: "degaShortDesc",
      text: "degaText",
      technologies: [".NET Framework", "WPF", "SQLite", "RS232 interface"],
    },
    {
      name: "citrName",
      shortDescription: "citrShortDesc",
      links: [
        {
          text: "www.whitesoft.cz/reseni/male-a-stredni-firmy/citr",
          url: "https://www.whitesoft.cz/reseni/male-a-stredni-firmy/citr",
          private: false,
        },
      ],
      text: "citrText",
      technologies: [".NET Framework", "WinForms", "MSSQL"],
    },
    {
      name: "freshFlowName",
      shortDescription: "freshFlowShortDesc",
      links: [
        {
          text: "freshflow.cz",
          url: "https://freshflow.cz",
          private: false,
        },
      ],
      text: "freshFlowText",
      technologies: ["Xamarin", "SQLite", "REST API", "Firebase"],
    },
    {
      name: "tuxManProjectsName",
      shortDescription: "tuxManProjectsShortDesc",
      links: [
        {
          text: "GitHub",
          url: "https://github.com/MartinPrivoznik/TuxMan-FPGA",
          private: false,
        },
      ],
      text: "tuxManProjectsText",
      technologies: ["VHDL", "Basys2", "VGA", "PS2"],
    },
  ],
  uselessProjects: [
    {
      url: "/projects/middleFinger",
      imgPath: "/images/uselessProjects/middleFinger/thumbnail.webp",
      isExternal: false,
    },
    {
      url: "https://420-countdown.com/",
      imgPath: "/images/uselessProjects/420-countdown/420-mascot.webp",
      isExternal: true,
    },
    {
      url: "https://vse-tester.privoznik.dev/",
      imgPath:
        "https://pr.vse.cz/wp-content/uploads/page/58/VSE_logo_CZ_circle_black.jpg",
      isExternal: true,
    },
  ],
  cv: {
    skills: [
      {
        name: ".NET (excluding Blazor)",
        value: 95,
      },
      {
        name: "SQL",
        value: 90,
      },
      {
        name: "React, Next.js",
        value: 85,
      },
      {
        name: "NoSQL",
        value: 70,
      },
      {
        name: "Angular",
        value: 60,
      },
      {
        name: "C/C++",
        value: 60,
      },
      {
        name: "PHP",
        value: 55,
      },
    ],
    communicationSkills: [
      {
        name: "czechLanguage",
        value: 100,
      },
      {
        name: "englishC1",
        value: 83,
      },
    ],
    achievements: [
      {
        name: "tuxManName",
        subdesc: "tuxManSubDesc",
        issuer: "MŠMT ČR",
        issuerLink: "https://www.msmt.cz/",
        date: "tuxManDate",
        desc: "tuxManDesc",
        videoEmbedLink: "https://www.youtube.com/embed/RuPYUzX7cac",
        gitLink: "https://github.com/MartinPrivoznik/TuxMan-FPGA",
      },
    ],
  },
  aboutSections: [
    {
      name: "basicInformation",
      desc: "basicInformationDesc",
      imgPath: "/images/about/1-min.webp",
      imgWidth: 400,
    },
    {
      name: "hobbies",
      desc: "hobbiesDesc",
      imgPath: "/images/about/3-min.webp",
      imgWidth: 250,
    },
    {
      name: "personalGoals",
      desc: "personalGoalsDesc",
      imgPath: "/images/about/2-min.webp",
      imgWidth: 200,
    },
  ],
  services: {
    techstack: {
      frameworks: [
        {
          iconPath: "/images/techstack/nextjs-icon.svg",
          name: "Next.js",
        },
        {
          iconPath: "/images/techstack/svelte.svg",
          name: "Svelte",
        },
        {
          iconPath: "/images/techstack/NestJS.svg",
          name: "NestJS",
        },
        {
          iconPath: "/images/techstack/electron.svg",
          name: "Electron",
        },
        {
          iconPath: "/images/techstack/dotnet.svg",
          name: ".NET",
        },
      ],
      programmingLanguages: [
        {
          iconPath: "/images/techstack/C-Sharp.svg",
          name: "C#",
        },
        {
          iconPath: "/images/techstack/cpp.svg",
          name: "C++",
        },
        {
          iconPath: "/images/techstack/typescript-icon.svg",
          name: "TypeScript",
        },
      ],
      databases: [
        {
          iconPath: "/images/techstack/ms-sql.svg",
          name: "MS SQL",
        },
        {
          iconPath: "/images/techstack/postgresql.svg",
          name: "PostgreSQL",
        },
        {
          iconPath: "/images/techstack/mongodb-icon.svg",
          name: "MongoDB",
        },
        {
          iconPath: "/images/techstack/redis.svg",
          name: "Redis",
        },
      ],
      automation: [
        {
          iconPath: "/images/techstack/docker-icon.svg",
          name: "Docker",
        },
        {
          iconPath: "/images/techstack/azure-devops.svg",
          name: "Azure DevOps",
        },
        {
          iconPath: "/images/techstack/gitlab.svg",
          name: "GitLab CI/CD",
        },
        {
          iconPath: "/images/techstack/git.svg",
          name: "Git",
        },
      ],
    },
  },
};
