import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '강남 맛집';
  let stylee = {color : 'red', fontSize : '10px'};
  function test(){
    return 100
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color : 'red', fontSize : '30px'}}>개발 Blog</div>
        <div style={stylee}>개발 Blog</div>
      </div>
      <h4>{posts}</h4>
      {<img src={logo} alt="" />}
      <h4>{test()}</h4>
    </div>
  );
}

export default App;
