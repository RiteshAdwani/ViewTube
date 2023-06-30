import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyCfMfxCftljtCpl1enY-f0Tpf6ZdwCRsaM",
  }
});

export default request;