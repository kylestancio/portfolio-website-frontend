import { useContext } from 'react'
import { Container, Image } from 'react-bootstrap'
import { ThemeContext } from '../../App'
import { CustomListItemInterface } from '../../Interfaces/CustomListItem.interface'

type Props = {
  data: CustomListItemInterface
}

function CustomListItem({ data }: Props) {
  const theme = useContext(ThemeContext)
  const filename = data.img_file.slice(0, data.img_file.length-4) + (theme.background==="dark" ? "-dark" : "") + data.img_file.slice(-4)
  const filepath = process.env.REACT_APP_BACKEND + 'get/image/' + filename

  return (
    <Container className={`p-2 rounded border border-light mb-3`}>
      <Container className='d-flex align-items-center justify-content-start '>
        <Image src={ filepath } style={{ width: '80px', height: '80px' }} loading={'lazy'}/> 
        <div className="ms-3">
          <p className={`fw-bold mb-0 text-${theme.text}` }>{ data.school }</p>
          <p className={`fst-italic mb-0 text-${theme.text}` }>{ data.status }</p>
          <p className={`text-muted mb-0`}>{ data.course }</p>
          <p className={`text-muted mb-0`}>{ data.years }</p>
        </div>
      </Container>
    </Container>
  )
}

export default CustomListItem