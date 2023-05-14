const express = require('express')
const app = express();
const mongoose = require('mongoose')
const db = require('./config/db')


app.use(express.json())
// app.use('/uploads', express)
// app.use('/api', require('./routes/app.routes'))
// app.use(erros.errorHnadler);
//app.use("/api-docs", SwaggerUI.serve, SwaggerUI.setup(swagerDocument))

port = process.env.port || 4000
app.listen(port, () => {
    console.log(`Listening to ${port}`)
})