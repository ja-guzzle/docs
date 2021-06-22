/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Guzzle',
  tagline: 'Guzzle Documentation',
  // url: 'https://your-docusaurus-test-site.com',
  url: 'https://guzzle-test.github.io',
  baseUrl: '/guzzle-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'guzzle-test', // Usually your GitHub org/user name.
  projectName: 'guzzle', // Usually your repo name.
  
  themeConfig: {
    navbar: {
      title: `   |  Guzzle`,
      logo: {
        alt: 'Logo',
        src: 'img/just-analytics-logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction to guzzle',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/questions/question', label: 'Q&A', position: 'left'},
        {to: '/codesample/code', label: 'Code Sample', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
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
      copyright: `Copyright © ${new Date().getFullYear()} Guzzle, Inc.`,
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        // questions: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        // codesample: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
