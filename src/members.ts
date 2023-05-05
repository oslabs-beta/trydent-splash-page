class Member {
  name: string;
  title: string;
  linkedinURL: string;
  githubURL: string;
  image: File;

  constructor(name: string, title: string, linkedinURL: string, githubURL: string, image: File) {
    this.name = name;
    this.title = title;
    this.linkedinURL = linkedinURL;
    this.githubURL = githubURL;
    this.image = image;
  }
}

const Jacob = new Member('Jacob Gillan', 'Software Engineer','https://www.linkedin.com/in/jacob-gillan/','https://github.com/JakeGillan')
const Eric = new Member('Eric Dunn','Software Engineer','https://www.linkedin.com/in/eric-dunn-518169222/','https://github.com/ELDunn')
const Alastair = new Member('Alastair Scheuermann','Software Engineer','https://www.linkedin.com/in/alastairsounds/','https://github.com/alastairsounds')
const Nicholas = new Member('Nicholas Ly','Software Engineer','https://www.linkedin.com/in/nicholasly/','https://github.com/nicholas-l-ly')
const Samuel = new Member('Samuel Lee','Software Engineer','https://www.linkedin.com/in/leesamuel423/','https://github.com/leesamuel423')

const members:Member[] = [Jacob,Eric,Alastair,Nicholas,Samuel]
export default members