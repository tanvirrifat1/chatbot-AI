import gpt from "../src/assets/New folder/chatgptLogo.svg";
import "./App.css";
import addBtn from "./assets/New folder/add-30.png";
import msgIcon from "./assets/New folder/message.svg";
import home from "./assets/New folder/home.svg";
import saved from "./assets/New folder/bookmark.svg";
import rocket from "./assets/New folder/rocket.svg";

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
      <div className="main"></div>
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
