/**
 * The About component renders a section that holds a link 
 * to the documentation 
 * @component
 * @returns {ReactElement} The TeamSection component
 */

const AboutSection:React.FC = () =>{

  return (
    <>
    {/* <section className='text-center p-10' style={{ background: 'radial-gradient(at 50% 50%, #f6f6f6, #072854)' }}> */}
    {/* <section className='text-center p-10 flex flex-col items-center' style={{ background: 'radial-gradient(at 50% 50%, #f6f6f6, #072854)' }}> */}
    <section className='text-center p-10 flex flex-col items-center bg-gray-300'>
      <p className='font-bold text-3xl mb-2 text-blue-900'>Easy and Intuitive</p>
      <p className="text-lg text-blue-900 mb-5 w-1/2" >Trydent allows you to easily generate Cypress code through your Chrome Devtools by interacting directly with your browser, saving you time and effort when building your App!</p>
      <a className="inline-block bg-blue-600 hover:bg-gray-300 text-gray-300 hover:text-blue-900 font-bold py-2 px-4 rounded-full transition-colors duration-300" href="https://trydent.mintlify.app/introduction">Learn More</a>
    </section>
    </>
    
  )
}

export default AboutSection
