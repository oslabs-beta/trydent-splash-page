/**
 * The Footer component renders a section that holds a link 
 * to the documentation 
 * @component
 * @returns {ReactElement} The FooterSection component
 */

const FooterSection:React.FC = () =>{

  return (

  <footer className="flex flex-col text-xs text-gray-300 justify-center mt-5">
    <section className="mb-5">
      <ul className="flex flex-col items-center space-y-2">
        <li className="font-bold"><a>Connect with us</a></li>
        <li><a href="https://github.com/oslabs-beta/trydent">GitHub</a></li>
        <li><a href="https://www.linkedin.com/company/trydent-io/?viewAsMember=true">Linkedin</a></li>
        <li><a href="https://twitter.com/TrydentOS">Twitter</a></li>
      </ul>
    </section>
    <section className=" flex flex-col items-center">
      <p> &copy; 2023 Trydent | MIT License</p>
      <p>Website design by Nicholas Ly</p>
    </section>
  </footer>

    
  )
}

export default FooterSection
