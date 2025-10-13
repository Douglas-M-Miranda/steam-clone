import './styles/App.scss'
import MainMenu from './component/main-menu/MainMenu'
import SubMenu from './component/Menu-gameGenres/SubMenu'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <MainMenu />
        <SubMenu />
      </BrowserRouter>
    </>
  )
}

export default App
