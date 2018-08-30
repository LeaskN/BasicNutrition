import React from 'react';
import { 
  Row,
  Col,
  CardPanel,
  Container
   } from 'react-materialize'

const Home = () => {
  return (
    <Container>
      <main className='main' id='main'>
      <Row>
        <Col s={12} >
          <CardPanel className="teal lighten-4 black-text">
          GetFit helps people get into shape by giving direct, un-convoluted  information. <hr/> Click the Diet Info tab in the top right of the web page to calculate your BMI and also receive diet tips based on what you'd like to achieve! <hr/> Click the Nutrition Info tab, also located in the top right, to find out information on different foods you'd like to eat.<hr/> Happy dieting!
          </CardPanel>
        </Col>
      </Row>
      <Row>
        <Col s={6}>
          <video autoPlay muted src="Media/LandingHome.mp4" loop/>
        </Col>
        <Col s={6}>
          <video autoPlay muted src="Media/LandingNutritionInfo.mp4" loop/>
        </Col>
      </Row>
      </main>
    </Container>

  );
}

export default Home;