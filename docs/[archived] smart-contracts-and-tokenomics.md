---
title: Smart Contracts & Tokenomics
---

# Smart Contracts & Tokenomics

Fish Network is powered by smart contracts deployed on **Base L2**. These contracts govern deposits, withdrawals, reputation accrual, and coordination across Fish Schools.

## Contract Overview

Fish Network utilizes multiple smart contracts to manage the entire lifecycle of community investing:

### Core Contracts

- **USDC Contract (Base)** - Stablecoin rails for deposits and withdrawals
- **ETH Contract (Base)** - Allows ETH contributions, converted and tracked for Fish Points issuance
- **General Contract** - Holds pooled funds for schools and manages withdrawal logic
- **Escrow Contracts** - Created per Fish School; organizer-managed, with funds split according to the school's chosen model

## Epochs & Fee Schedule

Withdrawals are gated by **Epochs** (time windows). This ensures stability of capital within schools.

| Duration Held | Fee Applied |
|---------------|-------------|
| &lt; 3 weeks  | 3%          |
| 3–26 weeks    | 2%          |
| &gt; 26 weeks | 1%          |

## Fish Points (Reputation)

Fish Points serve as the reputation and governance mechanism within the Fish Network ecosystem.

### Key Characteristics

- **Non-transferable**: Fish Points are not tradable tokens; they serve only as reputation and governance weight
- **Accrual Formula**: Points are earned based on:
  - Capital contributions
  - Voting participation
  - Successful investment outcomes
  - Community engagement
- **Governance Use**: 
  - Simple majority voting in MVP
  - Quadratic voting enabled in Phase 2

### Fish Points Accrual

Fish Points are minted to participants based on:

1. **Capital Commitment**: 1 point per $1 contributed during escrow period
2. **Voting Activity**: 10 points per vote cast on investment decisions
3. **Successful Exits**: Bonus points awarded when portfolio companies achieve positive returns
4. **Community Contribution**: Points for sourcing deals, providing diligence, and platform improvements

### Anti-Gaming Mechanisms

To prevent manipulation:

- **Soulbound Design**: Points are tied to verified identities and cannot be transferred
- **Time Decay**: Points decay over time to encourage ongoing participation
- **Vote Alignment**: Bonus points for thoughtful decisions that align with community outcomes
- **Penalty System**: Points can be subtracted for patterns of poor performance or gaming behavior

## Smart Contract Architecture

The Fish Network smart contract suite includes:

### FishSchool.sol
Master contract for each investment club managing:
- Member registry and permissions
- Capital contributions and ownership tracking
- Governance rules and voting mechanisms
- Capital routing and distributions

### FishEscrow.sol
Secure custody during evaluation periods:
- 21-day escrow windows for capital contributions
- Fish Points accrual during lock period
- Automated release to voted startups
- Emergency pause and recovery functions

### FishPoints.sol
Reputation token management:
- ERC-20 compatible but non-transferable (soulbound)
- Earning logic through contributions and participation
- Governance weight calculation
- On-chain reputation tracking

### FishGovernance.sol
Voting and proposal system:
- Investment proposal creation and management
- Voting periods and quorum requirements
- Fish Points weighted voting
- Automatic execution of approved proposals

## Security Measures

All contracts implement:

- OpenZeppelin security standards
- Multi-signature controls on critical functions
- Time-locks on parameter changes
- Emergency pause mechanisms
- Regular third-party audits

## Technical Stack

- **Blockchain**: Base Layer 2 (Ethereum)
- **Programming Language**: Solidity
- **Development Framework**: Hardhat
- **Security Standards**: OpenZeppelin
- **Testing Coverage**: &gt;95% code coverage
- **Audits**: Completed by leading security firms

---

For detailed technical documentation, contract addresses, and integration guides, visit the developer documentation portal.

