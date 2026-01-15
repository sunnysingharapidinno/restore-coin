import React from "react"
import { TouchableOpacity, ViewStyle } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { useTheme } from "../../../shared/theme/ThemeContext"

interface IconComponentProps {
  name: string
  size?: number
  color?: string
  onPress?: () => void
  style?: ViewStyle
  testID?: string
}

export const IconComponent: React.FC<IconComponentProps> = ({
  name,
  size = 24,
  color,
  onPress,
  style,
  testID,
}) => {
  const { theme } = useTheme()
  const iconColor = color || theme.colors.text.primary

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          {
            padding: theme.spacing.xs,
            alignItems: "center",
            justifyContent: "center",
          },
          style,
        ]}
        testID={testID}
      >
        <Icon name={name} size={size} color={iconColor} />
      </TouchableOpacity>
    )
  }

  return <Icon name={name} size={size} color={iconColor} />
}

// Pre-configured icon components
export const HamburgerIcon: React.FC<Omit<IconComponentProps, "name">> = (
  props
) => <IconComponent name='menu' {...props} />

export const WalletIcon: React.FC<Omit<IconComponentProps, "name">> = (
  props
) => <IconComponent name='account-balance-wallet' {...props} />

export const OfferingIcon: React.FC<Omit<IconComponentProps, "name">> = (
  props
) => <IconComponent name='local-offer' {...props} />

export const ProfileIcon: React.FC<Omit<IconComponentProps, "name">> = (
  props
) => <IconComponent name='person' {...props} />

export const LogoutIcon: React.FC<Omit<IconComponentProps, "name">> = (
  props
) => <IconComponent name='logout' {...props} />

export const AppLogoIcon: React.FC<Omit<IconComponentProps, "name">> = (
  props
) => <IconComponent name='monetization-on' {...props} />
