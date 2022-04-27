import { Address, ChainIDDecimal, ChainIDHex, Url, ContractAddress } from './base.type'

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

export interface LootboxCustomSchema {
  chain: {
    address: ContractAddress
    title: string
    chainIdHex: string
    chainIdDecimal: string
    chainName: string
  }
  lootbox: {
    name: string
    description: string
    image: Url
    backgroundColor: string
    backgroundImage: Url
    badgeImage: Url
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
  socials: {
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

//
/**
 * Base level metadata should be opensea compatible (see https://docs.opensea.io/docs/metadata-standards for more details)
 * Custom lootbox metadata is nested in lootboxCustomSchema field
 */
export interface ITicketMetadata {
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

export type ABIUtilRepresenation = {
  abi: string
  keys: string[]
}
