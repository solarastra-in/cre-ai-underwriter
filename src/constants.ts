import { Tenant } from "./types";

export const PRICE = 2943500;
export const BLDG_SF = 5884;
export const LOT_ACRES = 0.59;
export const CAP_RATE_IN = 0.0675;
export const NOI_BASE = 198687;

export const TENANTS: Tenant[] = [
  {
    suite: 'A',
    name: 'Coast to Coast Bar & Grill',
    sf: 3000,
    start: '2024-12-12',
    end: '2035-02-28',
    rent0: 117420,
    rent_psf0: 39.14,
    reimb: 21631,
    escalations: [
      { date: '2027-03-01', psf: 40.31 },
      { date: '2028-03-01', psf: 41.52 },
      { date: '2029-03-01', psf: 42.77 },
      { date: '2030-03-01', psf: 44.05 },
      { date: '2031-03-01', psf: 45.37 }
    ]
  },
  {
    suite: 'B',
    name: "Domino's Pizza",
    sf: 1730,
    start: '2024-10-29',
    end: '2029-10-31',
    rent0: 44547,
    rent_psf0: 25.75,
    reimb: 12474,
    escalations: [
      { date: '2027-11-01', psf: 26.52 },
      { date: '2028-11-01', psf: 27.32 }
    ]
  },
  {
    suite: 'C',
    name: 'Fitness Affect',
    sf: 1154,
    start: '2024-10-01',
    end: '2027-09-30',
    rent0: 36720,
    rent_psf0: 31.82,
    reimb: 8321,
    escalations: []
  }
];

export const EXPENSES = {
  taxes: 15000,
  insurance: 6000,
  cam: 14400,
  mgmt: 7025
};

export const TOTAL_EXPENSES = Object.values(EXPENSES).reduce((a, b) => a + b, 0);
