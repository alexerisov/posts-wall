import { ControlButtonProps } from '../control-button/types'

export type EditButtonProps = Omit<
  ControlButtonProps,
  'label' | 'loading' | 'icon'
>
