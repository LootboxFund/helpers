/**
 * --------- How Advertiser Treasury Works ----------
 *
 * Advertisers have a treasury from which affiliate revenue is deducted from
 * The treasury can only be in USDC
 *
 * Each Conquest sets its own max spend for the amount of money it can spend
 * This will not take away from the treasury balance
 * Thus multiple conquests can share the same treasury balance, and there is a risk that one Conquest takes up the entire budget
 *
 * Each Offer sets its own max spend too
 * Multiple offers can share the same treasury balance, and there is a risk that the funds dry out
 *
 * Events cannot set their own max spend because they have multiple offers from multiple advertisers
 *
 * It is possible for affiliate activations to bill more than the treasury balance
 * This is because sometimes the advertiser still wants the activations and will still pay
 * However they just need time to get the funds in
 */

export enum OfferStatus {
  Active = 'Active',
  Inactive = 'Inactive',
  Planned = 'Planned',
  Archived = 'Archived',
}

export type ConquestID = string & { readonly _: unique symbol }
export enum ConquestStatus {
  Active = 'Active',
  Inactive = 'Inactive',
  Planned = 'Planned',
  Archived = 'Archived',
}

export type AffiliateBaseLinkID = string & { readonly _: unique symbol }

export enum MeasurementPartnerType {
  Appsflyer = 'Appsflyer',
  LootboxPixel = 'LootboxPixel',
}

export type AdTargetTagID = string & { readonly _: unique symbol }
export enum AdTargetTagType {
  Geography = 'Geography',
  Interest = 'Interest',
  Device = 'Device',
  Os = 'Os',
  Income = 'Income',
}
export interface AdTargetTag {
  id: AdTargetTagID
  slug: string
  title: string
  description: string
  type: AdTargetTagType
}

export type ActivationID = string & { readonly _: unique symbol }
export type ActivationPricingID = string & { readonly _: unique symbol }
