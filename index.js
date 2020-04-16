const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth.routes')

const app = express()

app.use('/api/auth', authRoutes)

const PORT = config.get('port') || 2000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUrl'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        app.listen(PORT, () => console.log(`App has been started on port: ${PORT}`))
    } catch (e) {
        console.log(`Server error ${e.message}`)
        process.exit(1)
    }
}

start()


