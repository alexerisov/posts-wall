import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { DeleteButton } from './index'

export default {
  title: 'Control Buttons/DeleteButton',
  component: DeleteButton,
} as ComponentMeta<typeof DeleteButton>

const Template: ComponentStory<typeof DeleteButton> = args => (
  <DeleteButton {...args} />
)

export const Standard = Template.bind({})
Standard.args = {
  loading: false,
}

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
}
