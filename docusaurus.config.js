require('dotenv').config();

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Whirlsplash',
  tagline: 'The open-source WorldServer.',
  url: 'https://whirlsplash.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Whirl.png',
  organizationName: 'whirlsplash',
  projectName: 'site',

  themeConfig: {
    navbar: {
      title: 'Whirlsplash',
      logo: { alt: 'Whirlsplash logo', src: 'img/Whirl.png', },
      items: [
        { to: 'docs/', activeBasePath: 'docs', label: 'Docs', position: 'left', },
        { to: 'blog', label: 'Blog', position: 'left' },
        { href: 'https://github.com/whirlsplash/site', label: 'GitHub', position: 'right', },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [ { label: 'Getting Started', to: 'docs/', }, ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Blog', to: 'blog', },
            { label: 'Discord', href: 'https://discord.com/invite/8hn6padWF6', },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/whirlsplash', },
            { label: 'License', href: 'https://github.com/Whirlsplash/site/blob/main/LICENSE', }
          ],
        },
      ],
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    // announcementBar: {
    //   id: 'notice',
    //   content:  'test',
    //   backgroundColor: '#fdad54',
    //   isCloseable: true,
    // },

    liveCodeBlock: { playgroundPosition: 'bottom', },

    algolia: {
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: 'whirlsplash',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/whirlsplash/site/edit/master/website/',
        },

        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/whirlsplash/site/edit/master/website/blog/',
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },

        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        },

        debug: false,
      },
    ],
  ],

  plugins: [ '@docusaurus/plugin-ideal-image', ],

  // themes: [ '@docusaurus/theme-live-codeblock', ],
};
