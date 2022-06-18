import { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CustomCardItem from '../CustomCardItem'
import { MultimediaBackgroundData } from '../../Data/MultimediaBackgroundData'
import { ThemeContext } from '../../App'

function MultimediaBackground() {
  const theme = useContext(ThemeContext)

  return (
    <Container className={`bg-${theme.background} border border-light rounded p-3 shadow mb-3`}>
      <h3 className={`mt-3 text-${theme.text}`}>Multimedia Background</h3>
      <Container className='mt-3' >
        <Row className='row-cols-2 row-cols-md-3 row-cols-xl-4 g-3'>
          {MultimediaBackgroundData.map((data) => {
            return <Col key={data.name}><CustomCardItem data={ data } /></Col>
          })}
        </Row>
      </Container>
    </Container>
  )
}

export default MultimediaBackground