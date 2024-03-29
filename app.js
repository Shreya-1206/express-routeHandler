import express from "express";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use("/assets", express.static(join(__dirname, "public" )));


app.get("/", (req, res) => {
  res.status(200).send("<h1>Blog Chef says Hello!</h1>");
});

app.get("/admin/login", (req, res) => {
  res.sendFile(join(__dirname, "views", "login.html"));
}).post("/admin/login", (req, res) => {
  res.send("Handle the login here .......")
})

    
app.listen(3000, () => console.log("Blog Chef is cooking on port 3000"));
