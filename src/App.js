import Items from './components/Item';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img className="header-img" src="./images/logo-black.png" alt="Greenwood Silver Logo"/>
        <h1 className= "header-title"> Greenwood Silver</h1>
      </div>
      <div className="body">
        <Items/>
      </div>
      </div>
  );
}

export default App;
