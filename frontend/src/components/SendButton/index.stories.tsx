import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SendButton } from './index'

export default {
  title: 'Control Buttons/SaveButton',
  component: SendButton,
} as ComponentMeta<typeof SendButton>

const Template: ComponentStory<typeof SendButton> = args => (
  <SendButton {...args} />
)

export const Standard = Template.bind({})
Standard.args = {
  loading: false,
}

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
}
