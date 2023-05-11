import { useEffect, useState } from "react";
import logo from '../assets/Brand Assets/trydent-icon blue-dark.png';
import githubLogo from '../assets/github-mark/github-mark.png';

const NavBar: React.FC = () => {
  // set state for sticky nav bar, this is important to keep it visible as users scrolls
  const [isSticky, setIsSticky] = useState(false);
  // as the page shrinks and or on phone, the menu will update 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // when a user scrolls beyond the top of the page, update state
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    // listen for scrolling 
    window.addEventListener('scroll', handleScroll);
    // removes event listener when unmounting 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full bg-gray-300 p-2 flex justify-between pl-5 pr-5 ${isSticky ? 'shadow-lg' : ''}`} style={{ zIndex: 9999 }}>
      <div className="flex items-center">
        <a href="/">
          <img className="w-7 h-auto" src={logo} alt="Logo" />
        </a>
        <a className="pl-5 text-blue-900 text-3xl font-bold" href="/">Trydent</a>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <a className="text-blue-900 font-bold" href="https://trydent.mintlify.app/introduction">Docs</a>
        {/* need to change below to a navigation to the media page */}
        <a className="text-blue-900 font-bold" href="/media">Media</a>
        <a href="https://github.com/oslabs-beta/trydent">
          <img src={githubLogo} className="w-7 h-auto" alt="GitHub Logo" />
        </a>
      </div>

      <div className="md:hidden flex items-center">
        <button
          className="text-blue-900 font-bold p-2 focus:outline-none"
          onClick={toggleMenu}
        >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        </button>
      </div>
      {/* this is condtional rendering format {Boolean && (<>)} if boolean true, render element in () */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-300 p-2 flex flex-col items-center space-y-2 border-t border-blue-900">
          <a className="block text-blue-900 " href="/https://trydent.mintlify.app/introduction">Docs</a>
            {/* need to change below to a navigation to the media page */}
          <a className="block text-blue-900 " href="/media">Media</a>
          <a className="block text-blue-900 " href="https://github.com/oslabs-beta/trydent">Github</a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
