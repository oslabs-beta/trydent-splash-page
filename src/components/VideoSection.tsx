import React from 'react';
import VideoCard from '../components/VideoCard'
import videos from '../video'

/**
 * The VideoSection component renders a section that holds 
 * VideoCards
 * 
 * @component
 * @returns {ReactElement} The VideoSection component
 */



const VideoSection:React.FC = () =>{

  const videoCardsArray = videos.map((el)=> {

    return <VideoCard 
      srcURL = {el.url}
      title ={el.title}
      description={el.description}
    />
  })


  return(
    <section className='m-10'>
      <h1 className="text-white text-3xl font-bold mt-5 mb-5">Watch our Videos!</h1>
      <section> 
        {videoCardsArray}
      </section>
    </section>
  )

}

export default VideoSection