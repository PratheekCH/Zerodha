import {Link} from "react-router-dom"
function Header({setsearchquery}) {

  let togglemode=()=>{
  document.body.classList.toggle("change")
  }

  return (
    <>
     <header style={{display:"flex",justifyContent:"space-evenly"}}   >
    <img  class='animate-bounce'     height={30} width={100}      src="https://zerodha.com/static/images/logo.svg" alt="logo" />

    <input  onChange={(e)=>{setsearchquery(e.target.value)}}  type="text" placeholder="search products..." />

    <nav style={{display:"flex",gap:"20px",alignItems:"center"}}>
  <Link to={'/register'}  > <a href="">Signup</a></Link>
  <Link to={'/about'}  ><a href="">About</a></Link>
  <Link to={'/products'}    ><a href="">Products</a></Link>
  <Link to={'/login'}     ><a href="">signin</a></Link>


    <button onClick={togglemode} >dark/light</button>
    </nav>

    </header>
    </>
  )
}

export default Header