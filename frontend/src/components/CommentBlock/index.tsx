import React from 'react'
import { Box, CircularProgress } from '@mui/material'
import { CommentInput } from '../CommentInput'
import { CommentList } from '../CommentList'
import { useGetPostCommentsQuery } from '../../api'

interface CommentBlockProps {
  postId: number
}

export const CommentBlock = (props: CommentBlockProps) => {
  const { postId } = props
  const { data, isLoading, isError, error } = useGetPostCommentsQuery(postId)

  return (
    <Box
      marginY={2}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
      }}
    >
      {isLoading && <CircularProgress sx={{ mb: 2 }} />}
      {isError && <>{error && 'Error fetching data'}</>}
      {data && <CommentList comments={data} />}

      <CommentInput postId={postId} />
    </Box>
  )
}
