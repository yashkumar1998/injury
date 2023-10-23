import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Authorisation/Login';
import Register from './Authorisation/Register';
import Injury_form from './Injury/Injury_form';
import Injury_list from './Injury/Injury_list';
import Home from './Components/Home';

import {Route,Routes} from 'react-router-dom'; 


function App() {
  return (
    
       
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="InjuriesForm" element={<Injury_form />} />
          <Route path="Injuries" element={<Injury_list />} />

      </Routes>

        
    </div>
    
  );
}

export default App;
