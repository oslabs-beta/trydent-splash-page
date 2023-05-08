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
    <section className='text-center p-5'>
    <p className='font-bold text-3xl mb-2'>Our team</p>
    <p className='mb-5'>We're a group of engineers driven by passion and enthusiasm for what we do.</p>
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
      {memberCards}
    </div>
    </section>
  )

}

export default TeamSection