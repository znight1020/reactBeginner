import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./userSlice";

/* useState 역할 */

let userCart = createSlice({
  name: "userCart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],

  reducers: {
    increaseCount(state, action) {
      let index = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[index].count += 1;
    },

    /*응용 문제*/
    addCart(state, action) {
      console.log("addCart 실행");
      let flag = state.find((a) => {
        return a.id === action.payload.id;
      });

      if (flag === undefined) {
        //console.log("상품이 없네요! 추가");
        state.push(action.payload);
      } else {
        //console.log("상품이 있네! count Up!");
        let index = state.findIndex((a) => {
          return a.id === action.payload.id;
        });
        state[index].count += 1;
      }
    },

    removeCart(state, action) {
      let index = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state.splice(index, 1);
    },
  },
});

export let { increaseCount, addCart, removeCart } = userCart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    userCart: userCart.reducer,
  },
});
