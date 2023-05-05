import React from 'react';


/**
 * The PersonCard component renders a modal that holds 
 * information about the person as well as links to
 * their github and linked 
 * 
 * @component
 * @returns {ReactElement} The TeamSection component
 */

const PersonCard: React.FC = (props) =>{
  const {name, title, linkedinURL ,githubURL} = props;
  return(
    <li>
      <img></img>
      <h3>{name}</h3>
      <p>{title}</p>
      <ul>
        <li><a href={linkedinURL} >linkedin image</a></li>
        <li><a href={githubURL}>github image</a></li>
      </ul>
    </li>


  )
}

export default PersonCard