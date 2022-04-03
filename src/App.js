import "./App.css";
import { Navbar, SideBar } from "./Components";
import logo from "./logo.png";
import AllRoutes from "./Routes/AllRoutes";

// import HomePage from "./Page";

function App() {
  return (
    <div className="App">
     
      
        <Navbar />
        <SideBar/>
        <AllRoutes/>
     
    </div>
  );
}

export default App;
