import { Address, ChainIDHex, LootboxID, Url } from './base.type'
import { LootboxTicketMetadataV2_Firestore } from './tokens.type'

/** @deprecated this is the old design */
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

/** @deprecated this is the old design */
export interface StampNewTicketResponse {
  stamp: string
  uri: string
  message: string
}

/** @deprecated this is the old design */
export interface StampNewLootboxProps {
  backgroundImage: string
  logoImage: string
  themeColor: string
  name: string
  lootboxID: LootboxID
  lootboxAddress?: Address
  chainIdHex?: ChainIDHex
}

/** @deprecated this is the old design */
export interface StampNewLootboxResponse {
  message: string
  stamp: string
}

export interface StampSimpleTicketProps {
  eventName?: string
  hostName?: string
  coverPhoto: string
  // sponsorLogos: string[]
  teamName: string
  playerHeadshot?: string
  themeColor: string
}

export interface StampSimpleTicketResponse {
  message: string
  stamp: string
}

export interface StampInviteTicketProps {
  eventName?: string
  hostName?: string
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
  eventName?: string
  hostName?: string
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
  eventName?: string
  hostName?: string
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
