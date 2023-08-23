import { Routes, Route } from "react-router-dom";
import { ChannelDetail, Feed, Navbar, VideoDetail } from "./components";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="app">
      <Navbar setSearchText={setSearchText} />
      <Routes>
        <Route index element={<Feed searchText={searchText} />} />
        <Route path="video/:id" element={<VideoDetail />} />
        <Route path="channel/:id" element={<ChannelDetail />} />
      </Routes>
    </div>
  );
}

export default App;
