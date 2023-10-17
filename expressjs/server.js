const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.use((req, res, next) => {
    console.log(`Logger1: ${req.url} ${req.method}`)
    req.logger = "I'm 1st Logger Middleware"
    next();
})
const m2 = (req, res, next) => {
    console.log(req.logger)
    console.log(`Logger2: ${req.url} ${req.method}`)
    next();
};
app.use(m2)

const myMiddleware = (req, res, next) => {
    console.log('My Middleware')
    next();
}

const docRouter = require('./routes/doctor');
app.use('/doctor', myMiddleware, docRouter)

app.get('/', (req, res) => {
    res.send('Hello World!');
})

const usersMiddleware = (req, res, next) => {
    console.log(`${req.url} 1st middleware`)
    next();
}

const usersMiddleware2 = (req, res, next) => {
    console.log(`${req.url} 2st middleware`)
    next();
}

app.get('/users', usersMiddleware, usersMiddleware2, (req, res) => {
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