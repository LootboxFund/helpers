import { Address, OfferID, UserID, WalletID } from './base.type'

export interface Wallet_Firestore {
  id: WalletID
  userId: UserID
  address: Address
  createdAt: number
}

export interface User_Firestore {
  id: UserID
  username?: string
  avatar?: string
  email?: string
  phoneNumber?: string
  biography?: string
  headshot?: string[]
  socials?: UserSocials_Firestore
  createdAt: number
  updatedAt: number
  deletedAt?: number
  airdropsReceived?: OfferID[]
}

export type UserSocials_Firestore = {
  twitter?: string
  instagram?: string
  tiktok?: string
  facebook?: string
  discord?: string
  snapchat?: string
  twitch?: string
  web?: string
}
