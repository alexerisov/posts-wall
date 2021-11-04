import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { Comment } from './index'
import { CommentsMockData } from '../../utils/mockData'

export default {
  title: 'Comment/Comment',
  component: Comment,
} as ComponentMeta<typeof Comment>

const MockData = CommentsMockData[0]

export const Standard = () => <Comment {...MockData} />
