import './cd/App1.css';
import gptLogo from './cd/law.svg';
import msgIcon from './cd/message.svg';
import sendBtn from './cd/send.svg'
import userIcon from './cd/user-icon.png'
import gptImgLogo from './cd/chatgptLogo.svg'
import {sendMsgToOpenAI} from './cd/openai'
import {useState} from 'react'
function Services() {
const[input,setInput] =useState("");
const[messages,setMessages]=useState([
  {
  text:"Hi there I am a Document Simplification ChatBot!!",
  isBot:true,
}
]);

  const handleSend= async () => {

    const text=input+" GIVE ME A SHORT AND EASY TO UNDERSTAND SUMMARY OF THE GIVEN PARAGRAPH HIGHLIGHTING ALL THE IMPORTANT POINTS";
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
    <div className="Services">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">SimpliText</span></div>
          <button className="midBtn">Instructions</button>
          
          <div className="upperSideBottom">
            <button className="query">You can upload or paste complex texts, legal documents, technical manuals, academic papers, or any document you find hard to understand.
Please provide the document you want to simplify.

</button>
            <button className="query">You can choose the level of simplification, from a slight rewrite to a complete overhaul. Let me know your preference.Our chatbot supports documents in English, Spanish, French, and more. Specify the language of your document if needed.

</button>
<button className="query">Your document content remains private, and we do not store or share it with anyone.Clearly state the limitations of the chatbot, such as its inability to handle copyrighted materials or provide legal advice.

</button>
          </div>
          </div>
          
        
        <div className="lowerSide">

        </div>
      </div>
      <div className="main">
      <div className="chats">
      {messages.map((message, i) => (
  message.isBot ? (
    <div key={i} className="chat bot">
      <img className="chatImg" src={gptImgLogo} alt="" />
      <p className="txt">{message.text}</p>
    </div>
  ) : null
))};
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

export default Services;
