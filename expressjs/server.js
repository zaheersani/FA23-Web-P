const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.get('/users', (req, res) => {
    res.send('List of Users');
})
app.get('/users/:id/todos/:todoid', (req, res) => {
    console.log(req.params);
    const { id:userid } = req.params
    res.send(`user with id: ${userid}`);
})
app.post('/users', (req, res) => {
    console.log(req.body);
    res.send(`Post Request`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})