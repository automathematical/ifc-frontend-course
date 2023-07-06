import CutIcon from '@mui/icons-material/ContentCut'
import RulerIcon from '@mui/icons-material/Straighten'
import ExplodeIcon from '@mui/icons-material/ImportExport'
import { Tool } from '../../../types'

export function getBottombarTools(): Tool[] {
  const tools = [
    {
      name: 'Clipping planes',
      icon: <CutIcon />,
      active: false,
      action: (dispatch: any) => {
        const tool = findtool('Clipping planes')
        deactivateAllTools(dispatch, 'Clipping planes')
        tool.active = !tool.active
        dispatch({ type: 'TOGGLE_CLIPPING', payload: tool.active })
      },
    },
    {
      name: 'Dimensions',
      icon: <RulerIcon />,
      active: false,
      action: (dispatch: any) => {
        const tool = findtool('Dimensions')
        deactivateAllTools(dispatch, 'Dimensions')
        tool.active = !tool.active
        dispatch({ type: 'TOGGLE_DIMENSIONS', payload: tool.active })
      },
    },
    {
      name: 'Explosion',
      icon: <ExplodeIcon />,
      active: false,
      action: (dispatch: any) => {
        const tool = findtool('Explosion')
        deactivateAllTools(dispatch, 'Explosion')
        tool.active = !tool.active
        dispatch({ type: 'EXPLODE_MODEL', payload: tool.active })
      },
    },
  ]

  const findtool = (name: string) => {
    const tool = tools.find((tool) => tool.name === name)
    if (!tool) throw new Error('Tool not found!')
    return tool
  }

  const deactivateAllTools = (dispatch: any, name: string) => {
    for (const tool of tools) {
      if (tool.active && tool.name !== name) {
        tool.action(dispatch)
      }
    }
  }

  return tools
}
