import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './Component/ChatFeed'
import LoginForm from './Component/LoginForm'
import './App.css';

const App =()=> {
 // if (!localStorage.getItem('username')) return <LoginForm/>

  return (
    <ChatEngine
      height='100vh'
      projectID='b9d07351-032b-4ba6-a807-b67bbee38f0b'
      userName='Shubhs93'
      userSecret='037logitecH@'
      renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
    />
  )
}

export default App;
