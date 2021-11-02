import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CancelButton } from './index'

export default {
  title: 'Control Buttons/CancelButton',
  component: CancelButton,
} as ComponentMeta<typeof CancelButton>

export const Standard: ComponentStory<typeof CancelButton> = () => (
  <CancelButton />
)
