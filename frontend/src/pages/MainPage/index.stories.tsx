import { Box, CircularProgress } from '@mui/material'
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useArgs } from '@storybook/addons'
import { PostPreviewsBlock } from 'components/PostPreviewsBlock'
import { MainPage } from './index'
import { PostsMockData } from '../../utils/mockData'

export default {
  title: 'Pages/Main',
  component: MainPage,
} as ComponentMeta<typeof MainPage>

const MockData = PostsMockData

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template: ComponentStory<typeof MainPage> = args => {
  const [{ isLoading }] = useArgs()
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <PostPreviewsBlock posts={MockData} />
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
