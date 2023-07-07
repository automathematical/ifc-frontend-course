import { FC } from 'react'
import { useAppContext } from '../../../../middleware/context-provider'
import './front-menu-content.css'
import { Floorplan } from '../../../../types'
import { Button } from '@mui/material'

export const FloorPlanMenu: FC = () => {
  const [state, dispatch] = useAppContext()

  const onFloorPlanSelected = (active: boolean, floorplan?: Floorplan) => {
    dispatch({ type: 'TOGGLE_FLOORPLAN', payload: { active, floorplan } })
  }

  return (
    <div>
      {state.floorplans.map((plan) => (
        <div
          key={plan.name}
          className="list-item">
          <Button
            onClick={() => onFloorPlanSelected(true, plan)}
            className="wide-button">
            {plan.name}
          </Button>
        </div>
      ))}
      <div
        key="exit"
        className="list-item">
        <Button
          onClick={() => onFloorPlanSelected(false)}
          className="wide-button">
          Exit
        </Button>
      </div>
    </div>
  )
}
