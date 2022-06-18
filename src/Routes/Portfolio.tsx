import { useContext } from "react"
import { Card, Container, Badge } from "react-bootstrap"
import { ThemeContext } from "../App"

interface PortfolioInterface {
  id: number,
  img_src: string,
  subtitle: string,
  tags: Array<string>
  resource_link: string,
  resource_text: string
}

const portfolio = [
  {
    id: 0,
    img_src: process.env.REACT_APP_BACKEND + 'get/image/ThesisHeader.png',
    title: 'Flood Mapping: A Social Media Approach in Data Collection and Geo-visualizing Flooded Areas Utilizing Twitter API and Google Maps API',
    subtitle: 'Thesis Project',
    tags: [
      'Python',
      'Django',
      'JavaScript',
      'Leaflet',
      'Bootstrap',
      'Google Maps API',
      'spaCy',
      'TwitterAPI'
    ],
    text1: 'Me, Ray James Amer L. Gonzales, and Rence Lennard A. Galaraga, created a system to ma possible flooding events in Davao City by using Twitter as our raw data, Natural Language Processing using spaCy, and display it on a website made using Django and Google Maps API. Initially, we wanted to use Leaflet, however, the geocoding of Leaflet in Davao City is still a bit inaccurate; hence we used Google Maps API Geocoding Service to convert addresses to coordinates. There was also a hard time getting the addresses from tweets as some tweets will be made in the Filipino language, and there was still little support for Natural Language Processing in Filipino.',
    resources_link: process.env.REACT_APP_BACKEND + 'get/files/Thesis.pdf',
    resources_text: 'Download Thesis file here'
  },
  {
    id: 1,
    img_src: process.env.REACT_APP_BACKEND + 'get/image/PortfolioWebsite.jpg',
    title: 'My Portfolio website',
    subtitle: 'Personal Website',
    tags: [
      'NodeJS',
      'ReactJS',
      'Bootstrap',
      'JavaScript',
      'TypeScript',
      'ExpressJS'
    ],
    text1: 'I’ve created my portfolio website for me to learn ReactJS as this framework is not taught in my class (We were taught how to make a website using the Django Framework); however, I like to learn how NodeJS work and how to build a website. So I learned it from scratch and through youtube tutorials. I learned it by exploring its concepts and understanding how it works. For now, I’ve created my personal website using technologies that are new to me.',
  },
  {
    id: 2,
    img_src: process.env.REACT_APP_BACKEND + 'get/image/BobaMobileGame.jpg',
    title: 'Boba Mobile Game',
    subtitle: 'Internship Project',
    tags: [
      'Unity',
      'C#',
      'Jira',
      'Slack',
      'Github',
    ],
    text1: "During our internship, we were tasked to create a mobile game for the card game “Sabobatage”, created by Eric Chen. We planned what the game would look like and how it would be played. Together with my team, we’ve successfully created a beta version of the game and we’ve also successfully uploaded it on test flight where our project manager and clients can test it on their own devices. Developing the game would involve a lot of our team members, and they would each need to contribute parts of the game. Learning GitHub and how to push and merge branches, we’ve managed to create the game before the end of our internship period.",
  },

]

function Portfolio() {
  const theme = useContext(ThemeContext)
  return (
    <Container style={{ height: '180vh'}}>
      <h1 className={`mt-5 display-1 text-${theme.text}`}>Portfolio</h1>
      <p className={`fs-3 text-${theme.text}`}>The project that I've done</p>
      {
        portfolio.map((project)=>{return(
          <Card key={project.id} className='mb-3'>
            <a href={project.img_src} target="_blank" rel="noreferrer">
            <Card.Img variant="top" src={project.img_src} style={{ height: '30vh', objectFit: 'cover'}} />
            </a>
            
            <Card.Body>
              <Card.Title className='mb-2'>{project.title}</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">{project.subtitle}</Card.Subtitle> 
              <Container className='mx-0 mb-3'>
                {project.tags && project.tags.map((tag=><Badge className='me-2' bg="primary">{tag}</Badge>))}
              </Container>
              
              <Card.Text>{project.text1}</Card.Text> 
              {project.resources_link && <>
                <Card.Link href={project.resources_link}>{project.resources_text}</Card.Link></>
              }
              
            </Card.Body>
          </Card>
        )})
      }
      
    </Container>
  )
}

export default Portfolio