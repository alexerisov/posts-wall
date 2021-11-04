import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Card from '@mui/material/Card'
import {
  CardActionArea,
  CardActions,
  FormControl,
  TextField,
} from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useArgs, useState } from '@storybook/addons'
import { PostPreview } from './index'
import { ControlGroup } from '../ControlGroup'
import { PostsMockData } from '../../utils/mockData'

export default {
  title: 'Post/PostPreview',
  component: PostPreview,
} as ComponentMeta<typeof PostPreview>

const MockData = PostsMockData[0]

const Template: ComponentStory<typeof PostPreview> = args => {
  const { title, body } = args

  const [{ isEditing, isDeleting, isUpdating }, updateArgs] = useArgs()
  const [newTitle, setNewTitle] = useState(title)
  const [newBody, setNewBody] = useState(body)

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value)
  }

  const handleBodyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewBody(event.target.value)
  }

  const onSaveHandler = () => {
    updateArgs({ isEditing: false })
  }

  const onCancelHandler = () => {
    updateArgs({ isEditing: false })
  }

  const onEditHandler = () => {
    updateArgs({ isEditing: true })
  }

  const onDeleteHandler = () => {}

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
    <Card sx={{ mt: 1, mb: 1 }}>
      {isEditing ? (
        <CardContent>
          <FormControl fullWidth>
            <TextField value={newTitle} onChange={handleTitleChange} />
            <TextField value={newBody} onChange={handleBodyChange} />
          </FormControl>
        </CardContent>
      ) : (
        <CardActionArea>
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

export const Standard = Template.bind({})
Standard.args = {
  ...MockData,
}

export const Editing = Template.bind({})
Editing.args = {
  ...MockData,
}
