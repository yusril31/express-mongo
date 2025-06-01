const express = require("express")
const cors = require("cors")
const db = require("./app/models")
const app = express()

const corsOptions = {
    origin: "*"
}

// register cors middleware
app.use(cors(corsOptions))
app.use(express.json())

db.mongoose.connect(db.url, process.env.MONGODB_URI)
    .then(() => console.log("database connected"))
    .catch(err => {
        console.log(`connection error ${err.message}`)
        process.exit()
    })

// memanggil routes mahasiswa
require("./app/routes/mahasiswa.route")(app)


const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`server start on port ${PORT}`))
