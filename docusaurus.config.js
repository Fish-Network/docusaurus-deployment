// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: 'Fish Network',
  tagline: 'Driving the Billion Dollar Small Team Era',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://chonkcheto.github.io',
  // For GitHub Pages project site: https://<org>.github.io/<projectName>/
  // this should be '/<projectName>/'.
  // The hosting repo is Fish-Network/docs, so the baseUrl is '/docs/'.
  baseUrl: '/fish-network-docs-testing/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'chonkcheto', // Usually your GitHub org/user name.
  projectName: 'fish-network-docs-testing', // GitHub repo name used for Pages deployment.

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve docs at the site's root
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/Fish-Network/docs/tree/main/',
          exclude: [
            '**/iron-key/**',
            '**/archived/**',
            '**/smart-contracts-and-tokenomics.md',
            '**/safe-nominee-delegate-rider.md',
          ],
        },
        blog: false, // Disable the blog plugin
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-llms', 
      {
        docsDir: 'docs',
        ignoreFiles: ['**/iron-key/**'],
        title: "Fish Network documentation",
        description: "Reference documentation for Fish Network platform and business model.",
        pathTransformation: {
          // Paths to ignore when constructing URLs (will be removed if found)
          ignorePaths: ['docs'],
          // Paths to add when constructing URLs (will be prepended if not already present)
          addPaths: ['fish-network-docs-testing', 'fish-network'],
        },
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Fish Network',
        logo: {
          alt: 'Fish Network Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/fish-network/docs',
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
              {
                label: 'Introduction to Investment Clubs',
                to: '/fish-network/introduction-to-investment-clubs',
              },
              {
                label: 'Litepaper',
                to: '/fish-network/litepaper',
              },
              {
                label: 'Whitepaper',
                to: '/fish-network/fish-network-whitepaper',
              },
              {
                label: 'Smart Contracts & Tokenomics',
                to: '/fish-network/smart-contracts-and-tokenomics',
              },
              {
                label: 'System Architecture & Patent',
                to: '/fish-network/system-and-method-for-blockchain-based-community-investment-pools',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/fishnetwork',
              },
              {
                label: 'Twitter',
                href: 'https://x.com/FishNetworkco',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/fish-network',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fish Network. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

