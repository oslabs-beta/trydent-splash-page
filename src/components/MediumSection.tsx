import thumbnail from '../assets/Brand Assets/Trydent logo-official.png'

/**
 * The Medium Section contains the link to Trydent's articls
 * @component
 * @returns {ReactElement} The TeamSection component
 */

const MediumSection:React.FC = () =>{
  // use a fetch request to oull the figure's image
  // get the first paragraph as a preview

  return (
    <>

    <section className="p-10">
      <h1 className="text-white text-3xl font-bold mt-5 mb-5">Read our Article!</h1>
      <div 
      className="border flex flex-col items-center bg-gray-200 bg-opacity-80 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-30 p-6 md:flex-row"
      style={{ background: 'radial-gradient(at -1000% 250%, #0f56b2, #dcdcdc)' }}>
        <a className='self-center'
        href='https://medium.com/@oslabs.trydent/practice-safe-tests-automate-e2e-testing-trydent-406b217943c2'>
        <img src={thumbnail} className=" sm:scale-95 pb-5 md:w-80" alt="Thumbnail" />
        </a>
        <article className="text-blue-900 w-full self-start md:ml-10 ">
          <a 
          href='https://medium.com/@oslabs.trydent/practice-safe-tests-automate-e2e-testing-trydent-406b217943c2'
          className="text-2xl font-bolds">
          Practice Safe Tests || Automate E2E Testing || Trydent
          </a>
          <p className="pt-2.5">The primary purpose of Trydent is to help developers and quality assurance engineers easily generate Cypress test code, saving time and effort while ensuring comprehensive test coverage. With Trydent, developers can create tests quickly, detect issues earlier in the development process, and maintain high-quality code standards.</p>
         </article>
      </div>
    </section>
    </>
  )
}

export default MediumSection
