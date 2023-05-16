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
      <a href='https://medium.com/@ericlewisdunn/from-sole-to-crown-the-importance-of-end-to-end-testing-5ff8fbf20658' className="border flex bg-gray-200 bg-opacity-80 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-30 p-6 ">
        <img src={thumbnail} className="w-20 sm:w-40 md:w-60" alt="Thumbnail" />
        <article className="ml-10">
          <p className="text-2xl font-bold">Trydent Article Name</p>
          <p className="">Article description</p>
         </article>
      </a>
    </section>
    </>
  )
}

export default MediumSection
