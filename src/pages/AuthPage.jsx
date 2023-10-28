import React from 'react'
import {signInWithPopup} from "firebase/auth"
import { auth, provider } from '../firebase/config'


const AuthPage = ({setIsAuth}) => {
    const handleLogin = () => {
        signInWithPopup (auth, provider)
        .then((res)=> {  
        localStorage.setItem("token", res.user.refreshToken);
        const loginTime = new Date().getTime();
        localStorage.setItem("loginTime", loginTime);
        setIsAuth(true)
        })
        .catch ((error)=>console.error(error))
    }
  return (
    <div className='container'>
    <div className='auth'>
<h1>Chat Odası</h1>
<p>Devam etmek için giriş yapınız</p>
<button onClick={handleLogin}>
<img src='/g-logo.png' className='google-logo'/>
<span>Google İle Gir</span>
</button>
    </div>
    </div>
  )
}

export default AuthPage
