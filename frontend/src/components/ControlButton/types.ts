import { ButtonProps, SvgIcon } from '@mui/material'

export interface ControlButtonProps extends ButtonProps {
  label: string
  icon: ReturnType<typeof SvgIcon>
  loading?: boolean
}
