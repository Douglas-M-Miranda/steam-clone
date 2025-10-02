import './styles/App.scss'
import MainMenu from './component/main-menu/MainMenu'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <MainMenu />
      </BrowserRouter>
    </>
  )
}

export default App
