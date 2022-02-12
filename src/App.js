import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Home />
    </BrowserRouter>
  );
}

export default App;
