import express from 'express'
import api from './api'
import menuController from './menu/menu-controller'

const app = express()
const port = 3000

app.use('/', express.static('build/webapp'))

app.use('/api', api)
app.use('/api/menus', menuController)

app.listen(port, () => {
  console.log(`HungryHu server listening on port ${port}`)
})
