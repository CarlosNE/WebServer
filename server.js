//Initialize Variables & Objects
const express = require('express')
const app = express()
const port = 3000


//Initialize routes
app.get('/', (req, res) => {
    res.send('Web Server Corriendo!')
})

app.listen(port, () => {
    console.log('Server corriendo en http://localhost:${port}')
})