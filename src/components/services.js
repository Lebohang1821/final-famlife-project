import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-clone',
    title: 'Music Production',
    description: 'We do Music Production such as Making Beats, Recording and mixing & Mastering. We also do music Distribution and publishing.'
  },
  {
    id: 2,
    icon: 'fas fa-desktop',
    title: 'Graphics',
    description: 'We also do Graphic designing, such as music artwork, video editing for your music or music video and last but not list photography.'
  },
  {
    id: 3,
    icon: 'fas fa-plug',
    title: 'And Others',
    description: 'Anything you need, we can plug you.'
  }
]

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Fam Life Plug</h2>
          <div className="subtitle">The PLUG</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={4} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;