/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Guzzle',
  tagline: 'Guzzle Documentation',
  // url: 'https://your-docusaurus-test-site.com',
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
          docId: 'introduction to guzzle',
          position: 'left',
          label: 'Docs'
        },
        {to: '/Api/api', label: 'API', position: 'left'},
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
