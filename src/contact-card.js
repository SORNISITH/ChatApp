export const createContactCard = (
  name,
  inputUrl,
  message,
  times = "00:00",
  imgID
) => {
  const container = document.createElement("div");
  container.classList.add("contact-card-container");
  container.id = imgID;

  const image = document.createElement("img");
  image.classList.add("contact-card-image");
  image.src = inputUrl;

  const innerContainer = document.createElement("div");
  innerContainer.classList.add("contact-card-inner-container");

  const header = document.createElement("h2");
  header.classList.add("contact-card-header");
  header.textContent = name;

  const time = document.createElement("p");
  let timestape = new Date(times);
  time.textContent = `${timestape.getHours()} : ${timestape.getMinutes()}`;

  const messageContent = document.createElement("p");
  messageContent.classList.add("contact-card-message");
  messageContent.textContent = message;

  header.appendChild(time);
  innerContainer.appendChild(header);
  innerContainer.appendChild(messageContent);

  container.appendChild(image);
  container.appendChild(innerContainer);

  return container;
};
