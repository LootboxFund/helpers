import { Address, LootboxID, UserID } from './base.type'
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
  chainIdHex: string
  variant: LootboxVariant_Firestore
  issuer: UserID
  chainIdDecimal: string
  chainName: string
  transactionHash: string
  blockNumber: string
  version: string
  stampImage: string

  // Mutable
  logo: string
  name: string
  description: string
  nftBountyValue?: string
  joinCommunityUrl?: string
  status?: LootboxStatus_Firestore
  maxTickets: number
  backgroundImage: string
  badgeImage?: string
  themeColor: string

  timestamps: LootboxTimestamps
  // metadataDownloadUrl: string;
  // metadataV2: LootboxMetadataV2_Firestore;
  /** @deprecated */
  metadata?: LootboxMetadata_Firestore
}
