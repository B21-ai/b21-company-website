export interface FloCompany {
  name: string;
  conf: number;
  horizon: number;
  credit: string;
  segment: string;
  signals: string[];
}

// Illustrative demo data — not real accounts. Modeled on B21's Phase 1 (B2B)
// forward-looking opportunity signal: sales pipeline + AR evidence projected
// 180 and 360 days out, shared with banks and fintechs as a credit signal.
export const COS: FloCompany[] = [
  {
    name: "Rivera Landscaping",
    conf: 87,
    horizon: 180,
    credit: "$45K",
    segment: "Property managers — Blue Ocean segment, pipeline converting to AR",
    signals: [
      "12 of the last 40 jobs rebooked by property managers — 3x the average client",
      "Blue Ocean engine flagged the segment as uncontested for this ICP",
      "Two new invoices confirm the pipeline is converting, not just forming",
    ],
  },
  {
    name: "Copper Kettle Catering",
    conf: 79,
    horizon: 180,
    credit: "$32K",
    segment: "Corporate offsites — repeat bookings rising quarter over quarter",
    signals: [
      "Repeat corporate orders up 2.4x over two quarters",
      "Average ticket rising while acquisition cost holds flat",
      "Signed Q3 events already cover 60% of projected AR",
    ],
  },
  {
    name: "Northside Auto Detailing",
    conf: 66,
    horizon: 360,
    credit: "$19K",
    segment: "Fleet accounts — early signal from two local dealerships",
    signals: [
      "Two dealerships moved to monthly fleet contracts",
      "Retail demand flat; fleet margin 1.6x higher",
      "Ideal Customer Discovery matched 140 similar fleets nearby",
    ],
  },
  {
    name: "Bright Path HVAC",
    conf: 58,
    horizon: 270,
    credit: "$28K",
    segment: "Maintenance contracts — seasonal pipeline still forming",
    signals: [
      "Maintenance plan signups steady but below ICP benchmark",
      "Strong fall pipeline, low conversion to invoice so far",
      "Promo test on annual plans pending owner approval",
    ],
  },
  {
    name: "Sable & Stone Cleaning",
    conf: 41,
    horizon: 90,
    credit: "$8K",
    segment: "Residential move-outs — demand softening in core zip codes",
    signals: [
      "Inbound requests down 18% month over month",
      "Two largest accounts paused recurring service",
      "PMF loop suggests repositioning toward commercial turnovers",
    ],
  },
];

export interface FeedItem {
  kicker: string;
  title: string;
  body: string;
  cta: string;
  promo: string;
  rev: string;
  margin: string;
  net: string;
}

export const FEED: FeedItem[] = [
  {
    kicker: "New segment",
    title: "Property managers rebook you 3× more.",
    body: "12 of your last 40 jobs came from property managers.",
    cta: "Send intro offer",
    promo: "10% off, first job — 3 months",
    rev: "+$1,240",
    margin: "−1.8pt",
    net: "+$860",
  },
  {
    kicker: "Offer fit",
    title: "Bundle spring cleanup with mulching.",
    body: "Attach rate is up on similar accounts.",
    cta: "Draft bundle",
    promo: "Spring bundle at $340",
    rev: "+$2,100",
    margin: "+0.6pt",
    net: "+$1,180",
  },
  {
    kicker: "Retention",
    title: "Two HOA clients went quiet for 45 days.",
    body: "The agent drafted a check-in for your approval.",
    cta: "Approve check-in",
    promo: "Free gutter check with renewal",
    rev: "+$680",
    margin: "−0.9pt",
    net: "+$410",
  },
];

/** Seconds each LiquidBronze feed card stays up before auto-advancing. */
export const FEED_SECONDS = 5;
