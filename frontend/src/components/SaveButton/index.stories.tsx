import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
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
