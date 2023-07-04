import { FC } from 'react'
import { useAppContext } from '../../../middleware/context-provider'
import { getBottombarTools } from './bottombar-tools'
import { Card, IconButton } from '@mui/material'

import './buidling-bottom-menu.css'

export const BuildingBottomMenu: FC = () => {
  const [state, dispatch] = useAppContext()

  const tools = getBottombarTools(state, dispatch)

  return (
    <Card className="bottom-menu">
      {tools.map((tool) => (
        <IconButton
          onClick={tool.action}
          key={tool.name}>
          {tool.icon}
        </IconButton>
      ))}
    </Card>
  )
}
