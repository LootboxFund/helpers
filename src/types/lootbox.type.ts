import { AirdropBase, AirdropQuestionAnswerField } from './ad.type'
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
  DepositID,
  DepositID_Web3,
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
  deployedAt?: number | null
}

export interface Lootbox_Firestore {
  id: LootboxID
  logo: string
  name: string
  description: string
  nftBountyValue?: string
  joinCommunityUrl?: string
  status?: LootboxStatus_Firestore
  maxTickets: number
  backgroundImage: string
  themeColor: string
  runningCompletedClaims: number
  timestamps: LootboxTimestamps
  stampImage: string
  members?: LootboxMemberRep[]
  creatorID: UserID
  isContractDeployed?: boolean

  // Web3 things
  address: Address | null
  factory: Address | null
  creatorAddress: Address | null
  chainIdHex: ChainIDHex | null
  variant: LootboxVariant_Firestore | null
  chainIdDecimal: ChainIDDecimal | null
  chainName: string | null
  symbol: string | null
  transactionHash: string | null
  blockNumber: string | null
  baseTokenURI: string | null
  creationNonce: LootboxCreatedNonce | null

  // Airdrop only
  airdropMetadata?: LootboxAirdropMetadata

  /** @deprecated */
  metadata?: LootboxMetadata_Firestore
}

export interface LootboxAirdropMetadata extends AirdropBase {
  lootboxID: LootboxID
  lootboxAddress: Address
  batchId: string
}

// export interface Lootbox_Firestore {
//   // Immutable
//   id: LootboxID
//   address: Address
//   factory: Address
//   creatorID: UserID
//   creatorAddress: Address
//   chainIdHex: ChainIDHex
//   variant: LootboxVariant_Firestore
//   chainIdDecimal: ChainIDDecimal
//   chainName: string
//   symbol: string
//   transactionHash: string
//   blockNumber: string
//   stampImage: string
//   baseTokenURI: string

//   // Mutable
//   logo: string
//   name: string
//   description: string
//   nftBountyValue?: string
//   joinCommunityUrl?: string
//   status?: LootboxStatus_Firestore
//   maxTickets: number
//   backgroundImage: string
//   themeColor: string
//   creationNonce: LootboxCreatedNonce | null
//   timestamps: LootboxTimestamps
//   runningCompletedClaims: number
//   members?: LootboxMemberRep[]
//   // metadataDownloadUrl: string;
//   // metadataV2: LootboxMetadataV2_Firestore;
//   /** @deprecated */
//   metadata?: LootboxMetadata_Firestore
// }

export type LootboxMemberRep = {
  userID: UserID
  status: LootboxMemberRepStatus
  respondedAt: number
  invitedBy: UserID
}
export enum LootboxMemberRepStatus {
  Invited = 'Invited',
  Accepted = 'Accepted',
  Declined = 'Declined',
  Revoked = 'Revoked',
}
export interface EnqueueLootboxOnCreateCallableRequest {
  listenAddress: Address
  fromBlock: number
  chainIdHex: ChainIDHex
  payload: {
    /** Used to find the correct lootbox */
    nonce: LootboxCreatedNonce
    symbol: string // todo move to contract event
    lootboxID: LootboxID
  }
}

export interface Deposit_Firestore {
  id: DepositID
  createdAt: number
  updatedAt: number
  depositerAddress: Address
  depositerID: UserID
  lootboxID: LootboxID
  lootboxAddress: Address
  erc20Amount: string
  nativeAmount: string
  transactionHash: string
  blockNumber: number
  chainIDHex: ChainIDHex
  depositID: DepositID_Web3
  erc20Address: Address
  maxTicketSnapshot: number
}

export interface EnqueueLootboxOnMintCallableRequest {
  fromBlock: number
  lootboxAddress: Address
  nonce: LootboxMintSignatureNonce
  digest: LootboxTicketDigest
  chainIDHex: ChainIDHex
}

export interface EnqueueLootboxOnDepositCallableRequest {
  fromBlock: number
  lootboxAddress: Address
  chainIDHex: ChainIDHex
  amount: string // String big number i.e. "1000000000000000000"
  erc20Address: Address
  afterDepositID: DepositID_Web3
  depositerAddress: Address
}

export enum LootboxTournamentStatus_Firestore {
  active = 'active',
  disabled = 'disabled',
}

export type LootboxSnapshotTimestamps = {
  createdAt: number
  updatedAt: number
  deletedAt: number | null
  depositEmailSentAt?: number | null
}

export interface LootboxTournamentSnapshot_Firestore {
  id: LootboxTournamentSnapshotID
  address: Address | null
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

export interface EnqueueLootboxDepositEmailRequest {
  lootboxID: LootboxID
  tournamentID: TournamentID
  chainIDHex: ChainIDHex
}
