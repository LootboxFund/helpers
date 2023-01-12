import { Address, ChainIDHex, LootboxID, Url } from './base.type'
import { LootboxTicketMetadataV2_Firestore } from './tokens.type'

export interface StampNewTicketProps {
  backgroundImage: Url
  badgeImage?: Url
  logoImage: Url
  themeColor: string
  name: string
  ticketID: string | null
  lootboxID: LootboxID
  lootboxAddress: Address
  chainIdHex: ChainIDHex
  metadata: LootboxTicketMetadataV2_Firestore
}

export interface StampNewTicketResponse {
  stamp: string
  uri: string
  message: string
}

// stamp the lootbox
export interface StampNewLootboxProps {
  backgroundImage: string
  logoImage: string
  themeColor: string
  name: string
  lootboxID: LootboxID
  lootboxAddress?: Address
  chainIdHex?: ChainIDHex
}

export interface StampNewLootboxResponse {
  message: string
  stamp: string
}

export interface StampSimpleTicketProps {
  coverPhoto: string
  sponsorLogos: string[]
  teamName: string
  playerHeadshot?: string
  themeColor: string
}

export interface StampSimpleTicketResponse {
  message: string
  stamp: string
}

export interface StampInviteTicketProps {
  coverPhoto: string
  sponsorLogos: string[]
  teamName: string
  playerHeadshot?: string
  themeColor: string
  ticketValue: string
  qrCodeLink: string
}

export interface StampInviteTicketResponse {
  message: string
  stamp: string
}

export interface StampVictoryTicketProps {
  coverPhoto: string
  sponsorLogos: string[]
  teamName: string
  playerHeadshot?: string
  themeColor: string
  ticketValue: string
  qrCodeLink: string
}

export interface StampVictoryTicketResponse {
  message: string
  stamp: string
}

export interface StampLossTicketProps {
  coverPhoto: string
  sponsorLogos: string[]
  teamName: string
  playerHeadshot?: string
  themeColor: string
  ticketValue: string
  qrCodeLink: string
}

export interface StampLossTicketResponse {
  message: string
  stamp: string
}
