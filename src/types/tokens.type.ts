import {
  Address,
  ChainIDDecimal,
  ChainIDHex,
  Url,
  ContractAddress,
  SemanticVersion,
  TournamentID,
  LootboxTicketID_Web3,
  ClaimID,
  LootboxMintWhitelistID,
  UserID,
  LootboxID,
  LootboxTicketID,
} from './base.type'

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

export interface TokenData {
  address: Address
  decimals: number
  name: string
  symbol: string
  chainIdHex: ChainIDHex
  chainIdDecimal: ChainIDDecimal
  logoURI: Url
  priceOracle: Address
}

interface OpenSeaAttributes {
  trait_type: string | number
  value: string
  display_type?: string
}

export type ABIUtilRepresenation = {
  abi: string
  keys: string[]
}

/**
 * DEPRECATED STUFF BELOW HERE!
 */

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

/** @deprecated will be removed after cosmic refactor */
export interface LootboxChain {
  address: Address
  title: string
  chainIdHex: string
  chainIdDecimal: string
  chainName: string
}

/** @deprecated use LootboxCustomSchemaV2 */
export interface LootboxCustomSchema {
  version: string
  chain: LootboxChain
  lootbox: LootboxCustomSchemaData
  /** @deprecated */
  socials: LootboxSocials_Firestore
}

/** @deprecated, use LootboxMetadataV2 */
export interface LootboxMetadata_Firestore {
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
  lootboxCustomSchema: LootboxCustomSchema
}

/** @deprecated lootbox does not have JSON metadata anymore (just database entry) */
export interface LootboxCustomSchemaData {
  name: string
  description: string
  image: string
  backgroundColor: string
  backgroundImage: string
  badgeImage: string
  targetPaybackDate?: number
  createdAt: number
  fundraisingTarget: string
  fundraisingTargetMax: string
  basisPointsReturnTarget: string
  returnAmountTarget: string
  pricePerShare: string
  lootboxThemeColor: string
  transactionHash: string
  blockNumber: string
  factory: Address
  tournamentId: TournamentID
}

/** @deprecated we will use the lootbox creator socials for brevity */
export interface LootboxSocials_Firestore {
  twitter?: string
  email: string
  instagram?: string
  tiktok?: string
  facebook?: string
  discord?: string
  youtube?: string
  snapchat?: string
  twitch?: string
  web?: string
}

/** @deprecated */
export interface ILootboxMetadata {
  /** points to stamp image - opensea compatible */
  image: string
  /** points to lootbox page on lootbox.fund - opensea compatible */
  external_url: string
  /** description of the lootbox - opensea compatible */
  description: string
  /** name of the lootbox - opensea compatible */
  name: string
  /** hex color, must be a six-character hexadecimal without a pre-pended # - opensea compatible */
  background_color: string
  /** A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA */
  animation_url?: string
  /** A URL to a YouTube video - opensea compatible */
  youtube_url?: string
  lootboxCustomSchema: LootboxCustomSchema // Used in lootbox custom code etc
}

/** @deprecated - use LootboxTicket_Firestore type */
export interface ITicketMetadata {
  image: string // the stamp
  external_url: string
  description: string
  name: string
  background_color: string
  animation_url: string
  youtube_url: string
  attributes?: OpenSeaAttributes[]
  lootboxCustomSchema: {
    version: string
    chain: {
      /** lootbox address */
      address: string
      chainIdHex: string
      chainName: string
      chainIdDecimal: string
    }
    lootbox: {
      ticketNumber: number
      backgroundImage: string
      image: string
      backgroundColor: string
      badgeImage?: string
      sharesInTicket: string
    }
  }
}

/** @deprecated */
export interface ITicketMetadataDeprecated {
  address: ContractAddress
  name: string | undefined
  description: string | undefined
  image: Url | undefined
  backgroundColor: string | undefined
  backgroundImage: Url | undefined
  badgeImage: Url | undefined
  lootbox?: {
    address: ContractAddress
    chainIdHex: ChainIDHex
    chainIdDecimal: ChainIDDecimal
    chainName: string
    targetPaybackDate: number // Unix timestamp (new Date().valueOf())
    createdAt: number // Unix timestamp (new Date().valueOf())
    fundraisingTarget: string
    fundraisingTargetMax: string
    basisPointsReturnTarget: string
    returnAmountTarget: string
    pricePerShare: string
    lootboxThemeColor: string
    transactionHash: string
    blockNumber: string
  }
  socials?: {
    twitter: string
    email: string
    instagram: string
    tiktok: string
    facebook: string
    discord: string
    youtube: string
    snapchat: string
    twitch: string
    web: string
  }
}
