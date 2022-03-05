import React from "react";

import Main from "./components/Main";

// import "./styles/styles.css";
import "./styles/styles.scss";

const greeting = (firstname, lastname) => {
  return (
    <p>
      My name is {firstname} {lastname}
    </p>
  );
};

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
