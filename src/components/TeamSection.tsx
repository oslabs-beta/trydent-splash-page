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
  // How do I type membercards to be an array of react components? - NL
  const memberCards = members.map((el)=>{
    <PersonCard
    name = {el.name}
    title = {el.title}
    linkedinURL = {el.linkedinURL}
    githubURL = {el.githubURL}
    ></PersonCard>
  })
  return(
    <section>
      {memberCards}
    </section>
  )

}

export default TeamSection