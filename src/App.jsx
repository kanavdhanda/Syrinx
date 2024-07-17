
import Login from "./Pages/Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Levels from "./Pages/levels"
function App() {

  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/lvls" element={isAuthenticated? <Levels />:<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
