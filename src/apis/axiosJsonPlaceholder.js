import axios from "axios";

const axiosJsonData = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com",
});

export default axiosJsonData;
