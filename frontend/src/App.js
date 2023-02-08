import React from "react";
import Container from "react-bootstrap/Container";
import AddMacros from "./components/AddMacro";

import MyDiet from "./components/MyDiet";
import NavBar1 from "./components/NavBar1";
import AddMacro from "./components/AddMacro";

function App() {
  return (
    <div>
      <NavBar1 />
      <Container>
        <MyDiet />
        <AddMacro />
      </Container>
    </div>
  );
}

export default App;
