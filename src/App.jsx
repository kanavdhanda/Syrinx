import Login from "./Pages/Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Levels from "./Pages/levels"
import Level from "./Pages/level"
import Leaderboard from "./Pages/leaderboard"
import Home from "./Pages/Home"
function App() {

  const isAuthenticated = true;
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={isAuthenticated?<Home />:<Login />} />

          <Route path="/lvls" element={isAuthenticated? <Levels/>:<Login />} />
          <Route path="/lvls/:id" element={isAuthenticated? <Level/>:<Login />} />
          <Route path="/leaderboard" element={isAuthenticated? <Leaderboard/>:<Login />} />
          <Route path="*" element={<h1>Not Found</h1>} />

          
        </Routes>
      </Router>
    </>
  )
}

export default App