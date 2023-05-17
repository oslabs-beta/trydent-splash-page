import React from 'react';


/**
 * The VideoCard component renders a modal that holds
 * information about the person as well as links to
 * their github and linked
 *
 * @component
 * @returns {ReactElement} The Videocard
 */

interface VideoCardProps {
  srcURL:string
  title:string
  description:string
}


const VideoCard: React.FC<VideoCardProps>= ({srcURL, title, description}) => {
  return (
    <li className="mb-10 pt-5 pb-5 bg-gray-100 bg-opacity-70 backdrop-blur-sm rounded-lg shadow-lg border border-white border-opacity-30 flex flex-col items-center md:flex-row justify-around list-none"
    style={{ background: 'radial-gradient(at -1000% 250%, #0f56b2, #dcdcdc)' }}>
    <div className="pl-5 pr-5 pt-5 md:p-5">
    <iframe
      className="rounded-lg scale-75 sm:scale-100"
      height="300"
      width="500"
      src={srcURL}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
    </div>
    <article className="p-5 md:w-2/3 pr-5 self-start text-blue-900">
      <h2 className='font-bold text-2xl'>{title}</h2>
      <p className='pt-2.5'>{description}</p>
    </article>
  </li>
  );
};

export default VideoCard;
