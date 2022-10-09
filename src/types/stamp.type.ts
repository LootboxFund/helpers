import { Address, ChainIDHex, Url } from './base.type'
import { LootboxTicketMetadataV2_Firestore } from './tokens.type'

export interface StampNewTicketProps {
  backgroundImage: Url
  badgeImage?: Url
  logoImage: Url
  themeColor: string
  name: string
  ticketID: string | null
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
  lootboxAddress: Address
  chainIdHex: ChainIDHex
}

export interface StampNewLootboxResponse {
  message: string
  stamp: string
}
