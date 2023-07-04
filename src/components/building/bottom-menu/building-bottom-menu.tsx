import { FC } from 'react'
import { useAppContext } from '../../../middleware/context-provider'
import { getBottombarTools } from './bottombar-tools'
import { Card, IconButton } from '@mui/material'

import './buidling-bottom-menu.css'

const tools = getBottombarTools()

export const BuildingBottomMenu: FC = () => {
  const dispatch = useAppContext()[1]

  return (
    <Card className="bottom-menu">
      {tools.map((tool) => (
        <IconButton
          color={tool.active ? 'primary' : 'default'}
          onClick={() => tool.action(dispatch)}
          key={tool.name}>
          {tool.icon}
        </IconButton>
      ))}
    </Card>
  )
}
