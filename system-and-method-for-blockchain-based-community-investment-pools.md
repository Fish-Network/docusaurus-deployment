**//Review it in the patent repo - 12-30-2025
**


---
description: >-
  Inventors: Assignee: Fish Network, Inc. (Delaware, USA) Filing Jurisdiction:
  USPTO – Provisional
---

# System and Method for Blockchain-Based Community Investment Pools

### Abstract

A computerized, blockchain-native platform enabling verified investors to form and operate legally compliant, pre-funded, community-governed investment pools (“Fish Schools”). Each Fish School deploys a permissioned smart-contract suite to (i) escrow and time-lock pooled digital assets and/or fiat-rail contributions, (ii) issue non-transferable reputation tokens that weight governance, (iii) conduct on-chain voting with optional AI-assisted interfaces that preserve individual consent, and (iv) automatically deploy capital into startups or special purpose vehicles (“SPVs”) using voting-enabled CrowdSAFE instruments. The platform integrates investor verification, qualified custody/banking partners, on-chain attestations, nominee-delegate execution, and staged disbursement rules to ensure regulatory compliance, transparent fund flow, and rapid execution across the full startup lifecycle.

### Field of the Invention

The invention relates to financial technology, decentralized governance, and blockchain systems. More particularly, it concerns systems and methods for forming and managing community investment clubs and SPVs using smart contracts, reputation-weighted voting, compliance-gated participation, custody/banking integration, and automated execution of investment contracts such as a voting-enabled CrowdSAFE.

### Background

Crowdfunding platforms, syndicates, and venture funds typically rely on centralized intermediaries for compliance, custody, governance, and capital deployment. These systems are slow, opaque, fee-heavy, and concentrate decision-making power in organizers or large token holders. Traditional DAO governance using transferable tokens is vulnerable to whale capture and Sybil manipulation. Further, SAFE/CrowdSAFE instruments do not natively support community voting, nominee-delegate coordination, or on-chain record-keeping necessary to preserve investment-club legal status. There is therefore a need for an end-to-end, compliance-aligned, community-governed investment infrastructure that automates pooled capital management, voting, custody/banking, and contract execution while retaining person-by-person consent.

### Summary of the Invention

The disclosed invention provides an integrated on-chain investment club and SPV infrastructure comprising:

1. **Pre-Funded Fish Schools:** Verified investors commit capital to a pool governed by smart contracts. Capital is escrowed under programmable lock periods and disbursement ratios.
2. **Compliance-Gated Participation:** Investors complete KYC/KYB and, where required, accreditation checks through regulated partners. Verification is represented as non-transferable on-chain attestations. Only attested wallets or verified banking identities can contribute or vote.
3. **Reputation-Based Governance:** The system mints non-transferable “Fish Points” to verified participants based on contributions, voting activity, and post-investment performance. Fish Points decay over time and can be penalized for gaming behaviors. Governance modules snapshot Fish Points to weight voting outcomes.
4. **Voting-Enabled CrowdSAFE / SPV Execution:** Upon a successful community vote, the system forms or activates an SPV (or investment-club nominee) and deploys capital using a modified CrowdSAFE that grants beneficial owners consultative voting rights via a Nominee Delegate reflecting the Fish School vote.
5. **AI-Assisted but Individually Signed Voting:** A “Fish AI Agent” summarizes proposals, converts natural-language intent into vote transactions, and supports opt-in rule-based assistance; however, each vote requires explicit user confirmation and is signed by the investor’s wallet.
6. **Qualified Custody and/or Banking Integration:** Capital is held or routed through qualified custodians or banking partners with multi-signature or equivalent authorization linked to the smart contracts. Automated compliance modules generate regulatory logs and reporting artifacts.

Together these components enable transparent, rapid, thesis-driven community investing from deposit through exit, while preserving legal separateness of club members, individual voting, compliant custody/banking, and enforceable nominee execution.

***

### Detailed Description

#### 1. System Overview

The platform comprises an **Investor Interface Layer**, a **Permissioned Smart-Contract Network**, **Compliance and Attestation Gateways**, **Custody/Banking Interfaces**, and optional **Oracles and AI Interaction Modules**.

<figure><img src=".gitbook/assets/Screenshot 2025-12-10 at 12.07.24 PM.png" alt=""><figcaption></figcaption></figure>

In one embodiment, the platform operates across vertical-specific Fish Schools (e.g., Web3/AI venture, life sciences venture, real estate, or other assets) while maintaining a consistent compliance-gated and reputation-weighted governance core, as shown in FIG. 3.

**1.1 Investor Interface Layer**

Investors access web/mobile applications to:

* complete identity and accreditation verification,
* connect and attest a wallet and/or validated banking identity,
* contribute capital (digital assets or fiat rails),
* review proposals and diligence materials,
* participate in governance directly or via AI assistance, and
* view real-time cap tables, reputation tiering, treasury allocations, and portfolio status.

**1.2 Permissioned Smart-Contract Suite**

A non-limiting example includes:

* **FishSchool.sol** – creates and registers Fish Schools, stores pool thesis/rules, tracks members, and anchors governance.
* **FishEscrow.sol** – receives contributions, enforces programmable lock periods, and issues escrow-receipt tokens.
* **FishPoints.sol** – mints non-transferable Fish Points and applies accrual/decay/penalty logic.
* **FishGovernance.sol** – manages proposals, quorum, vote snapshots, and Fish-Points weighting.
* **FishCustodyBridge.sol** – generates custodian/banking release instructions requiring multi-sig or equivalent authorization.
* **FishCrowdSAFE.sol (or template engine)** – instantiates a voting-enabled CrowdSAFE with nominee-delegate hooks.
* **FishSPVFactory.sol** – deploys SPV entities or deal-series structures after vote approval.

**1.3 Compliance and Identity Attestation**

The system integrates off-chain verification providers (e.g., KYC/KYB/accreditation APIs). When verification succeeds:

* an **Attestation Contract** mints a non-transferable credential token to the investor wallet;
* FishSchool and FishEscrow check for credential presence before deposits or votes;
* credential data may encode jurisdictional eligibility, investor class, or sanctions status.

**1.4 Qualified Custody / Banking**

Capital may be held by qualified custodians and/or verified banking partners while remaining programmatically controlled by Fish School governance. The custody bridge requests escrow or release based on vote outcomes, and the custodian/banking partner executes transfers only after required multi-party authorization.

***

#### 2. Fish School Formation and Capital Locking

1. **Verification:** An investor completes KYC/KYB and, if needed, accreditation. The system mints an identity attestation to the investor wallet or verified banking identity.
2. **Deposit:** The verified participant commits capital (e.g., USDC or fiat-rail equivalent) into FishEscrow.
3. **Time-Lock:** FishEscrow enforces a lock period (e.g., 21 days) for orderly pool formation and withdrawal windows.
4. **Pool Accounting:** FishSchool updates pool balances and optionally issues a receipt token.
5. **Reputation Minting:** FishPoints mints Fish Points based on deposit and participation.

***

#### 3. Treasury Allocation and Fish School Money Flow

In some embodiments, the system automatically allocates a predefined treasury or liquidity reserve from incoming capital, referred to as a “liquidity haircut,” as part of Fish School formation and operations funding.



<figure><img src=".gitbook/assets/Screenshot 2025-12-10 at 12.09.09 PM.png" alt=""><figcaption></figcaption></figure>

Referring to FIG. 1, after verification (Step 0) an investor’s capital enters the Fish School (Step 1), a preset fraction is allocated to a treasury or escrow reserve as voted or predefined (e.g., \~3%), and the remaining portion is routed into an escrow/custody or Fish School bank account. The system supports multiple compliant rail providers (non-limiting examples include regulated custodians or banking/KYC partners), and may charge a programmatic transaction fee. Upon investment approval, the system triggers agreement execution (Step 2/3) and disburses capital to the company via bank wire or on-chain transfer (Step 4).

In the current implementation, the platform applies a standardized **80/20 capital allocation model**, as reflected in the product documentation and FIG. 1. Following verification and deposit, approximately eighty percent (80%) of contributed capital is reserved for investment deployment, while approximately twenty percent (20%) is retained for operational reserves, administrative expenses, nominee execution costs, and platform services, subject to member-approved governance rules.

***

#### 4. Proposal and Reputation-Weighted Governance

1. **Proposal Submission:** Organizer or Deal Champion submits a structured proposal to FishGovernance specifying target, instrument, amount, and milestones.
2. **Diligence Window:** Materials are posted on-chain or via IPFS. AI summaries may be generated.
3. **Vote Snapshot:** Fish Points balances are snapshotted at vote start.
4. **Voting:** Verified participants cast wallet-signed votes weighted by Fish Points.
5. **Quorum + Approval:** If thresholds pass, execution is authorized.

***

#### 5. Fish Points (Non-Transferable Reputation Tokens)

Fish Points are soulbound, transfer-disabled tokens minted only to verified wallets.

* **Accrual:**
  * +1 point per USD committed during escrow;
  * +10 points per vote cast;
  * bonus points for successful exits based on return multiple.
* **Decay:** periodic reduction (e.g., 2% monthly).
* **Anti-Gaming:** identity-anchored wallets prevent Sybil attacks; misalignment penalties subtract points for manipulative voting.

Fish Points balances are used to weight governance outcomes, as shown conceptually in FIG. 3’s governance layer.

***

#### 6. Nominee and Nominee Delegate Structure

Upon approval of an investment proposal, the platform executes the investment using a **nominee-based structure rather than a pooled fund or voting-stripped CrowdSAFE instrument**.

* **Nominee:** A Fish School LLC (typically the Master, but can be the individual Series) that holds legal title to the investment on behalf of all Fish Schools and their respective members.
* **Beneficial Owners:** Individual Fish School Series LLC retains beneficial ownership interests.
* **Nominee Delegate:** An individual, typically the Fish School Organizer or Deal Champion, authorized to execute administrative, contractual, and issuer-facing actions on behalf of the Nominee.
  * Required to represent the majority voting interest of its Fish School members

The Nominee Delegate is obligated to:

* broadcast governance proposals and voting outcomes to Fish School members, and
* execute investment decisions in accordance with the majority vote of the Fish School, as determined through reputation-weighted on-chain governance.

This structure simplifies administrative execution while preserving investor voting rights and accountability, distinguishing the system from traditional SPVs and CrowdSAFE-based structures that centralize control.

***

#### 7. SPV Formation and Execution Flows

Following successful governance approval, the system may deploy capital through one of multiple SPV pathways.

<figure><img src=".gitbook/assets/Screenshot 2025-12-10 at 12.10.29 PM.png" alt=""><figcaption></figcaption></figure>

Referring to FIG. 2, in **Scenario 1** a Fish School initiates an SPV after an internal proposal and on-chain vote, then completes off-chain legal setup and capital mobilization, executes formal agreements, disburses investment, and continues on-chain governance over SPV rights. In **Scenario 2**, a follow-on SPV is triggered by external next-round deal flow; members vote on whether to exercise pro-rata or increase exposure, and the system then executes a similar SPV setup and disbursement pipeline.

***

#### 8. AI-Enabling Voting (“Fish AI Agent”)

The Fish AI Agent:

* summarizes proposals and diligence,
* converts voice/text intent into structured vote transactions,
* supports rule-based assistive automation,
* **cannot vote without explicit user confirmation**, and
* ensures each vote is signed by the investor wallet.

A consent transcript hash + signature + vote tx is stored for auditability.

***

#### 9. Example Use Cases Across Startup Lifecycles and Ecosystems

**9.1 B2C Startup Lifecycle Example**![](<.gitbook/assets/Screenshot 2025-12-10 at 12.13.34 PM.png>)

<figure><img src=".gitbook/assets/Screenshot 2025-12-10 at 12.12.40 PM.png" alt=""><figcaption></figcaption></figure>

Referring to FIG. 4, Fish Schools may originate investments at ideation stages, deploy milestone-gated tranches through successive votes, optionally form SPVs for coordinated follow-on rounds to support growth-stage funding by leveraging existing pro-rata rights.

**9.2 Venture Ecosystem / B2B Example**

<figure><img src=".gitbook/assets/Venture ecosystem b2b example.png" alt=""><figcaption></figcaption></figure>

Referring to FIG. 5, Fish Schools may be created as cohorts or series within institutional or ecosystem partnerships (e.g., incubators, accelerators, universities), enabling multiple series to invest in different deals, coordinate pro-rata rights across cohorts, and form SPVs for consolidated deployments while preserving member-level voting and beneficial ownership.

***

### Claims

1. **A computer-implemented method for managing pooled investment capital**, comprising:\
   (a) receiving verified investor funds into a blockchain escrow contract and/or compliance-gated banking pathway;\
   (b) issuing a non-transferable on-chain credential attestation to each verified investor wallet;\
   (c) minting non-transferable reputation tokens to verified investors based on at least contributions and governance participation;\
   (d) executing an on-chain community vote weighted by said reputation tokens; and\
   (e) automatically disbursing pooled assets to a selected entity or SPV based on vote outcome.
2. **The method of claim 1**, wherein incoming funds are automatically allocated into an operational treasury or escrow reserve according to a predetermined or member-voted ratio prior to investment deployment.
3. **The method of claim 1**, wherein the escrow contract enforces a time-locked holding period and disburses capital in staged tranches, retaining a portion for follow-on cycles.
4. **The method of claim 1**, wherein said reputation tokens decay over time according to a predefined schedule and are non-transferable between wallets.
5. **The method of claim 1**, further comprising penalizing reputation balances for statistically poor decision alignment to deter manipulation.
6. **The method of claim 1**, further comprising generating a voting-enabled CrowdSAFE instrument in which a nominee holds legal title for beneficial owners, and a nominee delegate executes issuer-side actions according to the on-chain community vote.
7. **The method of claim 1**, further comprising automatically forming an SPV in response to a successful on-chain vote and executing capital calls and disbursements through a custodian or banking partner.
8. **A system for blockchain-based community investing**, comprising:\
   (a) an investor interface configured for KYC/KYB and wallet attestation;\
   (b) a permissioned smart-contract network restricted to attested wallets;\
   (c) a non-transferable reputation token contract configured to weight governance;\
   (d) a governance contract configured to manage proposals and quorum; and\
   (e) a custody/banking interface employing multi-signature or equivalent authorization to control pooled assets.
9. **The system of claim 8**, further comprising an AI interaction module configured to summarize proposals and facilitate voting, wherein each vote requires explicit investor confirmation and wallet-level signing.

***

### Advantages

* **Compliance-aligned pooling:** investor gating, attestations, and custody/banking preserve investment-club/SPV legality.
* **Merit-weighted governance:** Fish Points prevent whale capture and reward real participation.
* **Rapid deal execution:** Pipelines automation proposal-to-close.
* **Customizable Capital Pools(i.e. Fish Schools):** Ability to configure private market portfolio diversification strategies together with traditional SPVs.
* **Transparent fund flow:** Auditable treasury/escrow/disbursement routing.
* **Broad applicability:** Both B2C lifecycle and B2B ecosystem deployments.
* **Higher participation:** AI lowers friction while preserving individual consent.
