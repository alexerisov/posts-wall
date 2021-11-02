import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ControlGroup } from './index'

export default {
  title: 'ControlGroup',
  component: ControlGroup,
} as ComponentMeta<typeof ControlGroup>

const Template: ComponentStory<typeof ControlGroup> = args => (
  <ControlGroup {...args} />
)

export const Standard = Template.bind({})
Standard.args = {
  isPostEditing: false,
}

export const Editing = Template.bind({})
Editing.args = {
  isPostEditing: true,
}
