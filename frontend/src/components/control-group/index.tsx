import React from 'react'
import { Stack } from '@mui/material'
import { DeleteButton } from 'components/delete-button'
import { SaveButton } from '../save-button'
import { CancelButton } from '../cancel-button'
import { EditButton } from '../edit-button'
import { ControlGroupProps } from './types'

export const ControlGroup = (props: ControlGroupProps) => {
  const { isPostEditing } = props

  return (
    <Stack direction="row" spacing={1}>
      {isPostEditing ? (
        <>
          <SaveButton />
          <CancelButton />
        </>
      ) : (
        <>
          <EditButton />
          <DeleteButton />
        </>
      )}
    </Stack>
  )
}
