import { Routes, Route } from 'react-router-dom'
import { Home } from './page/Home'
import { Shop } from './page/Shop'
import { About } from './page/About'
import { NavBar } from './component/NavBar'
import { ShopItemProvider } from './context/ShopItemContext'


function App() {

  return (
    <ShopItemProvider>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/shop' Component={Shop} />
        <Route path='/about' Component={About} />
      </Routes>
    </ShopItemProvider>
  )
}

export default App
