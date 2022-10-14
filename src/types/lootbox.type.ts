import {
  Address,
  ChainIDDecimal,
  ChainIDHex,
  LootboxCreatedNonce,
  LootboxID,
  UserID,
  LootboxTournamentSnapshotID,
  TournamentID,
  LootboxMintWhitelistID,
  LootboxMintSignatureNonce,
  LootboxTicketID,
  LootboxTicketDigest,
  ClaimID,
  ReferralID,
} from './base.type'
import { LootboxMetadata_Firestore } from './tokens.type'

export enum LootboxVariant_Firestore {
  escrow = 'escrow',
  instant = 'instant',
  cosmic = 'cosmic',
}

export enum LootboxStatus_Firestore {
  active = 'active',
  disabled = 'disabled',
  soldOut = 'soldOut',
}

export type LootboxTimestamps = {
  createdAt: number
  updatedAt: number
  deletedAt: number | null
}

export interface Lootbox_Firestore {
  // Immutable
  id: LootboxID
  address: Address
  factory: Address
  creatorID: UserID
  creatorAddress: Address
  chainIdHex: ChainIDHex
  variant: LootboxVariant_Firestore
  chainIdDecimal: ChainIDDecimal
  chainName: string
  symbol: string
  transactionHash: string
  blockNumber: string
  stampImage: string
  baseTokenURI: string
  runningCompletedClaims: number

  // Mutable
  logo: string
  name: string
  description: string
  nftBountyValue?: string
  joinCommunityUrl?: string
  status?: LootboxStatus_Firestore
  maxTickets: number
  backgroundImage: string
  themeColor: string
  creationNonce: LootboxCreatedNonce | null
  timestamps: LootboxTimestamps
  // metadataDownloadUrl: string;
  // metadataV2: LootboxMetadataV2_Firestore;
  /** @deprecated */
  metadata?: LootboxMetadata_Firestore
}

export interface EnqueueLootboxOnCreateCallableRequest {
  listenAddress: Address
  fromBlock: number
  chainIdHex: ChainIDHex
  payload: {
    /** Used to find the correct lootbox */
    nonce: LootboxCreatedNonce
    lootboxDescription: string
    backgroundImage: string
    logoImage: string
    themeColor: string
    nftBountyValue: string
    joinCommunityUrl?: string
    symbol: string // todo move to contract event
    tournamentID?: TournamentID
  }
}

export interface EnqueueLootboxOnMintCallableRequest {
  fromBlock: number
  lootboxAddress: Address
  nonce: LootboxMintSignatureNonce
  digest: LootboxTicketDigest
  chainIDHex: ChainIDHex
}

export enum LootboxTournamentStatus_Firestore {
  active = 'active',
  disabled = 'disabled',
}

export type LootboxSnapshotTimestamps = {
  createdAt: number
  updatedAt: number
  deletedAt: number | null
}

export interface LootboxTournamentSnapshot_Firestore {
  id: LootboxTournamentSnapshotID
  address: Address
  lootboxID: LootboxID
  creatorID: string
  lootboxCreatorID: UserID
  tournamentID: TournamentID
  description: string
  name: string
  stampImage: string
  timestamps: LootboxSnapshotTimestamps
  status: LootboxTournamentStatus_Firestore
  impressionPriority: number // higher priority will be shown first starts at 0
}

export type MintWhitelistSignature_Firestore = {
  id: LootboxMintWhitelistID
  signature: string
  signer: Address
  whitelistedAddress: Address // The address that is allowed to mint
  userID: UserID | null // The whitelisted user ID
  lootboxAddress: Address
  isRedeemed: boolean
  createdAt: number
  updatedAt: number
  deletedAt: number | null
  nonce: LootboxMintSignatureNonce
  lootboxTicketID: LootboxTicketID | null
  lootboxID: LootboxID
  digest: LootboxTicketDigest
  whitelistedAt?: number | null
  claimID: ClaimID
  referralID: ReferralID
}
