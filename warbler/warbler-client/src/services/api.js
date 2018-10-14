import axios from "axios";

export function apiCall(method, path, data) {
  return new Promise((resolve, reject) => {
    return axios[method](path, data)
      .then(resp => resolve(resp.data))
      .catch(err => reject(err.response.data.error));
  });
}
