import burger from '../images/burger.png'

const Navbar = () => {
   return(
      <nav className='nav'>
         <img className='nav-logo' src={burger}/>
         <h1 className='nav-title'>Food</h1>
      </nav>
   )
}

export default Navbar