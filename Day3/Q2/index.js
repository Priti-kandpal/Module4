const boxen = require("boxen").default;

const title = "Hurray!!!";
const message1 = "I am using my first external module!";
const message2 = "unicorns love rainbows";

// Classic (default style)
console.log(
  boxen(message1, {
    title: title,
  })
);

// SingleDouble style
console.log(
  boxen(message1, {
    title: title,
    borderStyle: "singleDouble",
  })
);

// Round style
console.log(
  boxen(message2, {
    title: title,
    borderStyle: "round",
    backgroundColor: "red",
    borderColor: "white",
    color: "black",
  })
);

