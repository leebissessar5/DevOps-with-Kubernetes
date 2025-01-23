import crypto from 'crypto'
import express from 'express'

const randomString = crypto.randomUUID()

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    const timestamp = new Date().toISOString()
    res.send(`${timestamp}: ${randomString}`)
})

app.listen(port, () => {
    console.log(`[server]: Server started in ${port}`)
})

setInterval(() => {
    const timestamp = new Date().toISOString()
    console.log(`${timestamp}: ${randomString}`)
}, 5000)