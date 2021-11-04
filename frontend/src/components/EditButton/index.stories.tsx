import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { EditButton } from './index'

export default {
  title: 'Control Buttons/EditButton',
  component: EditButton,
} as ComponentMeta<typeof EditButton>

export const Standard: ComponentStory<typeof EditButton> = () => <EditButton />
