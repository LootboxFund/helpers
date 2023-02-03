// Size mapping for thumbnails - they get this appended to the filename in storage
export interface SizeMapping {
  sm: string
  md: string
  lg: string
}
export const sizeMapping = {
  // Old stamp design:
  // sm: "160x224",
  // md: "300x420",
  sm: '180x330',
  md: '300x550',
  lg: '450x825',
}
