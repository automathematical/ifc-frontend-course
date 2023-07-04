import ListIcon from '@mui/icons-material/ViewList'
import MapIcon from '@mui/icons-material/Map'
import DeleteIcon from '@mui/icons-material/Delete'
import LogoutIcon from '@mui/icons-material/Logout'
import AddBusiness from '@mui/icons-material/AddBusiness'
import { Tool } from '../../../types'

export function getSidebarTools(): Tool[] {
  return [
    {
      name: 'Info',
      active: false,
      icon: <ListIcon />,
      action: ({ toggleMenu }) => {
        toggleMenu(true, 'BuildingInfo')
      },
    },
    {
      name: 'Model list',
      active: false,
      icon: <AddBusiness />,
      action: (toggleMenu) => {
        toggleMenu(true, 'ModelList')
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
