
import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import {store} from './app/store'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import Fifo from './Pages/Fifo.jsx'
import Lru from './Pages/Lru.jsx'
import Optimal from './Pages/Optimal.jsx'
import SecondChance from './Pages/SecondChance.jsx'
import { createBrowserRouter, createRoutesFromElements, Route , RouterProvider} from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='fifo' element={<Fifo />} />
      <Route path='lru' element={<Lru />} />
      <Route path='optimal' element={<Optimal />} />
      <Route path='secondchance' element={<SecondChance />} />
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
