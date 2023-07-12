import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

const worksData = [
  {
    id: 1,
    link: 'https://music.apple.com/za/album/rags-to-racks-ep/1586769045',
    image: require('../assets/images/img3.jpg'),
    title: 'Rags To Racks - EP',
    subtitle: '1821BEATs x Senator Jei'
  },
  {
    id: 2,
    link: 'https://music.apple.com/za/album/too-much-feat-kay-slim-charles101-king-flow-omg-20locks/1562599469?i=1562599475',
    image: require('../assets/images/img2.jpg'),
    title: 'Too Much',
    subtitle: 'Fam Life'
  },
  {
    id: 3,
    link: 'https://music.apple.com/za/album/unlocked-single/1545625798',
    image: require('../assets/images/img4.jpg'),
    title: 'UnLocked - EP',
    subtitle: '1821BEATs'
  },
  {
    id: 4,
    link: 'https://music.apple.com/za/album/let-me-single/1544030437',
    image: require('../assets/images/img5.jpg'),
    title: 'Let Me',
    subtitle: '1821BEATs x Saski Mali'
  },
  {
    id: 5,
    link: 'https://music.apple.com/za/album/all-night-single/1556219937',
    image: require('../assets/images/img6.jpg'),
    title: 'All Night',
    subtitle: '1821BEATs x Kojo Mandae'
  },
  {
    id: 6,
    link: 'https://www.google.com',
    image: require('../assets/images/img7.jpg'),
    title: 'Feeling Amazing',
    subtitle: 'Fam Life'
  }
]

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

function AppWorks() {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Music Released</h2>
          <div className="subtitle">stream below</div>
        </div>
        <Row className='portfoliolist'>
          {
            worksData.map(works => {
              return (
                <Col sm={4} key={works.id}>
                  <div className='portfolio-wrapper'>
                    <a href={works.link}>
                      <Image src={works.image} />
                      <div className='label text-center'>
                        <h3>{works.title}</h3>
                        <p>{works.subtitle}</p>
                      </div>
                    </a>
                  </div>
                </Col>
              );
            })
          }
        </Row>
        <Pagination>{items}</Pagination>
      </Container>  
    </section>
  );
}

export default AppWorks;