import React from 'react';
import '../index.css'
import githubLogo from '../assets/github-mark/github-mark.svg'


/**
 * The PersonCard component renders a modal that holds 
 * information about the person as well as links to
 * their github and linked 
 * 
 * @component
 * @returns {ReactElement} The TeamSection component
 */

const PersonCard: React.FC = (props) =>{
  const {firstName, lastName, title, linkedinURL ,githubURL, image} = props;
  return(

    <li className='bg-white bg-opacity-30 rounded-lg shadow-md backdrop-blur-md border border-white border-opacity-30 p-6 flex flex-col items-center list-none'>
      <img src={image} className='w-40 h-40 rounded-full border border-white border-opacity-20'></img>
      <h3>{firstName} {lastName}</h3>
      <p>{title}</p>
      <ul className='flex '>
        <li className='mr-6'><a href={linkedinURL}> 
        <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> 
        </a></li>
        <li><a href={githubURL}>
        <img src={githubLogo} className='w-5 h-5'></img>
        </a></li>
      </ul>
    </li>


  )
}

export default PersonCard