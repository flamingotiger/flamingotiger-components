import React from "react";
import Button from "./lib/Button";

function App() {
  return (
    <div>
      <h1>Test Components</h1>
      <h2>Button</h2>
      <Button type="button" disabled>
        Disabled Button
      </Button>
      <Button type="button">Active Button</Button>
    </div>
  );
}

export default App;
