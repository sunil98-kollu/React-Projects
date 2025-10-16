import React from "react";
import CoursePage from "./pages/CoursePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Components/Registration/Register'
import Login from "./components/Login/Login";
function App() {
  return (
    <>     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
         <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
         <Route path="/CoursePage" element={<CoursePage />} />   
      </Routes>
 
    </BrowserRouter>
</>

)
}

export default App;
