const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 3001
const bodyParser = require('body-parser')
const cors = require('cors')
const response = require('./constants')
app = express()
const router = express.Router()
app.use(cors())
app.use(bodyParser.json())

const getCredentials = (req, res) => {
    const {login} = req.query
    console.log(`return credentials for user with login ${login}`)
    res.status(200).json(response)
}
app.use('/', router)
router.use('/', getCredentials)

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log('server started on the port ' + PORT )
        })
    }
    catch (e){
        console.log(e)
    }
}

start()
