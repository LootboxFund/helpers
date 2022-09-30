import { Address, ChainIDDecimal, ChainIDHex, LootboxCreatedNonce, LootboxID, UserID } from './base.type'
import { LootboxMetadata_Firestore } from './tokens.type'

export enum LootboxVariant_Firestore {
  escrow = 'escrow',
  instant = 'instant',
  cosmic = 'cosmic',
}

export enum LootboxStatus_Firestore {
  active,
  disabled,
  soldOut,
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
  }
}
