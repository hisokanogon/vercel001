const CONFIG = {
  // profile setting
  profile: {
    name: 'MyName',
    image: ['/profile.png', '/profile-hover.png'],
    discription: 'Blog001',
    twitter: '@wSmileFlowerw',
    email: 'youolikeojazz@gmail.com',
  },

  // blog setting
  blog: {
    title: 'Notion部落格範例', // blog 타이틀과
    description: '小介紹',
  },

  // CONFIG configration
  link: 'https://vercel001-ap5o.vercel.app',
  since: 2022, // If leave this empty, current year will be used.
  lang: 'zh-TW', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  postsPerPage: 10,
  ogImageGenerateURL: 'https://vercel001-ap5o.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },

  // notion configuration
  notionConfig: {
    pageId: process.env.e85a4fbb1dd74fac81ad5b19cb8f7e30,
    // if you prefer not to make your database public, use this!!!
    accessToken: process.env.NOTION_ACCESS_TOKEN
  },

  // plugin configuration
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: 'G-9N3FE0117Q'
    }
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: 'qvdR1gXMirk_DCUOKPgRnxu2x6fqSPrquYnEZZMjR9w'
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'morethanmin/morethan-log'
    }
  },

  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
