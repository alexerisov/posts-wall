import React from 'react'
import SendIcon from '@mui/icons-material/Send'
import { ControlButton } from '../ControlButton'
import { SendButtonProps } from './types'

export const SendButton = (props: SendButtonProps) => {
  const { loading, ...otherProps } = props

  const Icon = <SendIcon />

  return (
    <ControlButton icon={Icon} loading={loading} label="SEND" {...otherProps} />
  )
}
