const express = require("express")
const app = express()
module.exports = app
app.use(express.json())
const PORT = process.env.PORT || 5000

const tally = require("./routes/tally")
app.get("/api/tally/BalanceSheet.json", tally.BalanceSheet)

app.get("/", (req,res) =>{
    res.send("Tally Server is running")
})


app.listen(PORT, ()=>{
    console.log(`Tally is running on port ${PORT}`)
})