import { FC } from 'react'
import { useAppContext } from '../../../../middleware/context-provider'
import { Box, Button, TextField } from '@mui/material'
import './front-menu-content.css'

export const BuildingInfoMenu: FC<{
  onToggleMenu: (active: boolean) => void
}> = ({ onToggleMenu }) => {
  const [state, dispatch] = useAppContext()

  const { building } = state
  if (!building) throw new Error('No building active!')

  const onUpdateBuilding = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const newBuilding = { ...building } as any

    newBuilding.name = data.get('building-name') || building.name
    newBuilding.lng = data.get('building-lng') || building.lng
    newBuilding.lat = data.get('building-lat') || building.lat

    dispatch({ type: 'UPDATE_BUILDING', payload: newBuilding })
    onToggleMenu(false)
  }

  return (
    <Box
      component="form"
      onSubmit={onUpdateBuilding}>
      <div className="list-item">
        <TextField
          fullWidth
          id="building-id"
          label="building ID"
          name="building-id"
          autoComplete="building-id"
          defaultValue={building.uid}
          disabled={true}
        />
      </div>

      <div className="list-item">
        <TextField
          fullWidth
          id="building-name"
          label="building name"
          name="building-name"
          autoComplete="building-name"
          defaultValue={building.name}
        />
      </div>

      <div className="list-item">
        <TextField
          fullWidth
          id="building-lng"
          label="longitude"
          name="building-lng"
          autoComplete="building-lng"
          defaultValue={building.lng}
        />
      </div>

      <div className="list-item">
        <TextField
          fullWidth
          id="building-lat"
          label="latitude"
          name="building-lat"
          autoComplete="building-lat"
          defaultValue={building.lat}
        />
      </div>

      <div className="list-item">
        <Button
          type="submit"
          className="submit-button">
          Update building
        </Button>
      </div>
    </Box>
  )
}
