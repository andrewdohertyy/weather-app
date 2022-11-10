import './App.scss';
import Nav from './containers/Nav/Nav';
import Weather from './containers/Weather/Weather';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToDoList from './containers/ToDoList/ToDoList';



function App() {

  const {REACT_APP_API_KEY} = process.env;


  return (
    <Router>
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={ <Weather REACT_APP_API_KEY={REACT_APP_API_KEY}/>}></Route>
        <Route path="/todo" element={<ToDoList/>}></Route>
     
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
