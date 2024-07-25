import Login from "./Pages/Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Levels from "./Pages/levels"
import Level from "./Pages/level"
import Leaderboard from "./Pages/leaderboard"
import Home from "./Pages/Home"
import PrivateRoute from "./utils/auth"
// import Rulebook from "./Pages/Rulebook"
import Members from "./Pages/Members"
import Navbar from "./Components/Navbar"
import Rulebook from "./Pages/Rulebook"
import MainPage from "./Pages/MainPage"
import Coverpage from "./Components/Coverpage"
// import PauseMenu from "./Components/PauseMenu"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  // TODO: Revert back Auth.js to original code(remove always true part)
  return (
    <>
        <Router>
          
        <Routes>
          
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          {/* <Route path="/lvls" element={<PrivateRoute><Navbar /><Levels /></PrivateRoute>} /> */}
          <Route path="/level" element={<><Navbar /><Levels /></>} />    

          <Route path="/level/:id" element={<PrivateRoute><Level /></PrivateRoute>} />
          <Route path="/leaderboard" element={<PrivateRoute><Navbar /><Leaderboard /></PrivateRoute>} />
          <Route path="/rulebook" element={<PrivateRoute><Navbar /><Rulebook /></PrivateRoute>}></Route>
          <Route path="/members" element={<PrivateRoute><Navbar /><Members /></PrivateRoute>}></Route>


          <Route path="*" element={<div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl mb-4">Page Not Found</h1>
            <a href="/" className="">
              Go to Home Page
            </a>
            </div>} />
          
          
        </Routes>
        <ToastContainer position="top-right" autoClose={4999} theme="dark" />
      </Router>
    </>
  )
}

export default App