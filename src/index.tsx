import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initializeApp } from 'firebase/app'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const firebaseConfig = {
  apiKey: 'AIzaSyCAgOtT8htmoycbvZ82FMrsX44DZ-E-bX8',
  authDomain: 'ifc-frontend-course.firebaseapp.com',
  projectId: 'ifc-frontend-course',
  storageBucket: 'ifc-frontend-course.appspot.com',
  messagingSenderId: '876378243167',
  appId: '1:876378243167:web:6a4888223d4da8370b9bea',
}

initializeApp(firebaseConfig)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
