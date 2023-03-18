import Navbar from "./components/navbar.jsx"
import Home from"./components/Pages/Home.jsx"
import Login from "./components/Pages/Login.jsx"
import Signup from "./components/Pages/Signup.jsx"
import Account from "./components/Pages/Account.jsx"
import {Routes,Route} from "react-router-dom"
import {AuthContextProvider} from "./context/Authcontext";
import ProtectedRoute from "./components/protectedRoute.js"
function App() {
  return (
    <>
        <AuthContextProvider>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home></Home>}>
                </Route>
                <Route path='/login'
                       element={<Login></Login>}>
                </Route>
                <Route path='/signup'
                       element={<Signup></Signup>}>
                </Route>
                <Route path='/account'
                       element={
                    <ProtectedRoute>
                        <Account></Account>
                    </ProtectedRoute>
                }>
                </Route>
            </Routes>
        </AuthContextProvider>
    </>
  );
}

export default App;
