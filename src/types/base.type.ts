export type ChainIDHex = string
export type Url = string
export type ChainIDDecimal = string
export type ExternalAddress = string & { readonly _: unique symbol }
export type ContractAddress = string & { readonly _: unique symbol }
export type Address = ExternalAddress | ContractAddress
export type TicketID = string
export type ABIGenericInterface = any
