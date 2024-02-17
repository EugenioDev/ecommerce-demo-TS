
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
  // <React.StrictMode>  controllano che non ci siano dipendenze del progetto o servizi chiamati esternamente deprecati
  //  
  // </React.StrictMode>,
)
