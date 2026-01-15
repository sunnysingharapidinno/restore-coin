export const spacing = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
} as const

export const radius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
} as const

export const layout = {
  screenPaddingHorizontal: 16,
  screenPaddingVertical: 24,
  containerMaxWidth: 600,
  headerHeight: 56,
  tabBarHeight: 49,
} as const

export type Spacing = typeof spacing
export type Radius = typeof radius
export type Layout = typeof layout
