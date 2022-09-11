import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../white-logo.png';
import bg from '../landing_bg.jpg';

function About(props) {
  return (
    <div className="home-reverse">
      <Container fluid>
        <Row>
          <Col>
            <img src={bg} alt="..." className='landinglogo' />
          </Col>
          <Col>
            <h1 className='about-us-heading'>About Us</h1>
            <p className='about-us-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel tincidunt dolor. Donec interdum erat ipsum, a sodales elit pellentesque in. Mauris eu enim auctor, porttitor metus sed, hendrerit tellus. Suspendisse finibus eget massa nec sagittis. Curabitur ut fermentum neque, eget vestibulum magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus interdum luctus sem, ac condimentum urna suscipit nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus commodo auctor dolor et finibus.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About