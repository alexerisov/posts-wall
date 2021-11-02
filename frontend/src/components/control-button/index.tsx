import React from 'react'
import { LoadingButton } from '@mui/lab'
import { ControlButtonProps } from './types'

export const ControlButton = (props: ControlButtonProps) => {
  const { icon, label, loading, ...otherProps } = props
  return (
    <LoadingButton
      variant="contained"
      loadingPosition="start"
      startIcon={icon}
      loading={loading}
      {...otherProps}
    >
      {label}
    </LoadingButton>
  )
}
