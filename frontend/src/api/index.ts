import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post, Comment } from './types'

const baseUrl = process.env.REACT_APP_API_DOMAIN

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Posts', 'Comments'],
  endpoints: build => ({
    // POSTS ENDPOINTS
    getPosts: build.query<Post[], void>({
      query: () => '/posts',
      providesTags: ['Posts'],
    }),
    getPost: build.query<Post, Post['id']>({
      query: postId => `/posts/${postId}`,
    }),
    addPost: build.mutation<Post, Omit<Post, 'id'>>({
      query: body => ({
        url: '/posts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Posts'],
    }),
    editPost: build.mutation<void, Partial<Post> & Pick<Post, 'id'>>({
      query: body => ({
        url: `/posts/${body.id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Posts'],
    }),
    deletePost: build.mutation<void, Post['id']>({
      query: postId => ({
        url: `/posts/${postId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'],
    }),

    // COMMENTS ENDPOINTS
    getPostComments: build.query<Comment[], number>({
      query: postId => `/comments?postId=${postId}`,
      providesTags: ['Comments'],
    }),
    addPostComment: build.mutation<Comment, Omit<Comment, 'id'>>({
      query: body => ({
        url: '/comments',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Comments'],
    }),
  }),
})

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddPostMutation,
  useEditPostMutation,
  useGetPostCommentsQuery,
  useAddPostCommentMutation,
  useDeletePostMutation,
} = api
