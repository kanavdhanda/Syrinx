import Login from "./Pages/Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Levels from "./Pages/levels"
import Level from "./Pages/level"
import Leaderboard from "./Pages/leaderboard"
import Home from "./Pages/Home"
import PrivateRoute from "./utils/auth"
import Rulebook from "./Pages/Rulebook"
import Members from "./Pages/Members"
import Navbar from "./Components/Navbar"

function App() {


  // TODO: Revert back Auth.js to original code(remove always true part)
  return (
    <>
        <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/lvls" element={<PrivateRoute><Levels /></PrivateRoute>} />
          

          <Route path="/lvls/:id" element={<PrivateRoute><Level /></PrivateRoute>} />
          <Route path="/leaderboard" element={<PrivateRoute><Leaderboard /></PrivateRoute>} />
          <Route path="/rulebook" element={<PrivateRoute><Rulebook /></PrivateRoute>}></Route>
          <Route path="/members" element={<PrivateRoute><Members /></PrivateRoute>}></Route>

          <Route path="*" element={<h1>Not Found</h1>} />

          
        </Routes>
      </Router>
    </>
  )
}

export default App