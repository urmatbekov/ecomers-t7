import axios from "axios";

const server = axios.create({
    baseURL: "https://nurkadyr.pythonanywhere.com/",
    headers: {
        "Content-type": "application/json"
    }
});

export default server;