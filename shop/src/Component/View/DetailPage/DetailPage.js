import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Context1 } from "../../../App";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addCart } from "../../../_stores/stores";
// let YellowBtn = styled.button`
//   background: ${(props) => props.bg};
//   color: ${(props) => (props.bg == "blue" ? "white" : "black")};
//   padding: 10px;
// `;

// let NewBtn = styled.button(YellowBtn)`
//  // 커스터마이징 가능
// `;

// let Box = styled.div`
//   background: grey;
//   padding: 20px;
// `;

/** 옛날 React Hook 쓰는 법 */
// class Detail2 extends React.Component {
//   componentDidMount() {
//     // 컴포넌트 mount시 여기 코드 실행됨
//   }
//   componentDidUpdate() {
//     // 컴포넌트 update시 여기 코드 실행됨
//   }
//   componentWillUnmount() {
//     // 컴포넌트 unmount시 여기 코드 실행됨
//   }
// }

function DetailPage(props) {
  let { 재고, shoes } = useContext(Context1);

  let [visible, setVisible] = useState(true);
  let [inputValue, setInputValue] = useState(123);
  const [tabIndex, setTabIndex] = useState(0);
  const [fade2, setFade2] = useState("");
  let { id } = useParams(); // 유저가 id 자리에 적은거 가져와줌

  let dispatch = useDispatch();

  useEffect(() => {
    let getLocalData = localStorage.getItem("watched");
    getLocalData = JSON.parse(getLocalData);
    /*방법 1*/
    let flag = getLocalData.find((a) => {
      return a === props.shoes[id].id;
    });
    if (flag != undefined) {
    } else {
      getLocalData.push(props.shoes[id].id);
    }

    /*방법 2*/
    // getLocalData = new Set(getLocalData);
    // getLocalData = Array.from(getLocalData);

    localStorage.setItem("watched", JSON.stringify(getLocalData));

    let a = setTimeout(() => {
      {
        setFade2("end");
      }
    }, 100);
    return () => {
      clearTimeout(a);
      setFade2("");
    };
  }, []);
  // [] 요거가 없다면 mount, update 때마다 useEffect가 실행
  // [count] 이런식으로 넣어주면 count 라는 state가 변할 때만 실행됨
  // []만 있다면 mount 될 때만 실행, update때는 X

  // useEffect(() => {
  //   let a = inputValue;
  //   isNaN(a) == false ? void 0 : alert("그러지마세요");
  // }, [inputValue]);

  return (
    <div className={"container start " + fade2}>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
            alt="ss"
          />
        </div>

        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(
                addCart({
                  id: props.shoes[id].id,
                  name: props.shoes[id].title,
                  count: 1,
                })
              );
            }}
          >
            주문하기
          </button>
        </div>

        <div style={{ paddingLeft: "180px" }}>
          {/* <input
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            style={{ float: "left" }}
          ></input> */}
        </div>

        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTabIndex(0);
              }}
              eventKey="link0"
            >
              버튼0
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTabIndex(1);
              }}
              eventKey="link1"
            >
              버튼1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTabIndex(2);
              }}
              eventKey="link2"
            >
              버튼2
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab tab={tabIndex} />
      </div>
    </div>
  );
}

function Tab({ tab }) {
  let [fade, setFade] = useState("");
  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [tab]);
  return (
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}

export default DetailPage;
