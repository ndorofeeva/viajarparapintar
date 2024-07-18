import axios, { type AxiosInstance } from 'axios';

const serverPort: number = import.meta.env.VITE_SERVER_PORT ? parseInt(import.meta.env.VITE_SERVER_PORT, 10) : 3000;

const instance: AxiosInstance = axios.create({
  baseURL: `http://localhost:${serverPort}`,
  headers: {
    "Content-type": "application/json",
  },
});

export default instance
