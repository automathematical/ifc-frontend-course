import { Button } from '@mui/material'
import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppContext } from '../../middleware/context-provider'

export const BuildingViewer: FC = () => {
  const [state, dispatch] = useAppContext()
  const { building } = state

  const onCloseBuilding = () => {
    dispatch({ type: 'CLOSE_BUILDING' })
  }

  if (!building) {
    return <Navigate to={'/map'} />
  }

  return (
    <>
      <h1>Hello Building Viewer!</h1>
      <Button onClick={onCloseBuilding}>Close building</Button>
    </>
  )
}
