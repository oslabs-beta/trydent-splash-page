import { useEffect, useState } from "react"
import logo from '../assets/Brand Assets/Trydent_icon black.png'

/**
 * The NavBar component contains the navigation links to other
 * pages within our website
 * 
 * @component
 * @returns {ReactElement} The NavBar component
 */

const NavBar:React.FC = () =>{
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <nav 
      className="fixed top-0 left-0 w-full bg-gray-300 p-4 shadow-lg"
      // style={{ background: 'radial-gradient(at -800% -400%, #f6f6f6, #072854)' }}
      >
      <a><img className="w-7 h-auto" src={logo}></img></a>
    
    </nav>


    </>
    
  )
}

export default NavBar