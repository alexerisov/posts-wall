import { Box, CircularProgress, Stack } from '@mui/material'
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useArgs } from '@storybook/addons'
import { PostPage } from './index'
import { Standard as CommentBlockStory } from '../../components/CommentBlock/index.stories'
import { Standard as PostFullStory } from '../../components/PostFull/index.stories'

export default {
  title: 'Pages/Post',
  component: PostPage,
} as ComponentMeta<typeof PostPage>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template: ComponentStory<typeof PostPage> = args => {
  const [{ isLoading }] = useArgs()
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Stack>
          <PostFullStory />
          <CommentBlockStory />
        </Stack>
      )}
    </Box>
  )
}

export const Standard = Template.bind({})
Standard.args = {
  isLoading: false,
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
}
