import { FC } from 'react'
import { useAppContext } from '../../../../middleware/context-provider'
import { Divider } from '@mui/material'
import './front-menu-content.css'

export const PropertiesMenu: FC = () => {
  const [state] = useAppContext()

  return (
    <div>
      {Boolean(state.properties.length) ? <Divider /> : <p>No item selected.</p>}
      {state.properties.map((property) => (
        <div key={property.name}>
          <div className="value-pair list-item">
            <p>:</p>
            <div>{property.value}</div>
          </div>
          <Divider />
        </div>
      ))}
    </div>
  )
}
