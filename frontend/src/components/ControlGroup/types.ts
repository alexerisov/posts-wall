export interface ControlGroupProps {
  onSaveHandler: () => void
  onCancelHandler: () => void
  onEditHandler: () => void
  onDeleteHandler: () => void
  isEditing: boolean
  isUpdating: boolean
  isDeleting: boolean
}
