import express from 'express'
import path from 'path'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/submit', (req, res) => {

 const input = req.body.name

  res.json({ message: `Server received: ${input}` })
})



app.listen(3000, () => console.log('Server running on port 3000'))
