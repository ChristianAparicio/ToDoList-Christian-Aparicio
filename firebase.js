// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries


const storage = getStorage(app);
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcPy3OiksR8xvA8VNOkNcDY125MyH84AQ",
    authDomain: "todo-list-chris.firebaseapp.com",
    projectId: "todo-list-chris",
    storageBucket: "todo-list-chris.appspot.com",
    messagingSenderId: "1065498599813",
    appId: "1:1065498599813:web:ae7614ba5189c5e88564ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db}

export async function getTasks() {

    const allTask = []

    const querySnapshot = await getDocs(collection(db, "tasks"));
    querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()}`);
        allTask.push({...doc.data(), id: doc.id})
    });

    return allTask

}


export async function addtask(taskTitle) {

    try {
        const docRef = await addDoc(collection(db, "tasks"), {
            name: taskTitle,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }


}

export async function editDocument(name,id){

    // Add a new document in collection "cities"
    await setDoc(doc(db, "tasks", id), {
        name: name,
        compleated: true,
     
    });







}

const auth = getAuth();

export async function createUser(userInfo) {
    try {
    const userCredential = await  createUserWithEmailAndPassword(auth, userInfo.email, userInfo.pass)
  
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...

      const url= uploadFile(userIngo.picture.name, user.info.picture, "profilePictures")


      const dbInfo = {
        url,
        email:userInfo.email,
        password: userInfo.password,
        

      }
    }
    catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(error.message)
    }
  }

  export async function uploadFile(name, file, folder) {
    const taskImgRef = ref(storage, `${folder}/${name}`);

    try {
        await uploadBytes(taskImgRef, file);
        const url = await getDownloadURL(taskImgRef);
        return url;
    } catch (error) {
        console.log("error creando imagen ->", error);
    }
}
    

