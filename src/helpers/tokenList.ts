import { ChainIDHex, Address, SemanticVersion } from '../types'

// builds CDN path for indexing tokens
export const buildTokenIndexCDNRoutes = ({ chainIdHex }: { semver: SemanticVersion; chainIdHex: ChainIDHex }) => {
  const cdnTokenIndexPath = `tokens/${chainIdHex}/index.json`
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
  const cdnTokenPath = `tokens/${chainIdHex}/${address}.json`
  return cdnTokenPath
}

// // builds full CDN path
// export const buildFullCDNRoute = ({ bucketName, filePath }: { bucketName: string; filePath: string }) => {
//   return `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${filePath}?alt=media`
// }
