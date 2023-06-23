import { FC } from 'react'
import { useAppContext } from '../../middleware/context-provider'
import { Navigate } from 'react-router-dom'
import { Button } from '@mui/material'

export const LoginForm: FC = () => {
  const [state, dispatch] = useAppContext()

  const onLogin = () => {
    dispatch({ type: 'LOGIN' })
  }

  if (state.user) {
    return <Navigate to="/map" />
  }

  return (
    <h1>
      <Button
        variant="contained"
        onClick={onLogin}>
        Log in
      </Button>
    </h1>
  )
}
