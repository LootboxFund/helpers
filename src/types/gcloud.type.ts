import { SemanticVersion } from '@wormgraph/manifest'

export interface GCloud_Config {
  bucketName: GCloudBucketsEnum.devBucket
  prefixes: GBucketPrefixes
  semver: SemanticVersion
}

export enum GCloudBucketsEnum {
  devBucket = 'guildfx-exchange.appspot.com',
}
export type GCloudBucket = 'guildfx-exchange.appspot.com'

export type GBucketPrefixes =
  | 'tokens'
  | 'crowdsales'
  | 'guilds'
  | 'abi'
  | 'lootbox'
  | 'lootbox-uri'
  | 'nft-ticket-stamp'
export enum GBucketPrefixesEnum {
  'tokens' = 'tokens',
  'crowdsales' = 'crowdsales',
  'guilds' = 'guilds',
  'abi' = 'abi',
  'lootbox' = 'lootbox',
  'lootbox-uri' = 'lootbox-uri',
  'nft-ticket-stamp' = 'nft-ticket-stamp',
}
