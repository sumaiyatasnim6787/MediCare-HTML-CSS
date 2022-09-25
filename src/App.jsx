import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home,SignUp,SignIn, NotFound} from "./pages";

function App() {
  return <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Signup" element={<SignUp/>}/>
        <Route exact path="/Signin" element={<SignIn/>}/>
        <Route exact path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>;
}

export default App;
