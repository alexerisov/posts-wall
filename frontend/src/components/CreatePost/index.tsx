import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { CreatePostForm } from 'components/CreatePostForm'
import { Box } from '@mui/material'
import { ControlButton } from '../ControlButton'

export const CreatePost = () => {
  const [isFormVisible, setIsFormVisible] = useState(false)

  const onShowFormHandler = () => {
    setIsFormVisible(true)
  }

  const FormProps = {
    setIsFormVisible,
  }

  return (
    <Box sx={{ width: '100%', mt: 1 }}>
      {!isFormVisible && (
        <ControlButton
          fullWidth
          sx={{ m: 0 }}
          onClick={onShowFormHandler}
          icon={<AddIcon />}
          label="New post"
          variant="contained"
        />
      )}
      {isFormVisible && <CreatePostForm {...FormProps} />}
    </Box>
  )
}
