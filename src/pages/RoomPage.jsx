import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase/config'


const RoomPage = ({setIsAuth,setRoom}) => {

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                localStorage.removeItem("token")
                setIsAuth(false)
            })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const roomName = e.target[0].value.toLowerCase()
        setRoom(roomName)

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="room-page">
                <h1>Chat Odası</h1>
                <p>Hangi Odayı Seçeceksiniz</p>
                <input type="text" placeholder="örn:haftasonu"></input>
                <button type="submit">Odaya Gir</button>
                <button type="button" onClick={handleLogOut}>Çıkış Yap</button>
            </form>

        </div>
    )
}

export default RoomPage
