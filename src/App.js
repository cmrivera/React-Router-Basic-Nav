import React from "react";
import "./App.css";
import { Home, About, Contact, Navigation } from "./components";
import { Route } from "react-router-dom";

<Route path ="/" component={Home}/>
<Route path ="/contact" component={Contact}/>
<Route path ="/about" component={About}/>
const App = () => (
  <div>
    <Navigation />
  </div>
);

export default App;
