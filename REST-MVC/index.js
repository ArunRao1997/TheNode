const express = require('express')
const app = express()

const productRouter = require('./routes/productRoutes')

app.use('/' , productRouter.router ) // middelware is initialzing router

app.use(express.json())

app.listen(8080, () => {
    console.log('Server Started')
})