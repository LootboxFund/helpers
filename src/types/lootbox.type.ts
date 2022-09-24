import {
  Address,
  ClaimID,
  LootboxID,
  LootboxMintWhitelistID,
  LootboxTicketID,
  LootboxTicketID_Web3,
  UserID,
} from './base.type'
import { ChainIDHex } from './base.type'
import { ILootboxMetadata } from './tokens.type'

export interface LootboxTicket_Firestore {
  id: LootboxTicketID
  lootboxID: LootboxID
  lootboxAddress: Address
  ticketID: LootboxTicketID_Web3
  minterUserID: UserID
  minterAddress: Address
  mintWhitelistID: LootboxMintWhitelistID
  createdAt: number
  stampImage: string
  metadataURL: string
  claimID: ClaimID | null
}

export interface LootboxTicketCustomSchemaV2 {
  version: string
  address: Address
  chainIdHex: string
  chainIdDecimal: string
  chainName: string
  transactionHash: string
  blockNumber: string
  name: string
  description: string
  logo: string
  themeColor: string
  backgroundImage: string
  badgeImage?: string
  createdAt: number
  lootboxThemeColor: string
  factory: Address
  ticketID: LootboxTicketID_Web3
}

export interface LootboxTicketMetadataV2_Firestore {
  // points to stamp image - opensea compatible
  image: string
  // points to lootbox page on lootbox.fund - opensea compatible
  external_url: string
  // description of the lootbox - opensea compatible
  description: string
  // name of the lootbox - opensea compatible
  name: string
  // hex color, must be a six-character hexadecimal without a pre-pended # - opensea compatible
  background_color: string
  // A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA
  animation_url?: string
  // A URL to a YouTube video - opensea compatible
  youtube_url?: string
  lootboxCustomSchema: LootboxTicketCustomSchemaV2
}

/** @deprecated */
export interface LootboxDatabaseSchema {
  address: Address
  factory: Address

  name: string // warning this is duped in metadata
  chainIdHex: ChainIDHex // warning this is duped in metadata
  variant: 'escrow' | 'instant'

  // Emitted in lootbox created event
  issuer: Address
  treasury: Address
  targetSharesSold: string
  maxSharesSold: string

  // From Block Trigger Event
  timestamps: {
    lootboxCreatedAt: number
    lootboxIndexedAt: number
  }

  // Metadata
  metadataDownloadUrl: string
  metadata: ILootboxMetadata
}
