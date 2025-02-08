import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import LP from './Components/LP'
import About from './Utility/About'
import Salaar from './Utility/Salaar'
// import Devara from './Utility/Devara'
import Pushpa from './Utility/Pushpa'
import Card  from './Components/Card'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='card/:title' element={<Card/>}/>
        <Route path='/' element={<LP/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='salaar' element={<Salaar/>}/>
        {/* <Route path='devara' element={<Devara/>}/> */}
        <Route path='pushpa' element={<Pushpa/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App