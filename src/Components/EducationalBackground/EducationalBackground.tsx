import { useContext } from 'react'
import { Row, Col }from 'react-bootstrap'
import CustomListItem from '../CustomListItem'
import { Container } from 'react-bootstrap'
import { EducationalBackgroundData } from '../../Data/EducationalBackground'
import { CustomListItemInterface } from '../../Interfaces/CustomListItem.interface'
import { ThemeContext } from '../../App'

function EducationalBackground() {
  const theme = useContext(ThemeContext)
  return (
    <Container className={`bg-${theme.background} border border-light rounded p-3 shadow mb-3`}>
      <h3 className={`mt-3 text-${theme.text}`}>Educational Background</h3>
      <Container className="mt-3">
        <Row className='row-cols-1 row-cols-xxl-2'>
          { EducationalBackgroundData.map((data:CustomListItemInterface) => { return <Col key={data.course}><CustomListItem data={data} /></Col> })}
        </Row>
      </Container>
    </Container>
  )
}

export default EducationalBackground