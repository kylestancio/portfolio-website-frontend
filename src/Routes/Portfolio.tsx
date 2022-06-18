import { useContext } from "react"
import { Card, Container, Badge } from "react-bootstrap"
import { ThemeContext } from "../App"
import PortfolioCard from "../Components/PortfolioCard/PortfolioCard"
import { Portfolio as portfolio } from '../Data/PortfolioData'

function Portfolio() {
  const theme = useContext(ThemeContext)
  return (
    <Container className='pb-5'>
      <h1 className={`mt-5 display-1 text-${theme.text}`}>Portfolio</h1>
      <p className={`fs-3 text-${theme.text}`}>The project that I've done</p>
      {
        portfolio.map((project)=>{return(
          <PortfolioCard portfolio={project} />
        )})
      }
      
    </Container>
  )
}

export default Portfolio