import axios from "axios";

const BASE_URL = "https://quizzie-94qc.onrender.com/";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

