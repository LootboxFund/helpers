import { ChainIDHex, SemanticVersion, Address } from '../types'

// builds CDN path for indexing tokens
export const buildTokenIndexCDNRoutes = ({
  semvar,
  chainIdHex,
}: {
  semvar: SemanticVersion
  chainIdHex: ChainIDHex
}) => {
  const cdnTokenIndexPath = `v/${semvar}/${chainIdHex}/tokens/index.json`
  return cdnTokenIndexPath
}

// builds CDN path for tokens
export const buildTokenCDNRoute = ({
  chainIdHex,
  semvar,
  address,
}: {
  chainIdHex: ChainIDHex
  semvar: SemanticVersion
  address: Address
}) => {
  const cdnTokenPath = `v/${semvar}/${chainIdHex}/tokens/${address}.json`
  return cdnTokenPath
}

// builds CDN path for crowdsales
export const buildCrowdSaleCDNRoute = ({
  chainIdHex,
  semvar,
  address,
}: {
  chainIdHex: ChainIDHex
  semvar: SemanticVersion
  address: Address
}) => {
  const cdnTokenPath = `v/${semvar}/${chainIdHex}/crowdsales/${address}.json`
  return cdnTokenPath
}

// builds CDN path for indexing crowdsales
export const buildCrowdsaleIndexCDNRoutes = ({
  semvar,
  chainIdHex,
}: {
  semvar: SemanticVersion
  chainIdHex: ChainIDHex
}) => {
  const cdnTokenIndexPath = `v/${semvar}/${chainIdHex}/crowdsales/index.json`
  return cdnTokenIndexPath
}

// builds full CDN path
export const buildFullCDNRoute = ({ bucketName, filePath }: { bucketName: string; filePath: string }) => {
  return `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${filePath}?alt=media`
}
