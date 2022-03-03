import { ChainIDDecimal, ChainIDHex, Url, ContractAddress } from './base.type'

export enum ChainSlugs {
  ETH_MAINNET = 'ETH_MAINNET',
  BSC_TESTNET = 'BSC_TESTNET',
  BSC_MAINNET = 'BSC_MAINNET',
  POLYGON_TESTNET = 'POLYGON_TESTNET',
  POLYGON_MAINNET = 'POLYGON_MAINNET',
  UNKNOWN = 'UNKNOWN',
}
export type ChainInfo = {
  chainIdHex: ChainIDHex
  chainIdDecimal: ChainIDDecimal
  chainName: string
  displayName: string
  nativeCurrency: {
    name: string
    symbol: string
    decimals: number
  }
  rpcUrls: Url[]
  blockExplorerUrls: Url[]
  currentNetworkLogo: string
  slug: ChainSlugs
  priceFeedUSD: ContractAddress
}
export const BLOCKCHAINS: Record<ChainSlugs, ChainInfo> = {
  ETH_MAINNET: {
    chainIdHex: '0x1',
    chainIdDecimal: '1',
    chainName: 'Ethereum Mainnet',
    displayName: 'ETH Mainnet',
    nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
    rpcUrls: ['https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    blockExplorerUrls: ['https://etherscan.io'],
    currentNetworkLogo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
    slug: ChainSlugs.ETH_MAINNET,
    priceFeedUSD: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419' as ContractAddress,
  },
  BSC_TESTNET: {
    chainIdHex: '0x38',
    chainIdDecimal: '56',
    chainName: 'Binance Smart Chain',
    displayName: 'BSC Mainnet',
    nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
    rpcUrls: ['https://bsc-dataseed.binance.org/'],
    blockExplorerUrls: ['https://bscscan.com/'],
    currentNetworkLogo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
    slug: ChainSlugs.BSC_TESTNET,
    priceFeedUSD: '0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526' as ContractAddress,
  },
  BSC_MAINNET: {
    slug: ChainSlugs.BSC_MAINNET,
    chainIdHex: '0x61',
    chainIdDecimal: '97',
    chainName: 'Binance Smart Chain (Testnet)',
    displayName: 'BSC Testnet',
    nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
    blockExplorerUrls: ['https://testnet.bscscan.com/'],
    currentNetworkLogo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
    priceFeedUSD: '0x0' as ContractAddress,
  },
  POLYGON_TESTNET: {
    slug: ChainSlugs.POLYGON_TESTNET,
    chainIdHex: '0x13881',
    chainIdDecimal: '80001',
    chainName: 'Polygon Mumbai (Testnet)',
    displayName: 'Mumbai',
    nativeCurrency: { name: 'Matic', symbol: 'MATIC', decimals: 18 },
    rpcUrls: ['https://rpc-mumbai.matic.today'],
    blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
    currentNetworkLogo:
      'https://firebasestorage.googleapis.com/v0/b/guildfx-exchange.appspot.com/o/assets%2Ftokens%2FMATIC.png?alt=media',
    priceFeedUSD: '0x0' as ContractAddress,
  },
  POLYGON_MAINNET: {
    slug: ChainSlugs.POLYGON_MAINNET,
    chainIdHex: '0x89',
    chainIdDecimal: '137',
    chainName: 'Polygon (Mainnet)',
    displayName: 'Polygon Mainnet',
    nativeCurrency: { name: 'Matic', symbol: 'MATIC', decimals: 18 },
    rpcUrls: ['https://polygon-rpc.com/'],
    blockExplorerUrls: ['https://polygonscan.com/'],
    currentNetworkLogo:
      'https://firebasestorage.googleapis.com/v0/b/guildfx-exchange.appspot.com/o/assets%2Ftokens%2FMATIC.png?alt=media',
    priceFeedUSD: '0x0' as ContractAddress,
  },
  UNKNOWN: {
    slug: ChainSlugs.POLYGON_MAINNET,
    chainIdHex: '0x',
    chainIdDecimal: '0',
    chainName: 'Unknown Network',
    displayName: 'Unknown Network',
    nativeCurrency: { name: '', symbol: '', decimals: 18 },
    rpcUrls: [],
    blockExplorerUrls: [],
    currentNetworkLogo: '',
    priceFeedUSD: '0x0' as ContractAddress,
  },
}

export const chainIdHexToSlug = (chainIdHex: ChainIDHex): ChainSlugs | undefined => {
  const chain = Object.values(BLOCKCHAINS).find((value) => value.chainIdHex === chainIdHex)
  if (chain) {
    return chain.slug
  }
  return
}

export const chainIdHexToName = (chainIdHex: ChainIDHex): string => {
  const slug = chainIdHexToSlug(chainIdHex)
  if (slug) {
    return BLOCKCHAINS[slug].chainName
  }
  return ''
}
