import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { app, database, storage } from "./firebaseconfig";

const collectionRef = collection(database, "users");
const passwordQuery = query(collectionRef, where("first", "!=", "tolusnehhil@gmail.com"))

const auth = getAuth();
auth.languageCode = "it";
const google = new GoogleAuthProvider();

export function handleClick() {
  console.log("clicked");
  setTimeout(() => {
    console.log("sent to firebase");
  }, 2000);

  signInWithPopup(auth, google)
    .then((res) => {
      console.log(res.operationType);
      console.log(res.user);
      console.log(res.providerId);
    })
    .catch((err) => {
      alert(err.message);
    });
}
export function createUser(email, password) {
  console.log("clicked");
  setTimeout(() => {
    console.log("sent to firebase");
  }, 2000);

  createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      console.log(res.user);
    })
    .catch((err) => {
      alert(err.message);
    });
}

export function handleAddClick(email, password) {
  if (!email || !password) {
    throw { msg: "provide a email or password" };
  }
  addDoc(collectionRef, {
    first: email,
    last: password,
  })
    .then(() => {
      alert("Document added");
    })
    .catch((err) => {
      alert(err.message);
    });
}

export const getData = () => {
  //   getDocs(collectionRef).then((res) => {
  //     console.log(
  //       res.docs.map((item) => {
  //         return { ...item.data(), id: item.id };
  //       })
  //     );
  //   });

  onSnapshot(passwordQuery, (data) => {
    console.log(
      data.docs.map((item) => {
        return { ...item.data(), id: item.id };
      })
    );
  });
};

export const updateData = () => {
  const docUpdate = doc(database, "users", "yGaAX1AjKRDCTqcdtX9j");
  updateDoc(docUpdate, { last: "oluwaseunfunmi" })
    .then((res) => {
      alert("Data updated");
    })
    .catch((err) => {
      alert(err.message);
    });
};

export function sendFile(file) {
  const storageRef = ref(storage, `images/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
    },
    (error) => {
      alert(error.message);
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
      });
    }
  );
}
