import { FC } from 'react'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { getSidebarTools } from './sidebar-tools'
import { useAppContext } from '../../../middleware/context-provider'
import { FrontMenuMode } from '../front-menu/types'

const tools = getSidebarTools()

export const BuildingSidebar: FC<{ open: boolean; onToggleMenu: (active?: boolean, mode?: FrontMenuMode) => void }> = (
  props
) => {
  const { open, onToggleMenu } = props
  const [state, dispatch] = useAppContext()

  return (
    <List>
      {tools.map((tool) => (
        <ListItem
          onClick={() => tool.action({ onToggleMenu, state, dispatch })}
          key={tool.name}
          disablePadding
          sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}>
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}>
              {tool.icon}
            </ListItemIcon>
            <ListItemText
              primary={tool.name}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}
