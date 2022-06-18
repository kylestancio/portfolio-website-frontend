import { useContext } from 'react'
import { Container, Card, Badge } from 'react-bootstrap'
import { ThemeContext } from '../../App'
import { PortfolioInterface } from '../../Interfaces/PortfolioCard.interface'

type Props = {
  portfolio: PortfolioInterface
}

function PortfolioCard({ portfolio }: Props) {
  const theme = useContext(ThemeContext)
  return (
    <Card key={portfolio.id} className={`mb-3 border border-light bg-${theme.background}`}>
      <a href={portfolio.img_src} target="_blank" rel="noreferrer">
      <Card.Img variant="top" src={portfolio.img_src} style={{ height: '30vh', objectFit: 'cover'}} />
      </a>
      <Card.Body>
        <Card.Title className={`mb-2 text-${theme.text}`}>{portfolio.title}</Card.Title>
        <Card.Subtitle className="mb-3 text-muted">{portfolio.subtitle}</Card.Subtitle> 
        <Container className='mx-0 mb-3'>
          {portfolio.tags && portfolio.tags.map((tag=><Badge className='me-2' bg="primary">{tag}</Badge>))}
        </Container>
        
        <Card.Text className={`text-${theme.text}`}>{portfolio.text1}</Card.Text> 
        {portfolio.resources_link && <>
          <Card.Link className={`text-${theme.background==='dark'?'info':'primary'}`} href={portfolio.resources_link}>{portfolio.resources_text}</Card.Link></>
        }
      </Card.Body>
    </Card>
  )
}

export default PortfolioCard