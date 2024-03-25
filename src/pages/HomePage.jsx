import {Container, Row, Col} from "react-bootstrap";
import HeroImage from '../assets/img/hero.png'

import {iconHome} from "../data/index"
import {useNavigate} from "react-router-dom"
import Faq from "../components/Faq";

import 'swiper/css';
import 'swiper/css/pagination';

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col>
              <h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">Belajar <br /> <span>Bad Code Smells</span> <br />Bersama Kami</h1>
              <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">Menyempurnakan Kode Anda: Mengidentifikasi, Memahami, dan Memperbaiki Bad Code Smells dalam Pengembangan Perangkat Lunak</p>
              <button className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s" onClick={() => navigate("/dispensables")}>Dispensables</button>
              <button className="btn btn-outline-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s" onClick={() => navigate("/changepreventer")}>Change Preventer</button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-2">
              <img src={HeroImage} alt="hero-img" className="animate__animated animate__fadeInUp"/>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Code Smells</h1>
              <p className="text-center">The Dispensables and Change Preventers</p>
            </Col>
          </Row>
          <Row>
            {iconHome.map((icon) => {
              return(
                <Col key={icon.id} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={icon.delay}>
                  <img src={icon.image} alt="unsplash.com" className="w-100 mb-5 rounded-top"/>
                  <h5 className="mb-5 px-3">{icon.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <button className="btn btn-danger rounded-1" onClick={() => navigate(icon.path)}>{icon.buy}</button>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
      {/* Section FAQ */}
      <Faq/>
    </div>
  )
}

export default HomePage;
