import jake from './assets/profiles/Jake.jpeg';
import eric from './assets/profiles/EricDunn.jpeg';
import alastair from './assets/profiles/Alastair.jpg';
import nicholas from './assets/profiles/Nicholas_Ly.jpeg';
import sam from './assets/profiles/Sam_Lee.jpg';

class Member {
  firstName: string;
  lastName: string;
  title: string;
  linkedinURL: string;
  githubURL: string;
  image: string;

  constructor(firstName: string,lastName: string, title: string, linkedinURL: string, githubURL: string, image: string) {
    this.firstName = firstName;
    this.lastName = lastName
    this.title = title;
    this.linkedinURL = linkedinURL;
    this.githubURL = githubURL;
    this.image = image;
  }
}

const Alastair = new Member('Alastair','Scheuermann','Software Engineer','https://www.linkedin.com/in/alastairsounds/','https://github.com/alastairsounds',alastair)
const Eric = new Member('Eric','Dunn','Software Engineer','https://www.linkedin.com/in/ericldunn/','https://github.com/ELDunn',eric)
const Jacob = new Member('Jacob', 'Gillan', 'Software Engineer','https://www.linkedin.com/in/jacob-gillan/','https://github.com/JakeGillan',jake)
const Nicholas = new Member('Nicholas','Ly','Software Engineer','https://www.linkedin.com/in/nicholasly/','https://github.com/nicholas-l-ly',nicholas)
const Samuel = new Member('Samuel','Lee','Software Engineer','https://www.linkedin.com/in/leesamuel423/','https://github.com/leesamuel423',sam)


const members:Member[] = [Alastair,Eric,Jacob,Nicholas,Samuel]
export default members