export type ChainIDHex = string
export type Url = string
export type ChainIDDecimal = string
export type ExternalAddress = string & { readonly _: unique symbol }
export type ContractAddress = string & { readonly _: unique symbol }
export type Address = ExternalAddress | ContractAddress
export type TicketID = string
export type ABIGenericInterface = any
export type SemanticVersion = string

export type UserID = string & { readonly _: unique symbol }
export type UserIdpID = string & { readonly _: unique symbol }
export type LootboxID = string & { readonly _: unique symbol }
export type WalletID = string & { readonly _: unique symbol }
export type TournamentID = string & { readonly _: unique symbol }
export type PartyBasketID = string & { readonly _: unique symbol }
export type WhitelistSignatureID = string & { readonly _: unique symbol }
export type StreamID = string & { readonly _: unique symbol }
export type ReferralSlug = string & { readonly _: unique symbol }
export type ReferralID = string & { readonly _: unique symbol }
export type ClaimID = string & { readonly _: unique symbol }
export type AdSetID = string & { readonly _: unique symbol }
export type AdID = string & { readonly _: unique symbol }
export type SessionID = string & { readonly _: unique symbol }
export type CampaignID = string & { readonly _: unique symbol }
export type FlightID = string & { readonly _: unique symbol }
export type CreativeID = string & { readonly _: unique symbol }
export type AdEventNonce = string & { readonly _: unique symbol }
export type AdEventID = string & { readonly _: unique symbol }
export type AdvertiserID = string & { readonly brand: unique symbol }
export type AffiliateID = string & { readonly _: unique symbol }
export type OfferID = string & { readonly _: unique symbol }
export type MemoID = string & { readonly _: unique symbol }
export type RateQuoteID = string & {
  readonly _: unique symbol
}
export type LootboxMintWhitelistID = string & { readonly _: unique symbol }
export type LootboxMintSignatureNonce = string & { readonly _: unique symbol }
export type LootboxTicketID = string & { readonly _: unique symbol }
export type LootboxTicketID_Web3 = string & { readonly _: unique symbol }
export type LootboxCreatedNonce = string & { readonly _: unique symbol }
export type LootboxTournamentSnapshotID = string & {
  readonly _: unique symbol
}
