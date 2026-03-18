import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import UserLogin from "./components/login.jsx"
import UserSignUp from "./components/signup.jsx"
import DashBoard from "./components/dashBoard.jsx"
function App() {
 

  return (
    <>
    <Router>

      <Routes>

        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/signup" element={<UserSignUp/>}/>
        <Route path="/dashBoard" element={<DashBoard/>}/>
        



      </Routes>

    </Router>
    </>
  )
}

export default App
