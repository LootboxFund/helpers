import { ChainIDHex, SemanticVersion, Address } from 'types'

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
