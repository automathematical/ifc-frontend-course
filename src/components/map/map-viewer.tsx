import { FC, useEffect, useRef, useState } from 'react'
import { useAppContext } from '../../middleware/context-provider'
import { Navigate } from 'react-router-dom'
import { Button } from '@mui/material'
import './map-viewer.css'

export const MapViewer: FC = () => {
  const containerRef = useRef(null)
  const [isCreating, setIsCreating] = useState(false)

  const [state, dispatch] = useAppContext()
  const { user, building } = state

  const onToggleCreate = () => {
    setIsCreating(!isCreating)
  }

  const onCreate = () => {
    if (isCreating) {
      dispatch({ type: 'ADD_BUILDING', payload: user })
      setIsCreating(false)
    }
  }

  useEffect(() => {
    const container = containerRef.current

    if (container && user) {
      dispatch({ type: 'START_MAP', payload: { container, user } })
    }
  }, [])

  if (!user) {
    return <Navigate to="/login" />
  }

  if (building) {
    const url = `/building?id=${building.uid}`
    return <Navigate to={url} />
  }

  const onLogout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <>
      <div
        onContextMenu={onCreate}
        className="full-screen"
        ref={containerRef}
      />
      {isCreating && (
        <div className="overlay">
          <p>Right click to create a new building or</p>
          <Button onClick={onToggleCreate}>cancel</Button>
        </div>
      )}
      <div className="gis-button-container">
        {' '}
        <Button
          variant="contained"
          onClick={onToggleCreate}>
          Create building
        </Button>
        <Button
          variant="contained"
          onClick={onLogout}>
          Log out
        </Button>
      </div>
    </>
  )
}
