import thumbnail from '../assets/Brand Assets/Trydent_favicon.png'

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
      className="border flex bg-gray-200 bg-opacity-80 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-30 p-6 "
      style={{ background: 'radial-gradient(at -1000% 250%, #0f56b2, #dcdcdc)' }}>
        <a href='https://medium.com/@ericlewisdunn/from-sole-to-crown-the-importance-of-end-to-end-testing-5ff8fbf20658'>
        <img src={thumbnail} className="w-20 sm:w-40 md:w-60" alt="Thumbnail" />
        </a>
        <article className="ml-10 text-blue-900">
          <a 
          href='https://medium.com/@ericlewisdunn/from-sole-to-crown-the-importance-of-end-to-end-testing-5ff8fbf20658'
          className="text-2xl font-bold">
          Trydent Article Name
          </a>
          <p className="">Article description</p>
         </article>
      </div>
    </section>
    </>
  )
}

export default MediumSection
