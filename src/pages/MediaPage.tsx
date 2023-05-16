
import VideoSection from "../components/VideoSection"
import MediumSection from "../components/MediumSection"

/**
 * The Media page contains all the information 
 * @component
 * @returns {ReactElement} The Media page
 */




const MediaPage :React.FC = () =>{

  return (
    <>
    <div className="m-10"></div>
    <div style={{ background: 'radial-gradient(at -800% -400%, #f6f6f6, #072854)' }}>
    <MediumSection></MediumSection>
    <VideoSection></VideoSection>
    </div>
    </>
    
  )
}

export default MediaPage
