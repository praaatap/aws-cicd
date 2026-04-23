const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello DevOps 🚀");
});

app.get('/health',(req,res)=> {
  try {
    res.send
  } catch (error) {
    
  }
})


app.listen(3000, () => {
  console.log("Server running on port 3000");
});