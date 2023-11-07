'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Nama: Richie Theodore\n')
    res.send('NIM: 51022014\n')
    res.send('Jurusan/Prodi: SI\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
