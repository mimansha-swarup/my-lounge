import "./App.css";
import { Navbar, SideBar, ToastContainer } from "./Components";
import { ToastProvider } from "./Context";
import logo from "./logo.png";
import AllRoutes from "./Routes/AllRoutes";

// import HomePage from "./Page";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Navbar />
      <AllRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
