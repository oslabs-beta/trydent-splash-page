

const IntroSection:React.FC = () =>{

  return (
    <>
      <section className="p-5 grid md:grid-cols-2 md:gap-2 place-items-center">
        <article className="text-center mb-4 w-3/4">
          <h1 className="text-5xl font-bold mb-4">Tame your testing</h1>
          <p className="mb-4 text-2xl">Trydent is a Chrome DevTool that enables you to save time on your end-to-end tests by autogenerating Cypress code.</p>
          <a className="inline-block bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-bold py-2 px-4 rounded-full transition-colors duration-300" href="https://trydent.mintlify.app/introduction">Get Started</a>
        </article>
        <img className="" src="https://media.tenor.com/x8v1oNUOmg4AAAAM/rickroll-roll.gif" alt="animated GIF of Trydent" />
      </section>
    </>
    
  )
}

export default IntroSection
