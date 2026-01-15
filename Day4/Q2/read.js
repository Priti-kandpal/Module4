const fs = require("fs").promises; // Using promises for async/await
const path = require("path");

const readFileData = async () => {
  try {
    const filePath = path.join(__dirname, "Data.txt"); // Correct relative path
    const data = await fs.readFile(filePath, "utf8");
    return data;
  } catch (err) {
    throw new Error("Error reading file");
  }
};

module.exports = readFileData;


