import gpt from "../src/assets/New folder/chatgpt.svg";
import "./App.css";
import addBtn from "./assets/New folder/add-30.png";
import msgIcon from "./assets/New folder/message.svg";
import home from "./assets/New folder/home.svg";
import saved from "./assets/New folder/bookmark.svg";
import rocket from "./assets/New folder/rocket.svg";
import sendBtn from "./assets/New folder/send.svg";
import gptLogo from "./assets/New folder/chatgptLogo.svg";
import user from "./assets/New folder/client.png";

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gpt} alt="Logo" className="logo" />
            <span className="brand">Chatbot-Ai</span>
          </div>

          <button className="midBtn">
            <img src={addBtn} alt="new chat" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" />
              What is Programming?
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" />
              How to use and API?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="" className="listItemsImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat ">
            <img className="chatImg" src={user} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              tenetur adipisci, esse perspiciatis quae libero magnam quo eveniet
              quod cupiditate.
            </p>
          </div>
          {/*  */}
          <div className="chat bot">
            <img className="chatImg" src={gptLogo} alt="" />
            <p className="txt">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              laudantium, ipsa architecto dolor neque vel veritatis, debitis
              nobis aspernatur, quaerat nisi eligendi! Suscipit architecto
              dolores, beatae officiis eius ad repellendus fuga blanditiis at
              pariatur unde enim incidunt eos perspiciatis ullam id voluptates
              ipsam? Recusandae magni hic cum minus qui accusantium nesciunt
              neque, expedita est, deleniti tempora voluptatibus. Delectus
              possimus reiciendis aspernatur exercitationem nobis, error unde
              fugit earum, hic minus nostrum nam in obcaecati aut tempore, et
              minima odio ullam! Optio laboriosam quaerat similique voluptatibus
              doloremque dolore explicabo odit officiis hic dolor! Unde eum
              dolorum corrupti natus voluptate repellat totam accusantium.
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" name="" placeholder="Send a message..." />
            <button className="send">
              <img src={sendBtn} alt="" />
            </button>
          </div>
          <p>
            ChatGPT can make mistakes. Consider checking important information.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

<div className="sideBar">
  <div className="upperSide">
    <div className="upperSideTop">
      <img src={gpt} alt="Logo" className="logo" />
      <span className="brand">Chatbot-AI</span>
    </div>
    <button className="midBtn">
      <img src={addBtn} alt="new chat" className="addBtn" />
      New Chat
    </button>
    <div className="upperSideBottom">
      <button className="query">
        <img src={msgIcon} alt="Query" />
        What is Programming?
      </button>
      <button className="query">
        <img src={msgIcon} alt="Query" />
        How to use and API?
      </button>
    </div>
  </div>
  <div className="lowerSide">
    <div className="listItems">
      <img src={home} alt="" className="listItemsImg" />
      Home
    </div>
    <div className="listItems">
      <img src={saved} alt="" className="listItemsImg" />
      Saved
    </div>
    <div className="listItems">
      <img src={rocket} alt="" className="listItemsImg" />
      Upgrade to Pro
    </div>
  </div>
  <div className="main"></div>
</div>;
