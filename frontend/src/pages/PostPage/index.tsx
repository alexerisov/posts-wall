import React from 'react'
import { Box, CircularProgress, Stack } from '@mui/material'
import { useParams } from 'react-router-dom'
import { PostFull } from '../../components/PostFull'
import { CommentBlock } from '../../components/CommentBlock'
import { useGetPostQuery } from '../../api'

export const PostPage = () => {
  const { id } = useParams()
  const postId = Number(id)
  const { data, isLoading, isError, error } = useGetPostQuery(postId)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 800,
        margin: 'auto',
      }}
    >
      <Stack>
        {isLoading && <CircularProgress />}
        {isError && <div>{error && 'Error fetching data'}</div>}
        {data && (
          <>
            <PostFull {...data} />
            <CommentBlock postId={postId} />
          </>
        )}
      </Stack>
    </Box>
  )
}
