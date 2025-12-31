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
      id: 'fish-network/introduction-to-investment-clubs',
      label: 'Introduction to Investment Clubs',
    },
    {
      type: 'category',
      label: 'The Solution',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'fish-network/investor-litepaper',
          label: 'Fish Network Overview',
        },
        {
          type: 'doc',
          id: 'fish-network/fish-network-whitepaper',
          label: 'Whitepaper',
        },
      ],
    },
    {
      type: 'category',
      label: 'Technical',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'fish-network/smart-contracts-and-tokenomics',
          label: 'Smart Contracts & Tokenomics',
        },
        {
          type: 'doc',
          id: 'fish-network/system-and-method-for-blockchain-based-community-investment-pools',
          label: 'System Architecture & Patent',
        },
        {
          type: 'doc',
          id: 'fish-network/safe-nominee-delegate-rider',
          label: 'SAFE Nominee Delegate Rider',
        },
      ],
    },
  ],
};

export default sidebars;

