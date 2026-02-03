/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'fish-network/litepaper',
      label: 'Litepaper',
    },
    {
      type: 'doc',
      id: 'fish-network/fish-network-whitepaper',
      label: 'Whitepaper',
    },
    {
      type: 'doc',
      id: 'fish-network/intro-to-fish-network-clubs',
      label: 'Introduction to Investment Clubs',
    },
    {
      type: 'doc',
      id: ''fish-network/liquidity-optionality'',
      label: 'Optionality & Diversification',
    },
  ],
};
export default sidebars;

