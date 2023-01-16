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

  let { id } = useParams(); // 유저가 id 자리에 적은거 가져와줌

  useEffect(() => {
    setTimeout(() => {
      {
        setVisible(false);
      }
    }, 2000);
  });

  return (
    <div className="container">
      {visible == true ? (
        <>
          <div className="alert alert-warning">
            {" "}
            2초후에 사이트가 날라가요~~
          </div>
          {/* <Box>
        <YellowBtn bg="blue">버튼</YellowBtn>
      </Box> */}
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
          </div>{" "}
        </>
      ) : (
        <TimeOutPage />
      )}
    </div>
  );
}

function TimeOutPage() {
  return <div>시간 초과 ㅠㅠ</div>;
}
