// server.js
import { createServer } from "http";
const server = createServer((req, res) => {
  const { method, url } = req;
  res.setHeader("Content-Type", "application/json");
  if (method === "GET" && url === "/") {
    res.writeHead(200);
    res.end(
      JSON.stringify({
        message: "สวัสดีจาก Node.js Server!",
      }),
    );
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "ไมพบหนาที่ตองการ" }));
  }
});
server.listen(3000, () => {
  console.log("Server รันอยูที่ http://localhost:3000");
});
