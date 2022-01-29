import { ChainIDHex, SemanticVersion, Address } from '../types'
import { TokenData } from '../types/tokens.type'

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

export const buildTokenMoldCDNRoute = ({
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
