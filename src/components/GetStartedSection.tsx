/**
 * The GetStarted component renders a section that holds a link 
 * to the documentation 
 * @component
 * @returns {ReactElement} The TeamSection component
 */

const GetStartedSection:React.FC = () =>{

  return (
    <>

    <section className='text-center p-10 flex flex-col items-center' style={{ background: 'radial-gradient(at -800% -400%, #f6f6f6, #072854)' }}>

      <p className='font-bold text-3xl mb-2 text-gray-300'>Tame your testing</p>
      <p className="text-lg text-gray-300 mb-5 w-1/2">Start building out your testing suite by adding our DevTool to your browser. You'll find building tests for your App's user journies much easier to create. </p>
      <a className="inline-block bg-gray-300 hover:bg-blue-600 text-blue-900 hover:text-gray-300 font-bold py-2 px-4 rounded-full transition-colors duration-300" href="https://trydent.mintlify.app/introduction">More Info</a>
    </section>
    </>
    
  )
}

export default GetStartedSection
