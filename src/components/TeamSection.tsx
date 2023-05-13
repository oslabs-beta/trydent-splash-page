import React from 'react';
import PersonCard from './PersonCard';
import members from '../members';

/**
 * The TeamSection component renders a section that holds 
 * personCards
 
 * 
 * @component
 * @returns {ReactElement} The TeamSection component
 */

const TeamSection:React.FC = () =>{
  const memberCards = members.map((el,i)=>{
    return <PersonCard
    key = {i}
    firstName = {el.firstName}
    lastName = {el.lastName}
    title = {el.title}
    linkedinURL = {el.linkedinURL}
    githubURL = {el.githubURL}
    image = {el.image}
    ></PersonCard>
  })

  return(
    <section className='text-center p-10' style={{ background: 'radial-gradient(at 50% 20%, #f6f6f6, #072854)' }}>
    <p className='font-bold text-3xl mb-2 text-blue-900'>Our team</p>
    <p className='mb-6 font-bold italic text-blue-900'>"We believe testing leads to failure and failure leads to understanding." - ELD</p>
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
      {memberCards}
    </div>
    </section>
  )

}

export default TeamSection