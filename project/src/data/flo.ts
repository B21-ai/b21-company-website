export interface FloOpportunity {
  x: number;
  y: number;
  r: number;
  tier: 1 | 2 | 3;
  acct: string;
  opp: string;
  conf: string;
  val: string;
  horizon: "180d" | "360d";
  why: string[];
}

// Illustrative demo data — not real accounts. Modeled on B21's Phase 1 (B2B)
// forward-looking opportunity signal: sales pipeline + AR evidence projected
// 180 and 360 days out, shared with banks and fintechs as a credit signal.
export const FLO_OPPORTUNITIES: FloOpportunity[] = [
  {
    x: 14,
    y: 26,
    r: 15,
    tier: 1,
    acct: "Rivera Landscaping",
    opp: "Property managers — Blue Ocean segment, pipeline converting to AR",
    conf: "87%",
    val: "$45K",
    horizon: "180d",
    why: [
      "12 of the last 40 jobs rebooked by property managers — 3x the average client",
      "Blue Ocean engine flagged the segment as uncontested for this ICP",
      "Two new invoices confirm the pipeline is converting, not just forming",
    ],
  },
  {
    x: 30,
    y: 50,
    r: 12,
    tier: 1,
    acct: "Copper Kettle Catering",
    opp: "Corporate lunch accounts — AR evidence confirms a repeatable segment",
    conf: "79%",
    val: "$22K",
    horizon: "180d",
    why: [
      "6 of 9 open pipeline deals are corporate lunch accounts",
      "Average invoice-to-payment time down to 11 days",
      "Goal agent drafted a dynamic volume-pricing offer — accepted twice",
    ],
  },
  {
    x: 45,
    y: 15,
    r: 10,
    tier: 3,
    acct: "Sable & Stone Cleaning",
    opp: "AR evidence slipping — act before the 180-day signal resets",
    conf: "41%",
    val: "$9K",
    horizon: "180d",
    why: [
      "Two invoices now 15+ days past terms",
      "New pipeline has stalled for three weeks",
      "FLO resets the near-term credit signal if AR doesn't recover this window",
    ],
  },
  {
    x: 66,
    y: 60,
    r: 11,
    tier: 2,
    acct: "Bright Path HVAC",
    opp: "Maintenance-contract pipeline building toward a 360-day signal",
    conf: "58%",
    val: "$60K",
    horizon: "360d",
    why: [
      "Recurring maintenance contracts up 3 in the last 6 weeks",
      "AR evidence still thin — only 2 of 5 have invoiced",
      "FLO is watching for a second consecutive month of conversion",
    ],
  },
  {
    x: 86,
    y: 34,
    r: 11,
    tier: 2,
    acct: "Northside Auto Detailing",
    opp: "Fleet accounts opening — building a longer-horizon signal",
    conf: "66%",
    val: "$18K",
    horizon: "360d",
    why: [
      "Two fleet-account inquiries converted to first invoices this month",
      "Pipeline concentrated in a B2B segment the owner hadn't targeted before",
      "Blue Ocean flagged fleet accounts as underserved in this metro",
    ],
  },
];