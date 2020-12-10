module.exports = {
  title: 'Glitch API Docs',
  tagline: 'Unofficial API docs for Glitch.',
  url: 'https://glitchapi.baby-yoda.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'aboutdavid', // Usually your GitHub org/user name.
  projectName: 'glitchapidocs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Glitch API',
      logo: {
        alt: 'My Site Logo',
        src: 'https://file.coffee/u/x5O8u1FG70.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://glitch.com',
          label: 'Glitch',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{
            label: 'Glitch',
            href: 'https://glitch.com',
          }, {
            label: 'Twitter',
            href: 'https://twitter.com/glitch',
          }],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Glitch Support',
              href: 'https://support.glitch.com',
            },
          ],
        },

      ],
      copyright: `This is not made nor endorsed by Gltch.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/aboutDavid/glitchapi/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/aboutDavid/glitchapi/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
