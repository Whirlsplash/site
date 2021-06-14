require('dotenv').config();

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Whirlsplash',
  tagline: 'The Open-Source WorldServer.',
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
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        // {
        //   type: 'docsVersionDropdown',
        //   position: 'right',
        //   dropdownItemsBefore: [],
        //   dropdownItemsAfter: [ { to: '/versions', label: 'All versions', }, ],
        //   dropdownActiveClassDisabled: true,
        //   docsPluginId: 'default',
        // },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsBefore: [],
          dropdownItemsAfter: [
            {
              to: 'https://github.com/whirlsplash/site',
              label: 'Help us translate!',
            },
          ],
        },
        {
          href: 'https://github.com/whirlsplash/site',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Getting Started', to: 'docs/', },
            {
              label: 'Technical Information',
              to: 'docs/worldserver-protocol/packet-information',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Blog', to: 'blog', },
            { label: 'Discord', href: 'https://discord.com/invite/8hn6padWF6', },
            { label: 'Subreddit', href: 'https://www.reddit.com/r/Whirlsplash', },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/whirlsplash', },
            { label: 'License', href: 'https://github.com/Whirlsplash/site/blob/main/LICENSE', },
            { label: 'Contact', href: 'mailto:whirlsplash@gmail.com', },
          ],
        },
      ],
      copyright: `Copyright (C) 2021-${new Date().getFullYear()} The Whirlsplash Collective`,
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
