import thumbnail from '../assets/Brand Assets/Trydent_favicon.png'

/**
 * The Medium Section contains the link to Trydent's articls
 * @component
 * @returns {ReactElement} The TeamSection component
 */

const MediumSection:React.FC = () =>{

  return (
    <>
    <div className="m-10"></div>
    <section className="p-10" style={{ background: 'radial-gradient(at -800% -400%, #f6f6f6, #072854)' }}>
      <h1 className="text-white text-2xl font-bold mt-5 mb-5">Read our Article!</h1>
      <section className="border flex bg-gray-200 bg-opacity-80 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-30 p-6 ">
        <img src={thumbnail} className="w-20 sm:w-40 md:w-60" alt="Thumbnail" />
        <article className="ml-4">
          <p className="text-xl text-blue-700 font-bold">Trydent Article Name</p>
          <p className="text-blue-700">Article description</p>
         </article>
       </section>
    </section>
    </>
    
  )
}

export default MediumSection
