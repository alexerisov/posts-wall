import { ControlButtonProps } from '../ControlButton/types'

export type EditButtonProps = Omit<
  ControlButtonProps,
  'label' | 'loading' | 'icon'
>
