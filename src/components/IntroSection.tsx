import gif from '../assets/ezgif.com-video-to-gif.gif'

const IntroSection:React.FC = () =>{

  return (
    <>
      <section className="p-10 grid md:grid-cols-2 md:gap-2 place-items-center" style={{ background: 'radial-gradient(at -800% -400%, #f6f6f6, #072854)' }}>
        <article className="text-center mb-4 w-3/4">
          <h1 className="text-5xl font-bold mb-4">Tame your testing</h1>
          <p className="mb-4 text-2xl">Trydent is a Chrome DevTool that enables you to save time on your end-to-end tests by autogenerating Cypress code.</p>
          <a className="inline-block bg-blue-600 hover:bg-gray-300 text-gray-300 hover:text-blue-900 font-bold py-2 px-4 rounded-full transition-colors duration-300" href="https://trydent.mintlify.app/introduction">Get Started</a>
        </article>
        <img className="" src={gif} alt="animated GIF of Trydent" />
      </section>
    </>
    
  )
}

export default IntroSection
