// https://expressjs.com/en/guide/routing.html
// https://www.codecademy.com/articles/back-end-architecture
// https://blog.mailtrap.io/react-contact-form/#Using_Expressjs_Nodemailer

const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useCreateIndex: true }
    )
    const db = mongoose.connection
    db.on("error", (err) => {
        console.log(err)
    })
    db.once("open", () => {
        console.log("MongoDB Connected!!")
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})