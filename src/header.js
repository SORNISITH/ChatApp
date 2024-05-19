const buttons = [
  { src: "/src/icons/phone.svg", alt: "phone" },
  { src: "/src/icons/video.svg", alt: "video" },
  { src: "/src/icons/ellipsis-v.svg", alt: "setting" },
];

const createHeader = (name) => {
  const header = document.createElement("header");
  header.classList.add("chat-header");
  header.id = 'header-container'

  const headerText = document.createElement("h1");
  headerText.id = 'headerText'
  headerText.textContent = `Chat With -${name}-`;

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("header-button-container");

  buttons.reverse().forEach((element) => {
    const newButton = createHeaderbutton(element.src, element.alt);
    buttonContainer.appendChild(newButton);
    return newButton;
  });

  header.appendChild(headerText);
  header.appendChild(buttonContainer);

  return header;
};

const createHeaderbutton = (src, alt) => {
  const button = document.createElement("button");
  button.classList.add("header-button");

  const image = document.createElement("img");

  image.src = src;
  image.alt = alt;
  button.append(image);

  return button;
};

export default createHeader;
