import axios from "axios";

const api = axios.create({
    baseURL: "https://ekino-heroku-test.herokuapp.com"
})

export default api