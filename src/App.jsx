import "./app.style.scss";
import {
  HomePage,
  NavBar,
  Shop,
  SignIn,
} from "./route-components/route-exports.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
