import './ab/App.css';
import gptLogo from './ab/law.svg';
import msgIcon from './ab/message.svg';
import sendBtn from './ab/send.svg'
import userIcon from './ab/user-icon.png'
import gptImgLogo from './ab/cd.jpg'
import {sendMsgToOpenAI} from './ab/openai'
import {useState} from 'react'
function About() {
const[input,setInput] =useState("");
const[messages,setMessages]=useState([
  {
  text:"Hi I am a Legal-Bot designed by Divyanshu Singh!!",
  isBot:true,
}
]);

  const handleSend= async () => {

    const text=input+" If it is not related to law or crime then dont reply";
    setInput('');
    setMessages([
      ...messages,
      { text,isBot:false}
      
    ])
    const res =await sendMsgToOpenAI(text)
    setMessages([
      ...messages,
      {text, isBot:false},
      {
        text:res,isBot:true
      }
    ])
  }
  return (
    <div className="About">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">Legal ChatBot</span></div>
          <button className="midBtn">Instructions</button>
          
          <div className="upperSideBottom">
            <button className="query">You can ask questions about criminal law, legal procedures, legal definitions, or seek general legal advice.Please provide details about your legal issue for a more accurate response.
</button>
            <button className="query">Your privacy is important. Please do not share personal details or confidential information.Please note that legal advice may differ depending on your jurisdiction. Specify your location if relevant.
</button>
<button className="query">You can ask questions about criminal law, legal procedures, legal definitions, or seek general legal advice.Please provide details about your legal issue for a more accurate response.
In case of emergencies or specific legal issues, please contact local authorities or consult with an attorney.

</button>
          </div>
          </div>
          
        
        <div className="lowerSide">

        </div>
      </div>
      <div className="main">
      <div className="chats">
  {messages.map((message, i) => {
    const messageText = message.isBot ? message.text : message.text.slice(0, -52); // Remove the last 10 characters if isBot is false

    return (
      <div key={i} className={message.isBot ? "chat bot" : "chat"}>
        <img className="chatImg" src={message.isBot ? gptImgLogo : userIcon} alt="" />
        <p className="txt">{messageText}</p>
      </div>
    );
  })}
</div>

        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message" value={input} onChange={(e)=>{setInput(e.target.value)}}/> <button className="send" onClick={handleSend}><img src={sendBtn} alt="Send" /></button>
          </div>
          <p>Only provide Information related to Indian Law</p>
        </div>
      </div>
    </div>
  );
}

export default About;
