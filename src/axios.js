import axios from "axios"

const instance = axios.create({
    // THE API (CLOUD FUNCTION) URL
    baseURL: "http://localhost:5001/dz-clone/us-central1/api"
});

export default instance;