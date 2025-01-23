/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Guzzle',
  tagline: 'Guzzle Documentation',
  url: 'https://ja-guzzle.github.io',
  baseUrl: "/",
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ja-guzzle', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  
  themeConfig: {
    navbar: {
      title: ``,
      logo: {
        alt: 'Guzzle',
        src: 'img/guzzle-logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction/overview',
          position: 'left',
          label: 'Docs'
        },
        {to: '/api/api', label: 'API', position: 'left'},
        {to: 'docs/changelog', label: 'Changelog', position: 'left'},
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'search',
          position: 'right',
        }
      ],
    },
    // algolia: {
    //   apiKey: 'f2899fea0369aeea336963e48a0e46dc',
    //   indexName: 'standardnotes',

    //   // Optional: see doc section below
    //   contextualSearch: true,

    //   // Optional: see doc section below
    //   appId: 'YOUR_APP_ID',

    //   // Optional: Algolia search parameters
    //   searchParameters: {},

    //   //... other Algolia params
    // },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Just Analytics, Inc.`,
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ja-guzzle/docs/blob/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/ja-guzzle/docs/blob/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
