import axios from "axios";

const apiURLs = {
  development: "https://pinkpowerapi.onrender.com/api",
  production: "https://pinkpowerapi.onrender.com/api",
};

const api = axios.create({
  baseURL: apiURLs[process.env.NODE_ENV],
});

api.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `Bearer a40c304a59f1d47d6e2568ee1d0b0d920f7b5cb092f7eea44915afb3b424d9c14f1c60fd4f07de47d85180fb90c46b9e2a9973fc27832f40befd46af8460c505bc5573b4a40cfaf5981939d569b82a616978d7f0fe2657d12ffb47974500d2e3f4d7c183780774deb76df16f4f7c371d6ba488ecce47533eea04a995b7c3d1da`,
  };

  return config;
});

export { api };
