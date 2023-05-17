/**
 * Creates the Video class
 * 
 * @param {string} url This is the member first name
 * @param {string} description This is the member last name

 * @returns {Video} 
 */

class Video {
  url: string;
  title:string;
  description: string;


  constructor(url: string,title:string, description: string) {
    this.url = url;
    this.title = title;
    this.description = description;

  }
}

const introDemoURL = 'https://www.youtube.com/embed/SKl-aUo-6eY'
const introDemoTitle = 'Get to know Trydent'
const introDemoDescription = `Learn more about Trydent and its capabilities through this introduction video and demo!`;

const underTheHoodURL = 'https://www.youtube.com/embed/oCjYJ5DVLaw';
const underTheHoodTitle = 'Under the hood';
const underTheHoodDescription = `Lets explore what's going on under the hood of Trydent. 
This video dives deeper into the Chrome Dev Tool 
and how it operates to track user events and turn them into Cypress code.`;
const whyProjectURL = 'https://www.youtube.com/embed/uZnCx_q7M_w';
const whyProjectTitle = 'Motivation behind Trydent';
const whyProjectDescription = `Get to know why the team built Trydent and how it helps users tame their testing. This video explores the considerations made when building this and what niche it fills within the market.`;


const introDemo = new Video(introDemoURL,introDemoTitle, introDemoDescription, );
const underTheHood = new Video(underTheHoodURL,underTheHoodTitle, underTheHoodDescription);
const whyProject = new Video(whyProjectURL, whyProjectTitle ,whyProjectDescription);


const videos = [introDemo,underTheHood,whyProject];


export default videos