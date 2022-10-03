import React from 'react'
import "./App.css"
import Home from './pages'
import SigninPage from "./pages/signin"
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/signin' element={<SigninPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
