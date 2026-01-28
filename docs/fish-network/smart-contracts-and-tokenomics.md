# Smart Contracts & Tokenomics

Fish Network is powered by smart contracts deployed on **Base L2**. These contracts govern deposits, withdrawals, reputation accrual, and coordination across Fish Schools.

#### Contract Overview

* **USDC Contract (Base)** - Stablecoin rails for deposits and withdrawals.
* **ETH Contract (Base)** - Allows ETH contributions, converted and tracked for Fish Points issuance.
* **General Contract** - Holds pooled funds for schools and manages withdrawal logic.
* **Escrow Contracts** - Created per Fish School; organizer-managed, with funds split according to the school’s chosen model.

#### Epochs & Fee Schedule

Withdrawals are gated by **Epochs** (time windows). This ensures stability of capital within schools.

| Duration Held | Fee Applied |
| ------------- | ----------- |
| < 3 weeks     | 3%          |
| 3–26 weeks    | 2%          |
| > 26 weeks    | 1%          |

#### Fish Points (Reputation)

* **Non-transferable**: Fish Points are not tradable tokens; they serve only as reputation and governance weight.
*   **Accrual Formula**:

    ​

    <figure><img src="/img/gitbook/formula.png" alt="" /><figcaption></figcaption></figure>
* **Governance Use**: Simple majority voting in MVP; quadratic voting enabled in Phase 2.
