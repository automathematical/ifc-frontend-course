import { FC, useEffect, useRef } from 'react'
import { useAppContext } from '../../middleware/context-provider'
import { Navigate } from 'react-router-dom'
import { Button } from '@mui/material'

export const MapViewer: FC = () => {
  const [state, dispatch] = useAppContext()
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (canvas && state.user) {
      dispatch({ type: 'START_MAP', payload: canvas })
    }
    return () => {
      dispatch({ type: 'REMOVE_MAP' })
    }
  }, [])

  if (!state.user) {
    return <Navigate to="/login" />
  }

  const onLogout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <>
      <h1>Hello Map Viewer</h1>
      <Button
        variant="contained"
        onClick={onLogout}>
        Log out
      </Button>
      <div
        className="full-screen"
        ref={canvasRef}
      />
    </>
  )
}
