import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c4911c8a857744b3a1a126a9e02d120b",
  },
});
