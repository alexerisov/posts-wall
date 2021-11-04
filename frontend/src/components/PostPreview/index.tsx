import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import {
  CardActionArea,
  CardActions,
  FormControl,
  TextField,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ControlGroup } from '../ControlGroup'
import { PostPreviewProps } from './types'
import { useDeletePostMutation, useEditPostMutation } from '../../api'

export const PostPreview = (props: PostPreviewProps) => {
  const { id, title, body } = props
  const [newTitle, setNewTitle] = useState(title)
  const [newBody, setNewBody] = useState(body)

  const navigate = useNavigate()

  const [updatePost, { isLoading: isUpdating }] = useEditPostMutation()
  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation()

  const [isEditing, setIsEditing] = useState(false)

  const onCardClickHandler = () => {
    navigate(`/posts/${id}`)
  }

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value)
  }

  const handleBodyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewBody(event.target.value)
  }

  const onSaveHandler = async () => {
    await updatePost({ id, title: newTitle, body: newBody })
    setIsEditing(false)
  }

  const onCancelHandler = () => {
    setNewTitle(title)
    setNewBody(body)
    setIsEditing(false)
  }

  const onEditHandler = () => {
    setIsEditing(true)
  }

  const onDeleteHandler = () => {
    deletePost(id)
  }

  const controlProps = {
    onSaveHandler,
    onCancelHandler,
    onEditHandler,
    onDeleteHandler,
    isEditing,
    isDeleting,
    isUpdating,
  }

  return (
    <Card
      sx={{
        mt: 1,
        mb: 1,
      }}
    >
      {isEditing ? (
        <CardContent>
          <FormControl fullWidth>
            <TextField
              size="small"
              placeholder="Title"
              sx={{ m: 1 }}
              value={newTitle}
              onChange={handleTitleChange}
            />
            <TextField
              size="medium"
              multiline
              placeholder="Type text..."
              sx={{ m: 1 }}
              value={newBody}
              onChange={handleBodyChange}
            />
          </FormControl>
        </CardContent>
      ) : (
        <CardActionArea onClick={onCardClickHandler}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
      )}
      <CardActions>
        <ControlGroup {...controlProps} />
      </CardActions>
    </Card>
  )
}
