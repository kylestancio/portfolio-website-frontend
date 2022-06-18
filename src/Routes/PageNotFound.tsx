import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { ThemeContext } from '../App'

function E404() {
  const theme = useContext(ThemeContext)
  return (
    <Container style={{ height: '100vh' }}>
      <h1 className={`mt-5 display-1 text-${theme.text} text-center`} >Page not found</h1>
      <h3 className={`mt-5 text-${theme.text} text-center`}>The page that you're looking for is invalid or broken.</h3>
    </Container>
  )
}

export default E404