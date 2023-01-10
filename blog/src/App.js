/* eslint-disable */
import './App.css';
import { useState } from 'react'
import React from 'react'

function App() {
  //let post = '예준천민석강';

  const [post, setPost] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학'])
  const [like, setLike] = useState([0, 0, 0])
  const [clickedPost, setClickedPost] = useState(['아무개'])
  //const [title, setTitle] = useState(0) 강좌코드
  //const [post1, setPost1] = useState('남자코트 추천')
  //const [post2, setPost2] = useState('강남 우동맛집')
  //const [post3, setPost3] = useState('파이썬독학')
  const [modal, setModal] = useState(false)
  const [inputValue, setInputValue] = useState('')

  function sortTitleHandler() {
    let copy = [...post];
    copy.sort();
    setPost(copy)
  }


  function likeClickHandler(i) {
    let copy = [...like]
    copy[i] = copy[i]+1
    setLike(copy)
  }

  // 전에있던 상태 == 현재바뀐상태 이면 아무일도 작동하지 않음
  function changeStateHandler() { 
    //setPost1('여자코트 추천')

    /* 원본 데이터를 그대로 유지하면서 state를 변경하기 */
    let temp = [...post]
    temp[0] = '여자코트 추천'
    setPost(temp)
  }

  function titleClickHandler(i) {
    setClickedPost(post[i])
    setModal(!modal)
    /*if (modal === true) setModal(false)
    else setModal(true)*/
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
        <button onClick={changeStateHandler}>글 수정</button>
        <button onClick={sortTitleHandler }>글 정렬</button>
      </div>
      
      {/* <div className="list">
        <h4 onClick={titleClickHandler}>{post[0]}<span onClick={likeClickHandler}>👍</span> {like} </h4>
        <p>12월31일 세미나</p>
      </div>

      <div className="list">
        <h4>{post[1]}</h4>
        <p>12월31일 세미나</p>
      </div>
      
      <div className="list">
        <h4>{post[2]}</h4>
        <p>12월31일 세미나</p>
      </div> */}

      {
        post.map(function (title, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {
                titleClickHandler(i)
              }}>{title}
                
                <span onClick={(e) => {
                  e.stopPropagation(); likeClickHandler(i);
                  }}>👍
                </span> {like[i]}

                <button onClick={(e) => { 
                  e.stopPropagation();
                  let copy = [...post]
                  copy.splice(i, 1)
                  setPost(copy)
                 }}>
                  글 삭제
                </button>

              </h4> 
              <p>01월05일</p>
            </div>
          )
        })
      }

      <input onChange={(e) => { setInputValue(e.target.value)}}></input>
      <button onClick={() => { 
        let copy = [...post]
        copy.unshift(inputValue)
        setPost(copy)

      }}>글 작성</button>

      {modal == false ? null : <Modal post={clickedPost} changeState={changeStateHandler} />}
      
    </div>  
  );
}

function Modal(props) {
  return (
      <div className='Modal'>
      <h4>{props.post}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.changeState}>글 수정</button>
      </div>
  )
}


export default App;
