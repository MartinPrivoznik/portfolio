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
    // {
    //   label: "services",
    //   href: "/services",
    // },
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
    // {
    //   label: "services",
    //   href: "/services",
    // },
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
      logoUrl: "https://foxentry.com/assets/img/logo-foxentry-symbol.svg",
      skills: [
        { text: "Typescript", importance: "primary" },
        { text: "NextJS", importance: "primary" },
        { text: "React", importance: "default" },
        { text: "Node.js", importance: "default" },
      ],
    },
    {
      name: "Dreamind s.r.o.",
      period: "Aug 2022",
      role: "dreamindRole",
      length: "now",
      urlText: "dreamind.cz",
      url: "https://dreamind.cz/",
      description: "dreamindDesc",
      logoUrl: "/images/dreamind-logo.webp",
      skills: [
        { text: "C#", importance: "primary" },
        { text: "ASP.NET", importance: "primary" },
        { text: "Next.JS", importance: "primary" },
        { text: "Tailwind", importance: "default" },
        { text: "SASS", importance: "default" },
        { text: "PostgreSQL", importance: "default" },
        { text: "Firebase", importance: "default" },
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
      logoUrl: "https://www.valatron.com/files/ikona-modra.png",
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
      logoUrl:
        "data:image/jpeg;base64,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",
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
      logoUrl:
        "https://media.licdn.com/dms/image/C4D0BAQE1mhW_JXxh1g/company-logo_200_200/0/1631310627212?e=2147483647&v=beta&t=nKv8uXxK4mhhI3zhgaElxCLEzYRnDEP1wM-MMvHqU00",
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
      logoUrl: "https://www.valatron.com/files/ikona-modra.png",
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
      logoUrl: "https://edulk.cz/getFile/id:466617/type:large/logo_spsse.jpg",
      url: "https://www.prumyslovkaliberec.cz/",
      urlText: "www.prumyslovkaliberec.cz",
    },
    {
      name: "fitName",
      period: "sep2020toapr2022",
      status: "fitStatus",
      field: "fitField",
      logoUrl:
        "https://fit.cvut.cz/media-a-pr/corporate-identity/logo-fit-en-modra.svg",
      url: "https://fit.cvut.cz/",
      urlText: "fit.cvut.cz",
    },
    {
      name: "fisName",
      period: "sep2023tonow",
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
      url: "https://420-countdown.privoznik.dev/",
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
    techstack: [
      {
        iconPath: "/images/techstack/nextjs-icon.svg",
        name: "Next.js",
      },
      {
        iconPath: "/images/techstack/react.svg",
        name: "React",
      },
      {
        iconPath: "/images/techstack/tailwindcss-icon.svg",
        name: "Tailwind",
      },
      {
        iconPath: "/images/techstack/javascript.svg",
        name: "Javascript",
      },
      {
        iconPath: "/images/techstack/typescript-icon.svg",
        name: "Typescript",
      },
      {
        iconPath: "/images/techstack/nodejs-icon.svg",
        name: "Node.js",
      },
      {
        iconPath: "/images/techstack/dotnet.svg",
        name: ".NET",
      },
      {
        iconPath: "/images/techstack/redis.svg",
        name: "Redis",
      },
      {
        iconPath: "/images/techstack/docker-icon.svg",
        name: "Docker",
      },
      {
        iconPath: "/images/techstack/mongodb-icon.svg",
        name: "MongoDB",
      },
      {
        iconPath: "/images/techstack/postgresql.svg",
        name: "PostgreSQL",
      },
      {
        iconPath: "/images/techstack/gitlab.svg",
        name: "GitLab CI/CD",
      },
    ],
  },
};
