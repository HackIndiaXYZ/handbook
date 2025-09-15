import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HackIndia Handbook",
  description: "A VitePress Site",
  appearance: "dark",
  base: "/handbook/",
  cleanUrls: true,
  head: [
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-29NMW93BKC",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-29NMW93BKC');`,
    ],
  ],
  themeConfig: {
    logo: "https://github.com/HackIndiaXYZ/Logo-and-Assets/blob/main/HackIndia%20Logo/Only%20Logo%20-%20HackIndia%20512x512.png?raw=true",
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Home 🏠",
        items: [{ text: "Start Here", link: "/starthere" }],
      },
      {
        text: "Tracks 🚗",
        items: [{ text: "Overview", link: "/tracks/index" }],
      },
      {
        text: "Problem Statements ❓",
        collapsed: true,
        items: [
          { text: "Overview", link: "/problem-statement/index" },
          {
            text: "SingularityNET",
            base: "/problem-statement/SingularityNET/",
            collapsed: true,
            items: [
              { text: "Problem Statement 1", link: "problemstatement1" },
              { text: "Problem Statement 2", link: "problemstatement2" },
              { text: "Problem Statement 3", link: "problemstatement3" },
              { text: "Problem Statement 4", link: "problemstatement4" },
              { text: "Problem Statement 5", link: "problemstatement5" },
              { text: "Problem Statement 6", link: "problemstatement6" },
            ],
          },
          {
            text: "AI ",
            base: "/problem-statement/AI/",
            collapsed: true,
            items: [
              { text: "Problem Statement 1", link: "problemstatement1" },
              { text: "Problem Statement 2", link: "problemstatement2" },
              { text: "Problem Statement 3", link: "problemstatement3" },
              { text: "Problem Statement 4", link: "problemstatement4" },              
              { text: "Problem Statement 5", link: "problemstatement5" },              
              { text: "Problem Statement 6", link: "problemstatement6" },              
              { text: "Problem Statement 7", link: "problemstatement7" },              
              { text: "Problem Statement 8", link: "problemstatement8" },              
            ],
          },
          {
            text: "Web3 ",
            base: "/problem-statement/Web3/",
            collapsed: true,
            items: [
              { text: "Problem Statement 1", link: "problemstatement1" },
              { text: "Problem Statement 2", link: "problemstatement2" },
              { text: "Problem Statement 3", link: "problemstatement3" },
              { text: "Problem Statement 4", link: "problemstatement4" },
            ],
          },
          {
            text: 'Open Track',
            link: '/problem-statement/opentrack',
          }
        ],
      },
      {
        text: "Resources 📑",
        collapsed: true,
        items: [
          { text: "SingularityNET", link: "/resources/SingularityNET" },
          {
            text: "AI ",
            base: "/resources/ai/",
            items: [
              { text: "Glossary", link: "glossary" },
              { text: "Videos", link: "videos" },
              { text: "Courses", link: "courses" },
            ],
          },
          {
            text: "Web3 ",
            base: "/resources/web3/",
            items: [
              { text: "Glossary", link: "glossary" },
              { text: "Videos", link: "videos" },
              { text: "Courses", link: "courses" },
            ],
          },
        ],
      },
      {
        text: "National Finals",
        items: [
          { text: "Finals Information", link: "/national-finals-2025" },
          { text: "Venue", link: "/national-finals-2025/venue" },
          { text: "Agenda", link: "/national-finals-2025/agenda" },
          { text: "Judging Criteria", link: "/national-finals-2025/judging-criteria" },
          { text: "Team Sequence  ", link: "/national-finals-2025/team-sequence" },
          { text: "Team Guidlines & CoC", link: "/national-finals-2025/team-guidlines-coc" },
        ],
      },
      // {
      //   text: "Project Submission 🛑",
      //   items: [{ text: "Overview", link: "/project-submission/index" }],
      // },
      // {
      //   text: "Judging Criteria 👩‍🏫",
      //   items: [{ text: "Overview", link: "/judging-criteria/index" }],
      // },
      {
        text: "Important Links 🔗",
        items: [{ text: "Overview", link: "/important-links/index" }],
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present HackIndia",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/HackIndiaXYZ" },
      { icon: "x", link: "https://x.com/HackIndiaXYZ" },
      { icon: "facebook", link: "https://facebook.com/HackIndiaXYZ" },
    ],
    search: {
      provider: "local",
      // provider: 'algolia',
      // options: {
      //   appId: 'X51HWTCQJJ',
      //   apiKey: 'ca20f15eb8a667898b65d13f4213ae3d',
      //   indexName: 'vitepress-demo'
      // }
    },
  },
});
