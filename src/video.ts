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

const introDemoURL = 'https://www.youtube.com/embed/2iDO0lgcp5Y'
const introDemoTitle = 'Get to know Trydent'
const introDemoDescription = 'Intro description'

const underTheHoodURL = 'https://www.youtube.com/embed/R2vejhdm8lo';
const underTheHoodTitle = 'Under the hood';
const underTheHoodDescription = 'https://www.youtube.com/embed/R2vejhdm8lo';

const whyProjectURL = 'https://www.youtube.com/embed/zdU635esPpQ';
const whyProjectTitle = 'Motivation behind Trydent';
const whyProjectDescription = 'https://www.youtube.com/embed/zdU635esPpQ';


const introDemo = new Video(introDemoURL,introDemoTitle, introDemoDescription, );
const underTheHood = new Video(underTheHoodURL,underTheHoodTitle, underTheHoodDescription);
const whyProject = new Video(whyProjectURL, whyProjectTitle ,whyProjectDescription);


const videos = [introDemo,underTheHood,whyProject];


export default videos