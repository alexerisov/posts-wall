import { Card, CardActions, CardContent, TextField } from '@mui/material'
import React, { useState } from 'react'
import { SendButton } from '../SendButton'
import { CommentInputProps } from './types'
import { useAddPostCommentMutation } from '../../api'

export const CommentInput = (props: CommentInputProps) => {
  const { postId } = props
  const [addComment, { isLoading: isCreating }] = useAddPostCommentMutation()
  const [newCommentText, setNewCommentText] = useState('')

  const onSendHandler = () => {
    addComment({ postId, text: newCommentText })
    setNewCommentText('')
  }

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCommentText(event.target.value)
  }

  return (
    <Card sx={{ width: '100%' }} elevation={0}>
      <CardContent>
        <TextField
          fullWidth
          multiline
          placeholder="Type comment..."
          size="medium"
          value={newCommentText}
          onChange={handleCommentChange}
          sx={{ mb: -1, borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
        />
      </CardContent>
      <CardActions>
        <SendButton onClick={onSendHandler} loading={isCreating} />
      </CardActions>
    </Card>
  )
}
