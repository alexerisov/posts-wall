import React from 'react'
import { CommentListProps } from './types'
import { Comment } from '../Comment'

export const CommentList = (props: CommentListProps) => {
  const { comments } = props

  return (
    <>
      {comments.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
    </>
  )
}
