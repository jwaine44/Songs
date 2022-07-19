// import all dependencies needed
const express = require('express');
const app = express()
const cors = require('cors')

// Mongoose configuration
require('./server/config/mongoose.config')

// configurations
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// getting the routes
require('./server/routes/song.routes')(app)

// listen to the port
app.listen(8000, () => console.log("Listening on port 8000"))