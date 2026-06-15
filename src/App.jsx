
import './App.css'
import Header from './Header'
import Products from './Products.jsx'
import Register from './Register.jsx'
import Login from './Login.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import {Routes,Route} from "react-router-dom"
import { useState } from 'react'
function App() {
  const [searchquery, setsearchquery] = useState('')
 
  return (
    <>
    <section style={{textAlign:"center"}}  >
   <Header  setsearchquery={setsearchquery}    />
    </section>

<Routes>

<Route path='/'  element={<Home/>}  />
<Route path='/products'  element={<Products searchquery={searchquery}  />} />
<Route path='/about'  element={<About/>}  />
<Route path='/register' element={<Register/>}   />
<Route path='/login'  element={<Login/>} />

</Routes>
    </>
  )
}

export default App
