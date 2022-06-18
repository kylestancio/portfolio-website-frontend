import { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { ThemeContext } from '../../App'
import { CustomCardItemInterface } from '../../Interfaces/CustomCardItem.interface'

type Props = {
  data: CustomCardItemInterface
}

function CustomCardItem({ data }: Props) {
  const theme = useContext(ThemeContext)
  const filename =  data.img_file.slice(0, data.img_file.length-4) + (theme.background==="dark" ? "-dark" : "") + data.img_file.slice(-4)
  const filepath = process.env.REACT_APP_BACKEND + 'get/image/' + filename
  return (
    <Card bg={theme.background} border={theme.text==="light" ? "light" : ""}>
      <Card.Img variant="top" src={ filepath } style={{ height: 'auto', width: '100%', objectFit: 'cover'}} className="mx-auto p-3"/>
      <Card.Body>
        <Card.Title className={`text-center text-${theme.text}`}>{ data.name }</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default CustomCardItem