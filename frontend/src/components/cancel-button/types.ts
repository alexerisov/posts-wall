import { ControlButtonProps } from '../control-button/types'

export type CancelButtonProps = Omit<
  ControlButtonProps,
  'label' | 'loading' | 'icon'
>
