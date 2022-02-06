import { ChainIDHex, SemanticVersion, Address } from '../types'

// builds CDN path for indexing tokens
export const buildTokenIndexCDNRoutes = ({
  semver,
  chainIdHex,
}: {
  semver: SemanticVersion
  chainIdHex: ChainIDHex
}) => {
  const cdnTokenIndexPath = `v/${semver}/${chainIdHex}/tokens/index.json`
  return cdnTokenIndexPath
}

// builds CDN path for tokens
export const buildTokenCDNRoute = ({
  chainIdHex,
  semver,
  address,
}: {
  chainIdHex: ChainIDHex
  semver: SemanticVersion
  address: Address
}) => {
  const cdnTokenPath = `v/${semver}/${chainIdHex}/tokens/${address}.json`
  return cdnTokenPath
}

// builds CDN path for crowdsales
export const buildCrowdSaleCDNRoute = ({
  chainIdHex,
  semver,
  address,
}: {
  chainIdHex: ChainIDHex
  semver: SemanticVersion
  address: Address
}) => {
  const cdnTokenPath = `v/${semver}/${chainIdHex}/crowdsales/${address}.json`
  return cdnTokenPath
}

// builds CDN path for indexing crowdsales
export const buildCrowdsaleIndexCDNRoutes = ({
  semver,
  chainIdHex,
}: {
  semver: SemanticVersion
  chainIdHex: ChainIDHex
}) => {
  const cdnTokenIndexPath = `v/${semver}/${chainIdHex}/crowdsales/index.json`
  return cdnTokenIndexPath
}

// builds full CDN path
export const buildFullCDNRoute = ({ bucketName, filePath }: { bucketName: string; filePath: string }) => {
  return `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${filePath}?alt=media`
}
