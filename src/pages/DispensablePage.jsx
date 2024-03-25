import {Container, Row, Col, Accordion} from "react-bootstrap"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import {comments, duplicate, lazyclass, dataclass, deadcode, speculative} from "../data/index"
import Faq from "../components/Faq"

const DispensablePage = () => {
  return (
    <div className="dispensable-page animate__animated animate__fadeInUp animate__delay-0.5s">
      <div className="dispensable min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">The Dispensables</h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">Dispensable adalah sesuatu yang tidak berguna dan kehadirannya tidak dibutuhkan.</p>
            </Col>
          </Row>

          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">1. Comments</h4>
              <p>Comment merupakan suatu komentar yang sebenarnya ditujukan untuk memperjelas fungsi dari kode yang dibuat tetapi penambahan comment ini membuat kode menjadi tidak rapi dan efisien. Cara untuk mengatasinya adalah dengan memberikan nama method atau class dengan baik.</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-2 row-cols-1 g-4 pb-5">
            {comments.map((data) => {
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
              <h4 className="fw-bold">2. Duplicate Code</h4>
              <p>Duplicate Code adalah fragmen kode yang sama atau mirip yang muncul di beberapa bagian dalam program. Ini bisa menyebabkan masalah pemeliharaan dan meningkatkan risiko kesalahan. Mengidentifikasi dan menghapus kode duplikat penting untuk meningkatkan kejelasan dan efisiensi kode.</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-2 row-cols-1 g-4 pb-5">
            {duplicate.map((data) => {
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
              <h4 className="fw-bold">3. Lazy Class</h4>
              <p>Lazy class merujuk pada kelas dalam sebuah program yang tidak memberikan kontribusi yang signifikan atau esensial dalam fungsionalitas sistem. Kelas tersebut mungkin terlalu sederhana, jarang digunakan, atau tidak memiliki tanggung jawab yang jelas. Pada dasarnya, kelas ini tidak memberikan nilai tambah dan dapat dianggap sebagai beban yang tidak perlu dalam kode.</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-2 row-cols-1 g-4 pb-5">
            {lazyclass.map((data) => {
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
              <h4 className="fw-bold">4. Data Class</h4>
              <p>Data class adalah struktur dalam pemrograman yang dirancang khusus untuk menyimpan data. Biasanya, data class hanya terdiri dari variabel atau properti yang mewakili data dan tidak memiliki logika bisnis atau metode lainnya. Tujuan utama data class adalah untuk menyederhanakan representasi dan manipulasi data dalam kode.</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-2 row-cols-1 g-4 pb-5">
            {dataclass.map((data) => {
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
              <h4 className="fw-bold">5. Dead Code</h4>
              <p>Dead code merujuk kepada bagian kode dalam sebuah program yang tidak pernah dieksekusi saat aplikasi berjalan. Ini bisa terjadi karena perubahan kebutuhan atau perubahan dalam logika program yang membuat bagian kode menjadi tidak relevan, tetapi belum dihapus.</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-2 row-cols-1 g-4 pb-5">
            {deadcode.map((data) => {
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
              <h4 className="fw-bold">6. Speculative Generality</h4>
              <p>Speculative Generality adalah sebuah konsep dalam pemrograman yang merujuk kepada praktik menambahkan fitur, struktur, atau abstraksi yang tidak diperlukan berdasarkan dugaan bahwa mereka mungkin berguna di masa depan. Hal ini sering kali terjadi ketika pengembang menambahkan kode yang kompleks atau abstrak tanpa alasan yang jelas atau kebutuhan aktual saat ini.</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-2 row-cols-1 g-4 pb-5">
            {speculative.map((data) => {
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

export default DispensablePage