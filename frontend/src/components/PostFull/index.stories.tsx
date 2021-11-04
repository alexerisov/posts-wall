import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { PostFull } from './index'
import { PostsMockData } from '../../utils/mockData'

export default {
  title: 'Post/PostFull',
  component: PostFull,
} as ComponentMeta<typeof PostFull>

const MockData = PostsMockData[0]

export const Standard = () => <PostFull {...MockData} />
