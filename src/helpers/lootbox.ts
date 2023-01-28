import { LootboxType, Lootbox_Firestore } from '../types'

export const isLootboxClaimsExcludedFromEventLimits = (lootbox: Lootbox_Firestore) => {
  return lootbox?.type === LootboxType.Promoter
}
