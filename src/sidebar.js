import { contacts, messages } from "./data.js";
import createContactCard from "./contact-card.js";
import { currentUser } from "./messages.js";

/*>--------------------------------------------------------------
 * div.Sidebar container
 */
const sidebar = document.createElement("div");
sidebar.classList.add("sidebar-inner-container");

/*
 * div-Side-bar Child
 */
const searchField = document.createElement("input");
searchField.classList.add("sidebar-search-field");
searchField.name = "search";
searchField.placeholder = "Search for Conversation";

const contactsContainer = document.createElement("div");
contactsContainer.classList.add("sidebar-contacts");

/*>--------------------------------------------------------------
 * div.Sidebar-contacts  Child
 * Generate
 */
contacts.forEach((contact) => {
  const message = messages[contact.id][messages[contact.id].length - 1].content;
  const time = messages[contact.id][messages[contact.id].length - 1].timestamp;

  const contactCard = createContactCard(
    contact.name,
    contact.imageUrl,
    message,
    time,
    contact.id
  );

  contactsContainer.appendChild(contactCard);
});

/*>--------------------------------------------------------------
 * Sidebar
 * Generate child
 */

sidebar.appendChild(searchField);
sidebar.appendChild(contactsContainer);

export default sidebar;
