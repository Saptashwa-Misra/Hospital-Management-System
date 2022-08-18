
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Login } from './Components/login';
import {Register} from './Components/registration'
import { HomePage } from './Components/home_page';
import { Admin } from './Components/admin';
import { DisplayAdmin } from './Components/display_admin';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <div className='nav'>
          <Link to='react-protrips' className='link'><i class="bi bi-house-door-fill"></i></Link>
          <Link to='react-protrips/addtrip' className='link'><i class="bi bi-calendar-plus"></i></Link>
          <Link to='react-protrips/list' className='link'><i class="bi bi-grid-3x3"></i></Link>
        </div> */}
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/home_page" element={<HomePage/>} />
            <Route path="/home_page/admin" element={<Admin/>} />
            <Route path="/home_page/admin/display_admin" element={<DisplayAdmin/>} />
            <Route path="*" element={<h1>No Page Found</h1>} />
          </Routes>
        </BrowserRouter>
      {Login}
    </div>
  );
}

export default App;
