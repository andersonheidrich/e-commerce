import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import Home from "./views/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

export default App;
