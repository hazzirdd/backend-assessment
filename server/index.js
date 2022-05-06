const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


const { getCompliment, getFortune, addFighter, deleteFighter, updateFighter, getAllFighters} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);

app.post("/api/fighters", addFighter);
app.delete("/api/fighters/:id", deleteFighter);
app.put("/api/fighters/:id", updateFighter);
app.get("/api/fighters", getAllFighters);

// Server
app.listen(4000, () => console.log("Server running on 4000"));
