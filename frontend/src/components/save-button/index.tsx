import React, { FC } from 'react'
import SaveIcon from '@mui/icons-material/Save'
import { ControlButton } from '../control-button'
import { SaveButtonProps } from './types'

export const SaveButton = (props: SaveButtonProps) => {
  const { loading, ...otherProps } = props

  const Icon = <SaveIcon />

  return (
    <ControlButton icon={Icon} loading={loading} label="SAVE" {...otherProps} />
  )
}
