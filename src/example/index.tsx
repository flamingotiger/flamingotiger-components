import React from "react";
import { Button } from "../lib";

const Example:React.FC = () => {
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
};

export default Example;
