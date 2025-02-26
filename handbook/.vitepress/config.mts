import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HackIndia Handbook",
  description: "A VitePress Site",  
  appearance: 'dark',
  base: '/handbook/',
  cleanUrls: true,
  themeConfig: {
    logo: 'logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/tracks/index' },     
    ],

    sidebar: [
      {
        text: 'Tracks 🚗',
        items: [
          { text: 'Overview', link: '/tracks/index' },         
        ]
      },
      {
        text: 'Problem Statements ❓',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/problem-statement/index' },    
          { text: 'AI ', 
            base: '/problem-statement/AI/',
            items: [
              { text: 'Problem Statement 1', link: 'problemstatement1' },              
              { text: 'Problem Statement 2', link: 'problemstatement2' },              
              { text: 'Problem Statement 3', link: 'problemstatement3' },              
              { text: 'Problem Statement 4', link: 'problemstatement4' },              
              { text: 'Problem Statement 5', link: 'problemstatement5' },              
            ]
           },   
           { text: 'Web3 ', 
            base: '/problem-statement/Web3/',
            items: [
              { text: 'Problem Statement 1', link: 'problemstatement1' },             
              { text: 'Problem Statement 2', link: 'problemstatement2' },             
                           
            ]
           },     
        ]
      },
      {
        text: 'Resources 📑',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/resources/index' },   
          { text: 'AI ', 
            base: '/resources/ai/',
            items: [
              { text: 'Glossary', link: 'glossary' },              
              { text: 'Videos', link: 'videos' },              
              { text: 'Courses', link: 'courses' },              
              
            ]
          },   
          { text: 'Web3 ', 
            base: '/resources/web3/',
            items: [
              { text: 'Glossary', link: 'glossary' },              
              { text: 'Videos', link: 'videos' },             
              { text: 'Courses', link: 'courses' },             
              
            ]
           },                  
        ]
      },
      {
        text: 'Project Submission 🛑',
        items: [
          { text: 'Overview', link: '/project-submission/index' },                    
        ]
      },
      {
        text: 'Judging Criteria 👩‍🏫',
        items: [
          { text: 'Overview', link: '/judging-criteria/index' },         
        ]
      }
  ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present HackIndia'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HackIndiaXYZ' },
      { icon: 'x', link: 'https://x.com/HackIndiaXYZ' },
      { icon: 'facebook', link: 'https://facebook.com/HackIndiaXYZ' },
    ],
    search: {
      provider: 'local',
      // provider: 'algolia',
      // options: {
      //   appId: 'X51HWTCQJJ',
      //   apiKey: 'ca20f15eb8a667898b65d13f4213ae3d',
      //   indexName: 'vitepress-demo'
      // }
    },
  }
})
