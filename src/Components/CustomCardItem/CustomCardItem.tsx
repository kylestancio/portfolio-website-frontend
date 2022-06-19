import { useContext, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { ThemeContext } from '../../App'
import { CustomCardItemInterface } from '../../Interfaces/CustomCardItem.interface'

type Props = {
  data: CustomCardItemInterface
}

function CustomCardItem({ data }: Props) {
  const [image, setImage] = useState<string | null>(null)

  const theme = useContext(ThemeContext)
  const filename =  data.img_file.slice(0, data.img_file.length-4) + (theme.background==="dark" ? "-dark" : "") + data.img_file.slice(-4)
  const filepath = process.env.REACT_APP_BACKEND + 'get/image/' + filename

  useEffect(()=>{
    const fetchImage = async () => {
      const res = await fetch(filepath)
      const imageBlob = await res.blob()
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImage(imageObjectURL)
    }
    fetchImage()
  },[filepath])

  return (
    <Card bg={theme.background} border={theme.text==="light" ? "light" : ""}>
      {
        !image && <div style={{ height: '200px', width: '100%'}} className='d-flex justify-content-center align-items-center'><div className={`spinner-grow text-${theme.text}`} role='status'><span className="visually-hidden">Loading...</span></div></div>
      }
      {
        image && <Card.Img variant="top" src={ image } style={{ height: 'auto', width: '100%', objectFit: 'cover'}} className="mx-auto p-3" loading='lazy' />
      }
      <Card.Body>
        <Card.Title className={`text-center text-${theme.text}`}>{ data.name }</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default CustomCardItem