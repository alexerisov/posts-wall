import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel'
import { ControlButton } from '../ControlButton'
import { CancelButtonProps } from './types'

export const CancelButton = (props: CancelButtonProps) => {
  const { ...otherProps } = props

  const Icon = <CancelIcon />

  return <ControlButton icon={Icon} label="CANCEL" {...otherProps} />
}
