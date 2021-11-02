import { SvgIcon } from '@mui/material'

export interface ControlButtonProps {
  label: string
  icon: ReturnType<typeof SvgIcon>
  loading?: boolean
}
