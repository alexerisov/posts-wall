import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PostPreviewsBlock } from './index'
import { PostsMockData } from '../../utils/mockData'

export default {
  title: 'Post/PostPreviewsBlock',
  component: PostPreviewsBlock,
} as ComponentMeta<typeof PostPreviewsBlock>

const MockData = PostsMockData

export const Standard: ComponentStory<typeof PostPreviewsBlock> = () => (
  <PostPreviewsBlock posts={MockData} />
)
