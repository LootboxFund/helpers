import { Address } from './base.type'
import { ChainIDHex } from './base.type'
import { ILootboxMetadata } from './tokens.type'

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