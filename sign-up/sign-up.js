import"sign-up/style.css"

import { getAuth } from "firebase/auth";

import{createUser} from"..firebase.js";


const auth = getAuth(app);

const inputElements = document.querySelector("#sign-up-dorm").querySelectorAll("input")

const fomButton= document.getElementById("form-button")
formButton.addEventListener("click",(e)=>signUp(e))

function signUp(e){

e.preventDefault()

    const userInfo={}


    inputElements.forEach((elem)=>{
        if(elem.files && elem.files[0]){
            userinfo[elem.name]= elem.files[0]
        } else if(elem.value && elem.value.length> 0){
            userInfo[elem.name]= elem.value
        } else{
            alert("No la das")
        } 
    })

  if(userinfo.pass=== userInfo.confirm){

createUser(userInfo)

  }
  else{
    alert("sos distraida, esa pass no coincide")
  }


}


