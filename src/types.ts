export interface Tenant {
  suite: string;
  name: string;
  sf: number;
  start: string;
  end: string;
  rent0: number;
  rent_psf0: number;
  reimb: number;
  escalations: { date: string; psf: number }[];
}

export interface ScenarioData {
  nois: number[];
  annualCF: number[];
  exitValue: number;
  netProceeds: number;
  irr: number;
  equityMult: number;
  totalReturn: number;
  dscr: number;
  cocYr1: number;
  equity: number;
  loanAmt: number;
  bal: number;
  exitCap: number;
  irr_cfs: number[];
}

export type ScenarioType = 'base' | 'bull' | 'bear';
