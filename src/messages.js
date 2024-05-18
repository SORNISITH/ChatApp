import { user, contacts, messages } from "./data.js";

const container = document.createElement("div");
const msgViewPort = document.createElement("div");
const addInputButton = document.createElement("div");

export let globalUser = 0;

export const dynamicViewUser = () => {
  console.log("x123");
};

export const currentChat = contacts[globalUser].id;
export const currentUser = contacts[globalUser].name;
export const currentImg = contacts[globalUser].imageUrl;

export const createMainContent = () => {
  container.classList.add("main-content-container");
  msgViewPort.classList.add("msg-viewport");
  container.appendChild(msgViewPort);
  container.appendChild(addInput_addButton());
  return container;
};
const addUserMessage = () => {
  const getValueInput = document.getElementById("viewInput");
  const viewInputValue = getValueInput.value;
  const storeTime = new Date();
  const ownerMsg = user.id;

  if (viewInputValue == "") {
    return;
  }
  const newObjMSG = () => {
    return {
      content: viewInputValue,
      timestamp: storeTime,
      owner: ownerMsg,
    };
  };
  messages[currentChat].push(newObjMSG());

  loadLastMsg();
  console.log(messages[currentChat]);
};

const addInput_addButton = () => {
  const input = document.createElement("input");
  addInputButton.classList.add("chat-input-container");
  input.placeholder = "   Write your message here!";
  input.name = "chat-message";
  input.id = "viewInput";
  input.classList.add("chat-input-message");

  input.addEventListener("", (event) => {
    addUserMessage();
  });

  const button = document.createElement("button");
  button.textContent = "";
  button.classList.add("chat-button-send");
  button.id = "mybtn";
  button.addEventListener("click", (event) => {
    addUserMessage();
  });

  addInputButton.appendChild(input);
  addInputButton.appendChild(button);
  return addInputButton;
};

const createContactMessage = (message) => {
  const content = message.content;
  const getTime = message.timestamp;

  const container = document.createElement("div");
  container.classList.add("chat-contact-message");

  const image = document.createElement("img");
  image.src = currentImg;
  image.alt = currentUser;
  image.classList.add("chat-contact-image");
  const messageBox = createMessageBox(
    content,
    "chat-contact-message-box",
    getTime
  );

  container.appendChild(image);
  container.appendChild(messageBox);

  return container;
};

const createUserMessage = (message) => {
  const getTime = message.timestamp;
  return createMessageBox(message.content, "chat-user-message-box", getTime);
};

const createMessageBox = (content, className, getTime) => {
  const box = document.createElement("div");
  box.classList.add(className);
  box.textContent = content;

  let convertDate = new Date(getTime);

  const time = document.createElement("p");
  time.textContent = `${convertDate.getHours()} : ${convertDate.getMinutes()}`;
  time.id = "timestampe";

  box.appendChild(time);
  return box;
};

export const loadDataMsg = () => {
  const loading = messages[currentChat];
  loading.forEach((message) => {
    let eachMessage;
    if (message.owner == currentChat) {
      eachMessage = createContactMessage(message);
    } else {
      eachMessage = createUserMessage(message);
    }

    msgViewPort.appendChild(eachMessage);
  });
};

const loadLastMsg = () => {
  const index = messages[currentChat].length;
  const loadMsg = messages[currentChat][index - 1];
  msgViewPort.appendChild(createUserMessage(loadMsg));
};

// document.getElementById("mybtn").addEventListener("click", () => {
//   localStorage();
// });
