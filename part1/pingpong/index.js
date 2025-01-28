import express from 'express'

const app = express()
const port = process.env.PORT || 3000

let counter = 0;

app.get('/pingpong', (req, res) => {
    ++counter;
    res.send(`pong ${counter}`)
})

app.listen(port, () => {
    console.log(`[server]: Server started in ${port}`)
})