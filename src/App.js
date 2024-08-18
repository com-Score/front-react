import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="grid-container">
      <div className="grid-item a" id="main">
        <h1 style={{ width: '40%' }}></h1>
        <h1 style={{ fontSize: '50px' }}>com'Score</h1>
        <h1 style={{ width: '8%' }}></h1>
        <button id="login">로그인</button>
        <button id="login">회원가입</button>
        <button id="login">마이페이지</button>
      </div>
      <hr style={{ color: 'white', height: '5px', width: '80%' }} />
      <div className="grid-item b">
        <div style={{ height: '30px' }}></div>
      </div>
      <div className="grid-item c">
        <div>
          <div id="main" style={{ margin: '0px', border: '0px' }}>
            <p style={{ width: '20%', margin: '0px', border: '0px' }}></p>
            <p id="infop">공지사항</p>
          </div>
          <div style={{ margin: '0px', border: '0px' }}>
            <div style={{ margin: '0px', border: '0px' }} id="main">
              <p style={{ width: '20%', margin: '0px', border: '0px' }}></p>
              <p id="infod"></p>
            </div>
          </div>
        </div>
      </div>  
      <div className="grid-item d" id="main" style={{ margin: '0px', border: '0px', marginTop: '50px' }}>
        <p style={{ width: '20%', margin: '0px', border: '0px' }}></p>
        <button id="bu" style={{ width: '28%', margin: '0px', border: '0px' }}>음자리표<br /></button>
        <p style={{ width: '4%', margin: '0px', border: '0px' }}></p>
        <button id="bu" style={{ width: '28%', margin: '0px', border: '0px' }}>이조</button>
        <p style={{ width: '20%', margin: '0px', border: '0px' }}></p>
      </div>
    </div>
  );
}

export default App;
