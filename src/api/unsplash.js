import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID 6HxTs6ZcpaAmKA3hktJghHMyP1ZhMrzH-NTw6VMIkMI",
  },
});
