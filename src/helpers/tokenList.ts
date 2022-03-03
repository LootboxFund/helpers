import { ChainIDHex, Address } from '../types'
import { SemanticVersion } from '@lootboxfund/manifest'

// builds CDN path for indexing tokens
export const buildTokenIndexCDNRoutes = ({ chainIdHex }: { semver: SemanticVersion; chainIdHex: ChainIDHex }) => {
  const cdnTokenIndexPath = `v/${chainIdHex}/tokens/index.json`
  return cdnTokenIndexPath
}

// builds CDN path for tokens
export const buildTokenCDNRoute = ({
  chainIdHex,
  address,
}: {
  chainIdHex: ChainIDHex
  semver: SemanticVersion
  address: Address
}) => {
  const cdnTokenPath = `v/${chainIdHex}/tokens/${address}.json`
  return cdnTokenPath
}

// builds CDN path for crowdsales
export const buildCrowdSaleCDNRoute = ({
  chainIdHex,
  address,
}: {
  chainIdHex: ChainIDHex
  semver: SemanticVersion
  address: Address
}) => {
  const cdnTokenPath = `v/${chainIdHex}/crowdsales/${address}.json`
  return cdnTokenPath
}

// builds CDN path for indexing crowdsales
export const buildCrowdsaleIndexCDNRoutes = ({ chainIdHex }: { semver: SemanticVersion; chainIdHex: ChainIDHex }) => {
  const cdnTokenIndexPath = `v/${chainIdHex}/crowdsales/index.json`
  return cdnTokenIndexPath
}

// builds full CDN path
export const buildFullCDNRoute = ({ bucketName, filePath }: { bucketName: string; filePath: string }) => {
  return `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${filePath}?alt=media`
}
