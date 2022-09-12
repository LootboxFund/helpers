import { AdvertiserID, AffiliateID, OfferID } from './base.type'

/**
 * ---- How Affiliate Tiers Work ----
 * Organizers start at Tier 1
 * Tier 1 gets you access to advertisers of tier 1, of their offers of tier 1
 * Tier N gets you access to advertisers of tier 1 through N
 *
 * When you access a new advertiser, you can see all their offers
 * However that does not mean you will necessarily be able to promote them
 * Offers are dynamically served on tickets based on the offer's targeting rules
 *
 * You may also be selectively whitelisted to higher tier offers if you have a good track record
 * Especially if you refer an advertiser to us
 */

export type OrganizerTierID = string & { readonly _: unique symbol }
export enum OrganizerTierEnum {
  CLAY = 'CLAY', // Revenue Split 50/50
  BRONZE = 'BRONZE', // Revenue Split 70/30
  SILVER = 'SILVER', // Revenue Split 75/25
  GOLD = 'GOLD', // Revenue Split 85/15
  PLATINUM = 'PLATINUM', // Revenue Split 90/10
}
export interface OrganizerTier {
  id: OrganizerTierID
  slug: OrganizerTierEnum
  title: string
  description: string
  percentage: number
}

export type OrganizerAdvertiserTierWhitelistID = string & {
  readonly _: unique symbol
}
export interface OrganizerAdvertiserTierWhitelist {
  id: OrganizerAdvertiserTierWhitelistID
  organizerID: AffiliateID
  advertiserID: AdvertiserID
}
export type OrganizerOfferTierWhitelistID = string & {
  readonly _: unique symbol
}
export interface OrganizerOfferTierWhitelist {
  id: OrganizerOfferTierWhitelistID
  organizerID: AffiliateID
  offerID: OfferID
  advertiserID: AdvertiserID
}

/**
 * ---- How Affiliate Risk Works ----
 * We have a risk class for each affiliate
 * Advertisers can determine what risk level they will work with
 * Offers can also have a risk level
 */
export type AffiliateRiskID = string & { readonly _: unique symbol }
export enum AffiliateRiskEnum {
  VERY_HIGH_RISK = 'VERY_HIGH_RISK',
  HIGH_RISK = 'HIGH_RISK',
  MEDIUM_RISK = 'MEDIUM_RISK',
  NEW_AFFILIATE = 'NEW_AFFILIATE',
  NEUTRAL_RISK = 'NEUTRAL_RISK',
  LOW_RISK = 'LOW_RISK',
  VERY_LOW_RISK = 'VERY_LOW_RISK',
}
export interface AffiliateRisk {
  id: AffiliateRiskID
  slug: AffiliateRiskEnum
  title: string
  description: string
}

export enum AffiliateType {
  Organizer = 'Organizer',
  Promoter = 'Promoter',
  Lootbox = 'Lootbox',
}

export type RateCardID = string & { readonly _: unique symbol }
