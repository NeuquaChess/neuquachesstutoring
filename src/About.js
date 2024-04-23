import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import kundan from './images/kundan.png';
import vrishank from './images/vrishank.png';
import nevin from './images/nevin.png';
import rishi from './images/rishi.png';
import arnav from './images/arnav.png';

function About() {
  return (
    <section id="about" className="section about">
      <Container id = "b">
        <h1>About Us</h1>
        <br/>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={arnav} />
              <Card.Body>
                <Card.Title>Arnav Sheth</Card.Title>
                <Card.Text>
                When he isn't fiddling his violin, Vrishank loves playing chess. This highschool junior is a 2-time chess state champion and placed 4th in Nationals, so watch out!<br/><br/>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={vrishank} />
              <Card.Body>
                <Card.Title>Vrishank Ramnath</Card.Title>
                <Card.Text>
                  When he isn't fiddling his violin, Vrishank loves playing chess. This highschool junior is a 2-time chess state champion and placed 4th in Nationals, so watch out!
                  <br/><br/>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={rishi} />
              <Card.Body>
                <Card.Title>Rishi Murali</Card.Title>
                <Card.Text>
                  He's a sophomore that's great at writing and reading, but above all, he loves playing chess. Rishi placed 2nd at the Illinois All Grade Championship, so take him seriously!<br/><br/>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          </Row><br/><Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={nevin} />
              <Card.Body>
                <Card.Title>Nevin Philip</Card.Title>
                <Card.Text>
                  A veteran at the game, Nevin has played chess for over 12 years! He's a junior that enjoys swimming and biking on the weekends.
                  <br/><br/>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={kundan} />
              <Card.Body>
                <Card.Title>Kundan Baliga</Card.Title>
                <Card.Text>
                  Kundan's a sophomore at Neuqua who's great at biology and plays the viola. A wizard at puzzles, he'll treat every game like one, til he brings back the win for his team. 
                  <br/><br/>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br/>
        <div className="mission-statement">
          <p className="abouts"><b>We noticed</b> a lack of freshmen on our high school's chess team this year. Was it just us, or was chess interest dwindling? We reached out to the YMCA and started teaching chess to kids there, increasing exposure to the game; The kids loved it, but we felt it wasn't personalized enough for each kid. That's why we made NVChess+, to give the most interested of kids the opportunity to improve their skills. Lessons are $20 per session, but what's more valuable to us is the ability to help others out. Contact us for more info!</p>
        </div>
      </Container>
    </section>
  );
}

export default About;
