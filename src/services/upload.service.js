import axios from "axios";

import { config } from "./../config";
import { ROUTEPATHS } from "./../constants";

function UploadService() {}

UploadService.__proto__.sendUpload = () => {
  const options = {
    url: "",
    headers: {
      "Content-Type": "application/json",
      Authorization: "AUTH_TOKEN", //todo
    },
  };

  return axios.post(options.url, uploadObj, { headers: options.headers });
};

UploadService.prototype.getUploads = () => {
  const options = {
    url: config.API_URL + ROUTEPATHS.USER_UPLOADS,
    headers: {
      "Content-Type": "application/json",
      Authorization: "AUTH_TOKEN", //todo
    },
  };
  console.log(options.url);
  return axios.get(options.url, { headers: options.headers });
};

export const uploadService = new UploadService();
