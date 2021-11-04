import React from 'react'
import { Box, CircularProgress } from '@mui/material'
import { PostPreviewsBlock } from 'components/PostPreviewsBlock'
import { useGetPostsQuery } from 'api'
import { CreatePost } from 'components/CreatePost'

export const MainPage = () => {
  const { data, isLoading, isError, error } = useGetPostsQuery()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: '',
        alignItems: 'center',
        maxWidth: 800,
        margin: 'auto',
        height: '100%',
      }}
    >
      {isLoading && <CircularProgress />}
      {isError && <div>{error && 'Error fetching data'}</div>}
      {data && (
        <>
          <CreatePost />
          <PostPreviewsBlock posts={data} />
        </>
      )}
    </Box>
  )
}
