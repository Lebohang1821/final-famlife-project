import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/img-hero1.jpg'),
    title: 'All About Fam Life Entertainment',
    description: 'All you need to know about fam life entertainment',
    link: 'https://www.facebook.com/FAMLIFEMUSIC'
  },
  {
    id: 2,
    image: require('../assets/images/img-hero2.jpg'),
    title: 'Our Clothing Brand SICK',
    description: 'It is not yet out, Still in Progres',
    link: 'https://www.facebook.com/FAMLIFEMUSIC'
  },
  {
    id: 3,
    image: require('../assets/images/img-hero3.jpg'),
    title: 'Follow Us For More',
    description: 'Follow us on every social platform',
    link: 'https://www.facebook.com/FAMLIFEMUSIC'
  }
]

function AppHero() {
  return (
    <section id="home" className="hero-block">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                    <a className="btn btn-primary" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default AppHero;