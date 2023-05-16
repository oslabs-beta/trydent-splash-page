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
const introDemoDescription = 'Lorem ipsum dolor sit amet, timeam perpetua ne est. Eam graeci tamquam epicuri te. Eam suas alienum denique et. In sed noluisse vivendum forensibus.Omnium menandri erroribus pro ut, liber gloriatur conceptam mea ea. At vel tota tollit mollis, ne sed tamquam electram scribentur. Nam te brute debet ponderum, vim quidam invenire in. Eum no porro laudem labore, an inermis urbanitas sea, ei magna verear cum. No simul graecis definiebas sit, iriure vocibus corrumpit cum te, ne gubergren consequat vim.';


const underTheHoodURL = 'https://www.youtube.com/embed/R2vejhdm8lo';
const underTheHoodTitle = 'Under the hood';
const underTheHoodDescription = 'Lorem ipsum dolor sit amet, timeam perpetua ne est. Eam graeci tamquam epicuri te. Eam suas alienum denique et. In sed noluisse vivendum forensibus.Omnium menandri erroribus pro ut, liber gloriatur conceptam mea ea. At vel tota tollit mollis, ne sed tamquam electram scribentur. Nam te brute debet ponderum, vim quidam invenire in. Eum no porro laudem labore, an inermis urbanitas sea, ei magna verear cum. No simul graecis definiebas sit, iriure vocibus corrumpit cum te, ne gubergren consequat vim.';

const whyProjectURL = 'https://www.youtube.com/embed/zdU635esPpQ';
const whyProjectTitle = 'Motivation behind Trydent';
const whyProjectDescription = 'Lorem ipsum dolor sit amet, timeam perpetua ne est. Eam graeci tamquam epicuri te. Eam suas alienum denique et. In sed noluisse vivendum forensibus.Omnium menandri erroribus pro ut, liber gloriatur conceptam mea ea. At vel tota tollit mollis, ne sed tamquam electram scribentur. Nam te brute debet ponderum, vim quidam invenire in. Eum no porro laudem labore, an inermis urbanitas sea, ei magna verear cum. No simul graecis definiebas sit, iriure vocibus corrumpit cum te, ne gubergren consequat vim.';


const introDemo = new Video(introDemoURL,introDemoTitle, introDemoDescription, );
const underTheHood = new Video(underTheHoodURL,underTheHoodTitle, underTheHoodDescription);
const whyProject = new Video(whyProjectURL, whyProjectTitle ,whyProjectDescription);


const videos = [introDemo,underTheHood,whyProject];


export default videos