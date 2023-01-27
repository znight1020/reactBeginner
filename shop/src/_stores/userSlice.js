import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user", // 이름
  initialState: { name: "kim", age: 20 }, // 값
  reducers: {
    // step1: state set함수 정의
    changeName(state) {
      state.name = "park";
    },
    increase(state, action) {
      state.age += action.payload;
    },
  },
});

export let { changeName, increase } = user.actions; // step2: 만든 state 변경함수를 export하는 역할

export default user;
