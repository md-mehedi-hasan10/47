const express = require('express')
const { get } = require('express/lib/response')


const app = express()


app.get('/', (req, res) => {
res.send('Thank you for calling me')
})

app.listen(3000, () => console.log('Listenting to port 3000'))