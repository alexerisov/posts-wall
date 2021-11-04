import { ControlButtonProps } from '../ControlButton/types'

export type CancelButtonProps = Omit<
  ControlButtonProps,
  'label' | 'loading' | 'icon'
>
