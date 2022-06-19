import { useContext, useEffect, useState } from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap';

import { ThemeContext } from '../App';

import EducationalBackground from '../Components/EducationalBackground';
import ProgrammingBackground from '../Components/ProgrammingBackground';
import MultimediaBackground from '../Components/MultimediaBackground';


function Home() {
  const theme = useContext(ThemeContext)

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col lg={3}>
            <Container className={`bg-${theme.background} border border-light rounded p-3 shadow mb-3`}>
              <Image 
                src={`${process.env.REACT_APP_BACKEND}get/image/profile-image.jpg`} 
                roundedCircle={true} 
                fluid={true}
                loading={'lazy'}
                className="d-block mx-auto" />
              <p className={`display-6 text-center mb-1 text-${theme.text}`}>Kyle Tancio</p>
              <p className={`text-muted text-center mb-1`}>Junior Web Developer</p>
              <p className={`text-center mb-3 text-${theme.text}`}>Philippines | Japan</p>
              <hr/>
              <p className={`text-center text-${theme.text}`}> Hi! I am an aspiring full-stack developer born in the Philippines but living in Japan.
                I am currently learning different web frameworks in order to code efficiently and provide
                the best output.
              </p>
              <hr />
              <p className={`fw-bold text-center text-${theme.text} mb-0`}>Email</p>
              <p className={`text-center text-${theme.text} mb-1`}>kylestancio@gmail.com</p>
              <hr />
              <p className={`fw-bold text-center text-${theme.text} mb-0`}>Github</p>
              <a className={`text-decoration-none`} href="https://github.com/kylestancio" target='_blank' rel='noreferrer'><p className={`text-center text-${theme.background==='dark'?'info':'primary'} mb-1`}>github.com/kylestancio</p></a>
              <a className={`text-decoration-none`} href="https://github.com/kyletancio" target='_blank' rel='noreferrer'><p className={`text-center text-${theme.background==='dark'?'info':'primary'} mb-1`}>github.com/kyletancio</p></a>
              <a className={`text-decoration-none`} href="https://github.com/ksrtancio" target='_blank' rel='noreferrer'><p className={`text-center text-${theme.background==='dark'?'info':'primary'} mb-1`}>github.com/ksrtancio</p></a>
            </Container>
          </Col>
          <Col>
            <EducationalBackground />
            <ProgrammingBackground />
            <MultimediaBackground />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home