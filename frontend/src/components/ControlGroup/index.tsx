import React from 'react'
import { Stack } from '@mui/material'
import { DeleteButton } from 'components/DeleteButton'
import { SaveButton } from '../SaveButton'
import { CancelButton } from '../CancelButton'
import { EditButton } from '../EditButton'
import { ControlGroupProps } from './types'

export const ControlGroup = (props: ControlGroupProps) => {
  const {
    onSaveHandler,
    onCancelHandler,
    onEditHandler,
    onDeleteHandler,
    isEditing,
    isUpdating,
    isDeleting,
  } = props

  return (
    <Stack direction="row" spacing={1}>
      {isEditing ? (
        <>
          <SaveButton onClick={onSaveHandler} loading={isUpdating} />
          <CancelButton onClick={onCancelHandler} />
        </>
      ) : (
        <>
          <EditButton onClick={onEditHandler} />
          <DeleteButton onClick={onDeleteHandler} loading={isDeleting} />
        </>
      )}
    </Stack>
  )
}
