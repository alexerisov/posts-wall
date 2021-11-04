import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { ControlButton } from '../ControlButton'
import { DeleteButtonProps } from './types'

export const DeleteButton = (props: DeleteButtonProps) => {
  const { loading, ...otherProps } = props

  const Icon = <DeleteIcon />

  return (
    <ControlButton
      icon={Icon}
      loading={loading}
      label="DELETE"
      {...otherProps}
    />
  )
}
