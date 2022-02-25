import { SemanticVersion } from './base.type';


export interface GCloud_Config {
  bucketName: GCloudBucketsEnum.devBucket;
  prefixes: GBucketPrefixes;
  semver: SemanticVersion;
}

export enum GCloudBucketsEnum {
  devBucket = "guildfx-exchange.appspot.com"
}
export type GCloudBucket = "guildfx-exchange.appspot.com";

export type GBucketPrefixes = "tokens" | "crowdsales" | "guilds" | "abi" | "lootbox" | "lootbox-uri";
export enum GBucketPrefixesEnum {
  "tokens" = "tokens",
  "crowdsales" = "crowdsales",
  "guilds" = "guilds",
  "abi" = "abi",
  "lootbox" = "lootbox",
  "lootbox-uri" = "lootbox-uri",
}