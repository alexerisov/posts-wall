import React from 'react'
import { Box } from '@mui/material'
import { PostPreview } from '../PostPreview'
import { Post } from '../../api/types'

interface PostPreviewsBlockProps {
  posts: Post[]
}

export const PostPreviewsBlock = (props: PostPreviewsBlockProps) => {
  const { posts } = props

  return (
    <Box>
      {posts.map(post => (
        <PostPreview key={post.id} {...post} />
      ))}
    </Box>
  )
}
