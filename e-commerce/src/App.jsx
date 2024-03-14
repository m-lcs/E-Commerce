import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Oeuvre from "../components/oeuvre";
import NavBar from "../components/navBar";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <NavBar/>
        <Oeuvre></Oeuvre>
      </div>
    </>
  );
}

export default App;
