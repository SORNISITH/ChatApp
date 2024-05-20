import { user, contacts, messages } from "./data.js";

const container = document.createElement("div");

const msgViewPort = document.createElement("div");
msgViewPort.id = "msgViewPort";
const addInputButton = document.createElement("div");

// document.getElementById('0b03c378-3980-11eb-adc1-0242ac120002').addEventListener("click", () => {

//       dynamicViewUser();
//   });

let globalDynamic = 0;

export const createMainContent = () => {
  container.classList.add("main-content-container");
  msgViewPort.classList.add("msg-viewport");
  container.appendChild(msgViewPort);
  container.appendChild(addInput_addButton());
  return container;
};
// ok!@
export const addUserMessage = (msg, lastIndexArryMsg) => {
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
  messages[msg].push(newObjMSG());

  loadLastMsg(lastIndexArryMsg);
};

const addInput_addButton = () => {
  const input = document.createElement("input");
  addInputButton.classList.add("chat-input-container");
  input.placeholder = "    message here!     ";
  input.name = "chat-message";
  input.id = "viewInput";
  input.classList.add("chat-input-message");

  const button = document.createElement("button");
  button.textContent = "";
  button.classList.add("chat-button-send");
  button.id = "mybtn";

  addInputButton.appendChild(input);
  addInputButton.appendChild(button);
  return addInputButton;
};

const createContactMessage = (message, user, img) => {
  const content = message.content;
  const getTime = message.timestamp;

  const container = document.createElement("div");
  container.classList.add("chat-contact-message");

  const image = document.createElement("img");
  image.src = img;
  image.alt = user;
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

export const loadDataMsg = (id, user, imgurl) => {
  const loading = messages[id];

  loading.forEach((message) => {
    let eachMessage;
    if (message.owner == id) {
      eachMessage = createContactMessage(message, user, imgurl);
    } else {
      eachMessage = createUserMessage(message);
    }

    document.getElementById("msgViewPort").appendChild(eachMessage);
  });
};

const loadLastMsg = (lastIndexArryMsg) => {
  const index = messages[lastIndexArryMsg].length;

  const loadMsg = messages[lastIndexArryMsg][index - 1];

  msgViewPort.appendChild(createUserMessage(loadMsg));
};

// document.getElementById("mybtn").addEventListener("click", () => {
//
// });
