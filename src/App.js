import { Routes, Route } from "react-router";
import "./App.css";
import Nav from "./component/nav/Nav";
import User from "./component/user/User";
import Video from "./component/video/Video";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="/user" element={<User />} />
        <Route path="/video" element={<Video />} />
      </Route>
    </Routes>
  );
}

export default App;
