import "./App.css";
import "bootswatch/dist/simplex/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Route, Routes, useParams } from "react-router-dom";
import StartPage from "./pages/StartPage";
import DetailPage from "./pages/DetailPage";

function App() {
  const params = useParams()
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<StartPage />} />
        <Route path={"/posts/:slug"} element={<DetailPage/>} />
      </Routes>
    </div>
  );
}

export default App;
