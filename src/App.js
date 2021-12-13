import "./App.css";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar.component";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/contact" exact component={ContactPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
