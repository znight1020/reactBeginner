import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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
  let [count, setCount] = useState(0);
  let [visible, setVisible] = useState(true);
  let [inputValue, setInputValue] = useState(123);

  let { id } = useParams(); // 유저가 id 자리에 적은거 가져와줌

  useEffect(() => {
    let a = setTimeout(() => {
      {
        setVisible(false);
      }
      return () => {
        clearTimeout(a);
      };
    }, 2000);
  }, []);
  // [] 요거가 없다면 mount, update 때마다 useEffect가 실행
  // [count] 이런식으로 넣어주면 count 라는 state가 변할 때만 실행됨
  // []만 있다면 mount 될 때만 실행, update때는 X

  useEffect(() => {
    let a = inputValue;
    isNaN(a) == false ? void 0 : alert("그러지마세요");
  }, [inputValue]);

  return (
    <div className="container">
      {count}
      {/* <Box>
        <YellowBtn bg="blue">버튼</YellowBtn>
      </Box> */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>

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
          <button className="btn btn-danger">주문하기</button>
        </div>

        <div style={{ paddingLeft: "180px" }}>
          <input
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            style={{ float: "left" }}
          ></input>
        </div>
      </div>
    </div>
  );
}

function TimeOutPage() {
  return <div>시간 초과 ㅠㅠ</div>;
}

export default DetailPage;
