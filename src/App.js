// /* eslint-disable */ //WARNING메시지 끄기
import React, { useEffect, useState, useRef,} from 'react';
import logo from './logo.svg';
import { Player, Controls} from '@lottiefiles/react-lottie-player';
import lottieData from './119806-alarm-clock.json';
import './App.css';


function App() {

  let [글제목, 글제목변경] = useState(['나의코트 추천', '강남 우동맛집', '파이선독학']); // a:state에 보관했던자료, b:state변경 도와주는 함수
  let [상품, 상품변경] = useState('여자코트'); 
  let [추천, 추천변경] = useState(0);
  //let num = [10, 100]; 
  //let [a, b] = [10, 100];//(참고)Destructuring 문법
  //let a = num[0];
  //let b = num[1];
  //state 쓰면 html은 자동 재랜더링됨!!
  //Q. state언제 사용해야하나?
  //자료 변동시 자동으로 html에 반영되게 만들고 싶을때
  let posts = '강남 맛집';
  let stylee = {color : 'red', fontSize : '10px'};

  const playerRef = useRef(Player);
  const handlePlay = () => playerRef.current.play();
  const handleStop = () => {playerRef.current.stop(); addclass();}
  const handlePause = () => playerRef.current.pause(); 
  const handleSetLoop = () => playerRef.current.setLoop(true);

  const ref = useRef(null);
  const addclass=()=>{
     const h1 = ref.current; // corresponding DOM node
     h1.className = "active";
  }  
 
  return (

    

    <div className="App">
      <div className="black-nav">
        <h3 style={{fontSize : '30px', color: 'red'}}>React Blog</h3>
      </div>
      <div className="list">
        <h4>{ 글제목[0] } <span onClick={ () => {추천변경(추천+1)} }>👍</span>{추천}</h4>
        <p>9월5일</p>
        <hr/>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <button onClick={ () => { 
          //let copy = 글제목; //변수1 & 변수2 화살표가 같으면 변수1==변수2 비교해도 ture가 나옴
          let copy = [...글제목]; //...은 화살표을 새로 바꿔주세요 (독립적인 카피본을 만들어서 수정해야함)
          copy[1] = '여자코드 추천';
          console.log(copy === 글제목);
          글제목변경(copy); 
          }}>🚲</button>
        <p>9월5일</p>
        <hr/>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>9월5일</p>
        <hr/>
      </div>
      

      <Player
        //src={lottieData}
        src="https://assets1.lottiefiles.com/packages/lf20_myejiggj.json"
        className="players"
        //loop
        autoplay
        style={{ height: '200px', width: '300px' }}
        ref={playerRef}
      />
      <Controls
        visible={true}
        darkTheme={false}
        buttons={['play', 'repeat', 'frame', 'stop']}
      />

      <button onClick={handlePlay}>Play</button>
      <button ref={ref} onClick={handleStop}>Stop</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleSetLoop}>Loop</button>
      {/* <div className="modal" style={{marginTop:'20px',padding:'20px',background:'#eee',textAlign:'left'}}>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div> */}
      
      <Modal></Modal> 
      {/* 
      Q.컴포넌트 사용할때? 
      1.반복적인 html 축약할때
      2.큰 페이지들 
      3.자주변경되는것들
      */}
      {/* <h4>{posts}</h4>
      <img src={logo} alt="" />
      <h4>{test()}</h4> */}
    </div>
  );
}

//let Modal = () => {return()}

function Modal(){ //첫글자는 대문자로 사용하기
  return(
    <>
    <div className="modal" style={{marginTop:'20px',padding:'20px',background:'#eee',textAlign:'left'}}>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    {/* return 태그 사용시 하나의 tag안에 모슨태그 넣기 */}
    </> //의미없는<div>대신 사용
  )

}

export default App;
