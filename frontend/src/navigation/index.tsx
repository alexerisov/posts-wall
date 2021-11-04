import { PostPage } from 'pages/PostPage'
import React from 'react'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'
import { MainPage } from '../pages/MainPage'

export const NavigationStack = () => {
  return (
    <Router>
      <Routes>
        <Route path="/posts" element={<MainPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/" element={<Navigate to="/posts" replace />} />
      </Routes>
    </Router>
  )
}
