import React from 'react';
import PersonCard from './PersonCard';
import members from '../members';
// import '../index.css'
/**
 * The TeamSection component renders a section that holds 
 * personCards
 
 * 
 * @component
 * @returns {ReactElement} The TeamSection component
 */

const TeamSection:React.FC = () =>{
  const memberCards = members.map((el)=>{
    return <PersonCard
    firstName = {el.firstName}
    lastName = {el.lastName}
    title = {el.title}
    linkedinURL = {el.linkedinURL}
    githubURL = {el.githubURL}
    image = {el.image}
    ></PersonCard>
  })

  return(
    <div className='grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {memberCards}
    </div>
  )

}

export default TeamSection