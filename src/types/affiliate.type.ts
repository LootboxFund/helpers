import { AirdropBase, MMPActivationAlias, Placement } from './ad.type'
import { ActivationID, AffiliateBaseLink, MeasurementPartnerType, OfferStatus } from './advertiser.type'
import {
  AdEventID,
  AdSetID,
  AdvertiserID,
  AffiliateID,
  FlightID,
  LootboxID,
  MemoID,
  OfferID,
  QuestionAnswerID,
  RateQuoteID,
  StreamID,
  TournamentID,
  UserID,
  UserIdpID,
} from './base.type'

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
  BronzeRank2 = 'BronzeRank2',
  IronRank3 = 'IronRank3',
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
    name: 'Clay - Tier 1',
    description:
      'For new tournament organizers with no history. To be promoted to Rank 2, you must have at least 1 tournament with $50 USD in ticket payouts AND earned at least $10 USD in affiliate revenue',
    color: '#c2720a',
    revenueShare: 0.5,
  },
  BronzeRank2: {
    slug: OrganizerRank.BronzeRank2,
    name: 'Bronze - Tier 2',
    description: 'Bronze Rank 2',
    color: '#c2720a',
    revenueShare: 0.7,
  },
  IronRank3: {
    slug: OrganizerRank.IronRank3,
    name: 'Iron - Tier 3',
    description: 'For tournament organizers with some experience. To be promoted to Rank 3, you must...',
    color: '#c2720a',
    revenueShare: 0.65,
  },
  SilverRank4: {
    slug: OrganizerRank.SilverRank4,
    name: 'Silver - Tier 4',
    description: 'Silver Rank 4',
    color: '#c2720a',
    revenueShare: 0.75,
  },
  GoldRank5: {
    slug: OrganizerRank.GoldRank5,
    name: 'Gold - Tier 5',
    description: 'Gold Rank 5',
    color: '#c2720a',
    revenueShare: 0.8,
  },
  PlatinumRank6: {
    slug: OrganizerRank.PlatinumRank6,
    name: 'Platinum - Tier 6',
    description: 'Platinum Rank 6',
    color: '#c2720a',
    revenueShare: 0.85,
  },
  DiamondRank7: {
    slug: OrganizerRank.DiamondRank7,
    name: 'Diamond - Tier 7',
    description: 'Diamond Rank 7',
    color: '#c2720a',
    revenueShare: 0.9,
  },
  GhostRank0: {
    slug: OrganizerRank.GhostRank0,
    name: 'Ghost - Tier 0',
    description: 'Ghost Rank 0',
    color: '#c2720a',
    revenueShare: 1,
  },
}

export interface Memo_Firestore {
  id: MemoID
  affiliateID: AffiliateID
  affiliateType: AffiliateType
  offerID: OfferID
  advertiserID: AdvertiserID
  adEventID: AdEventID
  activationID: ActivationID
  mmpAlias: MMPActivationAlias
  mmp: MeasurementPartnerType
  userID?: UserID
  flightID?: FlightID
  tournamentID?: TournamentID
  note: string
  amount: number
  timestamp: number
}

export enum OfferVisibility_Firestore {
  Public = 'Public',
  Private = 'Private',
}

export interface Offer_Firestore {
  id: OfferID
  title: string
  description: string
  image: string
  advertiserID: AdvertiserID
  spentBudget: number
  maxBudget: number
  // currency: Currency;
  strategy?: OfferStrategy
  startDate: number
  endDate: number
  status: OfferStatus
  affiliateBaseLink: AffiliateBaseLink
  visibility: OfferVisibility_Firestore
  mmp: MeasurementPartnerType
  // targetingTags: AdTargetTag[];
  adSets: AdSetID[]
  airdropMetadata?: Offer_AirdropMetadata
  afterTicketClaimMetadata?: Offer_AfterTicketClaimMetadata
}

export interface Offer_AirdropMetadata extends AirdropBase {
  batchCount: number
  excludedOffers: OfferID[]
  advertiserID: AdvertiserID
  lootboxTemplateID: LootboxID
  lootboxTemplateStamp: string
}

export interface Offer_AfterTicketClaimMetadata {
  questions: QuestionAnswerID[]
}

export enum OfferStrategy {
  Airdrop = 'Airdrop',
  AfterTicketClaim = 'AfterTicketClaim',
  None = 'None',
}

export const OfferStrategyToAdPlacementConverter = {
  [OfferStrategy.AfterTicketClaim]: Placement.AfterTicketClaim,
  [OfferStrategy.Airdrop]: Placement.Airdrop,
}

export interface RateQuote_Firestore {
  id: RateQuoteID
  tournamentID?: TournamentID
  affiliateID: AffiliateID
  affiliateType: AffiliateType
  offerID: OfferID
  activationID: ActivationID
  pricing: number
  timestamp: number
  status: RateQuoteStatus
}

export enum RateQuoteStatus {
  Active = 'Active',
  Inactive = 'Inactive',
}

export enum OfferInTournamentStatus {
  Active = 'Active',
  Inactive = 'Inactive',
}
type TournamentTimestamps = {
  createdAt: number
  deletedAt: number | null
  updatedAt: number
}

export interface TournamentSafetyFeatures_Firestore {
  /** Max number of tickets that any one user can have for this tournament */
  maxTicketsPerUser: number
  /** This seeds lootboxes with the maximum number of tickets per user per lootbox */
  seedMaxLootboxTicketsPerUser: number
}

export enum TournamentVisibility_Firestore {
  Public = 'Public',
  Private = 'Private',
}

export type EventInviteSlug = string

export interface EventInviteMetadata {
  slug: EventInviteSlug
  playerDestinationURL?: string | null
  promoterDestinationURL?: string | null
  maxPlayerLootbox: number
  maxPromoterLootbox: number
}

export interface StampMetadata {
  /** lootbox stamps will inherit these logoURLs */
  logoURLs?: string[]
  seedLootboxFanTicketValue?: string
}

export enum EventInviteType {
  PROMOTER = 'promoter',
  PLAYER = 'player',
}

export interface Tournament_Firestore {
  id: TournamentID
  title: string
  description: string
  tournamentLink?: string
  timestamps: TournamentTimestamps
  creatorId: UserID
  magicLink?: string
  tournamentDate?: number
  prize?: string
  coverPhoto?: string
  communityURL?: string
  affiliateAdIds?: string[]
  organizer?: AffiliateID
  promoters?: AffiliateID[]
  advertisers?: AdvertiserID[]
  isPostCosmic: boolean // To be removed soon
  runningCompletedClaims: number
  playbookUrl?: string
  privacyScope: TournamentPrivacyScope[]
  visibility: TournamentVisibility_Firestore
  offers?: {
    [key: string]: {
      id: OfferID
      status: OfferInTournamentStatus
      strategy?: OfferStrategy
      rateQuotes: RateQuoteID[]
      adSets: {
        [key: string]: AdSetInTournamentStatus
      }
    }
  }
  safetyFeatures?: TournamentSafetyFeatures_Firestore
  inviteMetadata: EventInviteMetadata
  stampMetadata?: StampMetadata

  /** @deprecated */
  streams?: Stream[]
}

export enum TournamentPrivacyScope {
  MarketingEmails = 'MarketingEmails',
  DataSharing = 'DataSharing',
}

export enum AdSetInTournamentStatus {
  Active = 'Active',
  Inactive = 'Inactive',
}

enum StreamType {
  facebook = 'facebook',
  twitch = 'twitch',
  discord = 'discord',
  youtube = 'youtube',
}

export interface Stream {
  id: StreamID
  creatorId: UserID
  type: StreamType
  url: string
  name: string
  tournamentId: TournamentID
  timestamps: {
    createdAt: number
    updatedAt: number
    deletedAt?: number
  }
}

export enum AffiliateVisibility_Firestore {
  Public = 'Public',
  Private = 'Private',
}

export interface Affiliate_Firestore {
  id: AffiliateID
  userID: UserID
  userIdpID: UserIdpID
  name: string
  description: string
  publicContactEmail: string
  organizerRank: OrganizerRank
  avatar: string
  website: string
  audienceSize: number
  visibility: AffiliateVisibility_Firestore
}
