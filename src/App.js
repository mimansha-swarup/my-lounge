import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar, SideBar } from "./Components";
import logo from "./logo.png";
import { HomePage, VideoPage } from "./Page";
// import HomePage from "./Page";

function App() {
  return (
    <div className="App">
     
      
        <Navbar />
        <SideBar/>
        {/* <HomePage/> */}
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="video" element={<VideoPage/>} />
        </Routes>
    </div>
  );
}

export default App;
