import {Container, Row, Col, Accordion} from "react-bootstrap"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Faq from "../components/Faq"
import { divergent, parallel, shotgun } from "../data/index";

const ChangePreventerPage = () => {
  return (
    <div className="changeprev-page animate__animated animate__fadeInUp animate__delay-0.5s">
      <div className="changeprev min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">Change Preventers</h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">Change preventer bertujuan memisahkan bagian yang sering berubah untuk hindari perubahan besar.</p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">1. Divergent Change</h4>
              <p>Divergent Change merupakan kondisi dimana kita ingin perubahan didalam satu class yang mengakibatkan harus melakukan perubahan juga di class itu. Hal ini dikarenakan programmer tersebut melakukan copy-paste dari program lain. Penyelesaiannya dapat dengan melakukan Extract di Class, Subclass, maupun Superclass.</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-2 row-cols-1 g-4 pb-5">
            {divergent.map((data) => {
              return (
                <Col key={data.id}>
                  <Accordion className="shadow-sm">
                    <Accordion.Item eventKey={data.eventKey}>
                      <Accordion.Header>{data.title}</Accordion.Header>
                      <Accordion.Body>
                        <SyntaxHighlighter language="java" style={darcula}>
                          {data.desc}
                        </SyntaxHighlighter>
                        {data.penjelasan}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              );
            })}
          </Row>


          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">2. Shotgun Surgery</h4>
              <p>Shotgun Surgery adalah kondisi saat kita mengubah suatu kode di suatu class diharuskan pula mengubah kode di class lain. Yang menjadi pembeda adalah scope yang harus diubah, Shotgun Surgery memiliki scope yang lebih luas dibanding Divergent Change.</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-2 row-cols-1 g-4 pb-5">
            {shotgun.map((data) => {
              return (
                <Col key={data.id}>
                  <Accordion className="shadow-sm">
                    <Accordion.Item eventKey={data.eventKey}>
                      <Accordion.Header>{data.title}</Accordion.Header>
                      <Accordion.Body>
                        <SyntaxHighlighter language="java" style={darcula}>
                          {data.desc}
                        </SyntaxHighlighter>
                        {data.penjelasan}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              );
            })}
          </Row>

          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">3. Parallel Inheritance Hierarchies</h4>
              <p>Parallel Inheritance Hierarchies, yang mengharuskan kita membuat subclass untuk class lain saat kita membuat subclass untuk suatu class. Dapat diselesaikan dengan Move Method dan Move Field.</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-2 row-cols-1 g-4 pb-5">
            {parallel.map((data) => {
              return (
                <Col key={data.id}>
                  <Accordion className="shadow-sm">
                    <Accordion.Item eventKey={data.eventKey}>
                      <Accordion.Header>{data.title}</Accordion.Header>
                      <Accordion.Body>
                        <SyntaxHighlighter language="java" style={darcula}>
                          {data.desc}
                        </SyntaxHighlighter>
                        {data.penjelasan}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              );
            })}
          </Row>

        </Container>
      </div>
      <Faq/>
    </div>
  )
}

export default ChangePreventerPage