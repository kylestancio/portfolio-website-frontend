import { useContext } from "react"
import { Card, Container, Badge } from "react-bootstrap"
import { ThemeContext } from "../App"
import { Portfolio as portfolio } from '../Data/PortfolioData'

function Portfolio() {
  const theme = useContext(ThemeContext)
  return (
    <Container className='pb-5'>
      <h1 className={`mt-5 display-1 text-${theme.text}`}>Portfolio</h1>
      <p className={`fs-3 text-${theme.text}`}>The project that I've done</p>
      {
        portfolio.map((project)=>{return(
          <Card key={project.id} className={`mb-3 border border-light bg-${theme.background}`}>
            <a href={project.img_src} target="_blank" rel="noreferrer">
            <Card.Img variant="top" src={project.img_src} style={{ height: '30vh', objectFit: 'cover'}} />
            </a>
            
            <Card.Body>
              <Card.Title className={`mb-2 text-${theme.text}`}>{project.title}</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">{project.subtitle}</Card.Subtitle> 
              <Container className='mx-0 mb-3'>
                {project.tags && project.tags.map((tag=><Badge className='me-2' bg="primary">{tag}</Badge>))}
              </Container>
              
              <Card.Text className={`text-${theme.text}`}>{project.text1}</Card.Text> 
              {project.resources_link && <>
                <Card.Link className={`text-${theme.background==='dark'?'info':'primary'}`} href={project.resources_link}>{project.resources_text}</Card.Link></>
              }
              
            </Card.Body>
          </Card>
        )})
      }
      
    </Container>
  )
}

export default Portfolio