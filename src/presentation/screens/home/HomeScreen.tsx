import React, { useMemo } from "react"
import { View, StyleSheet, ScrollView, Image, Dimensions } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useTheme } from "../../../shared/theme/ThemeContext"
import {
  Typography,
  Button,
  IconComponent,
  IconButton,
} from "../../components/atoms"
import { ScreenLayout } from "../../components/organisms"
import { CardWrap } from "../../components/organisms/CardWrap"
import { HomeScreenProps } from "../../navigation/types"
import AppIcons from "../../../assets/icons/AppIcons"
import { Theme } from "../../../shared/theme"
import { string } from "yup"

const SUPPORT_PROJECTS = [
  {
    key: "total-freedom",
    titleLine1: "Total",
    titleLine2: "Freedom",
    icon: "favorite-border",
  },
  {
    key: "fields-of-grace",
    titleLine1: "Fields of",
    titleLine2: "Grace",
    icon: "favorite-border",
  },
  {
    key: "raynor-shine",
    titleLine1: "Raynor",
    titleLine2: "Shine",
    icon: "wb-sunny",
  },
  {
    key: "american-farmland",
    titleLine1: "American Farmland",
    titleLine2: "Revival",
    icon: "park",
  },
  {
    key: "grow-gardens",
    titleLine1: "Grow & Learn",
    titleLine2: "Gardens",
    icon: "school",
  },
  {
    key: "urban-green-space",
    titleLine1: "Urban Green",
    titleLine2: "Space",
    icon: "apartment",
  },
]

interface RedemptionCardConfig {
  key: string
  title: string
  subtitle: string
  icon: string
  gradient: (colors: any) => [string, string, ...string[]]
  itemsLabel?: string
  borderColor?: string
  btnTextColor?: string
  iconGradient: (colors: any) => [string, string, ...string[]]
}

const REDEMPTION_CARDS: RedemptionCardConfig[] = [
  {
    key: "donation-certificates",
    title: "Donation Certificates",
    subtitle: "Transport waste, earn per load",
    icon: "emoji-events",
    gradient: (colors) => [
      "rgba(59, 130, 246, 0.20)",
      "rgba(59, 130, 246, 0.05)",
    ],
    borderColor: "rgba(59, 130, 246, 0.40)",
    iconGradient: () => ["#3B82F6", "#2563EB"],
  },
  {
    key: "utility-store-green",
    title: "Utility Store",
    subtitle: "Biochar, gear",
    icon: "shopping-bag",
    gradient: (colors) => [
      "rgba(6, 78, 59, 0.40)",
      "rgba(6, 95, 70, 0.30)",
      "rgba(6, 78, 59, 0.40)",
    ],
    itemsLabel: "6 items",
    borderColor: "rgba(16, 185, 129, 0.30)",
    iconGradient: () => ["#10B981", "#047857"],
    btnTextColor: "#34D399",
  },
  {
    key: "utility-store-purple",
    title: "Utility Store",
    subtitle: "Biochar, gear",
    icon: "tv",
    gradient: (colors) => [
      "rgba(168, 85, 247, 0.20)",
      "rgba(168, 85, 247, 0.05)",
    ],
    itemsLabel: "4 items",
    borderColor: "rgba(168, 85, 247, 0.40)",
    iconGradient: () => ["#A855F7", "#9333EA"],
    btnTextColor: "#A855F7",
  },
]

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { theme } = useTheme()

  const styles = useMemo(() => createStyles(theme), [theme])

  return (
    <ScreenLayout>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          {/* Welcome section */}
          <View style={styles.welcomeSection}>
            <Typography
              style={{ fontWeight: "700" }}
              variant='headlineSmall'
              color='primary'
            >
              Welcome Rio!
            </Typography>

            <View style={styles.subtitleRow}>
              <Typography variant='bodyMedium' color='secondary'>
                Adventurer
              </Typography>

              <View style={styles.starsRow}>
                <IconComponent
                  name='star'
                  size={16}
                  color={theme.colors.warning}
                />
                <IconComponent
                  name='star'
                  size={16}
                  color={theme.colors.warning}
                />
                <IconComponent
                  name='star'
                  size={16}
                  color={theme.colors.warning}
                />
              </View>
            </View>
          </View>

          {/* My Portfolio card */}

          <CardWrap
            style={styles.portfolioCard}
            gradientConfig={{
              colors: ["#303845", "#13161B"],
              locations: [0.0012, 1.0463],
              start: { x: 0, y: 0 },
              end: { x: 0.9, y: 1 },
            }}
          >
            <View style={styles.cardHeaderRow}>
              <View style={styles.cardTitleRow}>
                <IconButton
                  size='small'
                  gradientConfig={{
                    colors: ["#00BC7D", "#009689"],
                    start: { x: 0, y: 0 },
                    end: { x: 1, y: 1 },
                    style: styles?.iconCircle,
                  }}
                >
                  <Image
                    source={AppIcons.logoWhite}
                    style={styles.iconImage}
                    resizeMode='contain'
                  />
                </IconButton>

                <Typography variant='titleMedium' color='primary'>
                  My Portfolio
                </Typography>
              </View>

              <IconComponent
                name='chevron-right'
                size={20}
                color={theme.colors.text.secondary}
              />
            </View>

            <View style={styles.primaryMetricBlock}>
              <Typography variant='displaySmall' color='primary'>
                501328.66
              </Typography>

              <Typography
                variant='bodyMedium'
                color='secondary'
                style={styles.secondaryAmount}
              >
                ≈ $144,720.72
              </Typography>

              <View style={styles.metaRow}>
                <Typography variant='bodySmall' color='secondary'>
                  CO-Offset (12 Treecoins)
                </Typography>

                <View style={styles.verifiedChip}>
                  <Typography variant='labelMedium' color='#00D492'>
                    Verified
                  </Typography>
                </View>
              </View>
            </View>
          </CardWrap>

          {/* Total Balance card */}
          <CardWrap
            style={styles.portfolioCard}
            gradientConfig={{
              colors: ["#303845", "#13161B"],
              locations: [0.0012, 1.0463],
              start: { x: 0, y: 0 },
              end: { x: 1, y: 1 },
            }}
          >
            <View style={styles.cardHeaderRow}>
              <Typography variant='titleMedium' color='secondary'>
                Total Balance
              </Typography>

              <IconComponent
                name='visibility'
                size={18}
                color={theme.colors.text.tertiary}
              />
            </View>

            <View style={styles.primaryMetricBlock}>
              <Typography variant='headlineLarge' color='primary'>
                5065
              </Typography>

              <Typography
                variant='bodyMedium'
                color='secondary'
                style={styles.balanceSubtitle}
              >
                Tons of Waste Already Diverted from Landfills
              </Typography>

              <View style={styles.deltaRow}>
                <IconComponent
                  name='trending-up'
                  size={16}
                  color={theme.colors.success}
                />
                <Typography variant='bodyMedium' color='success'>
                  +12.5%
                </Typography>
              </View>

              <Button
                variant='primary'
                size='large'
                fullWidth
                style={styles.reportButton}
                gradientConfig={{
                  colors: ["#009966", "#009689"],
                  start: { x: 0, y: 0 },
                  end: { x: 1, y: 0 },
                }}
              >
                Get My Report
              </Button>
            </View>
          </CardWrap>

          {/* Status badges row */}
          <View style={styles.badgesRow}>
            <CardWrap
              style={[styles.badgeCard, styles.badgeBlue]}
              gradientConfig={{
                colors: [
                  "rgba(59, 130, 246, 0.20)",
                  "rgba(59, 130, 246, 0.05)",
                ],
                start: { x: 0, y: 0 },
                end: { x: 1, y: 1 },
              }}
            >
              <Typography variant='labelMedium' color='secondary'>
                Verified
              </Typography>
              <Typography
                style={{ textAlign: "center" }}
                variant='labelMedium'
                color='primary'
              >
                On-{"\n"}Chain
              </Typography>
            </CardWrap>

            <CardWrap
              style={[styles.badgeCard, styles.badgePurple]}
              gradientConfig={{
                colors: ["rgba(89,22,139,0.30)", "rgba(110,17,176,0.20)"],
                start: { x: 0, y: 0 },
                end: { x: 1, y: 1 },
              }}
            >
              <Typography variant='labelMedium' color='secondary'>
                18 Issues
              </Typography>
              <Typography
                style={{ textAlign: "center" }}
                variant='labelMedium'
                color='primary'
              >
                Impact Certificate
              </Typography>
            </CardWrap>

            <CardWrap
              gradientConfig={{
                colors: [
                  "rgba(6, 78, 59, 0.40)",
                  "rgba(6, 95, 70, 0.30)",
                  "rgba(6, 78, 59, 0.40)",
                ],
                locations: [0, 0.5, 1],
                start: { x: 0, y: 0 },
                end: { x: 1, y: 1 },
              }}
              style={[styles.badgeCard, styles.badgeGreen]}
            >
              <Typography variant='labelMedium' color='secondary'>
                18 Issues
              </Typography>
              <Typography
                style={{ textAlign: "center" }}
                variant='labelMedium'
                color='primary'
              >
                Tons{"\n"} Drawn
              </Typography>
            </CardWrap>
          </View>

          {/* Footer copy */}
          <View style={styles.footerSection}>
            <Typography
              variant='titleLarge'
              color='success'
              style={styles.footerTitle}
            >
              Scan to restore the world
            </Typography>

            <Typography variant='bodyMedium' color='secondary'>
              Transform your assets into rewards
            </Typography>
          </View>

          {/* Support. Impact. Heal section */}
          <View style={styles.sectionWrapper}>
            <Typography variant='bodyLarge' color='success'>
              Support. Impact. Heal
            </Typography>

            <Typography
              variant='bodyMedium'
              color='secondary'
              style={styles.sectionSubtitle}
            >
              Transform your assets into rewards
            </Typography>

            <View style={styles.supportGrid}>
              {SUPPORT_PROJECTS.map((project) => (
                <LinearGradient
                  key={project.key}
                  colors={["rgba(16, 24, 40, 0.50)", "rgba(30, 41, 57, 0.30)"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }} // 135deg
                  style={[styles.supportCard]}
                >
                  <View style={styles.supportIconCircle}>
                    <IconComponent name={project.icon} size={22} />
                  </View>

                  <Typography
                    variant='labelMedium'
                    color='primary'
                    align='center'
                    style={styles.supportTitle}
                  >
                    {project.titleLine1}
                    {"\n"}
                    {project.titleLine2}
                  </Typography>

                  <Button
                    variant='outlined'
                    size='small'
                    fullWidth
                    style={styles.supportDonateButton}
                  >
                    Donate
                  </Button>
                </LinearGradient>
              ))}
            </View>
          </View>

          {/* Burn. Redeem. Restore section */}
          <View style={styles.sectionWrapper}>
            <Typography variant='bodyLarge' color='success'>
              Burn. Redeem. Restore
            </Typography>

            <Typography
              variant='bodyMedium'
              color='secondary'
              style={styles.sectionSubtitle}
            >
              Transform your assets into rewards
            </Typography>

            <View style={styles.redemptionList}>
              {REDEMPTION_CARDS.map((card) => (
                <View
                  key={card.key}
                  style={[
                    styles.redemptionCardOuter,
                    { borderColor: card.borderColor },
                  ]}
                >
                  <LinearGradient
                    colors={card.gradient(theme.colors)}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.redemptionCard}
                  >
                    <LinearGradient
                      style={styles.redemptionIconCircle}
                      colors={card.iconGradient(theme.colors)}
                    >
                      <IconComponent
                        name={card.icon}
                        size={22}
                        color={theme.colors.primaryContrast}
                      />
                    </LinearGradient>

                    <Typography
                      variant='labelMedium'
                      color='primary'
                      align='center'
                      style={styles.redemptionTitle}
                    >
                      {card.title}
                    </Typography>

                    <Typography
                      variant='bodySmall'
                      color='secondary'
                      align='center'
                      style={[
                        styles.redemptionSubtitle,
                        !card.itemsLabel && { marginBottom: 0 },
                      ]}
                    >
                      {card.subtitle}
                    </Typography>

                    {card.itemsLabel && (
                      <View
                        style={[
                          styles.itemsPill,
                          { borderColor: card.borderColor },
                        ]}
                      >
                        <Typography
                          variant='labelSmall'
                          color={card.btnTextColor}
                          align='center'
                        >
                          {card.itemsLabel}
                        </Typography>
                      </View>
                    )}
                  </LinearGradient>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenLayout>
  )
}

const CARD_GAP = 16
const SCREEN_WIDTH = Dimensions.get("window").width

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    scrollContent: {
      paddingHorizontal: theme.layout.screenPaddingHorizontal,
      paddingVertical: theme.layout.screenPaddingVertical,
      paddingTop: 43,
    },
    container: {
      flexGrow: 1,
      width: "100%",
      alignSelf: "center",
    },
    welcomeSection: {
      marginBottom: theme.spacing.lg,
    },
    subtitleRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: theme.spacing.xs,
    },
    starsRow: {
      flexDirection: "row",
      marginLeft: theme.spacing.sm,
    },
    portfolioCard: {
      marginBottom: theme.spacing.lg,
      paddingHorizontal: theme?.spacing?.md,
      paddingVertical: 20,
      borderColor: `rgba(216, 231, 242, 0.07)`,
    },
    cardHeaderRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    cardTitleRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing.sm,
    },
    iconCircle: {
      width: 32,
      height: 32,
      borderRadius: 18,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.colors.greenBtnBg,
      marginRight: theme.spacing.sm,
    },
    iconImage: {
      width: 20,
      height: 20,
    },

    primaryMetricBlock: {
      marginTop: 12,
    },
    secondaryAmount: {
      marginVertical: theme.spacing.xs,
    },
    metaRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing.sm,
    },
    verifiedChip: {
      padding: theme.spacing.sm,
      borderRadius: theme.radius.full,
      backgroundColor: "#1E2939",
    },
    totalBalanceCard: {
      marginTop: theme.spacing.md,
      backgroundColor: theme.colors.cardSecondaryBg,
    },
    balanceSubtitle: {
      marginVertical: theme.spacing.sm,
    },
    deltaRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 12,
      gap: theme?.spacing?.xs,
    },

    reportButton: {
      borderRadius: 14,
      shadowColor: theme.colors.greenBtnShadow,
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.7,
      shadowRadius: 20,
      elevation: 8,
    },
    badgesRow: {
      flexDirection: "row",
      gap: 12,
      alignItems: "stretch",
      width: "100%",
      marginBottom: theme.spacing.lg,
    },
    badgeCard: {
      flex: 1,
      alignItems: "center",
      borderRadius: theme.radius.lg,
      borderWidth: 1,
      borderColor: theme.colors.border.navBorder,
      paddingTop: theme.spacing.lg,
      height: 98,
      gap: theme.spacing.sm,
      overflow: "hidden",

      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,

      elevation: 1,
    },
    badgeBlue: {
      borderColor: "rgba(59, 130, 246, 0.40)",
    },
    badgePurple: {
      borderColor: "rgba(168,85,247,0.20)",
    },
    badgeGreen: {
      borderColor: "rgba(16, 185, 129, 0.30)",
    },

    footerSection: {
      marginBottom: theme.spacing.lg,
    },
    footerTitle: {
      marginBottom: theme.spacing.xs,
    },
    sectionWrapper: {
      marginTop: theme.spacing.xxl,
    },

    sectionSubtitle: {
      marginTop: 2,
      marginBottom: theme.spacing.md,
    },
    supportGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: CARD_GAP,
    },
    supportCard: {
      width: (SCREEN_WIDTH - CARD_GAP - 12 * 3) / 2,
      flexGrow: 0,
      borderRadius: 14,
      shadowColor: "rgba(207, 231, 255, 1)",
      shadowOffset: { width: 0, height: -1 },
      shadowOpacity: 0.2,
      shadowRadius: 1,
      padding: theme.spacing.md,
      overflow: "hidden",
      borderWidth: 1,
      borderColor: "rgba(216, 231, 242, 0.07)",
    },

    supportIconCircle: {
      width: 40,
      height: 40,
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      marginBottom: theme.spacing.sm,
    },
    supportTitle: {
      marginBottom: theme.spacing.lg,
    },
    supportDonateButton: {
      borderRadius: theme.radius.full,
    },
    redemptionList: {
      marginTop: theme.spacing.md,
    },
    redemptionCardOuter: {
      marginBottom: theme.spacing.md,
      borderWidth: 1,
      borderRadius: 12,
    },
    redemptionCard: {
      borderRadius: theme.radius.lg,
      paddingVertical: theme.spacing.lg,
      paddingHorizontal: theme.spacing.lg,
      borderWidth: 1,
      borderColor: theme.colors.border.navBorder,
    },
    redemptionIconCircle: {
      width: 48,
      height: 48,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      marginBottom: theme.spacing.md,
      backgroundColor: "rgba(0, 0, 0, 0.25)",

      // iOS shadow (layered approximation)
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.1,

      // Secondary softer shadow (iOS)
      shadowRadius: 6,

      // Android shadow
      elevation: 6,
    },
    redemptionTitle: {
      marginBottom: theme.spacing.sm,
    },
    redemptionSubtitle: {
      marginBottom: theme.spacing.lg,
      fontSize: 10,
    },
    itemsPill: {
      alignSelf: "center",
      paddingHorizontal: 10,
      paddingVertical: 2,
      borderRadius: theme.radius.full,
      borderWidth: 1,
    },
  })

export default HomeScreen
