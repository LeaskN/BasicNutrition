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
                    </CardPanel>
                </Col>
                <Col s={12} m={7}>
                </Col>
            </Row>
            <Row>
              <Col s={4}>
                <Card className='small'
                  header={<CardTitle image='https://i.gifer.com/7hhR.gif'>Card Title</CardTitle>}
                  actions={[<a href='!'>This is a Link</a>]}>
                  I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                </Card>
              </Col>
              <Col s={4}>
                <Card className='small'
                  header={<CardTitle image='https://i.gifer.com/7hhR.gif'>Card Title</CardTitle>}
                  actions={[<a href='!'>This is a Link</a>]}>
                  I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                </Card>
              </Col>
              <Col s={4}>
                <Card className='small'
                  header={<CardTitle image='https://i.gifer.com/7hhR.gif'>Card Title</CardTitle>}
                  actions={[<a href='!'>This is a Link</a>]}>
                  I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                </Card>
              </Col>
            </Row>
        </main>
     </Container>

      );
}

export default Home;