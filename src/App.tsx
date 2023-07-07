import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { BuildingViewer } from './components/building/building-viewer'
import { MapViewer } from './components/map/map-viewer'
import { ContextProvider } from './middleware/context-provider'
import { Dashboard } from './components/home'

function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route
            path="/building"
            element={<BuildingViewer />}
          />
          <Route
            path="/map"
            element={<MapViewer />}
          />
          <Route
            path="/login"
            element={<Dashboard />}
          />
          <Route
            path="/"
            element={<Dashboard />}
          />
        </Routes>
      </Router>
    </ContextProvider>
  )
}

export default App
