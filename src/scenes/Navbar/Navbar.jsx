import logo from '../../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'
import { useState } from 'react'

const Navbar = () => {
    const [isSearched, setIsSearched] = useState(false)
    const navigate = useNavigate()
    
    const backToHome = () => {
        navigate("/")
    }
    
    

  return (
    <nav className='nav'>
        <img src={logo} alt='logo' onClick={backToHome} />


        <div>
            <Link to='/tvshows'>TV Shows</Link>
            <Link to='/movies'>Movies</Link>
            <Link to='/recentlyAdded'>Recently Added</Link>
            <Link to='/list'>List</Link>
        </div>
        
        {isSearched  
            ? <>
                <RxCross2 className='searchIcon' onClick={ () => setIsSearched(false)} />
                <input type='text' placeholder='Search here...' />
              </>
            : <FiSearch className='cross' onClick={ () => setIsSearched(true)} />
        }
        
    </nav>
  )
}

export default Navbar