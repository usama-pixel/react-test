import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import TQM from "./Tqm";
import { AppContext } from "./context";
import { useEffect, useState } from "react";

function App() {
  const [despositState, setdepositState] = useState(false);
  const dispatchUserEvent = (actionType, payload) => {
    console.log("dispatched");
    switch (actionType) {
      case "CHANGE_STATE":
        setdepositState(payload);
        console.log("State flip  to ", despositState);
        return;

      default:
        return;
    }
  };

  return (
    <div className="App">
      <AppContext.Provider value={{ despositState, dispatchUserEvent }}>
        <Home />
      </AppContext.Provider>
    </div>
  );
}

export default App;
