/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Feed.css";
import Sidebar from "./Sidebar/Sidebar";
import Videos from "./Videos/Videos";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4805a1b7a1mshf69e9700cdcbd10p1d4e24jsn5b9f66423ed6",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function getVideos(word) {
  const url = `https://youtube-v31.p.rapidapi.com/search?q=${word}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`;
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

const Feed = ({ searchText }) => {
  const [categoryWord, setCategoryWord] = useState("قرءان");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getVideos(categoryWord);
      setVideos(data);
    }
    fetchData();
  }, [categoryWord]);

  useEffect(() => {
    if (searchText === "") return;

    async function fetchData() {
      const data = await getVideos(searchText);
      setVideos(data);
    }
    fetchData();
  }, [searchText]);
  console.log(videos);
  return (
    <main>
      <Sidebar setCategoryWord={setCategoryWord} />
      <Videos videos={videos} />
    </main>
  );
};

export default Feed;
