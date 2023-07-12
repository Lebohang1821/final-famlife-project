import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import img1 from '../assets/images/img1.jpg';

function AppAbout() {

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">learn more about Fam Life</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>Fam Life is a rec lable by a group of musician called FamilyBoyz from a town called orange farm. these musician grew up together and later on they started making music, thats how Fam Life was formed</p>
            <p>This rec lable includes 4 musician, that includes Rappers, producers and Dj</p>
            <div className='progress-block'>
              <h4>Music Production</h4>
              
            </div>
            <div className='progress-block'>
              <h4>Graphics</h4>
              
            </div>
            <div className='progress-block'>
              <h4>And More</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;