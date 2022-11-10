import './App.scss';
import Nav from './containers/Nav/Nav';
import Weather from './containers/Weather/Weather';


function App() {

  const {REACT_APP_API_KEY} = process.env;


  return (
    <div className="App">
      <Nav/>
      <Weather REACT_APP_API_KEY={REACT_APP_API_KEY}/>
    </div>
    
  );
}

export default App;
