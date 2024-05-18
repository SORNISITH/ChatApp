import sidebar from "./sidebar.js";
import header from "./header.js";
import { loadDataMsg, createMainContent } from "./messages.js";

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
  loadDataMsg();
  console.log(event);
});
