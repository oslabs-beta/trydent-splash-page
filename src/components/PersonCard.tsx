import React from 'react';
import githubLogo from '../assets/github-mark/github-mark.svg';

interface PersonCardProps {
  firstName: string;
  lastName: string;
  title: string;
  linkedinURL: string;
  githubURL: string;
  image: string;
}

/**
 * The PersonCard component renders a modal that holds
 * information about the person as well as links to
 * their github and linked
 *
 * @component
 * @returns {ReactElement} The TeamSection component
 */

const PersonCard: React.FC<PersonCardProps> = ({ firstName, lastName, title, linkedinURL, githubURL, image }) => {
  return (
    <li className="bg-gray-300 bg-opacity-20 backdrop-blur-sm rounded-lg shadow-lg border border-white border-opacity-30 p-6 flex flex-col space-y-1 items-center list-none transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl ">
      <img src={image} className="w-40 h-40 rounded-full border border-white border-opacity-30"></img>
      <h4 className="font-bold pt-2 text-blue-900">
        {firstName} {lastName}
      </h4>
      <p className="italic text-xs pb-4 text-blue-900">{title}</p>
      <ul className="flex">
        <li className="mr-5 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
          <a href={linkedinURL}>
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </li>
        <li className="transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
          <a href={githubURL}>
            <img src={githubLogo} className="w-5 h-5"></img>
          </a>
        </li>
      </ul>
    </li>
  );
};

export default PersonCard;
