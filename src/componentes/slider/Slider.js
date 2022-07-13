import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="img"
          src="https://img.unocero.com/2021/11/Videojuegos-fuentes-de-informacion-gamers-.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Título 1</h3>
          <p>Contenido 1.​</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src="https://cdn.andro4all.com/andro4all/2021/06/mejores-series-videojuegos-netflix.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Título 2</h3>
          <p>Contenido 2.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src="https://cdn.goconqr.com/uploads/image_clipping/image/132946/videojuego2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Título 3</h3>
          <p>
          Contenido 3.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;