import "bootswatch/dist/simplex/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import DetailPage from "./pages/DetailPage";
import TagsPage from "./pages/TagsPage";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<StartPage />} />
        <Route path={"/posts/:slug"} element={<DetailPage/>} />
        <Route path={"/tags/:slug"} element={<TagsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
