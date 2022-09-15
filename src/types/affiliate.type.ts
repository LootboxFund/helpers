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

export type OrganizerOfferWhitelistID = string & {
  readonly _: unique symbol
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

export enum OrganizerRank {
  ClayRank1 = 'ClayRank1',
  IronRank2 = 'IronRank2',
  BronzeRank3 = 'BronzeRank3',
  SilverRank4 = 'SilverRank4',
  GoldRank5 = 'GoldRank5',
  PlatinumRank6 = 'PlatinumRank6',
  DiamondRank7 = 'DiamondRank7',
  GhostRank0 = 'GhostRank0',
}
export type RankInfo = {
  slug: OrganizerRank
  name: string
  description: string
  color: string
  revenueShare: number
}
export const rankInfoTable: Record<OrganizerRank, RankInfo> = {
  ClayRank1: {
    slug: OrganizerRank.ClayRank1,
    name: 'Clay - Rank 1',
    description:
      'For new tournament organizers with no history. To be promoted to Rank 2, you must have at least 1 tournament with $50 USD in ticket payouts AND earned at least $10 USD in affiliate revenue',
    color: '#c2720a',
    revenueShare: 0.5,
  },
  IronRank2: {
    slug: OrganizerRank.IronRank2,
    name: 'Iron - Rank 2',
    description: 'For tournament organizers with some experience. To be promoted to Rank 3, you must...',
    color: '#c2720a',
    revenueShare: 0.65,
  },
  BronzeRank3: {
    slug: OrganizerRank.BronzeRank3,
    name: 'Bronze - Rank 3',
    description: 'Bronze Rank 3',
    color: '#c2720a',
    revenueShare: 0.7,
  },
  SilverRank4: {
    slug: OrganizerRank.SilverRank4,
    name: 'Silver - Rank 4',
    description: 'Silver Rank 4',
    color: '#c2720a',
    revenueShare: 0.75,
  },
  GoldRank5: {
    slug: OrganizerRank.GoldRank5,
    name: 'Gold - Rank 5',
    description: 'Gold Rank 5',
    color: '#c2720a',
    revenueShare: 0.8,
  },
  PlatinumRank6: {
    slug: OrganizerRank.PlatinumRank6,
    name: 'Platinum - Rank 6',
    description: 'Platinum Rank 6',
    color: '#c2720a',
    revenueShare: 0.85,
  },
  DiamondRank7: {
    slug: OrganizerRank.DiamondRank7,
    name: 'Diamond - Rank 7',
    description: 'Diamond Rank 7',
    color: '#c2720a',
    revenueShare: 0.9,
  },
  GhostRank0: {
    slug: OrganizerRank.GhostRank0,
    name: 'Ghost - Rank 0',
    description: 'Ghost Rank 0',
    color: '#c2720a',
    revenueShare: 1,
  },
}
