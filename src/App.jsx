import "./App.css";
import Header from "./comonents/Header";
import Body from "./comonents/Body";
import { Outlet } from "react-router-dom";




function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}



export default App;
