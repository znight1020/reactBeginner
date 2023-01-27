/* eslint-disable */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { createContext, useState, useEffect } from "react";
import coding from "./img/coding.jpg";
import axios from "axios";

import DetailPage from "./Component/View/DetailPage/DetailPage";
import CartPage from "./Component/View/CartPage/CartPage";
import data from "./data.js";

import { Link, Routes, Route, useNavigate, Outlet } from "react-router-dom";

/** 동영상
 function Intro() {
    return (
      <video className='video' autoPlay loop controls>
        <source src={process.env.PUBLIC_URL + '/file.mp4'} />
      </video>
    )
} 
 */

export let Context1 = createContext(); // context를 만들어줌 <- State 보관함

function App() {
  useEffect(() => {
    if (localStorage.getItem("watched") != undefined) {
    } else {
      localStorage.setItem("watched", JSON.stringify([]));
    }
  }, []);

  // let obj = { name: "kim" };
  // localStorage.setItem("data", JSON.stringify(obj)); // JSON 변환
  // let getObj = localStorage.getItem("data");
  // console.log(JSON.parse(getObj)); // JSON -> Object 변환

  let [shoes, setShoes] = useState(data);
  let [clickCount, setClickCount] = useState(2);
  let [loading, setLoading] = useState(false);

  let [재고] = useState([10, 11, 12]);

  let [recentProduct, setRecentProduct] = useState(
    JSON.parse(localStorage.getItem("watched"))
  );

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">ReactShop</Navbar.Brand>
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
                navigate("/cart");
              }}
            >
              Cart
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
                      <Col sm={4} key={i}>
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

              <button
                onClick={() => {
                  setLoading(true);
                  clickCount <= 3 === true
                    ? axios
                        .get(
                          `https://codingapple1.github.io/shop/data${clickCount}.json`
                        )
                        .then((result) => {
                          let copy = [...shoes];
                          copy.push(...result.data);
                          setShoes(copy);
                          setClickCount(++clickCount);
                          /*let copy = [...shoes, ...result.data];
              setShoes(copy)*/
                        })
                    : alert("더 이상 상품이 없습니다");

                  // axios.post("/asdasdasd", { name: "kim" });

                  // Promise.all([axios.get("/url1"), axios.get("/url2")]).then(() => {}); // 동시에 ajax 요청 여러개하면

                  setLoading(false);
                }}
              >
                상품 더보기
              </button>

              <h4
                style={{
                  paddingTop: "100px",
                  paddingLeft: "20px",
                  textAlign: "left",
                }}
              >
                최근 본 상품 :
                {recentProduct.map((a, i) => {
                  return (
                    <Col sm={4} style={{ paddingLeft: "50px" }} key={i}>
                      {shoes[recentProduct[i]].title}
                    </Col>
                  );
                })}
              </h4>
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ 재고, shoes }}>
              {/*Context로 원하는 컴포넌트 감싸기, Provider 추가해서 value 속성 추가하면 Detail의 모든 자식 컴포넌트는 shoes, 재고 State를 사용할 수 있음*/}
              <DetailPage shoes={shoes} />
            </Context1.Provider>
          }
        />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<About />} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>

        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
      {loading == true ? <Loading /> : void 0}
    </div>
  );
}

export default App;

function Loading() {
  return (
    <div>
      <img
        src="https://codingapple1.github.io/shop/shoes1.jpg"
        width="80%"
        height="300px"
      />
    </div>
  );
}
function Card(props) {
  return (
    <div>
      <Link
        className="Navlink"
        to={`/detail/${props.i}`}
        style={{ color: "black" }}
      >
        <img src={props.img} width="80%" alt="shoe" />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </Link>
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
