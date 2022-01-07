import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css'
import HomePage from './pages/HomePage/HomePage';
import data from './data.json'



render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage data={data} />}>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

