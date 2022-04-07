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

export interface ITicketMetadata {
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
    targetPaybackDate: number  // Unix timestamp (new Date().valueOf())
    createdAt: number  // Unix timestamp (new Date().valueOf())
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

export type ABIUtilRepresenation = {
  abi: string
  keys: string[]
}
