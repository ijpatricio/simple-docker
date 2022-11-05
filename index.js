const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log('Request incoming! :)')
    res.send('Hello Simple Docker!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
