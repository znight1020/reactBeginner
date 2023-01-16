/* eslint-disable */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useState } from "react";
import coding from "./img/coding.jpg";
import data from "./data.js";
import DetailPage from "./Component/View/DetailPage/DetailPage";

import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

/** 동영상
 function Intro() {
    return (
      <video className='video' autoPlay loop controls>
        <source src={process.env.PUBLIC_URL + '/file.mp4'} />
      </video>
    )
} 
 */

function App() {
  let [shoes, setShoes] = useState(data);

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ReactShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="main-bg"
                style={{ backgroundImage: "url(" + coding + ")" }}
              ></div>
              {/* <div className="test"><Intro /></div>  동영상 */}
              <Container>
                <Row>
                  {shoes.map((a, i) => {
                    return (
                      <Col sm key={i}>
                        <Card
                          shoes={shoes[i]}
                          img={
                            "https://codingapple1.github.io/shop/shoes" +
                            (i + 1) +
                            ".jpg"
                          }
                          i={i}
                        />
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </>
          }
        />
        <Route path="/detail/:id" element={<DetailPage shoes={shoes} />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<About />} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

function Card(props) {
  return (
    <div>
      <img src={props.img} width="80%" alt="shoe" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}
