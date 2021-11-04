import React, { useState } from 'react'
import CardContent from '@mui/material/CardContent'
import { CardActions, FormControl, TextField } from '@mui/material'
import Card from '@mui/material/Card'
import { SendButton } from 'components/SendButton'
import { CancelButton } from '../CancelButton'
import { useAddPostMutation } from '../../api'

interface CreatePostFormProps {
  setIsFormVisible: (value: boolean) => void
}

export const CreatePostForm = (props: CreatePostFormProps) => {
  const { setIsFormVisible } = props
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const [addPost, { isLoading }] = useAddPostMutation()

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleBodyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBody(event.target.value)
  }

  const onSendHandler = async () => {
    await addPost({ title, body })
    setIsFormVisible(false)
  }

  const onCancelHandler = () => {
    setTitle('')
    setBody('')
    setIsFormVisible(false)
  }

  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
        <FormControl fullWidth>
          <TextField
            size="small"
            placeholder="Title"
            sx={{ m: 1 }}
            value={title}
            onChange={handleTitleChange}
          />
          <TextField
            size="medium"
            multiline
            placeholder="Type text..."
            sx={{ m: 1 }}
            value={body}
            onChange={handleBodyChange}
          />
        </FormControl>
      </CardContent>
      <CardActions>
        <SendButton onClick={onSendHandler} loading={isLoading} />
        <CancelButton onClick={onCancelHandler} />
      </CardActions>
    </Card>
  )
}
