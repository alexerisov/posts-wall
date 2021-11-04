import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { Comment as CommentProps } from '../../api/types'

export const Comment = (props: CommentProps) => {
  const { text } = props

  return (
    <Card
      elevation={0}
      sx={{
        width: '100%',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      }}
    >
      <CardContent>
        <Typography sx={{ background: '#ddd' }}>{text}</Typography>
      </CardContent>
    </Card>
  )
}
