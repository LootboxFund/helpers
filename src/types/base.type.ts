export type ChainIDHex = string
export type Url = string
export type ChainIDDecimal = string
export type ExternalAddress = string & { readonly _: unique symbol }
export type ContractAddress = string & { readonly _: unique symbol }
export type Address = ExternalAddress | ContractAddress
export type TicketID = string
export type ABIGenericInterface = any

export type SemanticVersion = '0.0.1-sandbox' | '0.1.0-demo' | '0.2.0-sandbox' | '0.2.0-demo' | '0.2.1-sandbox'
export enum SemanticVersionEnum {
  '0.0.1-sandbox' = '0.0.1-sandbox',
  '0.1.0-demo' = '0.1.0-demo',
  '0.2.0-sandbox' = '0.2.0-sandbox',
  '0.2.0-demo' = '0.2.0-demo',
  '0.2.1-sandbox' = '0.2.1-sandbox',
}
