function handleMouseMove({ clientX, clientY, target }) {
  console.log(clientX, clientY, target);
}

const frutas = ["banana", "maca", "laranja"];
const [fruta1, fruta2] = frutas;

const useState = [
  "blue",
  function (color) {
    useState[0] = color;
  },
];

const [color, setColor] = useState;
setColor("red");

// document.documentElement.addEventListener("mousemove", handleMouseMove);
