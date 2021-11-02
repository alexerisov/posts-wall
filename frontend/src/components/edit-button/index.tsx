import React, { FC } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import { ControlButton } from '../control-button'
import { EditButtonProps } from './types'

export const EditButton = (props: EditButtonProps) => {
  const { ...otherProps } = props

  const Icon = <EditIcon />

  return <ControlButton icon={Icon} label="EDIT" {...otherProps} />
}
