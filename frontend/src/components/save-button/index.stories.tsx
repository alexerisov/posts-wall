import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import CancelIcon from '@mui/icons-material/Cancel'
import { SaveButton } from './index'

export default {
  title: 'Control Buttons/SaveButton',
  component: SaveButton,
} as ComponentMeta<typeof SaveButton>

const Template: ComponentStory<typeof SaveButton> = args => (
  <SaveButton {...args} />
)

export const Standard = Template.bind({})
Standard.args = {
  loading: false,
}

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
}
