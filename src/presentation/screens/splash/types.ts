import { ComponentType } from "react"

export interface SplashStepProps {
  onNext: () => void
}

export type SplashStepComponent = ComponentType<SplashStepProps>
