import { useNavigate } from "react-router-dom";
/**
 * The About component renders a section that holds a link 
 * to the documentation 
 * @component
 * @returns {ReactElement} The About Section component
 */

const AboutSection:React.FC = () =>{
  const navigate = useNavigate();
  const toMediaPage = () =>{navigate('/media')}

  return (
    <>
    {/* <section className='text-center p-10' style={{ background: 'radial-gradient(at 50% 50%, #f6f6f6, #072854)' }}> */}
    {/* <section className='text-center p-10 flex flex-col items-center' style={{ background: 'radial-gradient(at 50% 50%, #f6f6f6, #072854)' }}> */}
    <section className='text-center p-10 flex flex-col items-center'
            style={{ background: 'radial-gradient(at 0% 10%, #f6f6f6, #dcdcdc)' }}>
      <p className='font-bold text-3xl mb-2 text-blue-900'>Easy and Intuitive</p>
      <p className="text-lg text-blue-900 mb-5 w-1/2" >Trydent allows you to easily generate Cypress code through your Chrome Devtools by interacting directly with your browser, saving you time and effort when building your App. Check out our videos to learn more about Trydent!</p>
      {/* <a className="inline-block bg-blue-600 hover:bg-gray-300 text-gray-100 hover:text-blue-900 font-bold py-2 px-4 rounded-full transition-colors duration-300" href="/media">Learn More</a> */}
      <div className="inline-block bg-blue-600 hover:bg-gray-300 text-gray-100 hover:text-blue-900 font-bold py-2 px-4 rounded-full transition-colors duration-300 cursor-pointer"  onClick={toMediaPage}> Learn more</div>
    </section>
    </>
    
  )
}

export default AboutSection
