import './App.css';
import Sidenav from "./Sidenav";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./pages/Home";
import Jira from "./pages/Jira";
import Confluence from "./pages/Confluence";
import Stash from "./pages/Stash";

export default function App() {
 return (
  <>
   <BrowserRouter>
    <Routes>
     <Route path="/" exact element={<Home />}></Route>
     <Route path="/jira" exact element={<Jira />}></Route>
     <Route path="/confluence" exact element={<Confluence />}></Route>
     <Route path="/stash" exact element={<Stash />}></Route>
    </Routes>
   </BrowserRouter> 
  </>
  )
}


