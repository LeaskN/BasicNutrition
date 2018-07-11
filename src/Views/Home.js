import React from 'react';
import { 
    Row,
    Col,
    CardPanel,
    Card,
    CardTitle, 
    Container
   } from 'react-materialize'

const Home = () => {
    return (
    <Container>
         <main className='main' id='main'>
            <Row>
                <Col s={12} >
                    <CardPanel className="teal lighten-4 black-text">                  
                    Click the Diet Info tab in the top right to calculate your BMI and find Diet tips based on what you'd like to achieve! Then click the Nutrition Info tab in the top right to find out food information. Happy dieting!
                    </CardPanel>
                </Col>
                <Col s={12} m={7}>
                </Col>
            </Row>
            <Row>

              <Col s={6}>
                  <video src="Media/LandingHome.mp4" autoPlay loop/>
              </Col>
              <Col s={6}>
                  <video src="Media/LandingNutritionInfo.mp4" autoPlay loop/>
              </Col>
            </Row>
        </main>
     </Container>

      );
}

export default Home;