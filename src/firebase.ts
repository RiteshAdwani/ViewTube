import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyC1FgAgWDO_kBEUQkDBu9sQ0CTyrm8DCqs",
//   authDomain: "viewtube-my-project.firebaseapp.com",
//   projectId: "viewtube-my-project",
//   storageBucket: "viewtube-my-project.appspot.com",
//   messagingSenderId: "345460613181",
//   appId: "1:345460613181:web:d7c679d277a604b5a20a54"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCfMfxCftljtCpl1enY-f0Tpf6ZdwCRsaM",
  authDomain: "yt-clone-4942e.firebaseapp.com",
  projectId: "yt-clone-4942e",
  storageBucket: "yt-clone-4942e.appspot.com",
  messagingSenderId: "229483271279",
  appId: "1:229483271279:web:cb2aad6b29f986ce5e299a",
  measurementId: "G-W75RFH2X9C"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;