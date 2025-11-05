import './styles/App.scss'
import MainMenu from './component/main-menu/MainMenu'
import SubMenu from './component/Menu-gameGenres/SubMenu'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import StorePage from './pages/StorePage'
import { useState, type SetStateAction } from 'react'

function App() {
  const [itemOpen, setItemOpen] = useState(false)
  console.log(itemOpen)

  const isOpenDropDown = (isOpen: boolean) => {
      setItemOpen(isOpen)
  }

  return (
    <>
      <BrowserRouter>
        <MainMenu />
        <SubMenu closeItem={itemOpen} setCloseItem={setItemOpen} />
        <Routes>
          <Route path='/' element={<StorePage onSelect={isOpenDropDown} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
