import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount, removeCart } from "../../../_stores/stores";
import { changeName, increase } from "../../../_stores/userSlice";

function CartPage() {
  let user = useSelector((state) => {
    return state.user;
  }); // redux store 가져와줌

  let dispatch = useDispatch(); // store.js로 요청보내주는 함수

  let userCart = useSelector((state) => {
    return state.userCart;
  });

  return (
    <div>
      {user.name}의 장바구니 {user.age}
      <button
        onClick={() => {
          dispatch(increase(user.age));
        }}
      >
        버튼
      </button>{" "}
      {/*버튼누르면 age가 +1 되는 기능*/}
      <Table>
        <thead style={{ borderBottom: "1px" }}>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
            <th>삭제하기</th>
          </tr>
        </thead>
        <tbody>
          {userCart.map((a, i) => {
            return (
              <tr key={i}>
                <td>{userCart[i].id}</td>
                <td>{userCart[i].name}</td>
                <td>{userCart[i].count}</td>
                <td>
                  <button
                    onClick={() => {
                      //dispatch(changeName());
                      dispatch(increaseCount(userCart[i].id));
                    }}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(removeCart(userCart[i].id));
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default CartPage;
