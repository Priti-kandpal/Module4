
const express = require("express");
const os = require("os");
const dns = require("dns");
const readFileData = require("./read"); 

const app = express();
const PORT = 4000; 


// /test route

app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

// /readfile route

app.get("/readfile", async (req, res) => {
  try {
    const data = await readFileData();
    res.send(data);
  } catch (err) {
    res.status(500).send("Unable to read file");
  }
});


// /systemdetails route

app.get("/systemdetails", (req, res) => {
  const systemInfo = {
    platform: os.platform(),
    totalMemory: (os.totalmem() / (1024 ** 3)).toFixed(2) + " GB",
    freeMemory: (os.freemem() / (1024 ** 3)).toFixed(2) + " GB",
    cpuModel: os.cpus()[0].model,
    cpuCores: os.cpus().length
  };
  res.json(systemInfo);
});

// /getip route

app.get("/getip", (req, res) => {
  dns.lookup("masaischool.com", { all: true }, (err, addresses) => {
    if (err) {
      res.status(500).json({ error: "DNS lookup failed" });
    } else {
      res.json({
        hostname: "masaischool.com",
        addresses
      });
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
