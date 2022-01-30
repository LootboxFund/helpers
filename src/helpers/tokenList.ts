import { ChainIDHex, SemanticVersion, Address } from '../types'

// builds CDN path for indexing tokens
export const buildTokenIndexCDNRoutes = ({
  semvar,
  chainIdHex,
}: {
  semvar: SemanticVersion
  chainIdHex: ChainIDHex
}) => {
  const cdnTokenIndexPath = `tokens/${chainIdHex}/v/${semvar}/index.json`
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
  const cdnTokenPath = `tokens/${chainIdHex}/v/${semvar}/${address}.json`
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
  const cdnTokenPath = `crowdsales/${chainIdHex}/v/${semvar}/${address}.json`
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
  const cdnTokenIndexPath = `crowdsales/${chainIdHex}/v/${semvar}/index.json`
  return cdnTokenIndexPath
}

// builds full CDN path
export const buildFullCDNRoute = ({ bucketName, filePath }: { bucketName: string; filePath: string }) => {
  return `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${filePath}?alt=media`
}
