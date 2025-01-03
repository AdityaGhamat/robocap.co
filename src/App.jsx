import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
const App = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;
