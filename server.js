import "dotenv/config";
import net from "net";
import express from "express";

const app = express();
const DEFAULT_PORT = Number(process.env.PORT) || 3000;

function findFreePort(port) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.unref();
    server.on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        server.close(() => resolve(findFreePort(port + 1)));
      } else {
        reject(err);
      }
    });
    server.listen(port, () => {
      const availablePort = server.address().port;
      server.close(() => resolve(availablePort));
    });
  });
}

const PORT = await findFreePort(DEFAULT_PORT);

app.use(express.json()); // Middleware: แปลง JSON

app.get("/", (req, res) => {
  res.json({ message: "สวัสดีจาก Express.js!" });
});

app.listen(PORT, () => {
  console.log(`Server รันอยู่ที่ http://localhost:${PORT}`);
});
