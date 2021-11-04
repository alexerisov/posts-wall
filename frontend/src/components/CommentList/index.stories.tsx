import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { CommentList } from '.'
import { CommentsMockData } from '../../utils/mockData'

export default {
  title: 'Comment/CommentList',
  component: CommentList,
} as ComponentMeta<typeof CommentList>

const MockData = CommentsMockData

export const Standard = () => <CommentList comments={MockData} />
