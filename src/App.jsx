import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import LP from './Components/LP'
import About from './Utility/About'
import Card  from './Components/Card'
import Contanct from './Utility/Contanct'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='card/:title' element={<Card/>}/>
        <Route path='/' element={<LP/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contanct/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App