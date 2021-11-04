import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { CommentInput } from './index'

export default {
  title: 'Comment/CommentInput',
  component: CommentInput,
} as ComponentMeta<typeof CommentInput>

export const Standard = () => <CommentInput postId={1} />
