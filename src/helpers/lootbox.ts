import { LootboxType, Lootbox_Firestore, UserID } from '../types'

export const isLootboxClaimsExcludedFromEventLimits = (lootbox: Lootbox_Firestore) => {
  return lootbox?.type === LootboxType.Promoter
}

export const doesUserHaveLootboxEditPermission = (lootbox: Lootbox_Firestore, userID: UserID) => {
  return lootbox?.creatorID === userID || lootbox?.createdOnBehalfOf === userID
}
