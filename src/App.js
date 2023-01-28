import Navbar from "./components/navbar.jsx"
import Home from"./components/Pages/Home.jsx"
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
          <Route path="/" element={<Home></Home>}>
          </Route>
      </Routes>
    </>
  );
}

export default App;
