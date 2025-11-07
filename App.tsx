

import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import HomePage from "./pages/HomeOne";
import SingleCoursePage from "./pages/SingleCoursePage";
import "./style.css"
import { BrowserRouter, Route, Routes  } from "react-router-dom";

const App = () => {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/course/:id" element={<SingleCoursePage/>}/> 
        </Route>
         
         <Route path="/Home/" element={<Home/>}/> 
      
                 
      </Routes> 
      

      </BrowserRouter>
      
    </>
  );
};

export default App;