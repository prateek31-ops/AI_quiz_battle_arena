import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000",
});

export const createRoom = async (data) => {
    const response = await API.post("/rooms/create", data);
    return response.data;
};

export const joinRoom = async (data) => {
    const response = await API.post("/rooms/join", data);
    return response.data;
};