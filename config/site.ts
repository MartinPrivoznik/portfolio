export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Martin Přívozník",
  description: "Portfolio page",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "CV",
      href: "/cv",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "CV",
      href: "/cv",
    },
    {
      label: "Contact",
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
      name: "Valatron s.r.o.",
      period: "Nov 2020",
      role: "Full Stack Software Engineer",
      length: "now",
      url: "valatron.com",
      description:
        "In this job, I mostly focus on custom web application development. I have delivered several solutions to clients based on multiple different frameworks. I currently work here as a software engineer and Tech Lead.",
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
      name: "Dreamind s.r.o.",
      period: "Aug 2022",
      role: "Co-Founder, CTO",
      length: "now",
      url: "dreamind.cz",
      description:
        "In addition to my main job, I have founded a smaller start-up with my friends also focused on custom web application development. We are currently delivering solutions for several clients and more are on the way.",
      logoUrl: "/images/dreamind-logo.png",
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
      period: "Jun 2019 - Sep 2019",
      role: ".NET developer",
      length: "4 months",
      url: "valatron.com",
      description:
        "Was really my first experience. I was delivering a phone application for a client based on .NET Xamarin, learning the basics of C# and XAML.",
      logoUrl: "https://www.valatron.com/files/ikona-modra.png",
      skills: [
        { text: "C#", importance: "primary" },
        { text: "Xamarin", importance: "primary" },
        { text: "Firebase", importance: "default" },
        { text: "SQLite", importance: "default" },
      ],
    },
    {
      name: "Whitesoft s.r.o.",
      period: "Oct 2019 - Jul 2020",
      role: ".NET developer",
      length: "10 months",
      url: "whitesoft.cz",
      description:
        "I was programming an accounting management application which helped the accountants have all their files at one place. App was based on WinForms (not gonna do that again).",
      logoUrl:
        "https://media.licdn.com/dms/image/C4D0BAQE1mhW_JXxh1g/company-logo_200_200/0/1631310627212?e=2147483647&v=beta&t=nKv8uXxK4mhhI3zhgaElxCLEzYRnDEP1wM-MMvHqU00",
      skills: [
        { text: "C#", importance: "primary" },
        { text: "WinForms", importance: "primary" },
        { text: "MSSQL", importance: "default" },
      ],
    },
    {
      name: "Praha CODING School",
      period: "Mar 2022 - Mar 2023",
      role: "Lecturer",
      length: "1 yr 1 mo",
      url: "prahacoding.cz",
      description:
        "I managed to talk to students and pass them my knowledge of web development and the best practices. The language I taught them was PHP",
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
  ],
};
