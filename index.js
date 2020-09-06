const express = require('express')

const app = express()

app.use('/', (req, res) => {
  res.json({
    msg: 'success'
  })
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})