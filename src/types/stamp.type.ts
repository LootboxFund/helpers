import { Address, ChainIDHex, Url } from './base.type'
import { LootboxTicketMetadataV2_Firestore } from './lootbox.type'

export interface StampNewTicketProps {
  backgroundImage: Url
  badgeImage?: Url
  logoImage: Url
  themeColor: string
  name: string
  ticketID: string
  lootboxAddress: Address
  chainIdHex: ChainIDHex
  numShares: string
  metadata: LootboxTicketMetadataV2_Firestore
}

export interface StampNewTicketResponse {
  stamp: string
  uri: string
  message: string
}