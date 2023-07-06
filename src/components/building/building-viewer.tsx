import { Box } from '@mui/material'
import { FC, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppContext } from '../../middleware/context-provider'
import { BuildingTopbar } from '../building/side-menu/building-topbar'
import { BuildingDrawer } from './side-menu/building-drawer'
import { getDrawerHeader } from '../building/side-menu/mui-utils'
import { BuildingFrontMenu } from './front-menu/building-front-menu'
import { FrontMenuMode } from './front-menu/types'
import { BuildingViewport } from './viewport/building-viewport'
import { BuildingBottomMenu } from './bottom-menu/building-bottom-menu'

export const BuildingViewer: FC = () => {
  const [width] = useState(240)
  const [sideOpen, setSideOpen] = useState(false)
  const [frontOpen, setFrontOpen] = useState(false)
  const [frontMode, setFrontMode] = useState<FrontMenuMode>('BuildingInfo')

  const [{ user, building }] = useAppContext()

  if (!user) return <Navigate to="/login" />

  if (!building) return <Navigate to={'/map'} />

  const toggleDrawer = (active: boolean) => {
    setSideOpen(active)
  }

  const toggleFrontMenu = (active = !frontOpen, mode?: FrontMenuMode) => {
    if (mode) {
      setFrontMode(mode)
    }
    setFrontOpen(active)
  }

  const DrawerHeader = getDrawerHeader()

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <BuildingTopbar
          width={width}
          open={sideOpen}
          onOpen={() => toggleDrawer(true)}
        />

        <BuildingDrawer
          width={width}
          open={sideOpen}
          onClose={() => toggleDrawer(false)}
          onToggleMenu={toggleFrontMenu}
        />

        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />

          <BuildingViewport />

          <BuildingFrontMenu
            onToggleMenu={toggleFrontMenu}
            open={frontOpen}
            mode={frontMode}
          />

          <BuildingBottomMenu />
        </Box>
      </Box>
    </>
  )
}
