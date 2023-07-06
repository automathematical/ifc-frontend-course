import ListIcon from '@mui/icons-material/ViewList'
import AddBusiness from '@mui/icons-material/AddBusiness'
import FloorPlanIcon from '@mui/icons-material/Layers'
import PropertiesIcon from '@mui/icons-material/Info'
import MapIcon from '@mui/icons-material/Map'
import DeleteIcon from '@mui/icons-material/Delete'
import LogoutIcon from '@mui/icons-material/Logout'
import { Tool } from '../../../types'

export function getSidebarTools(): Tool[] {
  return [
    {
      name: 'Info',
      active: false,
      icon: <ListIcon />,
      action: ({ onToggleMenu }) => {
        onToggleMenu(true, 'BuildingInfo')
      },
    },
    {
      name: 'Model list',
      active: false,
      icon: <AddBusiness />,
      action: ({ onToggleMenu }) => {
        onToggleMenu(true, 'ModelList')
      },
    },
    {
      name: 'Floorplans',
      active: false,
      icon: <FloorPlanIcon />,
      action: ({ onToggleMenu }) => {
        onToggleMenu(true, 'Floorplans')
      },
    },
    {
      name: 'Properties',
      active: false,
      icon: <PropertiesIcon />,
      action: ({ onToggleMenu }) => {
        onToggleMenu(true, 'Properties')
      },
    },
    {
      name: 'Back to map',
      active: false,
      icon: <MapIcon />,
      action: (dispatch) => {
        dispatch({ type: 'CLOSE_BUILDING' })
      },
    },
    {
      name: 'Delete building',
      active: false,
      icon: <DeleteIcon />,
      action: (dispatch, state) => {
        dispatch({ type: 'DELETE_BUILDING', payload: state.building })
      },
    },
    {
      name: 'Log out',
      active: false,
      icon: <LogoutIcon />,
      action: (dispatch) => {
        dispatch({ type: 'LOGOUT' })
      },
    },
  ]
}
