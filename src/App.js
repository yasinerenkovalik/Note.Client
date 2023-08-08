
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link, Routes} from "react-router-dom";
import Navbar from './components/navbar';
import Login from './components/user/login';
import Register from './components/user/register';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Profil from './components/user/profil';


function App() {
  
  return (
    <Router>
      <div>
    
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/profil' element={<Profil/>}/>

        </Routes>
        
      </div>
    </Router>
    
  );
}

export default App;
function Home() {
  return <h2>Home</h2>;
}
