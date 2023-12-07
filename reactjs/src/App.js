import React from "react";
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import RouterCustom from "./router/user-router/userRouter";
function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <RouterCustom />
      </BrowserRouter>
    </div>
  );
}
export default App;   
