import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { CommentBlock } from './index'
import { CommentList } from '../CommentList'
import { CommentInput } from '../CommentInput'
import { CommentsMockData } from '../../utils/mockData'

export default {
  title: 'Comment/CommentBlock',
  component: CommentBlock,
} as ComponentMeta<typeof CommentBlock>

const MockData = CommentsMockData

export const Standard = () => (
  <>
    <CommentList comments={MockData} />
    <CommentInput postId={1} />
  </>
)
