import { Address, ChainIDDecimal, ChainIDHex, SemanticVersion, Url, ContractAddress } from './base.type'
import { GCloudBucket } from './gcloud.type'

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

export interface GCloudBucketFragment {
  semver: SemanticVersion
  chainIDHex: ChainIDHex
  prefix: string
  bucket: GCloudBucket
  data: TokenData
}

export interface ITicketMetadata {
  address: ContractAddress
  name: string | undefined
  description: string | undefined
  image: Url | undefined
  backgroundColor: string | undefined
  backgroundImage: Url | undefined
  lootbox?: {
    address: ContractAddress
    chainIdHex: ChainIDHex
    chainIdDecimal: ChainIDDecimal
    chainName: string
    targetPaybackDate: Date
    fundraisingTarget: string
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
