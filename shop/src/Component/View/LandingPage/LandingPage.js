// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Col } from "react-bootstrap";
// import { useState } from "react";
// import coding from "../../../img/coding.jpg";
// import data from "../../../data";

// function LandingPage() {
//   let [shoes, setShoes] = useState(data);
//   let imgSource = [
//     "https://codingapple1.github.io/shop/shoes1.jpg",
//     "https://codingapple1.github.io/shop/shoes2.jpg",
//     "https://codingapple1.github.io/shop/shoes3.jpg",
//   ];
//   return (
//     <>
//       <div
//         className="main-bg"
//         style={{ backgroundImage: "url(" + coding + ")" }}
//       ></div>
//       {/* <div className="test"><Intro /></div>  동영상 */}
//       <Container>
//         <Row>
//           {shoes.map((a, i) => {
//             return (
//               <Col sm key={i}>
//                 <Card shoes={shoes[i]} img={imgSource[i]} i={i} />
//               </Col>
//             );
//           })}
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default LandingPage;

// function Card(props) {
//   return (
//     <div>
//       <img src={props.img} width="80%" alt="shoe" />
//       <h4>{props.shoes.title}</h4>
//       <p>{props.shoes.price}</p>
//     </div>
//   );
// }
