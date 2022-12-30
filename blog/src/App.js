/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  // let [title1, setTitle1] = useState('남자 코트 추천')
  // let [title2, setTitle2] = useState("강남 우동맛집")
  // let [title3, setTitle3] = useState("파이썬독학")
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학'])
  let [like, setLike] = useState(0)
  let [modal, setModal] = useState(false)


  function likeSpanHandler() {
    setLike(like + 1)
  }

  function changeString() {
    // title[0] = '여자 코트 추천';
    let copy = [...title]; // 원본을 그대로 두면서 상태를 변화시키는 방법
    copy[0] = '여자 코트 추천'
    setTitle(copy);
  }

  function sortHandler() {
    let sortCopy = [...title];
    sortCopy.sort();
    setTitle(sortCopy);
  }

  function visibleHandler() {
    if (modal === true) setModal(false)
    else setModal(true)
  }
  return (
    <div className="App">
      <div className = "black-nav">
        <h4>ReactBlog</h4>
        
        <button onClick={changeString}>글 수정</button>
        <button onClick={sortHandler}>글 정렬</button>

      </div>
      <div className="list">
        <h4>{title[0]} <span onClick={likeSpanHandler}>👍</span> {like} </h4>
        <p>12월 27일 발행</p>
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <p>12월 27일 발행</p>
      </div>

      <div className="list">
        <h4 onClick={visibleHandler}>{title[2]}</h4>
        <p>12월 27일 발행</p>
      </div>

      {
        modal == true ? <Modal/> : null
      }
      
    </div>
  );
}

function Modal() {
  return (
      <div className='Modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
