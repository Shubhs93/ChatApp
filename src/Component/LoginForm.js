import React,{useState} from 'react'
import axios from 'axios'

const LoginForm = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit= async (e) => {
        e.preventDefault();

         const authObject ={'projectID':'b9d07351-032b-4ba6-a807-b67bbee38f0b','User-Name':userName,'User-Secrete':password}

         try {
           await  axios.get('https://api.chatengine.io/chats', { headers: authObject }) 

           localStorage.setItem('userName',userName);
           localStorage.setItem('password',password);

           window.location.reload();
         } catch (error) {
             
         }

    }

    return (
        <div className='wrapper'>
            <div className='form'>
            <h1 className="title">Chat Application</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={userName} onChange= {(e)=>setUserName(e.target.value)} className="input" placeholder="userName" required/>
                <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="password" required/>
                <div align='center'>
                    <button type='submit' className='button'>
                        <span> Start Chat</span>
                    </button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default LoginForm
