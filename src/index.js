import sidebar from "./sidebar.js";
import header from "./header.js";
import { loadDataMsg, addUserMessage, createMainContent } from "./messages.js";
import { contacts, messages, user } from "./data.js";

const rootElement = document.querySelector(".chat-app-root");
let globalIndex = 0;
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

const viewport_child = document.createElement("div");
viewport_child.id = "welcome-screen";
const welcomeText = document.createElement("h1");
welcomeText.textContent = "Welcome to my test App";
welcomeText.id = "welcometext";
const welcomeLogo = document.createElement("img");
welcomeLogo.classList.add("welcomeImg");
welcomeLogo.src = "/src/pic/Nz.png";

viewport_child.appendChild(welcomeText);
viewport_child.appendChild(welcomeLogo);

//Generate APP container child
mainContent.appendChild(header(contacts[globalIndex].name));
mainContent.appendChild(createMainContent());

appContainer.appendChild(sidebarContainer);
appContainer.appendChild(mainContent);
/***************************************************************
 * init App
 */

rootElement.appendChild(appContainer);

/***************************************************************
 * Event Listener
 */

const _loadDataMsg = () => {
  loadDataMsg(
    contacts[globalIndex].id,
    contacts[globalIndex].name,
    contacts[globalIndex].imageUrl
  );
};
for (let i in contacts) {
  document.getElementById(contacts[i].id).addEventListener("click", (e) => {
    globalIndex = i;
    document.getElementById("msgViewPort").innerHTML = "";
    document.getElementById("headerText").innerHTML = "";
    document.getElementById("headerText").innerHTML =
      `Chat With ${contacts[globalIndex].name}`;
    _loadDataMsg();
    document.getElementById("viewInput").focus();
  });
}
window.addEventListener("load", (event) => {
  document.getElementById("viewInput").focus();
  document.getElementById("msgViewPort").innerHTML = "";
  document.getElementById("headerText").innerHTML = " Dynamic ChatApp ";
  document.getElementById("msgViewPort").appendChild(viewport_child);
});

document.getElementById("mybtn").addEventListener("click", () => {
  addUserMessage(contacts[globalIndex].id, contacts[globalIndex].id);

  document.getElementById("viewInput").value = "";
  const scrollBtm = (() => {
    let h = 450;
    document.getElementById("msgViewPort").scroll(0, h);
  })();
  document.getElementById("viewInput").focus();
});

document.getElementById("viewInput").addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    addUserMessage(contacts[globalIndex].id, contacts[globalIndex].id);

    document.getElementById("viewInput").value = "";
    document.getElementById("viewInput").focus();
  }
});

document.getElementById("test").addEventListener("click", () => {
  document.getElementById("msgViewPort").innerHTML = "";
  document.getElementById("headerText").innerHTML = " Dynamic ChatApp ";
  document.getElementById("msgViewPort").appendChild(viewport_child);
});
