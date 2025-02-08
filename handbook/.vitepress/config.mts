import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HackIndia Handbook",
  description: "A VitePress Site",  
  appearance: 'dark',
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },     
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },              
        ]
      },
      {
        text: 'Tracks',
        items: [
          { text: 'Overview', link: '/tracks/index' },         
        ]
      },
      {
        text: 'Problem Statements',
        items: [
          { text: 'Overview', link: '/problem-statement/index' },         
        ]
      },
      {
        text: 'Project Submission',
        items: [
          { text: 'Overview', link: '/project-submission/index' },         
        ]
      },
      {
        text: 'Judging Criteria',
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
      { icon: 'github', link: 'https://github.com/HackIndiaXYZ' }
    ]
  }
})
