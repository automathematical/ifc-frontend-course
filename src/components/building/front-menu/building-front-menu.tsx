import { FC } from 'react'
import { FrontMenuMode } from './types'
import { ModelListMenu } from './front-menu-content/model-list-menu'
import { BuildingInfoMenu } from './front-menu-content/building-info-menu'
import { PropertiesMenu } from './front-menu-content/properties-menu'
import { FloorPlanMenu } from './front-menu-content/floorplan-menu'

import { Button, Card, CardContent } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import './building-front-menu.css'

export const BuildingFrontMenu: FC<{
  mode: FrontMenuMode
  open: boolean
  onToggleMenu: (active: boolean) => void
}> = ({ mode, open, onToggleMenu }) => {
  if (!open) {
    return <></>
  }

  const content = new Map<FrontMenuMode, any>()
  content.set('BuildingInfo', <BuildingInfoMenu onToggleMenu={onToggleMenu} />)
  content.set('ModelList', <ModelListMenu />)
  content.set('Properties', <PropertiesMenu />)
  content.set('Floorplans', <FloorPlanMenu />)

  const titles = {
    BuildingInfo: 'Building Information',
    ModelList: 'Model List',
    Floorplans: 'Floorplans',
    Properties: 'Properties',
  }

  const title = titles[mode]

  return (
    <Card className="front-menu">
      <CardContent>
        <div className="front-menu-header">
          <h2>{title}</h2>
          <Button onClick={() => onToggleMenu(false)}>
            <CloseIcon />
          </Button>
        </div>
        <div className="front-menu-content">{content.get(mode)}</div>
      </CardContent>
    </Card>
  )
}
