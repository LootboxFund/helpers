import {
  Address,
  AffiliateID,
  ClaimID,
  LootboxID,
  LootboxMintWhitelistID,
  LootboxTicketID,
  LootboxTicketID_Web3,
  PartyBasketID,
  ReferralID,
  ReferralSlug,
  TournamentID,
  UserID,
  WhitelistSignatureID,
} from './base.type'

export interface Referral_Firestore {
  id: ReferralID
  referrerId: UserID
  creatorId: UserID
  promoterId?: AffiliateID
  slug: ReferralSlug
  tournamentId: TournamentID
  campaignName: string
  nConversions: number
  timestamps: ReferralTimestamps_Firestore
  type: ReferralType_Firestore
  seedLootboxID?: LootboxID
  // TODO Remove after cosmic migration
  isPostCosmic?: boolean

  /** @deprecated use seedLootboxID */
  seedPartyBasketId?: PartyBasketID
}

export type ReferralTimestamps_Firestore = {
  createdAt: number
  updatedAt: number
  deletedAt: number | null
}

export enum ReferralType_Firestore {
  viral = 'viral',
  one_time = 'one_time',
  genesis = 'genesis',
}

export enum ClaimStatus_Firestore {
  /** Claim started */
  pending = 'pending',
  /** When anon user "completes" but has not verified their phone number */
  unverified = 'unverified',
  /** When anon user "completes" a claim but in that time the lootbox became sold out for ex this is considered an end state as well */
  expired = 'expired',
  /** Claim is end state and redeemable etc */
  complete = 'complete',
}

export type ClaimTimestamps_Firestore = {
  createdAt: number
  completedAt: number | null
  updatedAt: number
  deletedAt: number | null
  whitelistedAt: number | null
  mintedAt: number | null
}

export enum ClaimType_Firestore {
  referral = 'referral',
  reward = 'reward',
  one_time = 'one_time',
}

export interface Claim_Firestore {
  id: ClaimID
  referrerId: UserID | null
  referralCampaignName?: string
  referralId: ReferralID
  referralSlug: ReferralSlug
  referralType: ReferralType_Firestore
  promoterId?: AffiliateID
  tournamentId: TournamentID
  tournamentName: string
  originLootboxId?: LootboxID
  lootboxID?: LootboxID
  lootboxAddress?: Address | null
  lootboxName?: string
  lootboxNFTBountyValue?: string
  lootboxMaxTickets?: number
  whitelistId: LootboxMintWhitelistID | null
  whitelistedAddress: Address | null
  ticketWeb3ID: LootboxTicketID_Web3 | null
  ticketID: LootboxTicketID | null
  rewardFromClaim?: ClaimID
  rewardFromFriendReferred?: UserID
  isPostCosmic?: boolean
  claimerUserId?: UserID
  status: ClaimStatus_Firestore
  type: ClaimType_Firestore
  timestamps: ClaimTimestamps_Firestore

  /** @deprecated use lootbox */
  originPartyBasketId?: PartyBasketID
  /** @deprecated use lootbox */
  chosenPartyBasketId?: PartyBasketID
  /** @deprecated use lootbox */
  chosenPartyBasketAddress?: Address
  /** @deprecated use lootbox */
  chosenPartyBasketName?: string
  /** @deprecated use lootbox */
  chosenPartyBasketNFTBountyValue?: string
}
