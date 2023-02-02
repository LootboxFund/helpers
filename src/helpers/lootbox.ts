import { LootboxType, Lootbox_Firestore, UserID } from '../types'

export const isLootboxClaimsExcludedFromEventLimits = (lootbox: Lootbox_Firestore): boolean => {
  if (!lootbox || !lootbox.type) {
    return false
  }
  return lootbox.type === LootboxType.Promoter
}

export const doesUserHaveLootboxEditPermission = (lootbox: Lootbox_Firestore, userID: UserID): boolean => {
  if (!userID || !lootbox) {
    return false
  }
  return lootbox.creatorID === userID || lootbox.createdOnBehalfOf === userID
}
