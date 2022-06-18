import { useContext } from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import CustomCardItem from '../CustomCardItem'
import { ProgrammingLanguages, WebTechnologiesData,
FrontendFrameworksData, BackendFrameworksData,
CSSFrameworksData, DatabasesData,
MobileAppDevelopmentData, OthersData } from '../../Data/ProgrammingBackgroundData'
import { ThemeContext } from '../../App'

function ProgrammingBackground() {
  const theme = useContext(ThemeContext)
  return (
    <Container className={`bg-${theme.background} border border-light rounded p-3 shadow mb-3`}>
      <h3 className={`mt-3 text-${theme.text}`}>Programming Background</h3>
      <Container className='mb-3'>
        <h5 className={`text-${theme.text}`}>Programming Languages</h5>
        <Row className='row-cols-2 row-cols-md-3 row-cols-xl-4 g-3'>
          {ProgrammingLanguages.map((data) => {
            return <Col key={data.name}><CustomCardItem data={ data } /></Col>
          })}
        </Row>
      </Container>
      <Container>
        <h5 className={`mt-5 text-${theme.text}`}>Web Technologies</h5>
        <Row className='row-cols-2 row-cols-md-3 row-cols-xl-4 g-3'>
          {WebTechnologiesData.map((data) => {
            return <Col key={data.name}><CustomCardItem data={ data } /></Col>
          })}
        </Row>
      </Container>
      <Container>
        <h5 className={`mt-5 text-${theme.text}`}>Frontend Frameworks</h5>
        <Row className='row-cols-2 row-cols-md-3 row-cols-xl-4 g-3'>
          { FrontendFrameworksData.map((data) => {
            return <Col key={data.name}><CustomCardItem data={ data }/></Col>
          })}
        </Row>
      </Container>
      <Container>
        <h5 className={`mt-5 text-${theme.text}`}>Backend Frameworks</h5>
        <Row className='row-cols-2 row-cols-md-3 row-cols-xl-4 g-3'>
          { BackendFrameworksData.map((data) => {
            return <Col key={data.name}><CustomCardItem data={ data }/></Col>
          })}
        </Row>
      </Container>
      <Container>
        <h5 className={`mt-5 text-${theme.text}`}>CSS Frameworks</h5>
        <Row className='row-cols-2 row-cols-md-3 row-cols-xl-4 g-3'>
          { CSSFrameworksData.map((data) => {
            return <Col key={data.name}><CustomCardItem data={ data }/></Col>
          })}
        </Row>
      </Container>
      <Container>
        <h5 className={`mt-5 text-${theme.text}`}>Databases</h5>
        <Row className='row-cols-2 row-cols-md-3 row-cols-xl-4 g-3'>
          { DatabasesData.map((data) => {
            return <Col key={data.name}><CustomCardItem data={ data } /></Col>
          })}
        </Row>
      </Container>
      <Container>
        <h5 className={`mt-5 text-${theme.text}`}>Mobile App Development</h5>
        <Row className='row-cols-2 row-cols-md-3 row-cols-xl-4 g-3'>
          { MobileAppDevelopmentData.map((data) => {
            return <Col key={data.name}><CustomCardItem data={ data } /></Col>
          })}
        </Row>
      </Container>
      <Container>
        <h5 className={`mt-5 text-${theme.text}`}>Others</h5>
        <Row className='row-cols-2 row-cols-md-3 row-cols-xl-4 g-3'>
          { OthersData.map((data) => {
            return <Col key={data.name}><CustomCardItem data={ data } /></Col>
          })}
        </Row>
      </Container>
    </Container>
  )
}

export default ProgrammingBackground