import express from 'express';
import path from "path";
import api from "./api";
import menuController from "./menu/menu-controller";

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.use('/api', api)
app.use('/api/menus', menuController)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

