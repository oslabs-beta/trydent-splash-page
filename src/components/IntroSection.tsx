import gif from '../assets/ezgif.com-video-to-gif.gif'

/**
 * The IntroSection component renders a section with a chort description about the tool
 * and a link to get started
 * 
 * @component
 * @returns {ReactElement} IntroSection Component
 */

const IntroSection:React.FC = () =>{

  return (
    <>
      <section className="p-10 grid lg:grid-cols-2 lg:gap-2 place-items-center" style={{ background: 'radial-gradient(at -800% -400%, #f6f6f6, #072854)' }}>
        <article className="text-center mb-4 w-3/4">
          <h1 className="text-5xl font-bold mb-4">Quickly generate E2E tests with Cypress code</h1>
          <p className="mb-4 text-2xl">Trydent is a Chrome DevTool that enables you to save time on your end-to-end tests by autogenerating Cypress code.</p>
          <a className="inline-block bg-gray-300 hover:bg-blue-600 text-blue-900 hover:text-gray-300 font-bold py-2 px-4 rounded-full transition-colors duration-300" href="https://trydent.mintlify.app/introduction">Get Started</a>
        </article>
        <img className="" src={gif} alt="animated GIF of Trydent" />
      </section>
    </>
    
  )
}

export default IntroSection
