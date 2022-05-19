import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom' 
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MyProfile from './components/MyProfile';
import Posts from './components/Posts';
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div>
      <Router>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/myprofile" element={<MyProfile/>}/>
              <Route path='/posts' element={<Posts/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>

            </Routes>
          </Router>
    </div>
  );
}

export default App;
