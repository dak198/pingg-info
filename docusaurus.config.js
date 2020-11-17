module.exports = {
  title: 'pingg',
  tagline: 'Where better help is found.',
  url: 'https://info.pingg.tech/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  favicon: 'https://pingg.tech/assets/images/favicon@32pt.png',
  organizationName: 'CS1530 G11', // Usually your GitHub org/user name.
  projectName: 'pingg', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    navbar: {
      logo: {
        alt: 'pingg Logo',
        src: 'https://pingg.tech/assets/images/pingg_logo.png',
      },
      items: [
        {
          to: 'docs/profile-customization',
          activeBasePath: 'docs',
          label: 'Customize Profile',
          position: 'left',
        },
        {
          to: 'docs/search',
          activeBasePath: 'docs',
          label: 'Search',
          position: 'left',
        },
        {
          to: 'docs/create-post',
          activeBasePath: 'docs',
          label: 'Create Post',
          position: 'left',
        },
        {
          href: 'https://github.com/zpg6/pingg',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Help Site',
          items: [
            {
              label: 'Product Overview',
              to: 'docs/',
            },
            {
              label: 'Getting Started',
              to: 'docs/login',
            },
            {
              label: 'Modes of Operation',
              to: 'docs/profile-customization',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/zpg6/pingg',
            },
          ],
        },
      ],
      copyright: 'CS 1530 Software Engineering, Group 11',
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
            'https://github.com/dak198/pingg-info',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/dak198/pingg-info',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
