import { AirdropQuestionAnswerField } from './ad.type'
import { OfferID } from './base.type'
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
  pending = 'pending',
  pending_verification = 'pending_verification',
  verification_sent = 'verification_sent',
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

  // used for airdrop only
  airdropMetadata?: ClaimAirdropMetadata

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

export interface ClaimAirdropMetadata {
  lootboxID: LootboxID
  lootboxAddress: Address
  offerID: OfferID
  batchAlias: string
  claimStatus: AirdropUserClaimStatus
  questionAnswers: AirdropQuestionAnswerField[]
}

export enum AirdropUserClaimStatus {
  Revoked = 'Revoked', // users ticket was revoked and cannot be redeemed for the airdrop prize
  Completed = 'Completed', // user has successfully claimed their airdrop rewards
  Submitted = 'Submitted', // user has submitted the form
  InProgress = 'InProgress', // user is on the redeem page and has started the instructions (questing)
  Pending = 'Pending', // user has clicked to redeem, arriving at the redeem page
  Awaiting = 'Awaiting', // sent the ticket to the user, but they haven't attempted to redeem yet
}
