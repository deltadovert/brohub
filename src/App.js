import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import {React, useState} from 'react';

function App() {
  const [openMenu, setMenuState] = useState(false);

  function myFunction (a, b) {
    let c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    console.log('this is c: ' + c)
    return c;
  }

  return (
    <div className="App">
      <header className="App-layout">
        <div className="App-header">
          <div className='burger-box'>
            <MenuIcon 
              sx={{color:'#fffff',cursor:'pointer'}} 
              fontSize="large"
              onClick={openMenu ? ()=>setMenuState(false) : ()=>setMenuState(true) }
            />  
          </div>
          {/* <img src='https://experts.uwaterloo.ca/static/img/james-barby.jpg' className="App-logo" alt="gordon savage nuts" />
          <img src='https://experts.uwaterloo.ca/static/img/gordon-savage.jpg' className="App-logo" alt="gordon savage nuts" />
          <img src='https://experts.uwaterloo.ca/static/img/michael-mayer.jpg' className="App-logo" alt="gordon savage nuts" /> */}

          <div className="banner">
            <div className="bro-hub-logo">BRO HUB</div>
            <div className="bro-hub-logo">BRO HUB</div>
            <div className="bro-hub-logo">BRO HUB</div>
            <div className="bro-hub-logo">BRO HUB</div>
            <div className="bro-hub-logo">BRO HUB</div>
            <div className="bro-hub-logo">BRO HUB</div>
          </div>
        </div>
        {openMenu && <div className="App-menu-in">
          <div className="App-menu-text">
            Home <br/>
            About Us
          </div>
        </div>}
      </header>
    </div>
  );
}

export default App;
