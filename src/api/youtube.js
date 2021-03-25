import axios from "axios";

const KEY = "AIzaSyBihqdQ7XJ4J6fesIm9v34OQd1KVRkIJiA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 15,
    type: "video",
    key: KEY,
  },
});
