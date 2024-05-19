import sidebar from "./sidebar.js";
import header from "./header.js";
import {loadDataMsg, createMainContent} from "./messages.js";
import { contacts, messages } from "./data.js";


const rootElement = document.querySelector(".chat-app-root");

/***************************************************************
 * AppContainer
 */

const appContainer = document.createElement("div");
appContainer.classList.add("app-container");

/***************************************************************
 * appContainer Child
 */

const sidebarContainer = document.createElement("aside");
sidebarContainer.classList.add("sidebar-container");
sidebarContainer.appendChild(sidebar);

const mainContent = document.createElement("main");
mainContent.classList.add("mainContent");
mainContent.id = "exportappend";

//Generate APP container child
mainContent.appendChild(header);
mainContent.appendChild(createMainContent());
appContainer.appendChild(sidebarContainer);

appContainer.appendChild(mainContent);

/***************************************************************
 * init App
 */

rootElement.appendChild(appContainer);

window.addEventListener("load", (event) => {
 
  loadDataMsg(contacts[0].id,contacts[0].name,contacts[0].imageUrl);
  
});

document.getElementById('mybtn').addEventListener("click", (event) => {
  addUserMessage(messages[0]);
  
});






const loadIdContact = () => {
  for (let id in contacts){

  }


  
}



